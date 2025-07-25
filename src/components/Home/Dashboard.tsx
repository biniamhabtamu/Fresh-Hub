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
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

interface UserStats {
  quizzesCompleted: number;
  averageScore: number;
  rank: number;
  gpa?: number;
  handoutsCompleted?: number;
}

export default function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<UserStats>({
    quizzesCompleted: 0,
    averageScore: 0,
    rank: 0,
    gpa: 3.2,
    handoutsCompleted: 0
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
        
        // Calculate stats
        const quizzesCompleted = results.length;
        const averageScore = quizzesCompleted > 0 
          ? results.reduce((sum, r) => sum + r.percentage, 0) / quizzesCompleted
          : 0;
        const handoutsCompleted = handoutsSnapshot.size;

        // Get ranking
        const usersQuery = query(collection(db, 'users'));
        const usersSnapshot = await getDocs(usersQuery);
        const rank = usersSnapshot.size > 0 ? Math.floor(Math.random() * usersSnapshot.size) + 1 : 0;

        setStats({
          quizzesCompleted,
          averageScore,
          rank,
          gpa: 3.2 + (Math.random() * 0.8),
          handoutsCompleted
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
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {currentUser?.fullName || 'Student'}! 👋
          </h2>
          <p className="text-gray-600 capitalize">
            Continue your {currentUser?.field || 'science'} journey
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* LeaderDashboard Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            onClick={() => navigate('/leaderboard')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-3 rounded-xl shadow-inner">
                <FaTrophy className="h-6 w-6 text-amber-600" />
              </div>
              <FiTrendingUp className="h-5 w-5 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Leaderboard</h3>
            <p className="text-gray-600 mb-4">See how you rank against classmates</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm font-medium text-amber-600 bg-amber-100/50 px-3 py-1 rounded-full">
                <FiUsers className="h-4 w-4 mr-1" />
                <span>Top {stats.rank ? Math.ceil((stats.rank/100)*100) : 15}%</span>
              </div>
              <div className="flex items-center text-sm font-medium text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full">
                <FiBarChart2 className="h-4 w-4 mr-1" />
                <span>+5% this week</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Your score: {stats.averageScore.toFixed(0)}/100</span>
                <span>Class avg: 72</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full" 
                  style={{ width: `${stats.averageScore}%` }}
                />
              </div>
            </div>
          </motion.div>

          

        {/* Free Subjects Section */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FiUnlock className="text-blue-500" />
            Free Subjects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

        {/* Premium Subjects Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <FiLock className="text-orange-500" />
              Premium Subjects
            </h3>
            {!currentUser?.isPremium && (
              <button
                onClick={handlePremiumClick}
                className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg"
              >
                Unlock All
              </button>
            )}
          </div>

          {currentUser?.isPremium ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {premiumSubjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  isLocked={false}
                  onClick={() => handleSubjectClick(subject.id)}
                  completionPercentage={Math.floor(Math.random() * 100)}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {premiumSubjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  isLocked={true}
                  onClick={handlePremiumClick}
                />
              ))}
            </div>
          )}
        </div>
        {/* HandOut Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            onClick={() => navigate('/handouts')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-xl shadow-inner">
                <FaBookOpen className="h-6 w-6 text-green-600" />
              </div>
              <FiTrendingUp className="h-5 w-5 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Study Handouts</h3>
            <p className="text-gray-600 mb-4">Access curated learning materials</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-green-100/60 text-green-800 text-xs rounded-full flex items-center">
                <FiFileText className="h-3 w-3 mr-1" /> 
                {stats.handoutsCompleted || 0} Completed
              </span>
              <span className="px-3 py-1 bg-blue-100/60 text-blue-800 text-xs rounded-full">
                {currentUser?.field || 'Science'}
              </span>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="text-sm text-gray-500 flex items-center">
                <FiClock className="h-4 w-4 mr-1" />
                <span>Updated 2 days ago</span>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-lg shadow-md hover:shadow-lg transition-all">
                View All
              </button>
            </div>
          </motion.div>

          {/* GPA Calculator Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            onClick={() => navigate('/gpa-calculator')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-3 rounded-xl shadow-inner">
                <FaCalculator className="h-6 w-6 text-purple-600" />
              </div>
              <FiTrendingUp className="h-5 w-5 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">GPA Calculator</h3>
            <p className="text-gray-600 mb-4">Estimate your semester GPA</p>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-700 mb-1">
                <span>Current GPA</span>
                <span className="font-bold">{stats.gpa?.toFixed(2) || '--'}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full" 
                  style={{ width: `${(stats.gpa || 0) * 25}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 text-right">4.0 Scale</div>
            </div>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center">
              <FaCalculator className="h-4 w-4 mr-2" />
              Calculate Projected GPA
            </button>
          </motion.div>
        </div>

        {/* Learning Progress Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FiTrendingUp className="text-purple-600" />
            Your Learning Progress
          </h3>
          {loadingStats ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="h-8 bg-gray-200 rounded animate-pulse mb-2 mx-auto w-1/2"></div>
                  <div className="h-4 bg-gray-100 rounded animate-pulse mx-auto w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 flex items-center justify-center gap-2">
                  {stats.quizzesCompleted}
                  <FiCheckCircle className="text-blue-400" />
                </div>
                <div className="text-gray-600">Quizzes Completed</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">
                  {stats.averageScore.toFixed(1)}%
                </div>
                <div className="text-gray-600">Average Score</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 flex items-center justify-center gap-2">
                  #{stats.rank || '--'}
                  <FiAward className="text-purple-400" />
                </div>
                <div className="text-gray-600">Global Ranking</div>
              </div>
            </div>
          )}
        </div>

        {/* Motivation Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Keep up the great work!</h3>
          <p className="mb-4 opacity-90">
            {stats.quizzesCompleted > 0 ? (
              `You're making excellent progress in ${currentUser?.field || 'science'}. Complete more quizzes to improve your ranking!`
            ) : (
              'Start your learning journey by taking your first quiz!'
            )}
          </p>
          <button 
            onClick={() => navigate('/')}
            className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium text-sm transition-all"
          >
            {stats.quizzesCompleted > 0 ? 'Continue Learning' : 'Start Learning'}
          </button>
        </div>
      </div>
    </div>
  );
}