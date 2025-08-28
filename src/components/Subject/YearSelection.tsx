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
  Database,
  Cpu,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

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

  const subject = subjects?.find((s: any) => s.id === subjectId) || null;
  const subjectName = subject?.name || 'Subject';

  useEffect(() => {
    loadYearResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjectId, currentUser]);

  const loadYearResults = async () => {
    if (!currentUser || !subjectId) {
      setYearResults(examYears.map((y) => ({ year: y, averageScore: 0 })));
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
      const results = resultsSnapshot.docs.map((doc) => doc.data() as any);

      const yearAverages = examYears.map((year) => {
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
      setYearResults(examYears.map((y) => ({ year: y, averageScore: 0 })));
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const refresh = () => {
    setIsRefreshing(true);
    loadYearResults();
  };

  const getYearCardStyle = (score: number) => {
    if (score === 0) return 'bg-white/95 border border-gray-100 hover:shadow-xl';
    if (score < 60) return 'bg-red-50/95 border border-red-200 hover:shadow-xl';
    return 'bg-emerald-50/95 border border-emerald-200 hover:shadow-xl';
  };

  const getYearTextColor = (score: number) => {
    if (score === 0) return 'text-slate-700';
    if (score < 60) return 'text-red-700';
    return 'text-emerald-700';
  };

  const getYearIcon = (score: number) => {
    if (score === 0) return <Clock size={18} className="text-slate-500" />;
    if (score < 60) return <AlertTriangle size={18} className="text-red-500" />;
    return <Award size={18} className="text-emerald-500" />;
  };

  const handleYearClick = (year: number) => {
    navigate(`/subject/${subjectId}/year/${year}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-sky-50 pb-32">
      <Header />

      <div className="mx-auto px-4 py-4 max-w-3xl">
        {/* Top row: back + title + refresh */}
        <div className="flex items-center justify-between mb-3">
          <motion.button
            aria-label="Back to Subjects"
            initial={{ x: -6, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.22 }}
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-200 rounded px-2 py-1"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Subjects</span>
          </motion.button>

          <div className="text-center flex-1 px-3">
            <h2 className="text-lg font-extrabold text-slate-800 truncate">
              {subjectName}
            </h2>
            {/* compact info card (mobile-friendly) */}
            <div className="mt-2 flex items-center justify-center">
              <div className="w-[min(92%,420px)] h-12 bg-white/95 rounded-lg shadow-md flex items-center px-4">
                <div className="flex-1 text-sm text-slate-600 truncate">
                  Midterm & Final exam collections · 2013 — 2017
                </div>
                <div className="ml-3 text-xs text-slate-500 font-medium">2013–2017</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={refresh}
              disabled={isLoading || isRefreshing}
              aria-label="Refresh results"
              className="inline-flex items-center gap-2 bg-white/95 hover:bg-white rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-200 shadow-sm"
            >
              <RefreshCw size={16} className={`${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="whitespace-nowrap">
                {isRefreshing ? 'Refreshing' : 'Refresh'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile feature chips */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
        >
          <div className="flex gap-2 overflow-x-auto pb-2">
            <div className="flex-shrink-0 inline-flex items-center gap-2 bg-white/95 rounded-full px-3 py-2 shadow-sm">
              <Database size={16} />
              <span className="text-xs font-medium">GPA Calculator</span>
            </div>

            <div className="flex-shrink-0 inline-flex items-center gap-2 bg-white/95 rounded-full px-3 py-2 shadow-sm">
              <BookOpen size={16} />
              <span className="text-xs font-medium">Handouts</span>
            </div>

            <div className="flex-shrink-0 inline-flex items-center gap-2 bg-white/95 rounded-full px-3 py-2 shadow-sm">
              <MessageCircle size={16} />
              <span className="text-xs font-medium">Questions</span>
            </div>

            <div className="flex-shrink-0 inline-flex items-center gap-2 bg-white/95 rounded-full px-3 py-2 shadow-sm">
              <Cpu size={16} />
              <span className="text-xs font-medium">Challenge Mode</span>
            </div>

            <div className="flex-shrink-0 inline-flex items-center gap-2 bg-white/95 rounded-full px-3 py-2 shadow-sm">
              <ShieldCheck size={16} />
              <span className="text-xs font-medium">Secure Progress</span>
            </div>
          </div>
        </motion.div>

        {/* Loading skeleton (mobile-optimized) */}
        {isLoading && (
          <div className="space-y-3 mt-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="animate-pulse bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              >
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-3" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
                <div className="h-3 bg-gray-200 rounded w-full" />
              </div>
            ))}
          </div>
        )}

        {/* Years grid */}
        {!isLoading && (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
            >
              {examYears.map((year) => {
                const result = yearResults.find((r) => r.year === year);
                const score = result?.averageScore || 0;
                const scoreRounded = Number(score.toFixed(1));

                return (
                  <motion.button
                    key={year}
                    type="button"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.995 }}
                    onClick={() => handleYearClick(year)}
                    className={`w-full text-left cursor-pointer rounded-2xl p-4 transition-shadow duration-200 flex flex-col justify-between ${getYearCardStyle(
                      score
                    )} shadow-sm`}
                    aria-label={`${year} exams - ${
                      score === 0 ? 'not attempted' : `${scoreRounded}% average`
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-white/95 flex items-center justify-center shadow-sm ring-1 ring-white/40">
                          {getYearIcon(score)}
                        </div>

                        <div>
                          <h4 className={`text-base font-semibold ${getYearTextColor(score)}`}>
                            {year} Exams
                          </h4>
                          <p className={`text-xs mt-1 ${getYearTextColor(score)}`}>
                            {score === 0 ? 'Not Attempted' : `${scoreRounded}% Average`}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-xs text-slate-500">View</span>
                        <ChevronRight size={18} className="text-slate-400 mt-2" />
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-4">
                      {score > 0 ? (
                        <>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                            <div
                              className={`h-2.5 rounded-full transition-all duration-700 ${
                                score < 60 ? 'bg-red-500' : 'bg-emerald-500'
                              }`}
                              style={{ width: `${Math.min(100, score)}%` }}
                            />
                          </div>

                          <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                            <span>0%</span>
                            <span>{Math.min(100, Math.round(score))}%</span>
                          </div>
                        </>
                      ) : (
                        <div className="mt-2 text-xs text-slate-500">
                          Try a test to start tracking progress
                        </div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center my-6">
              <div className="h-px w-28 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            </div>

            {/* Responsive Promo Card (stacks on small screens) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              className="mb-12"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl p-4 sm:p-6 bg-gradient-to-tr from-[#7c3aed] via-[#06b6d4] to-[#f97316]">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40 animate-[tilt_8s_linear_infinite] pointer-events-none" />

                <div className="relative flex flex-col sm:flex-row gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 flex items-center justify-center ring-1 ring-white/30">
                      <BookOpen size={28} className="text-white" />
                    </div>
                  </div>

                  <div className="flex-1 text-white">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-lg sm:text-xl font-extrabold leading-tight truncate">
                          Welcome to Fresh‑Hub
                        </div>
                        <div className="text-sm sm:text-base opacity-95 mt-1 truncate">
                          Study smart — past midterms & finals at your fingertips
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center gap-2">
                        <Star size={18} className="text-white/90" />
                        <Sparkles size={18} className="text-white/90" />
                      </div>
                    </div>

                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm opacity-95">
                      <li className="flex items-start gap-3">
                        <Target size={16} className="mt-1 text-white/90" />
                        <div>
                          <div className="font-medium">Clear notes</div>
                          <div className="text-xs opacity-90">Exam-focused summaries</div>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <Zap size={16} className="mt-1 text-white/90" />
                        <div>
                          <div className="font-medium">Past exams 2013–2017</div>
                          <div className="text-xs opacity-90">Organized by year</div>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white text-orange-500 text-xs font-bold flex items-center justify-center">
                          +
                        </div>
                        <div>
                          <div className="font-medium">Weekly updates</div>
                          <div className="text-xs opacity-90">New content regularly</div>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-4 flex gap-3 items-center">
                      <button
                        onClick={() => navigate(`/subject/${subjectId}`)}
                        className="bg-white text-[#0f172a] px-4 py-2 rounded-lg text-sm font-semibold shadow hover:scale-[1.02] transition-transform flex items-center gap-2"
                      >
                        <BookOpen size={16} />
                        Explore Chapters
                      </button>

                      <button
                        onClick={() => navigate('/how-it-works')}
                        className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                      >
                        <Sparkles size={14} />
                        How it works
                      </button>

                      <button
                        onClick={() => navigate('/signup')}
                        className="ml-auto bg-white/10 text-white px-3 py-1.5 rounded-md text-xs font-medium border border-white/20 hidden sm:inline-flex"
                      >
                        Get Started
                      </button>
                    </div>

                    {/* Mobile sticky CTA (small screens) */}
                    <div className="sm:hidden mt-4">
                      <div className="fixed left-4 right-4 bottom-24 z-50">
                        <div className="bg-white/95 rounded-lg p-2 shadow-lg flex items-center gap-2">
                          <div className="flex-1">
                            <div className="text-xs font-semibold">Ready to study?</div>
                            <div className="text-[11px] text-slate-600">
                              Open chapters & start a test
                            </div>
                          </div>
                          <button
                            onClick={() => navigate(`/subject/${subjectId}`)}
                            className="bg-sky-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            Start
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}

        {/* spacer */}
        <div style={{ height: 140 }} />
      </div>

      {/* Progress Guide - responsive placement */}
      {!isLoading && (
        <div className="fixed left-4 right-4 bottom-24 sm:bottom-28 flex justify-center z-40">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="max-w-3xl w-full"
          >
            <div className="bg-white rounded-2xl p-3 shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BarChart2 size={20} className="text-sky-500" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Progress Guide</div>
                    <div className="text-xs text-slate-500">
                      Quick overview of your performance
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-400" />{' '}
                    <span>Not Attempted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />{' '}
                    <span>Needs Improvement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />{' '}
                    <span>Good</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <BottomBar />

      {/* Inline keyframes for the promo shimmer */}
      <style>{`@keyframes tilt { 0% { transform: translateX(-40%) rotate(2deg); } 50% { transform: translateX(40%) rotate(-2deg); } 100% { transform: translateX(-40%) rotate(2deg); } } .animate-[tilt_8s_linear_infinite] { animation: tilt 8s linear infinite; }`}</style>
    </div>
  );
}