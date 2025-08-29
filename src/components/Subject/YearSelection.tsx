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
  Star,
  BookOpen,
  Target,
  Zap,
  ChevronRight,
  RefreshCw,
  Sparkles,
  TrendingUp,
  CheckCircle,
  BookText,
  Calendar,
  BarChart3,
  TargetIcon
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
    if (!currentUser || !subjectId) {
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
      // fallback: map to zeros
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
      return 'bg-gradient-to-br from-white to-blue-50/70 border-2 border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-md';
    if (score < 60)
      return 'bg-gradient-to-br from-red-50/90 to-orange-50/90 border-2 border-red-100 hover:border-red-300 shadow-sm hover:shadow-md';
    return 'bg-gradient-to-br from-green-50/90 to-emerald-50/90 border-2 border-green-100 hover:border-green-300 shadow-sm hover:shadow-md';
  };

  const getYearTextClass = (score: number) => {
    if (score === 0) return 'text-gray-700';
    if (score < 60) return 'text-red-700';
    return 'text-green-700';
  };

  const getYearIcon = (score: number) => {
    if (score === 0) return <Clock size={20} className="text-blue-500" />;
    if (score < 60) return <AlertTriangle size={20} className="text-red-500" />;
    return <Award size={20} className="text-green-500" />;
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-indigo-50/80 pb-28">
      <Header />

      <div className="mx-auto px-4 py-6 max-w-xl">
        {/* Top row: back + title + refresh */}
        <div className="flex items-center justify-between mb-4">
          <motion.button
            aria-label="Back to Subjects"
            initial={{ x: -8, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-xl px-3 py-2.5 bg-white/90 backdrop-blur-sm shadow-sm border border-gray-100"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium hidden xs:inline">Subjects</span>
          </motion.button>

          <div className="text-center flex-1 px-2">
            <h2 className="text-lg font-bold text-gray-800 truncate">{subjectName}</h2>
            <p className="text-xs text-gray-500">Select exam year</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={refresh}
              disabled={isLoading || isRefreshing}
              aria-label="Refresh results"
              className="inline-flex items-center gap-2 bg-white/90 hover:bg-white rounded-xl p-2.5 shadow-sm border border-gray-100 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
            >
              <RefreshCw size={16} className={`${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden xs:inline">{isRefreshing ? 'Refreshing' : 'Refresh'}</span>
            </button>
          </div>
        </div>

        {/* Greeting / subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-6 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-4 py-1.5 mb-3">
            <Calendar size={14} className="text-indigo-500" />
            <span className="text-xs font-medium text-indigo-700">Exam Years</span>
          </div>
          <h3 className="text-2xl font-extrabold text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Select Exam Year
          </h3>
          <p className="text-xs text-gray-500 mt-2">
            Midterm & Final exam collections · 2013 — 2017
          </p>
        </motion.div>

        {/* Subject Stats Card - Updated with beautiful colors */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-white/10"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xl flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                    <BookText size={20} className="text-white" />
                  </div>
                  {subjectName} Performance
                </h4>
                <p className="text-sm opacity-95 mt-2 font-medium">Your overall progress in this subject</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <TrendingUp size={24} className="text-white" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-5 mt-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 shadow-inner">
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {yearResults.filter(r => r.averageScore > 0).length}
                </div>
                <div className="text-xs opacity-95 mt-1 font-medium">Attempted</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 shadow-inner">
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                  {yearResults.filter(r => r.averageScore >= 60).length}
                </div>
                <div className="text-xs opacity-95 mt-1 font-medium">Mastered</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 shadow-inner">
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                  {yearResults.length > 0 && yearResults.filter(r => r.averageScore > 0).length > 0
                    ? Math.round(yearResults.reduce((sum, r) => sum + r.averageScore, 0) / yearResults.filter(r => r.averageScore > 0).length) 
                    : 0}%
                </div>
                <div className="text-xs opacity-95 mt-1 font-medium">Avg. Score</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress Guide for Desktop - Now placed below the Subject Stats Card */}
        {!isLoading && (
          <motion.div 
            initial={{ opacity: 0, y: 8 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.12 }} 
            className="mb-6 hidden sm:block"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <BarChart2 size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Progress Guide</div>
                    <div className="text-xs text-gray-500">Quick overview of your performance</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                    <span className="whitespace-nowrap">Not Attempted</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="whitespace-nowrap">Needs Work</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="whitespace-nowrap">Good</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Progress Guide Toggle for Mobile */}
        <div className="mb-4 flex justify-center sm:hidden">
          <button 
            onClick={() => setShowProgressGuide(!showProgressGuide)}
            className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
          >
            <BarChart3 size={16} />
            {showProgressGuide ? 'Hide Progress Guide' : 'Show Progress Guide'}
          </button>
        </div>

        {/* Progress Guide for Mobile */}
        <AnimatePresence>
          {showProgressGuide && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 sm:hidden bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <BarChart2 size={16} className="text-indigo-600" />
                  </div>
                  <div className="text-sm font-bold text-gray-800">Progress Guide</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <span className="whitespace-nowrap">Not Attempted</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="whitespace-nowrap">Needs Work (Below 60%)</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="whitespace-nowrap">Good (60% and above)</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading skeleton */}
        {isLoading && (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="animate-pulse bg-white/80 rounded-xl p-4 shadow-sm border border-gray-100 backdrop-blur-sm">
                <div className="h-4 bg-gray-200 rounded w-3/5 mb-3" />
                <div className="h-3 bg-gray-200 rounded w-2/5 mb-4" />
                <div className="h-3 bg-gray-200 rounded w-full" />
              </div>
            ))}
          </div>
        )}

        {/* Years grid */}
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
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleYearClick(year)}
                  className={`w-full text-left cursor-pointer rounded-xl border-2 p-4 transition-all duration-300 flex flex-col justify-between ${getYearCardClass(score)}`}
                  aria-label={`${year} exams - ${score === 0 ? 'not attempted' : `${scoreRounded}% average`}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center shadow-sm border border-gray-100/50">
                        {getYearIcon(score)}
                      </div>
                      <div>
                        <h4 className={`text-base font-bold ${getYearTextClass(score)}`}> Exam Collections</h4>
                        <p className={`text-xs mt-1 ${getYearTextClass(score)}`}>
                          {score === 0 ? 'Not Attempted' : `${scoreRounded}% Average`}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-500">View</span>
                      <ChevronRight size={18} className="text-gray-400 mt-1" />
                    </div>
                  </div>

                  {/* Progress bar + badges - Updated with attractive colors */}
                  <div className="mt-4">
                    {score > 0 ? (
                      <>
                        <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(100, score)}%` }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className={`h-3 rounded-full relative overflow-hidden ${
                              score < 40 
                                ? 'bg-gradient-to-r from-rose-500 to-pink-500 shadow-md shadow-rose-200' 
                                : score < 60 
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 shadow-md shadow-amber-200'
                                : score < 80
                                ? 'bg-gradient-to-r from-sky-500 to-blue-500 shadow-md shadow-sky-200'
                                : 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-md shadow-emerald-200'
                            }`}
                          >
                            {/* Shimmer effect for visual interest */}
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </motion.div>
                        </div>
                        <div className="flex items-center justify-between mt-2 text-xs">
                          <span className="text-gray-500">0%</span>
                          <span className={`font-medium ${
                            score < 40 
                              ? 'text-rose-600' 
                              : score < 60 
                              ? 'text-amber-600'
                              : score < 80
                              ? 'text-sky-600'
                              : 'text-emerald-600'
                          }`}>
                            {Math.min(100, Math.round(score))}%
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                        <Clock size={12} />
                        <span>Try a test to see progress here</span>
                      </div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* spacer so content doesn't clash with fixed bottom bar */}
        <div style={{ height: 92 }} />
      </div>

      <BottomBar />
    </div>
  );
}