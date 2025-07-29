import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { subjects } from '../../data/subjects';
import SubjectCard from './SubjectCard';
import Header from '../Layout/Header';
import { 
  FiLock, 
  FiUnlock, 
  FiAward, 
  FiCheckCircle, 
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
  FiFileText,
  FiClock
} from 'react-icons/fi';
import { FaCalculator, FaBookOpen, FaTrophy, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/config';

interface UserStats {
  quizzesCompleted: number;
  averageScore: number;
  rank: number;
  gpa?: number;
  handoutsCompleted?: number;
  totalScore?: number;
  percentile?: number;
}

interface UserRanking {
  id: string;
  fullName: string;
  field: string;
  averageScore: number;
  quizzesCompleted: number;
  totalScore: number;
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
    percentile: 100
  });
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    const fetchUserStats = async () => {
      if (!currentUser) return;

      try {
        // Get user's quiz results
        const resultsQuery = query(
          collection(db, 'results'),
          where('userId', '==', currentUser.id)
        );
        const resultsSnapshot = await getDocs(resultsQuery);
        const results = resultsSnapshot.docs.map(doc => doc.data());

        // Get handouts data
        const handoutsQuery = query(
          collection(db, 'handoutsProgress'),
          where('userId', '==', currentUser.id)
        );
        const handoutsSnapshot = await getDocs(handoutsQuery);
        
        // Calculate basic stats
        const quizzesCompleted = results.length;
        const totalScore = quizzesCompleted > 0 
          ? results.reduce((sum, r) => sum + r.percentage, 0)
          : 0;
        const averageScore = quizzesCompleted > 0 
          ? totalScore / quizzesCompleted
          : 0;
        const handoutsCompleted = handoutsSnapshot.size;

        // Get all users for ranking calculation
        const usersQuery = query(collection(db, 'users'));
        const usersSnapshot = await getDocs(usersQuery);
        const users = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Fetch all quiz results for ranking calculation
        const allResultsQuery = query(collection(db, 'results'));
        const allResultsSnapshot = await getDocs(allResultsQuery);
        const allResults = allResultsSnapshot.docs.map(doc => doc.data());

        // Calculate rankings for all users
        const userRankings: UserRanking[] = users.map(user => {
          const userResults = allResults.filter(r => r.userId === user.id);
          const userQuizzesCompleted = userResults.length;
          const userTotalScore = userResults.reduce((sum, r) => sum + r.percentage, 0);
          const userAverageScore = userQuizzesCompleted > 0 
            ? userTotalScore / userQuizzesCompleted
            : 0;

          return {
            id: user.id,
            fullName: user.fullName || 'Anonymous',
            field: user.field || 'unknown',
            averageScore: userAverageScore,
            quizzesCompleted: userQuizzesCompleted,
            totalScore: userTotalScore
          };
        });

        // Filter out users with no quizzes taken
        const activeUsers = userRankings.filter(u => u.quizzesCompleted > 0);

        // Sort by total score (descending), then by average (descending)
        activeUsers.sort((a, b) => {
          if (b.totalScore !== a.totalScore) {
            return b.totalScore - a.totalScore;
          }
          return b.averageScore - a.averageScore;
        });

        // Find current user's rank
        let currentUserRank = activeUsers.findIndex(user => user.id === currentUser.id) + 1;
        if (currentUserRank === 0 && quizzesCompleted > 0) {
          currentUserRank = activeUsers.length + 1;
        } else if (quizzesCompleted === 0) {
          currentUserRank = 0;
        }

        // Calculate percentile (lower is better)
        const percentile = currentUserRank > 0
          ? Math.round((currentUserRank / activeUsers.length) * 100)
          : 100;

        setStats({
          quizzesCompleted,
          averageScore,
          rank: currentUserRank,
          gpa: 3.2 + (Math.random() * 0.8),
          handoutsCompleted,
          totalScore,
          percentile
        });
      } catch (error) {
        console.error('Error fetching user stats:', error);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchUserStats();
  }, [currentUser]);

  // Separate subjects into free and premium
  const allFieldSubjects = subjects.filter(subject => subject.field === currentUser?.field);
  const freeSubjects = allFieldSubjects.filter(subject => subject.isFree);
  const premiumSubjects = allFieldSubjects.filter(subject => !subject.isFree);

  const handleSubjectClick = (subjectId: string) => {
    navigate(`/subject/${subjectId}`);
  };

  const handlePremiumClick = () => {
    navigate('/premium');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Welcome Section - Updated with more spacing */}
        <div className="mt-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
            Welcome back, {currentUser?.fullName || 'Student'}! 👋
          </h2>
          <p className="text-gray-600 capitalize text-sm md:text-base">
            Continue your {currentUser?.field || 'science'} journey
          </p>
        </div>

        {/* Feature Cards Section - Made more compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* LeaderDashboard Card - Made more compact */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate('/leaderboard')}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-2 rounded-lg shadow-inner">
                <FaTrophy className="h-5 w-5 text-amber-600" />
              </div>
              <FiTrendingUp className="h-4 w-4 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Leaderboard</h3>
            <p className="text-gray-600 text-sm mb-2">See how you rank against peers</p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-xs font-medium text-amber-600 bg-amber-100/50 px-2 py-0.5 rounded-full">
                <FiUsers className="h-3 w-3 mr-1" />
                <span>Top {stats.percentile || 100}%</span>
              </div>
              {stats.rank > 0 && (
                <div className="flex items-center text-xs font-medium text-blue-600 bg-blue-100/50 px-2 py-0.5 rounded-full">
                  <FiAward className="h-3 w-3 mr-1" />
                  <span>Rank #{stats.rank}</span>
                </div>
              )}
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Avg: {stats.averageScore.toFixed(0)}%</span>
                <span>Points: {stats.totalScore || 0}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full" 
                  style={{ width: `${stats.averageScore}%` }}
                />
              </div>
            </div>
          </motion.div>

          {/* HandOut Card - Made more compact */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate('/handouts')}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-2 rounded-lg shadow-inner">
                <FaBookOpen className="h-5 w-5 text-green-600" />
              </div>
              <FiTrendingUp className="h-4 w-4 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Study Handouts</h3>
            <p className="text-gray-600 text-sm mb-2">Access curated learning materials</p>
            <div className="flex flex-wrap gap-1 mb-2">
              <span className="px-2 py-0.5 bg-green-100/60 text-green-800 text-xs rounded-full flex items-center">
                <FiFileText className="h-3 w-3 mr-1" /> 
                {stats.handoutsCompleted || 0} Completed
              </span>
              <span className="px-2 py-0.5 bg-blue-100/60 text-blue-800 text-xs rounded-full">
                {currentUser?.field || 'Science'}
              </span>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="text-xs text-gray-500 flex items-center">
                <FiClock className="h-3 w-3 mr-1" />
                <span>Updated recently</span>
              </div>
              <button className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-md shadow-sm hover:shadow-md transition-all">
                View All
              </button>
            </div>
          </motion.div>

          {/* GPA Calculator Card - Made more compact */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate('/gpa-calculator')}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-2 rounded-lg shadow-inner">
                <FaCalculator className="h-5 w-5 text-purple-600" />
              </div>
              <FiTrendingUp className="h-4 w-4 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">GPA Calculator</h3>
            <p className="text-gray-600 text-sm mb-2">Estimate your semester GPA</p>
            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-700 mb-1">
                <span>Current GPA</span>
                <span className="font-bold">{stats.gpa?.toFixed(2) || '--'}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden mb-1">
                <div 
                  className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full" 
                  style={{ width: `${(stats.gpa || 0) * 25}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 text-right">4.0 Scale</div>
            </div>
            <button className="w-full px-3 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs rounded-md shadow-sm hover:shadow-md transition-all flex items-center justify-center">
              <FaCalculator className="h-3 w-3 mr-1" />
              Calculate GPA
            </button>
          </motion.div>
        </div>

        {/* Free Subjects Section - Updated layout */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2">
              
              Sample question 
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {freeSubjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                isLocked={false}
                onClick={() => handleSubjectClick(subject.id)}
                completionPercentage={Math.floor(Math.random() * 100)}
              />
            ))}
          </div>
        </div>

        {/* Premium Subjects Section - Updated layout */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2">
              <FiLock className="text-orange-500" />
              Premium Subjects
            </h3>
            {!currentUser?.isPremium && (
              <button
                onClick={handlePremiumClick}
                className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-3 py-1.5 rounded-md font-medium text-xs transition-all shadow-sm hover:shadow-md"
              >
                Unlock All
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {currentUser?.isPremium ? (
              premiumSubjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  isLocked={false}
                  onClick={() => handleSubjectClick(subject.id)}
                  completionPercentage={Math.floor(Math.random() * 100)}
                />
              ))
            ) : (
              premiumSubjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  isLocked={true}
                  onClick={handlePremiumClick}
                />
              ))
            )}
          </div>
        </div>

        {/* Learning Progress Section - Made more compact */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <FiTrendingUp className="text-purple-600" />
            Your Learning Progress
          </h3>
          {loadingStats ? (
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-1 mx-auto w-3/4"></div>
                  <div className="h-3 bg-gray-100 rounded animate-pulse mx-auto w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-blue-50 rounded-md">
                <div className="text-xl font-bold text-blue-600 flex items-center justify-center gap-1">
                  {stats.quizzesCompleted}
                  <FiCheckCircle className="text-blue-400 h-4 w-4" />
                </div>
                <div className="text-xs text-gray-600">Quizzes Done</div>
              </div>
              <div className="text-center p-2 bg-green-50 rounded-md">
                <div className="text-xl font-bold text-green-600">
                  {stats.averageScore.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-600">Avg Score</div>
              </div>
              <div className="text-center p-2 bg-purple-50 rounded-md">
                <div className="text-xl font-bold text-purple-600 flex items-center justify-center gap-1">
                  {stats.rank > 0 ? `#${stats.rank}` : '--'}
                  <FiAward className="text-purple-400 h-4 w-4" />
                </div>
                <div className="text-xs text-gray-600">Ranking</div>
              </div>
            </div>
          )}
        </div>

        {/* Motivation Section - Made more compact */}
        <div className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-1">Keep up the great work!</h3>
          <p className="mb-3 opacity-90 text-sm">
            {stats.quizzesCompleted > 0 ? (
              stats.rank > 0 ? (
                `You're ranked #${stats.rank} globally! Keep learning to improve.`
              ) : (
                `Making progress in ${currentUser?.field || 'science'}. Take more quizzes!`
              )
            ) : (
              'Start by taking your first quiz!'
            )}
          </p>
          <button 
            onClick={() => navigate('/')}
            className="bg-white text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-md font-medium text-xs transition-all"
          >
            {stats.quizzesCompleted > 0 ? 'Continue Learning' : 'Start Now'}
          </button>
        </div>
      </div>
    </div>
  );
}