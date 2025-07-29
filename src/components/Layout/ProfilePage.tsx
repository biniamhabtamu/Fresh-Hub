import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { BookOpen, Award, BarChart, Clock, Edit3, Settings, Trophy, Star, Zap, ChevronRight, Flame, Bookmark, CheckCircle } from 'lucide-react';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { motion } from 'framer-motion';
import Header from '../Layout/Header';
import BottomBar from '../Layout/BottomBar';

interface QuizResult {
  id: string;
  score: number;
  subject: string;
  chapter: string;
  pointsEarned: number;
  timestamp: Date;
}

interface UserStats {
  averageScore: number;
  totalQuizzes: number;
  highestScore: number;
  rank: number;
  level: number;
  progress: number;
  totalPoints: number;
  strongestSubject: string;
  weakestSubject: string;
  todayPoints: number;
  todayQuizzes: number;
  gpa?: number;
  handoutsCompleted?: number;
  percentile?: number;
}

interface LeaderboardUser {
  id: string;
  fullName: string;
  points: number;
  rank: number;
  field: string;
  avatar?: string;
}

export default function ProfilePage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [todayActivity, setTodayActivity] = useState<QuizResult[]>([]);
  const [stats, setStats] = useState<UserStats>({
    averageScore: 0,
    totalQuizzes: 0,
    highestScore: 0,
    rank: 0,
    level: 1,
    progress: 0,
    totalPoints: 0,
    strongestSubject: '',
    weakestSubject: '',
    todayPoints: 0,
    todayQuizzes: 0,
    gpa: 3.2,
    handoutsCompleted: 0,
    percentile: 100
  });
  const [loading, setLoading] = useState(true);
  const [subjectPerformance, setSubjectPerformance] = useState<Record<string, {count: number, total: number, points: number}>>({});
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentUser?.uid) return;

      try {
        setLoading(true);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const resultsQuery = query(
          collection(db, 'quizResults'),
          where('userId', '==', currentUser.uid),
          orderBy('timestamp', 'desc'),
          limit(5)
        );
        
        const todayQuery = query(
          collection(db, 'quizResults'),
          where('userId', '==', currentUser.uid),
          where('timestamp', '>=', today),
          orderBy('timestamp', 'desc')
        );

        const [resultsSnapshot, todaySnapshot] = await Promise.all([
          getDocs(resultsQuery),
          getDocs(todayQuery)
        ]);

        const results = resultsSnapshot.docs.map(doc => ({
          id: doc.id,
          score: doc.data().score || 0,
          subject: doc.data().subject || 'General',
          chapter: doc.data().chapter || 'General',
          pointsEarned: doc.data().pointsEarned || 0,
          timestamp: doc.data().timestamp?.toDate() || new Date()
        }));

        const todayResults = todaySnapshot.docs.map(doc => ({
          id: doc.id,
          score: doc.data().score || 0,
          subject: doc.data().subject || 'General',
          chapter: doc.data().chapter || 'General',
          pointsEarned: doc.data().pointsEarned || 0,
          timestamp: doc.data().timestamp?.toDate() || new Date()
        }));

        const subjectData: Record<string, {count: number, total: number, points: number}> = {};
        results.forEach(quiz => {
          if (!subjectData[quiz.subject]) {
            subjectData[quiz.subject] = { count: 0, total: 0, points: 0 };
          }
          subjectData[quiz.subject].count++;
          subjectData[quiz.subject].total += quiz.score;
          subjectData[quiz.subject].points += quiz.pointsEarned;
        });

        const totalQuizzes = results.length;
        const totalScore = results.reduce((sum, r) => sum + r.score, 0);
        const totalPoints = results.reduce((sum, r) => sum + r.pointsEarned, 0);
        const averageScore = totalQuizzes > 0 ? totalScore / totalQuizzes : 0;
        const highestScore = totalQuizzes > 0 ? Math.max(...results.map(r => r.score)) : 0;
        const todayPoints = todayResults.reduce((sum, r) => sum + r.pointsEarned, 0);
        const todayQuizzes = todayResults.length;
        
        const level = Math.floor(totalPoints / 100) + 1;
        const progress = (totalPoints % 100);

        let strongest = '';
        let weakest = '';
        let highestAvg = 0;
        let lowestAvg = 100;
        
        Object.entries(subjectData).forEach(([subject, data]) => {
          const avg = data.total / data.count;
          if (avg > highestAvg) {
            highestAvg = avg;
            strongest = subject;
          }
          if (avg < lowestAvg) {
            lowestAvg = avg;
            weakest = subject;
          }
        });

        const leaderboardData = await fetchLeaderboard();
        setLeaderboard(leaderboardData);

        const currentUserRank = leaderboardData.find(user => user.id === currentUser.uid)?.rank || 0;
        const percentile = currentUserRank > 0 
          ? Math.round((currentUserRank / leaderboardData.length) * 100)
          : 100;

        const handoutsQuery = query(
          collection(db, 'handoutsProgress'),
          where('userId', '==', currentUser.uid)
        );
        const handoutsSnapshot = await getDocs(handoutsQuery);

        setQuizResults(results);
        setTodayActivity(todayResults);
        setSubjectPerformance(subjectData);
        setStats({
          averageScore,
          totalQuizzes,
          highestScore,
          rank: currentUserRank,
          level,
          progress,
          totalPoints,
          strongestSubject: strongest,
          weakestSubject: weakest,
          todayPoints,
          todayQuizzes,
          gpa: 3.2 + (Math.random() * 0.8),
          handoutsCompleted: handoutsSnapshot.size,
          percentile
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  async function fetchLeaderboard(): Promise<LeaderboardUser[]> {
    try {
      const usersQuery = query(
        collection(db, 'users'),
        orderBy('totalPoints', 'desc'),
        limit(100)
      );
      const usersSnapshot = await getDocs(usersQuery);
      
      const leaderboardData: LeaderboardUser[] = [];
      
      usersSnapshot.forEach((doc, index) => {
        const userData = doc.data();
        leaderboardData.push({
          id: doc.id,
          fullName: userData.fullName || 'Anonymous',
          points: userData.totalPoints || 0,
          rank: index + 1,
          field: userData.field || 'General',
          avatar: userData.photoURL
        });
      });

      return leaderboardData;
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      return [];
    }
  }

  const getPerformanceColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-800';
    if (score >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getRankBadge = (rank: number) => {
    if (rank <= 0) return 'bg-gray-100 text-gray-800';
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
    if (rank === 2) return 'bg-gradient-to-r from-gray-400 to-gray-600 text-white';
    if (rank === 3) return 'bg-gradient-to-r from-orange-400 to-orange-600 text-white';
    if (rank <= 10) return 'bg-gradient-to-r from-purple-400 to-purple-600 text-white';
    if (rank <= 50) return 'bg-gradient-to-r from-blue-400 to-blue-600 text-white';
    return 'bg-gray-100 text-gray-800';
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 0) return <Award size={20} className="text-gray-400" />;
    if (rank === 1) return <Trophy size={20} className="text-yellow-400" />;
    if (rank === 2) return <Trophy size={20} className="text-gray-300" />;
    if (rank === 3) return <Trophy size={20} className="text-orange-400" />;
    return <Award size={20} className="text-purple-400" />;
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return 'from-green-400 to-teal-500';
    if (progress >= 50) return 'from-blue-400 to-indigo-500';
    if (progress >= 25) return 'from-yellow-400 to-orange-500';
    return 'from-pink-400 to-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-20">
      {/* Attractive Header */}
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pt-16">
        {/* Profile Header Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          <div className="relative h-40 bg-gradient-to-r from-indigo-500 to-pink-500">
            {currentUser?.isPremium && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-md">
                <Zap size={14} className="mr-1" />
                PREMIUM
              </div>
            )}
          </div>
          
          <div className="px-6 pb-6 relative">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex items-end -mt-16 space-x-4">
                <div className="relative group">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                    {currentUser?.photoURL ? (
                      <img 
                        src={currentUser.photoURL} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                        {currentUser?.fullName?.charAt(0) || 'U'}
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => navigate('/profile/edit')}
                    className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md hover:scale-110 transition-transform"
                    aria-label="Edit profile"
                  >
                    <Edit3 size={14} className="text-indigo-600" />
                  </button>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{currentUser?.fullName || 'User'}</h1>
                  <p className="text-gray-600 capitalize">{currentUser?.field || 'General'} Science</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      currentUser?.isPremium 
                        ? 'bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {currentUser?.isPremium ? '⭐ Premium Member' : '📚 Standard Member'}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Level {stats.level}
                    </span>
                    {stats.rank > 0 && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRankBadge(stats.rank)}`}>
                        #{stats.rank} Global
                      </span>
                    )}
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {stats.totalPoints} Points
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => navigate('/settings')}
                  className="flex items-center space-x-1 bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg hover:bg-indigo-200 transition-colors shadow-sm"
                  aria-label="Settings"
                >
                  <Settings size={16} />
                  <span className="text-sm">Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <StatCard 
            icon={<BookOpen size={isMobile ? 16 : 20} className="text-blue-600" />}
            value={stats.totalQuizzes}
            label="Quizzes Taken"
            loading={loading}
            gradient="bg-gradient-to-r from-blue-50 to-blue-100"
            isMobile={isMobile}
          />
          
          <StatCard 
            icon={<BarChart size={isMobile ? 16 : 20} className="text-purple-600" />}
            value={stats.averageScore.toFixed(1)}
            label="Avg Score"
            unit="%"
            loading={loading}
            gradient="bg-gradient-to-r from-purple-50 to-purple-100"
            isMobile={isMobile}
          />
          
          <StatCard 
            icon={<Flame size={isMobile ? 16 : 20} className="text-yellow-600" />}
            value={stats.highestScore}
            label="High Score"
            unit="%"
            loading={loading}
            gradient="bg-gradient-to-r from-yellow-50 to-yellow-100"
            isMobile={isMobile}
          />
          
          <StatCard 
            icon={getRankIcon(stats.rank)}
            value={stats.rank > 0 ? `#${stats.rank}` : '--'}
            label="Global Rank"
            loading={loading}
            gradient={getRankBadge(stats.rank)}
            isMobile={isMobile}
          />
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* Level Progress */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-800 flex items-center">
                <Star size={18} className="mr-2 text-yellow-500" />
                Level Progress
              </h3>
              <div className="text-xs sm:text-sm font-medium">
                <span className="text-indigo-600">Level {stats.level}</span>
                <span className="mx-1">•</span>
                <span>{stats.progress}/100 XP</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div 
                className={`h-2.5 rounded-full bg-gradient-to-r ${getProgressColor(stats.progress)}`}
                style={{ width: `${stats.progress}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-blue-50 p-2 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Total Points</p>
                <p className="font-bold text-sm sm:text-base">{stats.totalPoints}</p>
              </div>
              <div className="bg-purple-50 p-2 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Quizzes</p>
                <p className="font-bold text-sm sm:text-base">{stats.totalQuizzes}</p>
              </div>
              <div className="bg-green-50 p-2 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Next Level</p>
                <p className="font-bold text-sm sm:text-base">{100 - stats.progress} XP</p>
              </div>
            </div>
          </div>

          {/* Today's Activity */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 hover:shadow-lg transition-shadow">
            <h3 className="font-medium text-gray-800 flex items-center mb-3">
              <Flame size={18} className="mr-2 text-orange-500" />
              Today's Activity
            </h3>
            {stats.todayQuizzes > 0 ? (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Quizzes Completed</span>
                  <span className="font-medium text-indigo-600">{stats.todayQuizzes}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Points Earned</span>
                  <span className="font-medium text-green-600">+{stats.todayPoints}</span>
                </div>
                {todayActivity.map((quiz, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bookmark size={14} className="text-blue-500" />
                      <div>
                        <p className="text-xs font-medium">{quiz.subject}</p>
                        <p className="text-2xs text-gray-500">{quiz.chapter}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getPerformanceColor(quiz.score)}`}>
                        {quiz.score}%
                      </span>
                      <span className="text-xs font-bold text-green-600">+{quiz.pointsEarned}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-400 mb-2">No activity today</p>
                <button
                  onClick={() => navigate('/subjects')}
                  className="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-xs shadow-md"
                >
                  Start a Quiz
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            <h2 className="text-base sm:text-lg font-bold text-gray-800 flex items-center">
              <Clock size={18} className="mr-2 text-indigo-500" />
              Recent Activity
            </h2>
            {stats.totalQuizzes > 0 && (
              <button 
                onClick={() => navigate('/quiz-history')}
                className="text-xs sm:text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
              >
                View All <ChevronRight size={16} className="ml-1" />
              </button>
            )}
          </div>
          
          <div className="divide-y divide-gray-100">
            {loading ? (
              <div className="p-6 flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
            ) : quizResults.length > 0 ? (
              quizResults.map((quiz) => (
                <motion.div 
                  key={quiz.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 sm:p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => navigate(`/quiz-result/${quiz.id}`)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className={`p-1 sm:p-2 rounded-lg ${getPerformanceColor(quiz.score)}`}>
                        <BookOpen size={isMobile ? 14 : 18} />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-medium">{quiz.subject}</h3>
                        <p className="text-xs sm:text-sm text-gray-500 flex items-center">
                          <span>{quiz.chapter}</span>
                          <span className="mx-2">•</span>
                          <span>{quiz.timestamp.toLocaleDateString()}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs sm:text-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-medium ${getPerformanceColor(quiz.score)}`}>
                        {quiz.score}%
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-green-600">+{quiz.pointsEarned}</span>
                      <ChevronRight size={14} className="text-gray-400" />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="p-4 sm:p-6 text-center">
                <div className="text-gray-400 mb-3 text-sm sm:text-base">No quiz attempts yet</div>
                <button
                  onClick={() => navigate('/subjects')}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-xs sm:text-sm shadow-md"
                >
                  Start Your First Quiz
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Subject Performance */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
            <h2 className="text-base sm:text-lg font-bold text-gray-800 flex items-center">
              <BarChart size={18} className="mr-2 text-purple-500" />
              Subject Performance
            </h2>
          </div>
          
          <div className="p-4 sm:p-6">
            {stats.strongestSubject && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm sm:text-base font-medium text-gray-700">Strongest Subject</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 font-medium">
                    {subjectPerformance[stats.strongestSubject] 
                      ? Math.round(subjectPerformance[stats.strongestSubject].total / subjectPerformance[stats.strongestSubject].count)
                      : '--'}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-teal-500" 
                    style={{ 
                      width: `${subjectPerformance[stats.strongestSubject] 
                        ? (subjectPerformance[stats.strongestSubject].total / subjectPerformance[stats.strongestSubject].count) 
                        : 0}%` 
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500 capitalize">{stats.strongestSubject}</span>
                  <span className="text-xs text-gray-500">
                    {subjectPerformance[stats.strongestSubject]?.count || 0} quizzes
                  </span>
                </div>
              </div>
            )}
            
            {stats.weakestSubject && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm sm:text-base font-medium text-gray-700">Weakest Subject</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800 font-medium">
                    {subjectPerformance[stats.weakestSubject] 
                      ? Math.round(subjectPerformance[stats.weakestSubject].total / subjectPerformance[stats.weakestSubject].count)
                      : '--'}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-red-400 to-pink-500" 
                    style={{ 
                      width: `${subjectPerformance[stats.weakestSubject] 
                        ? (subjectPerformance[stats.weakestSubject].total / subjectPerformance[stats.weakestSubject].count) 
                        : 0}%` 
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500 capitalize">{stats.weakestSubject}</span>
                  <span className="text-xs text-gray-500">
                    {subjectPerformance[stats.weakestSubject]?.count || 0} quizzes
                  </span>
                </div>
              </div>
            )}
            
            {stats.totalQuizzes > 0 && (
              <button 
                onClick={() => navigate('/performance')}
                className="mt-6 w-full flex items-center justify-center text-sm text-white bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <CheckCircle size={16} className="mr-2" />
                View Detailed Performance
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomBar />
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  unit?: string;
  loading: boolean;
  gradient?: string;
  isMobile: boolean;
}

const StatCard = ({ icon, value, label, unit = '', loading, gradient = 'bg-white', isMobile }: StatCardProps) => (
  <motion.div
    whileHover={{ y: -3 }}
    className={`rounded-xl shadow-md p-3 sm:p-4 hover:shadow-lg transition-shadow ${gradient}`}
  >
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className={`p-1 sm:p-2 rounded-lg bg-white shadow-sm`}>
        {icon}
      </div>
      <div>
        <h3 className="text-gray-500 text-2xs sm:text-xs">{label}</h3>
        <p className={`${isMobile ? 'text-base' : 'text-xl'} font-bold text-gray-800`}>
          {loading ? '--' : value}{unit}
        </p>
      </div>
    </div>
  
  </motion.div>

);