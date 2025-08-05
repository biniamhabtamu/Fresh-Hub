import React, { useState, useEffect } from 'react';
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
import { collection, query, where, getDocs } from 'firebase/firestore';
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

  useEffect(() => {
    const fetchUserStats = async () => {
      if (!currentUser) return;

      try {
        const resultsQuery = query(
          collection(db, 'results'),
          where('userId', '==', currentUser.id)
        );
        const resultsSnapshot = await getDocs(resultsQuery);
        const results = resultsSnapshot.docs.map((doc) => doc.data());

        const quizzesCompleted = results.length;
        const totalScore =
          quizzesCompleted > 0
            ? results.reduce((sum, r) => sum + r.percentage, 0)
            : 0;
        const averageScore =
          quizzesCompleted > 0 ? totalScore / quizzesCompleted : 0;

        const usersQuery = query(collection(db, 'users'));
        const usersSnapshot = await getDocs(usersQuery);
        const users = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const allResultsQuery = query(collection(db, 'results'));
        const allResultsSnapshot = await getDocs(allResultsQuery);
        const allResults = allResultsSnapshot.docs.map((doc) => doc.data());

        const userRankings = users.map((user) => {
          const userResults = allResults.filter((r) => r.userId === user.id);
          const userQuizzesCompleted = userResults.length;
          const userTotalScore = userResults.reduce(
            (sum, r) => sum + r.percentage,
            0
          );
          const userAverageScore =
            userQuizzesCompleted > 0 ? userTotalScore / userQuizzesCompleted : 0;

          return {
            id: user.id,
            fullName: user.fullName || 'Anonymous',
            field: user.field || 'unknown',
            averageScore: userAverageScore,
            quizzesCompleted: userQuizzesCompleted,
            totalScore: userTotalScore,
          };
        });

        const activeUsers = userRankings.filter((u) => u.quizzesCompleted > 0);

        activeUsers.sort((a, b) => {
          if (b.totalScore !== a.totalScore) {
            return b.totalScore - a.totalScore;
          }
          return b.averageScore - a.averageScore;
        });

        let currentUserRank =
          activeUsers.findIndex((user) => user.id === currentUser.id) + 1;
        if (currentUserRank === 0 && quizzesCompleted > 0) {
          currentUserRank = activeUsers.length + 1;
        } else if (quizzesCompleted === 0) {
          currentUserRank = 0;
        }

        const percentile =
          currentUserRank > 0
            ? Math.round((currentUserRank / activeUsers.length) * 100)
            : 100;

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
        setLoadingStats(false);
      }
    };

    fetchUserStats();
  }, [currentUser]);

  const allFieldSubjects = subjects.filter(
    (subject) => subject.field === currentUser?.field
  );

  const handleSubjectClick = (subject) => {
    if (subject.isFree || currentUser?.isPremium) {
      navigate(`/subject/${subject.id}`);
    } else {
      navigate('/premium');
    }
  };

  const handlePremiumClick = () => {
    navigate('/premium');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="container mx-auto px-4 py-8 pt-20">
        
        {/* All Subjects Section - Combined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <FiBook className="h-6 w-6 text-green-500" /> All Practice Questions
            </h3>
            {!currentUser?.isPremium && (
              <button
                onClick={handlePremiumClick}
                className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 self-start md:self-auto mt-2 md:mt-0"
              >
                <FaCrown className="h-4 w-4" />
                <span>Unlock All Premium</span>
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allFieldSubjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                isLocked={!subject.isFree && !currentUser?.isPremium}
                onClick={() => handleSubjectClick(subject)}
                completionPercentage={
                  subject.isFree || currentUser?.isPremium
                    ? Math.floor(Math.random() * 100)
                    : 0
                }
              />
            ))}
          </div>
        </motion.div>
        
        {/* User Stats and Motivation Combined Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full -m-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/20 rounded-full -m-6"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0 max-w-xl">
                <h2 className="text-3xl font-extrabold mb-2 leading-tight">
                  {currentUser?.fullName
                    ? `Welcome, ${currentUser.fullName.split(' ')[0]}!`
                    : 'Welcome!'}
                </h2>
                <p className="opacity-90">
                  {stats.quizzesCompleted > 0
                    ? `You've completed ${stats.quizzesCompleted} quizzes with an average score of ${stats.averageScore.toFixed(
                        1
                      )}%. Keep up the fantastic work and let's reach the next milestone!`
                    : 'Start your learning journey today by taking your first quiz. Let’s get you on the leaderboard!'}
                </p>
              </div>
              <button
                onClick={() => navigate('/')}
                className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl whitespace-nowrap self-start md:self-auto"
              >
                {stats.quizzesCompleted > 0 ? 'Continue Learning →' : 'Start Your First Quiz'}
              </button>
            </div>
            
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-4 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold">{stats.quizzesCompleted}</div>
                <div className="text-xs opacity-80 mt-1">Quizzes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{stats.averageScore.toFixed(1)}%</div>
                <div className="text-xs opacity-80 mt-1">Avg Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {stats.rank > 0 ? `#${stats.rank}` : '--'}
                </div>
                <div className="text-xs opacity-80 mt-1">Global Rank</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {stats.gpa?.toFixed(1) || '3.5'}
                </div>
                <div className="text-xs opacity-80 mt-1">Predicted GPA</div>
              </div>
            </div>
          </motion.div>

          {/* New combined card for handouts and challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaBookOpen className="text-blue-500 h-6 w-6" /> Quick Actions
              </h3>
              
              <div className="space-y-4">
                {/* Handout Quick Link */}
                <button
                  onClick={() => navigate('/handouts')}
                  className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-200 p-2 rounded-lg">
                        <FiFileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-800">Study Handouts</span>
                    </div>
                    <span className="text-blue-500 font-medium text-sm">View All →</span>
                  </div>
                </button>

                {/* Challenge Quick Link */}
                <button
                  onClick={() => navigate('/challenges')}
                  className="w-full text-left p-4 bg-amber-50 hover:bg-amber-100 rounded-2xl transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-200 p-2 rounded-lg">
                        <FiFlag className="h-5 w-5 text-amber-600" />
                      </div>
                      <span className="font-medium text-gray-800">Challenges</span>
                    </div>
                    <span className="text-amber-500 font-medium text-sm">Join Now →</span>
                  </div>
                </button>

                {/* Leaderboard Quick Link */}
                <button
                  onClick={() => navigate('/leaderboard')}
                  className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-2xl transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-200 p-2 rounded-lg">
                        <FiBarChart2 className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="font-medium text-gray-800">Leaderboard</span>
                    </div>
                    <span className="text-purple-500 font-medium text-sm">View Ranks →</span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional information cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Handout Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 transition-transform cursor-pointer"
            onClick={() => navigate('/handouts')}
          >
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 flex flex-col justify-center h-full">
              <div className="bg-white/20 p-3 rounded-xl mb-4 self-start">
                <FiFileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Study Handouts</h3>
              <p className="text-indigo-100 text-sm">Access comprehensive study materials and notes.</p>
            </div>
          </motion.div>

          {/* COC Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 transition-transform cursor-pointer"
            onClick={() => navigate('/code-of-conduct')}
          >
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 flex flex-col justify-center h-full">
              <div className="bg-white/20 p-3 rounded-xl mb-4 self-start">
                <FiShield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Code of Conduct</h3>
              <p className="text-teal-100 text-sm">Our community guidelines for a great environment.</p>
            </div>
          </motion.div>

          {/* Challenges Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 transition-transform cursor-pointer"
            onClick={() => navigate('/challenges')}
          >
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 flex flex-col justify-center h-full">
              <div className="bg-white/20 p-3 rounded-xl mb-4 self-start">
                <FiFlag className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Active Challenges</h3>
              <p className="text-orange-100 text-sm">Test your knowledge against other students.</p>
            </div>
          </motion.div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}