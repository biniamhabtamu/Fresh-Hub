import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { examYears, getChaptersOrTopicsPerSubject, englishTopics, SampleTopics } from '../../data/subjects';
import Header from '../Layout/Header';
import BottomBar from '../Layout/BottomBar';
import {
  ArrowLeft,
  Award,
  AlertTriangle,
  BookOpen,
  Calendar,
  Star,
  Play,
  HelpCircle,
  X,
  ChevronRight,
  Target,
  CheckCircle,
  Clock,
  BarChart3,
  Trophy,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Reusable Framer Motion variants
const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const getStatusBadge = (score: number, completed: boolean) => {
  if (!completed) return { text: 'Start Quiz', color: 'bg-indigo-100 text-indigo-700', icon: Play };
  if (score < 60) return { text: 'Needs Improvement', color: 'bg-red-100 text-red-700', icon: AlertTriangle };
  return { text: 'Well Done!', color: 'bg-green-100 text-green-700', icon: Award };
};

const getProgressBarColor = (score: number) => {
  if (score < 60) return 'bg-red-500';
  if (score < 80) return 'bg-yellow-500';
  return 'bg-green-500';
};

export default function YearSelection() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [yearResults, setYearResults] = useState<YearResult[]>([]);
  const [chapterResults, setChapterResults] = useState<ChapterResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showProgressGuide, setShowProgressGuide] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const subject = subjectId || '';
  const isEnglishSubject = subjectId === 'english' || subjectId === 'english2';
  const isFreeTrialSubject = subjectId === 'Sample';
  const itemsPerSubject = getChaptersOrTopicsPerSubject(subject);

  const getItemName = (index: number) => {
    if (isEnglishSubject) {
      return englishTopics[index] || `Topic ${index + 1}`;
    } else if (isFreeTrialSubject) {
      return SampleTopics[index] || `Free Trial ${index + 1}`;
    } else {
      return `Chapter ${index + 1}`;
    }
  };

  const loadYearResults = useCallback(async () => {
    if (!subjectId || !currentUser) {
      setYearResults(examYears.map(y => ({ year: y, averageScore: 0 })));
      return;
    }
    try {
      const resultsQuery = query(
        collection(db, 'results'),
        where('userId', '==', currentUser.id),
        where('subject', '==', subjectId)
      );
      const resultsSnapshot = await getDocs(resultsQuery);
      const results = resultsSnapshot.docs.map(doc => doc.data() as any);
      const yearAverages = examYears.map(year => {
        const yearItems = results.filter((r: any) => r.year === year);
        const average = yearItems.length > 0
          ? yearItems.reduce((sum: number, r: any) => sum + (r.percentage || 0), 0) / yearItems.length
          : 0;
        return { year, averageScore: Number(average) };
      });
      setYearResults(yearAverages);
    } catch (error) {
      console.error('Error loading year results:', error);
      setYearResults(examYears.map(y => ({ year: y, averageScore: 0 })));
    }
  }, [subjectId, currentUser]);

  const loadChapterResults = useCallback(async () => {
    if (!currentUser || !subjectId) {
      setIsLoading(false);
      return;
    }
    try {
      setIsLoading(true);
      const resultsQuery = query(
        collection(db, 'results'),
        where('userId', '==', currentUser.id),
        where('subject', '==', subjectId)
      );
      const resultsSnapshot = await getDocs(resultsQuery);
      const results = resultsSnapshot.docs.map(doc => doc.data());
      const chapters = Array.from({ length: itemsPerSubject }, (_, i) => {
        const chapterNum = i + 1;
        const chapterResults = results.filter((r: any) => r.chapter === chapterNum);
        const averageScore = chapterResults.length > 0
          ? chapterResults.reduce((sum: number, r: any) => sum + (r.percentage || 0), 0) / chapterResults.length
          : 0;
        return {
          chapter: chapterNum,
          score: averageScore,
          completed: chapterResults.length > 0
        };
      });
      setChapterResults(chapters);
    } catch (error) {
      console.error('Error loading chapter results:', error);
    } finally {
      setIsLoading(false);
    }
  }, [subjectId, currentUser, itemsPerSubject]);

  useEffect(() => {
    loadYearResults();
    loadChapterResults();
  }, [loadYearResults, loadChapterResults]);

  const handleChapterClick = (chapter: number) => {
    if (!selectedYear) return;
    navigate(`/subject/${subjectId}/year/${selectedYear}/chapter/${chapter}/`);
  };

  const filteredChapters = chapterResults.filter(chapter => true);
  const totalCompleted = chapterResults.filter(r => r.completed).length;
  const masteredCount = chapterResults.filter(r => r.score >= 60).length;
  const averageScore = totalCompleted > 0
    ? Math.round(chapterResults.filter(r => r.completed).reduce((sum, r) => sum + r.score, 0) / totalCompleted)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 pb-32">
      <Header />
      <div className="mx-auto px-4 py-5 max-w-2xl">
        {/* Navigation and title */}
        <div className="flex items-center justify-between mb-6">
          <button
            aria-label="Back to Subjects"
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 bg-white/95 p-3 rounded-xl shadow-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 transition-transform"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="text-center flex-1 px-3">
            <h1 className="text-xl font-bold text-gray-800 truncate">
              {isEnglishSubject ? 'English' : isFreeTrialSubject ? 'Free Trial' : subjectId}
            </h1>
            <p className="text-xs text-gray-500">
              Select an exam year to begin
            </p>
          </div>
          <button
            onClick={() => setShowProgressGuide(true)}
            aria-label="Show help"
            className="flex items-center gap-2 bg-white/95 p-3 rounded-xl shadow-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 transition-transform"
          >
            <HelpCircle size={18} />
          </button>
        </div>

        {/* Progress summary card */}
        <motion.div
          {...fadeIn}
          className="mb-6 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff33 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          
          <div className="relative z-10 flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                <BookOpen size={20} className="text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">Your Progress</div>
                <div className="text-xs opacity-90">Track your learning journey</div>
              </div>
            </div>
            <div className="flex items-center text-xs bg-white/20 px-2 py-1 rounded-full">
              <Clock size={14} className="mr-1" />
              {new Date().toLocaleDateString()}
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-3 gap-3">
            <div className="text-center bg-white/10 rounded-xl p-3">
              <div className="text-2xl font-bold">{totalCompleted}/{chapterResults.length}</div>
              <div className="text-xs mt-1 opacity-90">Started</div>
            </div>
            <div className="text-center bg-white/10 rounded-xl p-3">
              <div className="text-2xl font-bold">{masteredCount}</div>
              <div className="text-xs mt-1 opacity-90">Mastered</div>
            </div>
            <div className="text-center bg-white/10 rounded-xl p-3">
              <div className="text-2xl font-bold">{averageScore}%</div>
              <div className="text-xs mt-1 opacity-90">Avg Score</div>
            </div>
          </div>
        </motion.div>

        {/* Main Content: Year Selection */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">Select Exam Year</h2>
          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            All year Exam Collection
          </div>
        </div>
        
        {/* Enhanced Year Cards - Full width with improved design */}
        <div className="space-y-4 mb-6">
          {examYears.map(year => {
            const yearResult = yearResults.find(r => r.year === year);
            const score = yearResult?.averageScore || 0;
            const isAttempted = score > 0;
            const isSelected = selectedYear === year;
            
            // Dynamic styles based on state
            const cardBg = isSelected 
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600' 
              : isAttempted 
                ? 'bg-gradient-to-r from-green-50 to-emerald-50' 
                : 'bg-gradient-to-r from-gray-50 to-slate-50';
                
            const borderColor = isSelected 
              ? 'border-indigo-600' 
              : isAttempted 
                ? 'border-green-200' 
                : 'border-gray-200';
                
            const textColor = isSelected 
              ? 'text-white' 
              : isAttempted 
                ? 'text-gray-800' 
                : 'text-gray-600';
                
            const statusText = isSelected 
              ? 'Selected' 
              : isAttempted 
                ? `${score.toFixed(1)}% completed` 
                : 'Not attempted yet';

            return (
              <motion.div
                key={year}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedYear(year)}
                className={`${cardBg} border ${borderColor} rounded-2xl p-5 transition-all duration-300 ease-in-out shadow-sm cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-white/20' : isAttempted ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <Calendar size={24} className={isSelected ? 'text-white' : isAttempted ? 'text-green-600' : 'text-gray-500'} />
                    </div>
                    <div>
                      <div className={`text-xl font-bold ${textColor}`}>{year}</div>
                      <div className={`text-sm ${isSelected ? 'text-indigo-100' : 'text-gray-500'}`}>{statusText}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {isAttempted && !isSelected && (
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getProgressBarColor(score)}`} 
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    )}
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      isSelected 
                        ? 'bg-white text-indigo-600' 
                        : isAttempted 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-600'
                    }`}>
                      {isSelected ? 'Selected' : isAttempted ? 'Completed' : 'Start'}
                    </div>
                  </div>
                </div>
                
                {isAttempted && isSelected && (
                  <div className="mt-4 pl-16">
                    <div className="text-sm font-medium mb-1 text-indigo-100">Your performance</div>
                    <div className="w-full bg-white/30 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${getProgressBarColor(score)}`} 
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Quick Action Cards */}
        <div className="mb-6">
          <h3 className="text-md font-semibold text-gray-700 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center gap-2"
              onClick={() => {
                const latestYear = Math.max(...examYears);
                setSelectedYear(latestYear);
              }}
            >
              <Target size={16} className="text-indigo-600" />
              <span className="text-sm font-medium">All year Exam Collection</span>
            </motion.button>
            
            
          </div>
        </div>

        {/* Selected Year CTA */}
        {selectedYear && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 mb-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-full">
                <Calendar size={20} className="text-indigo-600" />
              </div>
              <div>
                <div className="font-semibold text-indigo-800">Year  selected</div>
                <div className="text-xs text-indigo-600">Tap to view chapters</div>
              </div>
            </div>
            <button 
              onClick={() => setSelectedYear(null)}
              className="text-indigo-600 text-sm font-medium"
            >
              Change
            </button>
          </motion.div>
        )}
      </div>

      {/* Full-screen overlay for Chapters/Topics */}
      <AnimatePresence>
        {selectedYear !== null && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 overflow-y-auto"
          >
            <div className="mx-auto px-4 py-6 max-w-xl">
              {/* Header with 'X' button */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setSelectedYear(null)}
                  className="p-2 rounded-full bg-white/90 shadow-sm border border-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Go back to year selection"
                >
                  <ArrowLeft size={20} />
                </button>
                
                <h2 className="text-xl font-bold text-gray-800 text-center">
                  {selectedYear} {isEnglishSubject ? 'Topics' : 'Chapters'}
                </h2>
                
                <button
                  onClick={() => setSelectedYear(null)}
                  className="p-2 rounded-full bg-white/90 shadow-sm border border-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close chapter list"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Year performance summary */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-indigo-600" />
                    <span className="font-medium">Year Performance</span>
                  </div>
                  <div className="text-sm font-semibold">
                    {yearResults.find(r => r.year === selectedYear)?.averageScore.toFixed(1) || 0}%
                  </div>
                </div>
                <div className="w-full mt-2 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getProgressBarColor(yearResults.find(r => r.year === selectedYear)?.averageScore || 0)}`} 
                    style={{ width: `${yearResults.find(r => r.year === selectedYear)?.averageScore || 0}%` }}
                  ></div>
                </div>
              </motion.div>

              {/* Chapters/Topics List */}
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="border-4 border-gray-200 border-t-4 border-t-indigo-500 rounded-full w-12 h-12 mx-auto animate-spin mb-4"></div>
                  <p className="mt-4 text-gray-600 font-medium">Loading content...</p>
                </div>
              ) : filteredChapters.length === 0 ? (
                <div className="text-center py-8 bg-white/80 rounded-2xl shadow-sm border border-gray-100">
                  <BookOpen size={48} className="mx-auto text-gray-300 mb-3" />
                  <div className="text-gray-500 font-medium mb-2">
                    No {isEnglishSubject ? 'topics' : 'chapters'} available for this year
                  </div>
                  <button 
                    onClick={() => setSelectedYear(null)}
                    className="text-indigo-600 text-sm font-medium"
                  >
                    Select another year
                  </button>
                </div>
              ) : (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 gap-3 mb-8"
                >
                  {filteredChapters.map((chapter) => {
                    const status = getStatusBadge(chapter.score, chapter.completed);
                    const StatusIcon = status.icon;
                    const itemName = getItemName(chapter.chapter - 1);
                    return (
                      <motion.button
                        key={chapter.chapter}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => handleChapterClick(chapter.chapter)}
                        className={`relative cursor-pointer bg-white backdrop-blur-md border border-gray-200 rounded-xl shadow-sm hover:shadow p-4 relative overflow-hidden w-full text-left transition-all duration-200 ease-in-out`}
                        aria-label={`${itemName} - ${chapter.completed ? `${chapter.score}% average` : 'not attempted'}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${status.color.split(' ')[0]} bg-opacity-20`}>
                              <StatusIcon size={18} className={status.color.split(' ')[1]} />
                            </div>
                            <div className="text-left">
                              <h3 className="text-sm font-semibold text-gray-800">{itemName}</h3>
                              <div className="flex items-center text-xs text-gray-500 mt-1">
                                {chapter.completed ? (
                                  <>
                                    <Star size={12} className="text-yellow-400 mr-1" />
                                    <span>{chapter.score.toFixed(1)}% score</span>
                                  </>
                                ) : (
                                  <span>Not attempted yet</span>
                                )}
                              </div>
                            </div>
                          </div>
                          <ChevronRight size={16} className="text-gray-400" />
                        </div>
                        
                        {chapter.completed && (
                          <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5">
                            <motion.div
                              className={`h-1.5 rounded-full ${getProgressBarColor(chapter.score)}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${chapter.score}%` }}
                              transition={{ duration: 0.8, ease: 'easeInOut' }}
                            />
                          </div>
                        )}
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Guide Modal */}
      <AnimatePresence>
        {showProgressGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowProgressGuide(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-full max-w-sm sm:max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Understanding Your Progress</h3>
                <button
                  onClick={() => setShowProgressGuide(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Play size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Start Quiz</h4>
                    <p className="text-sm text-gray-600">You haven't attempted this content yet.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-red-50 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Needs Improvement</h4>
                    <p className="text-sm text-gray-600">Your score is below 60%. Time to review!</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-green-50 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Award size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Well Done!</h4>
                    <p className="text-sm text-gray-600">You've scored 60% or above. Keep up the great work!</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowProgressGuide(false)}
                className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
              >
                Got It
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <BottomBar />
    </div>
  );
}