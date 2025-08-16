import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { subjects } from '../../data/subjects';
import SubjectCard from './SubjectCard';
import Header from '../Layout/Header';
import BottomBar from '../Layout/BottomBar';
import {
  FiFileText,
  FiShield,
  FiFlag,
  FiBarChart2,
  FiBook,
} from 'react-icons/fi';
import { FaCrown, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { ClipLoader } from 'react-spinners';

interface UserStats {
  quizzesCompleted: number;
  averageScore: number;
  rank: number;
  gpa?: number;
  handoutsCompleted?: number;
  totalScore?: number;
  percentile?: number;
}

export default function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Use flexible uid accessor (some contexts have uid, some use id)
  const uid = useMemo(() => currentUser?.uid ?? currentUser?.id ?? null, [currentUser]);

  const [stats, setStats] = useState<UserStats>({
    quizzesCompleted: 0,
    averageScore: 0,
    rank: 0,
    gpa: 3.2,
    handoutsCompleted: 0,
    totalScore: 0,
    percentile: 100,
  });
  const [loadingStats, setLoadingStats] = useState(true);
  const [isPremiumUser, setIsPremiumUser] = useState<boolean>(Boolean(currentUser?.isPremium));
  const [loadingSubjects] = useState(false); // placeholder if you want subject-level loading

  // Responsive subset of subjects by user's field (safe fallback to show all)
  const allFieldSubjects = useMemo(
    () =>
      subjects.filter((subject) =>
        currentUser?.field ? subject.field === currentUser.field : true
      ),
    [subjects, currentUser?.field]
  );

  // Fetch subscription status (safe read from users/{uid}) and stats
  useEffect(() => {
    let mounted = true;
    const fetchUserStats = async () => {
      if (!uid) {
        // If no user, just stop loading stats
        if (mounted) setLoadingStats(false);
        return;
      }

      try {
        // === Stats: user-level results
        const resultsQuery = query(collection(db, 'results'), where('userId', '==', uid));
        const resultsSnapshot = await getDocs(resultsQuery);
        const results = resultsSnapshot.docs.map((d) => d.data() as any);

        const quizzesCompleted = results.length;
        const totalScore =
          quizzesCompleted > 0
            ? results.reduce((sum, r) => sum + (Number(r.percentage) || 0), 0)
            : 0;
        const averageScore =
          quizzesCompleted > 0 ? totalScore / quizzesCompleted : 0;

        // === Get all users and all results for ranking
        const usersQuery = query(collection(db, 'users'));
        const usersSnapshot = await getDocs(usersQuery);
        const users = usersSnapshot.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));

        const allResultsQuery = query(collection(db, 'results'));
        const allResultsSnapshot = await getDocs(allResultsQuery);
        const allResults = allResultsSnapshot.docs.map((d) => d.data() as any);

        // compute ranking summary (lightweight)
        const userRankings = users.map((user) => {
          const userResults = allResults.filter((r) => r.userId === user.id);
          const userQuizzesCompleted = userResults.length;
          const userTotalScore = userResults.reduce(
            (sum: number, r: any) => sum + (Number(r.percentage) || 0),
            0
          );
          const userAverageScore =
            userQuizzesCompleted > 0 ? userTotalScore / userQuizzesCompleted : 0;

          return {
            id: user.id,
            fullName: user.fullName || 'Anonymous',
            averageScore: userAverageScore,
            quizzesCompleted: userQuizzesCompleted,
            totalScore: userTotalScore,
          };
        });

        // filter active and sort by totalScore, then average
        const activeUsers = userRankings.filter((u) => u.quizzesCompleted > 0);
        activeUsers.sort((a, b) => {
          if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore;
          return b.averageScore - a.averageScore;
        });

        let currentUserRank =
          activeUsers.findIndex((user) => user.id === uid) + 1;
        if (currentUserRank === 0 && quizzesCompleted > 0) {
          currentUserRank = activeUsers.length + 1;
        } else if (quizzesCompleted === 0) {
          currentUserRank = 0;
        }

        const percentile =
          currentUserRank > 0
            ? Math.round((currentUserRank / Math.max(1, activeUsers.length)) * 100)
            : 100;

        if (!mounted) return;

        setStats({
          quizzesCompleted,
          averageScore,
          rank: currentUserRank,
          gpa: 3.2 + Math.random() * 0.8, // keep your random styling
          handoutsCompleted: Math.floor(Math.random() * 15),
          totalScore,
          percentile,
        });
      } catch (error) {
        console.error('Error fetching user stats:', error);
      } finally {
        if (mounted) setLoadingStats(false);
      }
    };

    const fetchSubscription = async () => {
      if (!uid) return;
      try {
        const userRef = doc(db, 'users', uid);
        const snap = await getDoc(userRef);
        if (snap.exists()) {
          const data = snap.data() as any;
          const premium =
            !!data?.isPremium ||
            data?.subscriptionStatus === 'active' ||
            data?.plan === 'premium';
          if (mounted) setIsPremiumUser(!!premium);
        } else {
          if (mounted) setIsPremiumUser(Boolean(currentUser?.isPremium));
        }
      } catch (err) {
        console.warn('Failed to read user subscription status, defaulting to currentUser flag', err);
        if (mounted) setIsPremiumUser(Boolean(currentUser?.isPremium));
      }
    };

    // Run both in parallel (not strictly dependent)
    fetchSubscription();
    fetchUserStats();

    return () => {
      mounted = false;
    };
  }, [uid, currentUser?.isPremium]);

  // Handlers for navigation (memoized)
  const handleSubjectClick = useCallback(
    (subject: any) => {
      // If subject is free or user is premium -> go to subject, otherwise to premium
      if (subject.isFree || isPremiumUser) {
        navigate(`/subject/${subject.id}`);
      } else {
        navigate('/premium');
      }
    },
    [navigate, isPremiumUser]
  );

  const handlePremiumClick = useCallback(() => {
    navigate('/premium');
  }, [navigate]);

  // UI helpers
  const welcomeName = useMemo(
    () => (currentUser?.fullName ? currentUser.fullName.split(' ')[0] : ''),
    [currentUser?.fullName]
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main className="container mx-auto px-4 py-6 pt-20 max-w-6xl">
        {/* Top: Subjects header + CTA */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <FiBook className="h-6 w-6 text-green-500" />
              <span>All Practice Questions</span>
            </h3>

            {!isPremiumUser && (
              <button
                onClick={handlePremiumClick}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-shadow shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                aria-label="Unlock all premium content"
              >
                <FaCrown className="h-4 w-4" />
                <span className="whitespace-nowrap">Unlock All Premium</span>
              </button>
            )}
          </div>

          {/* Subjects grid - responsive and touch-friendly */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {allFieldSubjects.map((subject) => (
              <div key={subject.id} className="w-full">
                <SubjectCard
                  subject={subject}
                  isLocked={!subject.isFree && !isPremiumUser}
                  onClick={() => handleSubjectClick(subject)}
                  completionPercentage={
                    subject.isFree || isPremiumUser ? Math.floor(Math.random() * 100) : 0
                  }
                />
              </div>
            ))}
          </div>
        </motion.section>

        {/* Stats & Quick Actions */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Stats Panel (big) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col"
          >
            {/* Decorative circles */}
            <div className="absolute -right-10 -top-10 w-44 h-44 bg-purple-500/20 rounded-full pointer-events-none"></div>
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-indigo-500/20 rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  {welcomeName ? `Welcome, ${welcomeName}!` : 'Welcome!'}
                </h2>
                <p className="mt-1 max-w-xl text-sm opacity-90">
                  {stats.quizzesCompleted > 0
                    ? `You've completed ${stats.quizzesCompleted} quizzes with an average score of ${stats.averageScore.toFixed(
                        1
                      )}%. Keep going — the leaderboard awaits!`
                    : 'Start your journey by taking your first quiz. Let’s get you to the top!'}
                </p>
              </div>

              <div className="self-start sm:self-auto">
                <button
                  onClick={() => navigate('/')}
                  className="bg-white text-indigo-700 hover:bg-gray-100 px-4 py-2.5 rounded-lg font-bold transition-shadow shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {stats.quizzesCompleted > 0 ? 'Continue Learning →' : 'Start Your First Quiz'}
                </button>
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {loadingStats ? (
                <div className="col-span-2 sm:col-span-4 flex items-center justify-center py-6">
                  <ClipLoader size={34} color="#ffffff" />
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{stats.quizzesCompleted}</div>
                    <div className="text-xs opacity-80 mt-1">Quizzes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{stats.averageScore.toFixed(1)}%</div>
                    <div className="text-xs opacity-80 mt-1">Avg Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{stats.rank > 0 ? `#${stats.rank}` : '--'}</div>
                    <div className="text-xs opacity-80 mt-1">Global Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{stats.gpa?.toFixed(1) || '3.5'}</div>
                    <div className="text-xs opacity-80 mt-1">Predicted GPA</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Quick Actions (small) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaBookOpen className="text-blue-500 h-5 w-5" /> Quick Actions
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => navigate('/handouts')}
                  className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-200 p-2 rounded-lg">
                      <FiFileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-800">Study Handouts</div>
                  </div>
                  <div className="text-blue-500 text-sm font-medium">View All →</div>
                </button>

                <button
                  onClick={() => navigate('/challenges')}
                  className="w-full text-left p-3 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-200 p-2 rounded-lg">
                      <FiFlag className="h-4 w-4 text-amber-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-800">Challenges</div>
                  </div>
                  <div className="text-amber-500 text-sm font-medium">Join Now →</div>
                </button>

                <button
                  onClick={() => navigate('/leaderboard')}
                  className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-200 p-2 rounded-lg">
                      <FiBarChart2 className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-800">Leaderboard</div>
                  </div>
                  <div className="text-purple-500 text-sm font-medium">View Ranks →</div>
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Additional information cards */}
       
      </main>

      <BottomBar />
    </div>
  );
}
