import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { sampleQuestions } from '../../data/sampleQuestions';
import { Clock, CheckCircle, ChevronLeft, ChevronRight, Award, AlertTriangle, HelpCircle, XCircle, Menu, BookOpen, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the Question type for better type safety
interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
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
  const [isScoreSaved, setIsScoreSaved] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Filter questions based on subject, year, and chapter
    const filteredQuestions = sampleQuestions.filter(
      (q: any) => q.subject === subjectId &&
                 q.year === parseInt(year || '0') &&
                 q.chapter === parseInt(chapter || '0')
    );
    setQuestions(filteredQuestions as Question[]);
    setAnswers(new Array(filteredQuestions.length).fill(-1));
  }, [subjectId, year, chapter]);

  useEffect(() => {
    if (quizCompleted) return;
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizCompleted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (answers[currentQuestion] !== -1) return;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
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

    if (!isScoreSaved && currentUser && subjectId && year && chapter) {
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
        setIsScoreSaved(true);
      } catch (error) {
        console.error('Error saving result:', error);
      }
    }
    setIsSubmitting(false);
  };

  const handleReviewQuiz = () => {
    setCurrentQuestion(0);
    setQuizCompleted(false);
    setShowExplanation(true);
  };

  if (quizCompleted) {
    // Calculate weaknesses (questions answered incorrectly)
    const weaknesses = questions.filter((q, index) => 
      answers[index] !== -1 && answers[index] !== q.correctAnswer
    );

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 opacity-100">
          <div className="relative p-8 text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Award size={80} className="mx-auto mb-4" />
            </motion.div>
            <h2 className="text-4xl font-extrabold mb-2">Quiz Complete!</h2>
            <p className="text-lg opacity-90">Here's your performance review</p>
          </div>
          <div className="p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="relative w-40 h-40 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className={
                      score >= 80 ? 'text-green-500' :
                      score >= 60 ? 'text-yellow-500' : 'text-red-500'
                    }
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: '0, 100' }}
                    animate={{ strokeDasharray: `${score}, 100` }}
                    transition={{ duration: 1.5 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-gray-800">{score.toFixed(0)}%</span>
                </div>
              </div>
            </div>

            <div className="mb-8 text-center">
              <p className="text-xl font-semibold mb-2 text-gray-700">
                You got {answers.filter((answer, index) => answer === questions[index]?.correctAnswer).length} out of {questions.length} questions right.
              </p>
              <p className={`text-2xl font-bold ${
                score >= 80 ? 'text-green-600' :
                score >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {score >= 80 ? (
                  <span className="flex items-center justify-center">
                    <Award className="mr-2" /> Excellent work! 🎉
                  </span>
                ) : score >= 60 ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="mr-2" /> Good job! Keep practicing! 👍
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <AlertTriangle className="mr-2" /> Let's review this together. 💪
                  </span>
                )}
              </p>
            </div>

            {/* Correct Answers and Weaknesses Section */}
            {weaknesses.length > 0 && (
              <div className="mb-8 text-left bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-gray-800">Areas to Improve:</h3>
                <ul className="space-y-2">
                  {weaknesses.map((q, index) => (
                    <li key={index} className="text-red-600">
                      <span className="font-medium">Question {questions.indexOf(q) + 1}:</span> {q.question}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReviewQuiz}
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all"
              >
                Review Answers
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">No Questions Available</h2>
            <p className="text-gray-600 mb-6">There are no questions for this chapter yet. Please check back later.</p>
            <p className="text-gray-600 mb-6">Coming Soon will add the Question</p>
          </motion.div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswerSelected = answers[currentQuestion] !== -1;

  const getOptionClasses = (index: number) => {
    const isSelected = answers[currentQuestion] === index;
    const isCorrect = currentQ.correctAnswer === index;
    const answered = answers[currentQuestion] !== -1;

    if (!answered) {
      return 'border-gray-200 hover:border-blue-500 hover:bg-blue-50';
    }

    if (isSelected && isCorrect) {
      return 'border-green-500 bg-green-50 text-green-700';
    }
    if (isSelected && !isCorrect) {
      return 'border-red-500 bg-red-50 text-red-700';
    }
    if (answered && isCorrect) {
      return 'border-green-500 bg-green-50 text-green-700';
    }
    return 'border-gray-200 opacity-60';
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col pb-16 md:pb-0">
      {/* Fixed Header with Navigation and Notes Icons */}
      <header className="sticky top-0 z-10 bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowNav(!showNav)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700"
            >
              {showNav ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-lg md:text-xl font-bold text-gray-800">
              {subjectId?.toUpperCase()} - Year {year}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-indigo-100 px-3 py-1 md:px-4 md:py-2 rounded-full">
              <Clock size={18} className="text-indigo-600" />
              <span className="font-medium text-indigo-800 text-sm md:text-base">
                {formatTime(timeElapsed)}
              </span>
            </div>
            <button 
              onClick={() => setShowNotes(!showNotes)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700"
            >
              <BookOpen size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto max-w-4xl pt-4 pb-16 md:pb-4 flex-1 px-4">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-4 mb-6"
        >
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm md:text-base text-gray-600">
              Question <span className="font-semibold text-indigo-600">{currentQuestion + 1}</span> of <span className="font-semibold text-gray-800">{questions.length}</span>
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 md:h-3 rounded-full"
              style={{ width: `${progress}%` }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Navigation Panel */}
        {showNav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-6 overflow-hidden"
          >
            <h4 className="font-bold text-gray-800 mb-3 md:mb-4">Question Navigator</h4>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 md:gap-3">
              {questions.map((q, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setCurrentQuestion(index);
                    setShowNav(false);
                  }}
                  className={`
                    w-8 h-8 md:w-10 md:h-10 rounded-lg font-bold text-xs md:text-sm transition-all flex items-center justify-center
                    ${index === currentQuestion
                      ? 'bg-indigo-600 text-white shadow-md'
                      : answers[index] !== -1
                        ? answers[index] === q.correctAnswer
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
                  `}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Notes Panel */}
        {showNotes && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-6 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <h4 className="font-bold text-gray-800">Chapter Notes</h4>
              <button onClick={() => setShowNotes(false)} className="p-1 rounded-full hover:bg-gray-100 text-gray-700">
                <X size={20} />
              </button>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 md:p-4">
              <p className="text-yellow-800 text-sm md:text-base">Notes for {subjectId} Chapter {chapter} will appear here.</p>
            </div>
          </motion.div>
        )}

        {/* Question Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6 mb-6"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6 leading-relaxed">
                {currentQ.question}
              </h3>
              <div className="space-y-3 md:space-y-4">
                {currentQ.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={!isAnswerSelected ? { scale: 1.01 } : {}}
                    whileTap={!isAnswerSelected ? { scale: 0.99 } : {}}
                    onClick={() => handleAnswerSelect(index)}
                    className={`
                      w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all
                      ${getOptionClasses(index)}
                      ${isAnswerSelected ? 'cursor-default' : 'cursor-pointer'}
                      flex items-center
                    `}
                  >
                    <span className="font-bold mr-3 md:mr-4 text-gray-500 text-base md:text-lg">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="flex-1 text-sm md:text-base text-gray-800">{option}</span>
                    {isAnswerSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto"
                      >
                        {currentQ.correctAnswer === index ? (
                          <CheckCircle className="text-green-500" size={isMobile ? 18 : 20} />
                        ) : answers[currentQuestion] === index ? (
                          <XCircle className="text-red-500" size={isMobile ? 18 : 20} />
                        ) : null}
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>

              {isAnswerSelected && currentQ.explanation && (
                <div className="mt-4 md:mt-6">
                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm md:text-base"
                  >
                    <HelpCircle size={isMobile ? 16 : 20} className="mr-2" />
                    {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
                  </button>
                  <AnimatePresence>
                    {showExplanation && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-2 md:mt-4"
                      >
                        <div className="bg-indigo-50 p-3 md:p-4 rounded-xl border border-indigo-200">
                          <h4 className="font-bold text-indigo-800 mb-1 md:mb-2 text-sm md:text-base">Explanation:</h4>
                          <p className="text-gray-700 text-sm md:text-base">{currentQ.explanation}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          {answers[questions.length - 1] !== -1 && (
            <div className="text-center mt-4 md:mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg w-full max-w-sm text-sm md:text-base"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quiz'}
              </motion.button>
            </div>
          )}
        </div>
      </main>

      {/* Fixed Bottom Navigation Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-10">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex justify-between items-center py-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                currentQuestion === 0 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <ArrowLeft size={20} className="mr-2" />
              <span className="hidden sm:inline">Previous</span>
            </motion.button>
            
            <div className="text-sm text-gray-500 px-4 py-2">
              {currentQuestion + 1} / {questions.length}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={answers[currentQuestion] === -1 || currentQuestion === questions.length - 1}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                answers[currentQuestion] === -1 || currentQuestion === questions.length - 1
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <span className="hidden sm:inline">Next</span>
              <ArrowRight size={20} className="ml-2" />
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
}