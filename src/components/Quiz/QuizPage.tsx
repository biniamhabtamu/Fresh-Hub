import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { sampleQuestions } from '../../data/sampleQuestions';
import {
  Clock,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Award,
  AlertTriangle,
  HelpCircle,
  XCircle,
  Menu,
  BookOpen,
  X,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Home,
  BarChart3,
  Target,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  subject?: string;
  year?: number;
  chapter?: number;
}

export default function QuizPage(): JSX.Element {
  const { subjectId, year, chapter } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isScoreSaved, setIsScoreSaved] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  const explanationRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const mql = window.matchMedia('(max-width: 767px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    if ('addEventListener' in mql) {
      mql.addEventListener('change', handler);
    } else {
      mql.addListener(handler);
    }
    return () => {
      mountedRef.current = false;
      if ('removeEventListener' in mql) {
        mql.removeEventListener('change', handler);
      } else {
        mql.removeListener(handler);
      }
    };
  }, []);

  const questions: Question[] = useMemo(() => {
    const filtered = sampleQuestions.filter((q: any) =>
      q.subject === subjectId &&
      q.year === parseInt(year || '0') &&
      q.chapter === parseInt(chapter || '0')
    );
    return filtered as Question[];
  }, [subjectId, year, chapter]);

  useEffect(() => {
    setAnswers(new Array(questions.length).fill(-1));
    setCurrentQuestion(0);
    setShowExplanation(false);
    setQuizCompleted(false);
    setScore(0);
    setIsScoreSaved(false);
    setTimeElapsed(0);
  }, [questions.length]);

  useEffect(() => {
    if (quizCompleted) return;
    const id = setInterval(() => {
      if (!mountedRef.current) return;
      setTimeElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [quizCompleted]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, []);

  const currentQ = useMemo(() => questions[currentQuestion], [questions, currentQuestion]);

  const handleAnswerSelect = useCallback((answerIndex: number) => {
    setAnswers(prev => {
      if (!prev || prev.length === 0) return prev;
      if (prev[currentQuestion] !== -1) return prev;
      const copy = [...prev];
      copy[currentQuestion] = answerIndex;
      return copy;
    });
  }, [currentQuestion]);

  const handleNext = useCallback(() => {
    setShowExplanation(false);
    setCurrentQuestion(prev => Math.min(prev + 1, Math.max(0, questions.length - 1)));
  }, [questions.length]);

  const handlePrevious = useCallback(() => {
    setShowExplanation(false);
    setCurrentQuestion(prev => Math.max(0, prev - 1));
  }, []);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);

    if (questions.length === 0) {
      setIsSubmitting(false);
      return;
    }

    const correctAnswers = answers.reduce((acc, answer, idx) => {
      if (answer === questions[idx]?.correctAnswer) return acc + 1;
      return acc;
    }, 0);

    const percentage = (correctAnswers / questions.length) * 100;
    setScore(percentage);
    setQuizCompleted(true);

    if (!isScoreSaved && currentUser && subjectId && year && chapter) {
      try {
        const userId = (currentUser as any).id || (currentUser as any).uid || 'unknown';
        const resultId = `${userId}_${subjectId}_${year}_${chapter}`;
        await setDoc(doc(db, 'results', resultId), {
          userId,
          subject: subjectId,
          year: parseInt(year),
          chapter: parseInt(chapter),
          score: correctAnswers,
          totalQuestions: questions.length,
          percentage,
          completedAt: new Date(),
          timeElapsed
        });
        if (mountedRef.current) setIsScoreSaved(true);
      } catch (error) {
        console.error('Error saving result:', error);
      }
    }

    setIsSubmitting(false);
  }, [answers, questions, isScoreSaved, currentUser, subjectId, year, chapter, timeElapsed]);

  const handleReviewQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setQuizCompleted(false);
    setShowExplanation(true);
  }, []);

  const progress = useMemo(() => {
    if (questions.length === 0) return 0;
    return ((currentQuestion + 1) / questions.length) * 100;
  }, [currentQuestion, questions.length]);

  const isAnswerSelected = answers[currentQuestion] !== -1;

  const getOptionClasses = useCallback((index: number) => {
    const isSelected = answers[currentQuestion] === index;
    const isCorrect = currentQ?.correctAnswer === index;
    const answered = answers[currentQuestion] !== -1;

    if (!answered) {
      return 'border-gray-200 hover:border-blue-400 hover:bg-blue-50';
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
    return 'border-gray-200 opacity-70';
  }, [answers, currentQuestion, currentQ]);

  const weaknesses = useMemo(() => {
    if (!quizCompleted) return [];
    return questions.filter((q, idx) => answers[idx] !== -1 && answers[idx] !== q.correctAnswer);
  }, [quizCompleted, questions, answers]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleNext, handlePrevious]);

  // Scroll to explanation when it's opened
  const scrollToExplanation = useCallback(() => {
    if (showExplanation && explanationRef.current) {
      setTimeout(() => {
        explanationRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center'
        });
      }, 100);
    }
  }, [showExplanation]);

  useEffect(() => {
    scrollToExplanation();
  }, [scrollToExplanation]);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-3">No Questions Available</h2>
            <p className="text-gray-600 mb-4">There are no questions for this chapter yet. We will add them soon.</p>
            <p className="text-sm text-gray-500">Subject: <span className="font-medium text-gray-700">{subjectId}</span> • Chapter: <span className="font-medium text-gray-700">{chapter}</span></p>
          </motion.div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const correctCount = answers.filter((answer, index) => answer === questions[index]?.correctAnswer).length;
    const pct = Math.round(score);

    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden">
          <header className="p-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
              <Award size={64} className="mx-auto mb-3" />
              <h1 className="text-2xl sm:text-3xl font-extrabold">Question Complete!</h1>
              <p className="text-sm sm:text-base opacity-90 mt-1">Here's your performance review</p>
            </motion.div>
          </header>

          <main className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 relative rounded-full bg-white/40 flex items-center justify-center shadow-md">
                <svg className="w-full h-full" viewBox="0 0 36 36" aria-hidden>
                  <path className="text-gray-200" fill="none" stroke="currentColor" strokeWidth="4" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <motion.path
                    className={pct >= 80 ? 'text-green-500' : pct >= 60 ? 'text-yellow-500' : 'text-red-500'}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: '0, 100' }}
                    animate={{ strokeDasharray: `${pct}, 100` }}
                    transition={{ duration: 1.25 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl sm:text-4xl font-extrabold text-gray-800">{pct}%</span>
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <p className="text-lg sm:text-xl font-semibold text-gray-700">You got <span className="font-bold text-indigo-600">{correctCount}</span> out of <span className="font-bold">{questions.length}</span> right.</p>
                <p className={`mt-2 font-bold ${pct >= 80 ? 'text-green-600' : pct >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {pct >= 80 ? 'Excellent work! 🎉' : pct >= 60 ? 'Good job! Keep practicing.' : "Let's review and improve together."}
                </p>
              </div>
            </div>

            {weaknesses.length > 0 && (
              <section className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Areas to improve</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {weaknesses.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 flex-shrink-0 text-red-600 font-bold">{questions.indexOf(q) + 1}.</span>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{q.question}</div>
                        <div className="text-xs text-gray-600 mt-0.5">Correct answer: <span className="font-semibold text-gray-700">{String.fromCharCode(65 + q.correctAnswer)}</span></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReviewQuiz}
                className="py-3 px-4 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                type="button"
              >
                Review Answers
              </motion.button>

              <button
                onClick={() => navigate(-1)}
                className="py-3 px-4 w-full rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold shadow-sm hover:bg-gray-50 focus:outline-none"
                type="button"
              >
                Back
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      {/* Enhanced Header with Progress Card */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                aria-label="Go back"
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                type="button"
              >
                <ArrowLeft size={20} />
              </button>

              <div className="flex flex-col">
                <div className="text-sm sm:text-base font-semibold text-gray-800">{(subjectId || 'SUBJECT').toUpperCase()}</div>
                <div className="text-xs text-gray-500">Year {year} • Chapter {chapter}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full">
                <Clock size={16} className="text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">{formatTime(timeElapsed)}</span>
              </div>

              <button
                onClick={() => setShowNav(v => !v)}
                aria-label="Toggle question navigator"
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                type="button"
              >
                {showNav ? <X size={20} /> : <BarChart3 size={20} />}
              </button>
            </div>
          </div>
          
          {/* Progress Card integrated into header */}
          <motion.div 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 text-white shadow-md"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Target size={16} />
                <span className="text-sm font-medium">Progress</span>
              </div>
              <span className="text-sm font-semibold">{Math.round(progress)}%</span>
            </div>
            
            <div className="w-full bg-white/30 rounded-full h-2 mb-1">
              <motion.div
                className="rounded-full h-2 bg-white"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.45 }}
              />
            </div>
            
            <div className="flex justify-between text-xs">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-28">
        {/* navigator */}
        <AnimatePresence>
          {showNav && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-2xl shadow-md p-3 mb-4"
            >
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Question Navigator</h4>
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
                {questions.map((q, idx) => {
                  const answered = answers[idx] !== -1;
                  const correct = answered && answers[idx] === q.correctAnswer;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => { setCurrentQuestion(idx); setShowNav(false); }}
                      className={`w-full aspect-square rounded-lg text-sm font-semibold flex items-center justify-center transition ${idx === currentQuestion ? 'bg-indigo-600 text-white shadow' : answered ? correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      aria-label={`Go to question ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* question card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl shadow-md p-5 sm:p-6 mb-6"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4 leading-relaxed">
                {currentQ?.question}
              </h3>

              <div className="grid gap-3">
                {currentQ?.options?.map((option, index) => {
                  const optionClasses = getOptionClasses(index);
                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      whileTap={!isAnswerSelected ? { scale: 0.99 } : undefined}
                      type="button"
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${optionClasses} ${isAnswerSelected ? 'cursor-default' : 'cursor-pointer'}`}
                      style={{ touchAction: 'manipulation' }}
                      aria-pressed={answers[currentQuestion] === index}
                      aria-label={`Answer option ${String.fromCharCode(65 + index)}`}
                    >
                      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                        <span className="font-bold text-sm">{String.fromCharCode(65 + index)}</span>
                      </div>
                      <div className="flex-1 text-sm sm:text-base text-gray-800">{option}</div>

                      {/* result icon */}
                      {isAnswerSelected && (
                        <div className="flex-shrink-0">
                          {currentQ.correctAnswer === index ? (
                            <CheckCircle size={isMobile ? 16 : 20} className="text-green-600" />
                          ) : answers[currentQuestion] === index ? (
                            <XCircle size={isMobile ? 16 : 20} className="text-red-600" />
                          ) : null}
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* explanation toggler with improved UI */}
              {isAnswerSelected && currentQ?.explanation && (
                <div className="mt-4" ref={explanationRef}>
                  <motion.button
                    onClick={() => {
                      setShowExplanation(v => !v);
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full flex items-center justify-between p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                    aria-expanded={showExplanation}
                    aria-controls="explanation-panel"
                  >
                    <div className="flex items-center gap-2">
                      <Lightbulb size={16} className="text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-700">Explanation</span>
                    </div>
                    {showExplanation ? (
                      <ChevronUp size={16} className="text-indigo-600" />
                    ) : (
                      <ChevronDown size={16} className="text-indigo-600" />
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {showExplanation && (
                      <motion.div
                        id="explanation-panel"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 overflow-hidden"
                      >
                        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 text-sm text-indigo-900">
                          <div className="font-semibold mb-1">Explanation</div>
                          <div className="text-gray-700">{currentQ.explanation}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* submit button - show only when last question answered */}
              {answers[questions.length - 1] !== -1 && (
                <div className="mt-5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    type="button"
                  >
                    {isSubmitting ? 'Submitting…' : 'Submit Quiz'}
                  </motion.button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Enhanced bottom navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-3">
            <motion.button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              whileTap={{ scale: currentQuestion === 0 ? 1 : 0.95 }}
              className={`flex items-center gap-1 px-4 py-3 rounded-xl font-medium transition ${currentQuestion === 0 ? 'text-gray-400 bg-gray-100' : 'text-white bg-indigo-600 hover:bg-indigo-700 shadow-md'}`}
              type="button"
              aria-label="Previous question"
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline">Previous</span>
            </motion.button>

            <div className="flex flex-col items-center">
              <div className="text-xs text-gray-500">Question</div>
              <div className="font-semibold text-indigo-600">{currentQuestion + 1}<span className="text-gray-400">/{questions.length}</span></div>
            </div>

            <motion.button
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
              whileTap={{ scale: currentQuestion === questions.length - 1 ? 1 : 0.95 }}
              className={`flex items-center gap-1 px-4 py-3 rounded-xl font-medium transition ${currentQuestion === questions.length - 1 ? 'text-gray-400 bg-gray-100' : 'text-white bg-indigo-600 hover:bg-indigo-700 shadow-md'}`}
              type="button"
              aria-label="Next question"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
}