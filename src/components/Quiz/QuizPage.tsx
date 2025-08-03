import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { sampleQuestions } from '../../data/sampleQuestions';
import Header from '../Layout/Header';
import { ArrowLeft, Clock, CheckCircle, ChevronLeft, ChevronRight, Award, AlertTriangle, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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

  useEffect(() => {
    // Filter questions based on subject, year, and chapter
    const filteredQuestions = sampleQuestions.filter(
      q => q.subject === subjectId && 
           q.year === parseInt(year || '0') && 
           q.chapter === parseInt(chapter || '0')
    );
    setQuestions(filteredQuestions);
    setAnswers(new Array(filteredQuestions.length).fill(-1));
  }, [subjectId, year, chapter]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    setShowExplanation(false); // Hide explanation when selecting a new answer
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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    if (questions.length === 0) return;
    
    const correctAnswers = answers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    
    const percentage = (correctAnswers / questions.length) * 100;
    setScore(percentage);
    setQuizCompleted(true);

    // Save result to Firebase
    if (currentUser && subjectId && year && chapter) {
      try {
        const resultId = `${currentUser.id}_${subjectId}_${year}_${chapter}`;
        await setDoc(doc(db, 'results', resultId), {
          userId: currentUser.id,
          subject: subjectId,
          year: parseInt(year),
          chapter: parseInt(chapter),
          score: correctAnswers,
          totalQuestions: questions.length,
          percentage: percentage,
          completedAt: new Date(),
          timeElapsed: timeElapsed
        });
      } catch (error) {
        console.error('Error saving result:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(-1));
    setTimeElapsed(0);
    setQuizCompleted(false);
    setScore(0);
    setShowExplanation(false);
  };

  const handleBackToChapters = () => {
    navigate(`/subject/${subjectId}/year/${year}`);
  };

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
                  <CheckCircle size={64} className="mx-auto mb-4" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
                <p className="opacity-90">Great job on finishing the quiz</p>
              </div>

              <div className="p-8 text-center">
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

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleRetakeQuiz}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
                  >
                    Retake Quiz
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
      
      <div className="container mx-auto px-4 py-8">
        <motion.button
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(`/subject/${subjectId}/year/${year}`)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Chapters</span>
        </motion.button>

        <div className="max-w-4xl mx-auto">
          {/* Quiz Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {subjectId?.toUpperCase()} - Year {year}, Chapter {chapter}
                </h2>
                <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
              </div>
              <div className="flex items-center space-x-4 bg-gray-100 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Clock size={20} />
                  <span className="font-medium">{formatTime(timeElapsed)}</span>
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-right text-sm text-gray-500">
              {Math.round(progress)}% completed
            </div>
          </motion.div>

          {/* Question Card */}
          <motion.div 
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQ.question}
            </h3>

            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleAnswerSelect(index)}
                  className={`
                    w-full text-left p-4 rounded-xl border-2 transition-all
                    ${answers[currentQuestion] === index
                      ? isCorrect
                        ? 'border-green-500 bg-green-50 text-green-700 shadow-sm'
                        : 'border-red-500 bg-red-50 text-red-700 shadow-sm'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }
                    ${isAnswerSelected && index === currentQ.correctAnswer 
                      ? 'border-green-500 bg-green-50 text-green-700 shadow-sm' 
                      : ''
                    }
                  `}
                >
                  <span className="font-medium mr-3 text-gray-500">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </motion.button>
              ))}
            </div>

            {/* Explanation Section */}
            {isAnswerSelected && currentQ.explanation && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="flex items-center text-blue-600 hover:text-blue-700 mb-2"
                >
                  <HelpCircle size={18} className="mr-2" />
                  {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
                </button>
                
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-blue-50 p-4 rounded-lg border border-blue-200"
                  >
                    <h4 className="font-semibold text-blue-800 mb-2">Explanation:</h4>
                    <p className="text-gray-700">{currentQ.explanation}</p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm w-full sm:w-auto flex items-center justify-center"
            >
              <ChevronLeft size={20} className="mr-2" />
              Previous
            </motion.button>

            <div className="flex space-x-3 w-full sm:w-auto">
              {currentQuestion === questions.length - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={answers[currentQuestion] === -1 || isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md w-full sm:w-auto flex items-center justify-center"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quiz'}
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNext}
                  disabled={answers[currentQuestion] === -1}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md w-full sm:w-auto flex items-center justify-center"
                >
                  Next <ChevronRight size={20} className="ml-2" />
                </motion.button>
              )}
            </div>
          </div>

          {/* Question Navigator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h4 className="font-semibold text-gray-800 mb-4">Question Navigator</h4>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
              {questions.map((q, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentQuestion(index)}
                  className={`
                    w-10 h-10 rounded-lg font-medium text-sm transition-all flex items-center justify-center
                    ${index === currentQuestion
                      ? 'bg-blue-600 text-white shadow-md'
                      : answers[index] !== -1
                        ? answers[index] === q.correctAnswer
                          ? 'bg-green-100 text-green-700 shadow-sm'
                          : 'bg-red-100 text-red-700 shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
                  `}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>
            
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                <span>Current</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-100 rounded mr-2"></div>
                <span>Correct</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-100 rounded mr-2"></div>
                <span>Incorrect</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-100 rounded mr-2"></div>
                <span>Unanswered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}