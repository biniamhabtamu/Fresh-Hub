import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { subjects } from '../../data/subjects';
import SubjectCard from './SubjectCard';
import Header from '../Layout/Header';
import BottomBar from '../Layout/BottomBar';
import {
  FiFileText,
  FiFlag,
  FiBarChart2,
  FiBook,
} from 'react-icons/fi';
import { FaCrown, FaBookOpen } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { ClipLoader } from 'react-spinners';

// Stats type definition - kept as is
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
  const [loadingSubjects] = useState(false); // placeholder

  const allFieldSubjects = useMemo(
    () =>
      subjects.filter((subject) =>
        currentUser?.field ? subject.field === currentUser.field : true
      ),
    [subjects, currentUser?.field]
  );

  // Stats fetching logic - kept as is
  useEffect(() => {
    let mounted = true;
    const fetchUserStats = async () => {
      if (!uid) {
        if (mounted) setLoadingStats(false);
        return;
      }

      try {
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

        const usersQuery = query(collection(db, 'users'));
        const usersSnapshot = await getDocs(usersQuery);
        const users = usersSnapshot.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));

        const allResultsQuery = query(collection(db, 'results'));
        const allResultsSnapshot = await getDocs(allResultsQuery);
        const allResults = allResultsSnapshot.docs.map((d) => d.data() as any);

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
          gpa: 3.2 + Math.random() * 0.8,
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

    fetchSubscription();
    fetchUserStats();

    return () => {
      mounted = false;
    };
  }, [uid, currentUser?.isPremium]);

  const handleSubjectClick = useCallback(
    (subject: any) => {
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

  const welcomeName = useMemo(
    () => (currentUser?.fullName ? currentUser.fullName.split(' ')[0] : ''),
    [currentUser?.fullName]
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-6 pt-20 max-w-6xl">

        {/* Subjects Grid - NOW AT THE TOP */}
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <FiBook className="h-6 w-6 text-green-500" /> All Subjects
              </h3>
              {!isPremiumUser && (
                <button
                  onClick={handlePremiumClick}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-3 py-1.5 rounded-full font-medium text-xs transition-shadow shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  aria-label="Unlock all premium content"
                >
                  <FaCrown className="h-3 w-3" />
                  <span className="hidden sm:inline">Unlock Premium</span>
                </button>
              )}
            </div>

            <AnimatePresence>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {allFieldSubjects.map((subject) => (
                  <motion.div
                    key={subject.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SubjectCard
                      subject={subject}
                      isLocked={!subject.isFree && !isPremiumUser}
                      onClick={() => handleSubjectClick(subject)}
                      completionPercentage={
                        subject.isFree || isPremiumUser ? Math.floor(Math.random() * 100) : 0
                      }
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Hero Section - MOVED TO BOTTOM */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 sm:p-8 rounded-3xl shadow-xl dark:shadow-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-400/20 rounded-full"></div>
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-indigo-400/20 rounded-full"></div>

          <div className="relative z-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-1">
              Welcome{welcomeName ? `, ${welcomeName}!` : '! 👋'}
            </h1>
            <p className="text-sm opacity-90 max-w-prose mb-6">
              Your study journey in one place. Track your progress and jump back into learning.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {loadingStats ? (
                <div className="col-span-2 sm:col-span-4 flex items-center justify-center py-6">
                  <ClipLoader size={30} color="#ffffff" />
                </div>
              ) : (
                <>
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                    <span className="text-xl sm:text-2xl font-bold">{stats.quizzesCompleted}</span>
                    <span className="text-xs sm:text-sm opacity-80 mt-1">Quizzes</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                    <span className="text-xl sm:text-2xl font-bold">{stats.averageScore.toFixed(1)}%</span>
                    <span className="text-xs sm:text-sm opacity-80 mt-1">Avg Score</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                    <span className="text-xl sm:text-2xl font-bold">{stats.rank > 0 ? `#${stats.rank}` : '--'}</span>
                    <span className="text-xs sm:text-sm opacity-80 mt-1">Rank</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                    <span className="text-xl sm:text-2xl font-bold">{stats.gpa?.toFixed(1) || '3.5'}</span>
                    <span className="text-xs sm:text-sm opacity-80 mt-1">GPA</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.section>
      </main>

      <BottomBar />
    </div>
  );
}