import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc, collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { sampleQuestions } from '../../data/sampleQuestions';
import Header from '../Layout/Header';
import { ArrowLeft, Clock, CheckCircle, ChevronLeft, ChevronRight, Award, AlertTriangle, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

interface Question {
  id: number;
  subject: string;
  year: number;
  chapter: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizResult {
  userId: string;
  email: string;
  subject: string;
  year: number;
  chapter: number;
  firstAttemptScore: number;
  bestScore: number;
  attempts: number;
  firstAttemptAnswers: number[];
  firstAttemptTime: number;
  lastAttemptAt: Date;
  userName?: string;
}

interface LeaderboardEntry {
  userId: string;
  name: string;
  score: number;
  time: number;
}

export default function QuizPage() {
  const { subjectId, year, chapter } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isRetake, setIsRetake] = useState(false);
  const [previousResult, setPreviousResult] = useState<QuizResult | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [hasAnswered, setHasAnswered] = useState<boolean[]>([]);

  useEffect(() => {
    // Filter questions based on subject, year, and chapter
    const filteredQuestions = sampleQuestions.filter(
      q => q.subject === subjectId && 
           q.year === parseInt(year || '0') && 
           q.chapter === parseInt(chapter || '0')
    );
    setQuestions(filteredQuestions);
    setAnswers(new Array(filteredQuestions.length).fill(-1));
    setHasAnswered(new Array(filteredQuestions.length).fill(false));
    
    // Load previous result if exists
    if (currentUser && subjectId && year && chapter) {
      loadPreviousResult();
      loadLeaderboard();
    }
  }, [subjectId, year, chapter, currentUser]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const loadPreviousResult = async () => {
    try {
      const resultId = `${currentUser?.uid}_${subjectId}_${year}_${chapter}`;
      const docRef = doc(db, 'quizResults', resultId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setPreviousResult(docSnap.data() as QuizResult);
      }
    } catch (error) {
      console.error('Error loading previous result:', error);
    }
  };

  const loadLeaderboard = async () => {
    try {
      if (!subjectId || !year || !chapter) return;
      
      const leaderboardQuery = query(
        collection(db, 'quizResults'),
        where('subject', '==', subjectId),
        where('year', '==', parseInt(year)),
        where('chapter', '==', parseInt(chapter)),
        orderBy('firstAttemptScore', 'desc'),
        orderBy('firstAttemptTime', 'asc'),
        limit(10)
      );
      
      const querySnapshot = await getDocs(leaderboardQuery);
      const leaderboardData: LeaderboardEntry[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        leaderboardData.push({
          userId: data.userId,
          name: data.userName || data.email.split('@')[0],
          score: data.firstAttemptScore,
          time: data.firstAttemptTime
        });
      });
      
      // Add current user if not in top 10
      if (currentUser && !leaderboardData.some(entry => entry.userId === currentUser.uid)) {
        const userDoc = await getDoc(doc(db, 'quizResults', `${currentUser.uid}_${subjectId}_${year}_${chapter}`));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          leaderboardData.push({
            userId: currentUser.uid,
            name: currentUser.displayName || currentUser.email?.split('@')[0] || 'You',
            score: userData.firstAttemptScore,
            time: userData.firstAttemptTime
          });
        }
      }
      
      setLeaderboard(leaderboardData);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
      // Fallback mock data
      const mockLeaderboard = [
        { userId: 'user1', name: 'Top Student', score: 95, time: 120 },
        { userId: 'user2', name: 'Second Best', score: 90, time: 180 },
        { userId: currentUser?.uid || 'user3', name: currentUser?.email?.split('@')[0] || 'You', score: 85, time: 150 },
      ];
      setLeaderboard(mockLeaderboard);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = async (answerIndex: number, questionIndex: number) => {
    if (hasAnswered[questionIndex]) return;
    
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
    
    const newHasAnswered = [...hasAnswered];
    newHasAnswered[questionIndex] = true;
    setHasAnswered(newHasAnswered);
    
    setShowExplanation(true);
    
    // Immediately save the first attempt answer
    if (!previousResult && currentUser && subjectId && year && chapter) {
      try {
        const resultId = `${currentUser.uid}_${subjectId}_${year}_${chapter}`;
        const resultRef = doc(db, 'quizResults', resultId);
        
        await setDoc(resultRef, {
          userId: currentUser.uid,
          email: currentUser.email,
          subject: subjectId,
          year: parseInt(year),
          chapter: parseInt(chapter),
          firstAttemptAnswers: newAnswers,
          lastAttemptAt: new Date(),
          userName: currentUser.displayName || currentUser.email?.split('@')[0]
        }, { merge: true });
      } catch (error) {
        console.error('Error saving initial answer:', error);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const saveQuizResult = async () => {
    try {
      if (!currentUser || !currentUser.uid || !currentUser.email || 
          !subjectId || !year || !chapter || !questions.length) {
        throw new Error('Missing required data to save quiz result');
      }

      const correctAnswers = answers.filter((answer, index) => 
        answer === questions[index].correctAnswer
      ).length;
      
      const percentage = (correctAnswers / questions.length) * 100;
      const resultId = `${currentUser.uid}_${subjectId}_${year}_${chapter}`;
      const resultRef = doc(db, 'quizResults', resultId);
      
      const resultData: QuizResult = {
        userId: currentUser.uid,
        email: currentUser.email,
        subject: subjectId,
        year: parseInt(year),
        chapter: parseInt(chapter),
        firstAttemptScore: percentage,
        bestScore: percentage,
        attempts: 1,
        firstAttemptAnswers: answers,
        firstAttemptTime: timeElapsed,
        lastAttemptAt: new Date(),
        userName: currentUser.displayName || currentUser.email?.split('@')[0]
      };

      await setDoc(resultRef, resultData, { merge: true });
      return true;
    } catch (error) {
      console.error('Detailed error saving result:', error);
      return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    if (questions.length === 0) {
      setIsSubmitting(false);
      return;
    }
    
    const correctAnswers = answers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    
    const percentage = (correctAnswers / questions.length) * 100;
    setScore(percentage);
    setQuizCompleted(true);

    try {
      if (!previousResult) {
        const saveSuccess = await saveQuizResult();
        if (!saveSuccess) {
          console.log('Failed to save quiz results');
        }
      }
      await loadLeaderboard();
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetakeQuiz = () => {
    setIsRetake(true);
    setCurrentQuestion(0);
    setAnswers(previousResult?.firstAttemptAnswers || new Array(questions.length).fill(-1));
    setTimeElapsed(0);
    setQuizCompleted(false);
    setScore(0);
    setShowExplanation(false);
    setHasAnswered(new Array(questions.length).fill(true));
  };

  const handleBackToChapters = () => {
    navigate(`/subject/${subjectId}/year/${year}`);
  };

  if (!subjectId || !year || !chapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Invalid Quiz Parameters</h2>
            <p className="text-gray-600 mb-6">The quiz you're trying to access doesn't exist.</p>
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {isRetake ? <Trophy size={64} className="mx-auto mb-4" /> : <CheckCircle size={64} className="mx-auto mb-4" />}
                </motion.div>
                <h2 className="text-3xl font-bold mb-2">
                  {isRetake ? 'Retake Completed!' : 'Quiz Completed!'}
                </h2>
                <p className="opacity-90">
                  {isRetake ? 'Compare your results' : 'Great job on finishing the quiz'}
                </p>
              </div>

              <div className="p-8 text-center">
                {previousResult && (
                  <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Your Performance</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">First Attempt</p>
                        <p className="text-xl font-bold text-blue-600">
                          {previousResult.firstAttemptScore.toFixed(1)}%
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatTime(previousResult.firstAttemptTime)}
                        </p>
                      </div>
                      {isRetake && (
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-600">This Attempt</p>
                          <p className="text-xl font-bold text-green-600">
                            {score.toFixed(1)}%
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatTime(timeElapsed)}
                          </p>
                        </div>
                      )}
                    </div>
                    {isRetake && score > previousResult.firstAttemptScore && (
                      <p className="text-green-600 font-medium mt-3">
                        🎉 You improved by {(score - previousResult.firstAttemptScore).toFixed(1)}%!
                      </p>
                    )}
                  </div>
                )}

                <div className="mb-6">
                  <div className="inline-flex items-center justify-center relative">
                    <svg className="w-32 h-32" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={score >= 80 ? "#10B981" : score >= 60 ? "#F59E0B" : "#EF4444"}
                        strokeWidth="3"
                        strokeDasharray={`${score}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">{score.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-lg font-medium mb-2">
                    {answers.filter((answer, index) => answer === questions[index]?.correctAnswer).length} 
                    <span className="text-gray-500"> out of </span>
                    {questions.length} 
                    <span className="text-gray-500"> correct answers</span>
                  </p>
                  <p className={`text-lg font-semibold ${
                    score >= 80 ? 'text-green-600' : 
                    score >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {score >= 80 ? (
                      <span className="flex items-center justify-center">
                        <Award className="mr-2" /> Excellent work! 🎉
                      </span>
                    ) : score >= 60 ? (
                      "Good job! Keep practicing! 👍"
                    ) : (
                      <span className="flex items-center justify-center">
                        <AlertTriangle className="mr-2" /> Keep studying! 💪
                      </span>
                    )}
                  </p>
                </div>

                {leaderboard.length > 0 && (
                  <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 flex items-center justify-center">
                      <Trophy className="mr-2 text-yellow-500" /> Top Performers (First Attempt)
                    </h3>
                    <div className="space-y-2">
                      {leaderboard.map((user, index) => (
                        <div key={user.userId} className={`flex items-center justify-between p-2 rounded-lg shadow-sm ${
                          currentUser?.uid === user.userId ? 'bg-blue-50 border border-blue-200' : 'bg-white'
                        }`}>
                          <div className="flex items-center">
                            <span className={`w-6 h-6 flex items-center justify-center rounded-full mr-2 ${
                              index === 0 ? 'bg-yellow-100 text-yellow-600' :
                              index === 1 ? 'bg-gray-100 text-gray-600' :
                              index === 2 ? 'bg-amber-100 text-amber-600' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {index + 1}
                            </span>
                            <span>{user.name}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-semibold mr-2">{user.score}%</span>
                            <span className="text-xs text-gray-500">{formatTime(user.time)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {leaderboard.some(user => user.userId === currentUser?.uid) && (
                      <p className="text-sm text-gray-500 mt-2">
                        Your position is highlighted in blue
                      </p>
                    )}
                  </div>
                )}

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleRetakeQuiz}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
                  >
                    {isRetake ? 'Try Again' : 'Retake Quiz'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBackToChapters}
                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all shadow-sm"
                  >
                    Back to Chapters
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No Questions Available</h2>
            <p className="text-gray-600 mb-6">There are no questions for this chapter yet.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToChapters}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
            >
              Back to Chapters
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswerSelected = answers[currentQuestion] !== -1;
  const isCorrect = isAnswerSelected && answers[currentQuestion] === currentQ.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <motion.button
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(`/subject/${subjectId}/year/${year}`)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4 sm:mb-6 transition-colors px-2"
        >
          <ArrowLeft size={18} />
          <span className="font-medium text-sm sm:text-base">Back to Chapters</span>
        </motion.button>

        {previousResult && isRetake && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  This is a retake. Your first attempt score was {previousResult.firstAttemptScore.toFixed(1)}%.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-4">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                  {subjectId?.toUpperCase()} - Year {year}, Chapter {chapter}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4 bg-gray-100 px-3 py-1 sm:px-4 sm:py-2 rounded-lg">
                <div className="flex items-center space-x-1 sm:space-x-2 text-gray-700">
                  <Clock size={18} />
                  <span className="font-medium text-sm sm:text-base">{formatTime(timeElapsed)}</span>
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 sm:h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>

          <motion.div 
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 sm:p-8 mb-4 sm:mb-6"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              {currentQ.question}
            </h3>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {currentQ.options.map((option, index) => {
                const isSelected = answers[currentQuestion] === index;
                const isActuallyCorrect = index === currentQ.correctAnswer;
                const showCorrect = isRetake && isActuallyCorrect;
                
                return (
                  <motion.button
                    key={index}
                    whileHover={{ scale: !hasAnswered[currentQuestion] ? 1.01 : 1 }}
                    whileTap={{ scale: !hasAnswered[currentQuestion] ? 0.99 : 1 }}
                    onClick={() => handleAnswerSelect(index, currentQuestion)}
                    className={`
                      w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all
                      ${isRetake
                        ? isActuallyCorrect
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : isSelected && !isActuallyCorrect
                            ? 'border-red-500 bg-red-50 text-red-700'
                            : 'border-gray-200'
                        : isSelected
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }
                      ${isRetake && isActuallyCorrect ? 'ring-2 ring-green-300' : ''}
                      ${hasAnswered[currentQuestion] ? 'cursor-default' : 'cursor-pointer'}
                    `}
                    disabled={hasAnswered[currentQuestion]}
                  >
                    <span className="font-medium mr-2 sm:mr-3 text-gray-500">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                    {showCorrect && (
                      <span className="ml-2 text-green-600 font-medium">✓ Correct</span>
                    )}
                    {isRetake && isSelected && !isActuallyCorrect && (
                      <span className="ml-2 text-red-600 font-medium">✗ Your answer</span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {(showExplanation || isRetake) && currentQ.explanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className={`overflow-hidden mt-4 p-4 rounded-lg ${
                  isRetake 
                    ? 'bg-blue-50 border border-blue-200'
                    : isCorrect 
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                }`}
              >
                <h4 className={`font-semibold mb-2 ${
                  isRetake 
                    ? 'text-blue-700'
                    : isCorrect 
                      ? 'text-green-700'
                      : 'text-red-700'
                }`}>
                  {isRetake ? 'Explanation' : isCorrect ? 'Correct!' : 'Incorrect'}
                </h4>
                <p className="text-sm sm:text-base text-gray-700">
                  {currentQ.explanation}
                </p>
              </motion.div>
            )}
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm w-full sm:w-auto flex items-center justify-center text-sm sm:text-base"
            >
              <ChevronLeft size={18} className="mr-1 sm:mr-2" />
              Previous
            </motion.button>

            <div className="flex space-x-2 sm:space-x-3 w-full sm:w-auto">
              {currentQuestion === questions.length - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={answers.some((a, i) => a === -1 && !hasAnswered[i]) || isSubmitting}
                  className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg sm:rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md w-full sm:w-auto flex items-center justify-center text-sm sm:text-base"
                >
                  {isSubmitting ? 'Submitting...' : isRetake ? 'Finish Retake' : 'Submit Quiz'}
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNext}
                  disabled={answers[currentQuestion] === -1 && !hasAnswered[currentQuestion]}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md w-full sm:w-auto flex items-center justify-center text-sm sm:text-base"
                >
                  Next <ChevronRight size={18} className="ml-1 sm:ml-2" />
                </motion.button>
              )}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 sm:mt-8 bg-white rounded-xl shadow-lg p-4 sm:p-6"
          >
            <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Question Navigator</h4>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-1 sm:gap-2">
              {questions.map((_, index) => {
                const isAnswered = answers[index] !== -1;
                const isCorrectAnswer = isAnswered && answers[index] === questions[index].correctAnswer;
                const isCurrent = index === currentQuestion;
                
                return (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setShowExplanation(false);
                    }}
                    className={`
                      w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm transition-all flex items-center justify-center
                      ${isCurrent
                        ? 'bg-blue-600 text-white shadow-md'
                        : isRetake
                          ? questions[index].correctAnswer === answers[index]
                            ? 'bg-green-100 text-green-700'
                            : answers[index] !== -1
                              ? 'bg-red-100 text-red-700'
                              : 'bg-gray-100 text-gray-600'
                          : isAnswered
                            ? isCorrectAnswer
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }
                    `}
                  >
                    {index + 1}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}