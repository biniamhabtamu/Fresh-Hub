import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { examYears, subjects } from '../../data/subjects';
import Header from '../Layout/Header';
import BottomBar from '../Layout/BottomBar';
import {
  ArrowLeft,
  Award,
  AlertTriangle,
  Clock,
  BarChart2,
  BookText,
  Calendar,
  ChevronRight,
  RefreshCw,
  BarChart3,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface YearResult {
  year: number;
  averageScore: number;
}

export default function YearSelection() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [yearResults, setYearResults] = useState<YearResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showProgressGuide, setShowProgressGuide] = useState(false);

  const subject = subjects?.find((s: any) => s.id === subjectId) || null;
  const subjectName = subject?.name || 'Subject';

  useEffect(() => {
    loadYearResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjectId, currentUser]);

  const loadYearResults = async () => {
    if (!subjectId || !currentUser) {
      setYearResults(examYears.map(y => ({ year: y, averageScore: 0 })));
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
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
        const average =
          yearItems.length > 0
            ? yearItems.reduce((sum: number, r: any) => sum + (r.percentage || 0), 0) /
              yearItems.length
            : 0;
        return { year, averageScore: Number(average) };
      });

      setYearResults(yearAverages);
    } catch (error) {
      console.error('Error loading year results:', error);
      setYearResults(examYears.map(y => ({ year: y, averageScore: 0 })));
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const refresh = () => {
    setIsRefreshing(true);
    loadYearResults();
  };

  const getYearCardClass = (score: number) => {
    if (score === 0)
      return 'bg-gradient-to-br from-white to-blue-50/80 border border-blue-100/60 shadow-sm';
    if (score < 60)
      return 'bg-gradient-to-br from-red-50/90 to-orange-50/90 border border-red-100/60 shadow-sm';
    return 'bg-gradient-to-br from-green-50/90 to-emerald-50/90 border border-green-100/60 shadow-sm';
  };

  const getYearTextClass = (score: number) => {
    if (score === 0) return 'text-blue-700';
    if (score < 60) return 'text-red-700';
    return 'text-green-700';
  };

  const getYearIcon = (score: number) => {
    if (score === 0) return <Clock size={18} className="text-blue-500" />;
    if (score < 60) return <AlertTriangle size={18} className="text-red-500" />;
    return <Award size={18} className="text-green-500" />;
  };

  const getYearIconBgClass = (score: number) => {
    if (score === 0) return 'bg-blue-100/80';
    if (score < 60) return 'bg-red-100/80';
    return 'bg-green-100/80';
  };

  const getStatusBadgeClass = (score: number) => {
    if (score === 0) return 'bg-blue-100 text-blue-700';
    if (score < 60) return 'bg-red-100 text-red-700';
    return 'bg-green-100 text-green-700';
  };

  const getStatusText = (score: number) => {
    if (score === 0) return 'Not Started';
    if (score < 40) return 'Needs Practice';
    if (score < 60) return 'Getting There';
    if (score < 80) return 'Good Progress';
    return 'Excellent!';
  };

  const handleYearClick = (year: number) => {
    navigate(`/subject/${subjectId}/year/${year}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 12, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: 'easeOut' }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/90 via-purple-50/80 to-indigo-50/90 pb-32">
      <Header />

      <div className="mx-auto px-4 py-5 max-w-xl">
        {/* Mobile top row - big tappable controls */}
        <div className="flex items-center justify-between mb-4">
          <button
            aria-label="Back to Subjects"
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 bg-white/95 p-2 rounded-xl shadow-sm border border-gray-100 focus:outline-none"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Subjects</span>
          </button>

          <div className="text-center flex-1 px-3">
            <h2 className="text-lg font-bold text-gray-800 truncate">{subjectName}</h2>
            <p className="text-xs text-gray-500">Choose exam year</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={refresh}
              disabled={isLoading || isRefreshing}
              aria-label="Refresh results"
              className="inline-flex items-center gap-2 bg-white/95 hover:bg-white p-2 rounded-xl shadow-sm border border-gray-100 focus:outline-none"
            >
              <RefreshCw size={16} className={`${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Hero Card - compact for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mb-5 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 rounded-2xl p-4 text-white shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                  <BookText size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold">{subjectName} Progress</div>
                  <div className="text-xs opacity-90">Your learning snapshot</div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 p-2 rounded-lg">
              <TrendingUp size={20} className="text-white" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="text-center bg-white/10 rounded-xl p-3">
              <div className="text-lg font-bold">
                {yearResults.filter(r => r.averageScore > 0).length}
              </div>
              <div className="text-xs mt-1">Attempted</div>
            </div>
            <div className="text-center bg-white/10 rounded-xl p-3">
              <div className="text-lg font-bold">{yearResults.filter(r => r.averageScore >= 60).length}</div>
              <div className="text-xs mt-1">Mastered</div>
            </div>
            <div className="text-center bg-white/10 rounded-xl p-3">
              <div className="text-lg font-bold">
                {yearResults.length > 0 && yearResults.filter(r => r.averageScore > 0).length > 0
                  ? Math.round(yearResults.reduce((sum, r) => sum + r.averageScore, 0) / yearResults.filter(r => r.averageScore > 0).length)
                  : 0}%
              </div>
              <div className="text-xs mt-1">Avg Score</div>
            </div>
          </div>
        </motion.div>

        {/* Floating small progress toggle for mobile */}
        <div className="fixed left-4 right-4 bottom-20 z-40 sm:hidden">
          <button
            onClick={() => setShowProgressGuide(prev => !prev)}
            className="w-full flex items-center justify-center gap-3 bg-white/95 p-3 rounded-2xl shadow-lg border border-gray-100"
            aria-expanded={showProgressGuide}
          >
            <BarChart3 size={18} />
            <span className="font-medium">{showProgressGuide ? 'Hide' : 'Show'} Progress Guide</span>
          </button>
        </div>

        {/* Mobile Progress Guide bottom sheet */}
        <AnimatePresence>
          {showProgressGuide && (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 200, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="fixed left-3 right-3 bottom-28 z-50 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 sm:hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <BarChart2 size={18} className="text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Progress Guide</div>
                    <div className="text-xs text-gray-500">Quick overview of your performance</div>
                  </div>
                </div>
                <button onClick={() => setShowProgressGuide(false)} className="text-xs font-medium text-gray-500">Close</button>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <div className="text-xs">Not Attempted</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="text-xs">Needs Work (Below 60%)</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="text-xs">Good (60% and above)</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading skeleton */}
        {isLoading && (
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse bg-white/90 rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-3" />
                <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-2 bg-gray-200 rounded w-full" />
              </div>
            ))}
          </div>
        )}

        {/* Years list - mobile friendly cards */}
        {!isLoading && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 mb-8"
          >
            {examYears.map((year) => {
              const result = yearResults.find(r => r.year === year);
              const score = result?.averageScore || 0;
              const scoreRounded = Number(score.toFixed(1));

              return (
                <motion.button
                  key={year}
                  type="button"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleYearClick(year)}
                  className={`w-full text-left rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between ${getYearCardClass(score)}`}
                  aria-label={`${year} exams - ${score === 0 ? 'not attempted' : `${scoreRounded}% average`}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getYearIconBgClass(score)}`}>
                        {getYearIcon(score)}
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-base font-semibold text-gray-800 truncate">{subjectName} Exam Collections</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusBadgeClass(score)}`}>{getStatusText(score)}</span>
                          {score > 0 && <span className={`text-sm font-bold ${getYearTextClass(score)}`}>{scoreRounded}%</span>}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-500 mb-1">View</span>
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/80 shadow-sm">
                        <ChevronRight size={18} className="text-gray-700" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    {score > 0 ? (
                      <>
                        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(100, score)}%` }}
                            transition={{ duration: 1.0 }}
                            className={`h-3 rounded-full ${
                              score < 40
                                ? 'bg-rose-400'
                                : score < 60
                                ? 'bg-amber-400'
                                : score < 80
                                ? 'bg-sky-500'
                                : 'bg-emerald-500'
                            }`}
                          />
                        </div>

                        <div className="flex items-center justify-between mt-2 text-xs">
                          <span className="text-gray-500">0%</span>
                          <span className={`font-medium ${score < 40 ? 'text-rose-600' : score < 60 ? 'text-amber-600' : score < 80 ? 'text-sky-600' : 'text-emerald-600'}`}>
                            {Math.min(100, Math.round(score))}%
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="mt-2 text-xs text-gray-500 flex items-center gap-2">
                        <Clock size={12} />
                        <span>Try a test to check your progress here: mid and final by chapter.</span>
                      </div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}

        <div style={{ height: 96 }} />
      </div>

      <BottomBar />
    </div>
  );
}
