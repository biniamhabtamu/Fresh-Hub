import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { BookOpen, BarChart, Clock, Edit3, Settings, Star, Zap, ChevronRight, Flame, Trophy, Award, CheckCircle, GraduationCap, TrendingUp, TrendingDown, UserCircle2 } from 'lucide-react';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { motion } from 'framer-motion';
import Header from '../Layout/Header';
import BottomBar from '../Layout/BottomBar';
import toast from 'react-hot-toast';

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
  gpa: number;
  handoutsCompleted: number;
  percentile: number;
}

export default function ProfilePage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
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
  const [recentActivity, setRecentActivity] = useState<QuizResult[]>([]);
  const [todayActivity, setTodayActivity] = useState<QuizResult[]>([]);
  const [subjectPerformance, setSubjectPerformance] = useState<Record<string, { count: number, total: number, points: number }>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentUser?.uid) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const allResultsQuery = query(
          collection(db, 'quizResults'),
          where('userId', '==', currentUser.uid),
          orderBy('timestamp', 'desc')
        );

        const allResultsSnapshot = await getDocs(allResultsQuery);
        const allResults = allResultsSnapshot.docs.map(doc => ({
          id: doc.id,
          score: doc.data().score || 0,
          subject: doc.data().subject || 'General',
          chapter: doc.data().chapter || 'General',
          pointsEarned: doc.data().pointsEarned || 0,
          timestamp: doc.data().timestamp?.toDate() || new Date()
        }));

        const todayResults = allResults.filter(r => r.timestamp >= today);
        const recentResults = allResults.slice(0, 5);

        const subjectData: Record<string, { count: number, total: number, points: number }> = {};
        allResults.forEach(quiz => {
          if (!subjectData[quiz.subject]) {
            subjectData[quiz.subject] = { count: 0, total: 0, points: 0 };
          }
          subjectData[quiz.subject].count++;
          subjectData[quiz.subject].total += quiz.score;
          subjectData[quiz.subject].points += quiz.pointsEarned;
        });

        const totalQuizzes = allResults.length;
        const totalScore = allResults.reduce((sum, r) => sum + r.score, 0);
        const totalPoints = allResults.reduce((sum, r) => sum + r.pointsEarned, 0);
        const averageScore = totalQuizzes > 0 ? totalScore / totalQuizzes : 0;
        const highestScore = totalQuizzes > 0 ? Math.max(...allResults.map(r => r.score)) : 0;
        const todayPoints = todayResults.reduce((sum, r) => sum + r.pointsEarned, 0);
        const todayQuizzes = todayResults.length;

        const level = Math.floor(totalPoints / 100) + 1;
        const progress = (totalPoints % 100);

        let strongest = '';
        let weakest = '';
        let highestAvg = -1;
        let lowestAvg = 101;

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

        const usersQuery = query(
          collection(db, 'users'),
          orderBy('totalPoints', 'desc'),
          limit(100)
        );
        const usersSnapshot = await getDocs(usersQuery);

        const leaderboardData = usersSnapshot.docs.map((doc, index) => ({
          id: doc.id,
          fullName: doc.data().fullName || 'Anonymous',
          points: doc.data().totalPoints || 0,
          rank: index + 1,
          field: doc.data().field || 'General',
          avatar: doc.data().photoURL
        }));

        const currentUserRank = leaderboardData.find(user => user.id === currentUser.uid)?.rank || 0;
        const percentile = currentUserRank > 0
          ? 100 - Math.round((currentUserRank / leaderboardData.length) * 100)
          : 0;

        const handoutsQuery = query(
          collection(db, 'handoutsProgress'),
          where('userId', '==', currentUser.uid)
        );
        const handoutsSnapshot = await getDocs(handoutsQuery);

        setRecentActivity(recentResults);
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
          gpa: parseFloat((3.2 + (Math.random() * 0.8)).toFixed(2)),
          handoutsCompleted: handoutsSnapshot.size,
          percentile
        });

      } catch (error) {
        console.error('Error fetching profile data:', error);
        toast.error('Failed to load profile data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  const getRankBadge = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
    if (rank === 2) return 'bg-gradient-to-r from-gray-400 to-gray-600 text-white';
    if (rank === 3) return 'bg-gradient-to-r from-orange-400 to-orange-600 text-white';
    return 'bg-gray-200 text-gray-800';
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy size={20} className="text-yellow-400" />;
    if (rank === 2) return <Trophy size={20} className="text-gray-300" />;
    if (rank === 3) return <Trophy size={20} className="text-orange-400" />;
    return <Award size={20} className="text-gray-400" />;
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-800';
    if (score >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return 'bg-gradient-to-r from-green-400 to-teal-500';
    if (progress >= 50) return 'bg-gradient-to-r from-blue-400 to-indigo-500';
    if (progress >= 25) return 'bg-gradient-to-r from-yellow-400 to-orange-500';
    return 'bg-gradient-to-r from-pink-400 to-red-500';
  };

  const statCards = [
    { label: 'Quizzes Taken', value: stats.totalQuizzes, icon: <BookOpen size={20} className="text-indigo-600" /> },
    { label: 'Avg Score', value: `${stats.averageScore.toFixed(1)}%`, icon: <BarChart size={20} className="text-purple-600" /> },
    { label: 'High Score', value: `${stats.highestScore}%`, icon: <Flame size={20} className="text-red-500" /> },
    { label: 'Total Points', value: stats.totalPoints, icon: <Star size={20} className="text-yellow-500" /> },
    { label: 'Global Rank', value: stats.rank > 0 ? `#${stats.rank}` : '--', icon: getRankIcon(stats.rank) },
    { label: 'GPA (Est.)', value: stats.gpa.toFixed(2), icon: <GraduationCap size={20} className="text-emerald-600" /> },
    { label: 'Percentile', value: `${stats.percentile}%`, icon: <TrendingUp size={20} className="text-sky-600" /> },
    { label: 'Handouts', value: stats.handoutsCompleted, icon: <CheckCircle size={20} className="text-green-600" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-16 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Header Section */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-xl p-6 sm:p-8 mb-8 overflow-hidden"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
              <div className="w-full h-full rounded-full border-4 border-white bg-white shadow-xl overflow-hidden">
                {currentUser?.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold">
                    {currentUser?.fullName?.charAt(0).toUpperCase() || <UserCircle2 size={96} />}
                  </div>
                )}
              </div>
              <motion.button
                onClick={() => navigate('/profile/edit')}
                className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md transition-transform hover:scale-110 border border-gray-200"
                aria-label="Edit profile"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Edit3 size={16} className="text-gray-600" />
              </motion.button>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{currentUser?.fullName || 'Student'}</h1>
                {currentUser?.isPremium && (
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-sm">
                    <Zap size={14} className="mr-1" />
                    PREMIUM
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-lg capitalize">{currentUser?.field || 'General'} Science Student</p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4">
                <span className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
                  <Star size={16} className="mr-2" />
                  Level {stats.level}
                </span>
                {stats.rank > 0 && (
                  <span className={`text-sm font-medium px-3 py-1.5 rounded-full flex items-center ${getRankBadge(stats.rank)}`}>
                    {getRankIcon(stats.rank)}
                    <span className="ml-2">Rank #{stats.rank}</span>
                  </span>
                )}
              </div>

              {/* Level Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between items-center text-sm font-medium mb-1">
                  <span className="text-gray-600">XP to next level:</span>
                  <span className="text-indigo-600 font-semibold">{100 - stats.progress} XP</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className={`h-full rounded-full ${getProgressColor(stats.progress)}`}
                    style={{ width: `${stats.progress}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${stats.progress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>

            <motion.div className="sm:absolute top-6 right-6 flex space-x-3" variants={itemVariants}>
              <motion.button
                onClick={() => navigate('/settings')}
                className="p-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors shadow-md"
                aria-label="Settings"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Settings size={20} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats and Performance */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {statCards.slice(0, 4).map((card, index) => (
                <StatCard key={index} {...card} loading={loading} />
              ))}
            </motion.div>

            {/* Secondary Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {statCards.slice(4).map((card, index) => (
                <StatCard key={index} {...card} loading={loading} isCompact={true} />
              ))}
            </motion.div>

            {/* Subject Performance */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-6"
              variants={itemVariants}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <BarChart size={24} className="mr-3 text-purple-600" />
                  Subject Performance
                </h2>
                {stats.totalQuizzes > 0 && (
                  <button onClick={() => navigate('/performance')} className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors flex items-center">
                    View All <ChevronRight size={18} className="ml-1" />
                  </button>
                )}
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-24">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                </div>
              ) : Object.keys(subjectPerformance).length > 0 ? (
                <div className="space-y-6">
                  {stats.strongestSubject && (
                    <PerformanceBar
                      subject={stats.strongestSubject}
                      label="Strongest Subject"
                      avgScore={subjectPerformance[stats.strongestSubject].total / subjectPerformance[stats.strongestSubject].count}
                      count={subjectPerformance[stats.strongestSubject].count}
                      barColor="bg-gradient-to-r from-green-400 to-emerald-500"
                      icon={<TrendingUp size={20} className="text-green-500" />}
                    />
                  )}
                  {stats.weakestSubject && (
                    <PerformanceBar
                      subject={stats.weakestSubject}
                      label="Weakest Subject"
                      avgScore={subjectPerformance[stats.weakestSubject].total / subjectPerformance[stats.weakestSubject].count}
                      count={subjectPerformance[stats.weakestSubject].count}
                      barColor="bg-gradient-to-r from-red-400 to-pink-500"
                      icon={<TrendingDown size={20} className="text-red-500" />}
                    />
                  )}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <p className="mb-4">Start a quiz to see your subject performance here!</p>
                  <button onClick={() => navigate('/subjects')} className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-lg">
                    Start Your First Quiz
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column - Recent Activity */}
          <motion.div
            className="lg:col-span-1 bg-white rounded-3xl shadow-xl overflow-hidden"
            variants={itemVariants}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Clock size={24} className="mr-3 text-indigo-600" />
                Recent Activity
              </h2>
              {recentActivity.length > 0 && (
                <button onClick={() => navigate('/quiz-history')} className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors flex items-center">
                  View All <ChevronRight size={18} className="ml-1" />
                </button>
              )}
            </div>

            <div className="p-4 divide-y divide-gray-100">
              {loading ? (
                <div className="p-6 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                </div>
              ) : recentActivity.length > 0 ? (
                recentActivity.map((quiz, index) => (
                  <motion.div
                    key={quiz.id}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer"
                    onClick={() => navigate(`/quiz-result/${quiz.id}`)}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl ${getPerformanceColor(quiz.score)}`}>
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-800">{quiz.subject}</h3>
                        <p className="text-sm text-gray-500">{quiz.chapter}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={`text-base font-bold ${quiz.score >= 80 ? 'text-green-600' : quiz.score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {quiz.score}%
                      </span>
                      <span className="text-xs text-gray-500">{quiz.timestamp.toLocaleDateString()}</span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <p className="mb-4">You haven't completed any quizzes yet.</p>
                  <button onClick={() => navigate('/subjects')} className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-lg">
                    Start Your First Quiz
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <BottomBar />
    </div>
  );
}

// Reusable Components
interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  loading: boolean;
  isCompact?: boolean;
}

const StatCard = ({ icon, value, label, loading, isCompact = false }: StatCardProps) => (
  <motion.div
    className={`bg-white rounded-3xl shadow-xl flex items-center p-4 transition-transform ${isCompact ? 'flex-col justify-center text-center' : ''}`}
    whileHover={{ y: -5, scale: 1.05 }}
  >
    <div className={`p-3 rounded-full ${isCompact ? 'mb-2' : 'mr-4'} bg-gray-100`}>
      {icon}
    </div>
    <div className={isCompact ? 'text-center' : ''}>
      <h3 className={`text-gray-500 ${isCompact ? 'text-sm' : 'text-md'}`}>{label}</h3>
      <p className={`font-bold text-gray-900 ${isCompact ? 'text-xl' : 'text-3xl'}`}>
        {loading ? '--' : value}
      </p>
    </div>
  </motion.div>
);

interface PerformanceBarProps {
  subject: string;
  label: string;
  avgScore: number;
  count: number;
  barColor: string;
  icon: React.ReactNode;
}

const PerformanceBar = ({ subject, label, avgScore, count, barColor, icon }: PerformanceBarProps) => (
  <motion.div
    className="bg-white rounded-2xl p-4 transition-transform hover:scale-[1.02]"
    whileHover={{ y: -3 }}
  >
    <div className="flex items-center mb-3">
      <div className="p-2 rounded-full bg-gray-100 mr-3">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800 capitalize">{subject}</h3>
          <span className="text-md font-bold text-gray-700">{Math.round(avgScore)}%</span>
        </div>
        <p className="text-xs text-gray-500">{label} ({count} quizzes)</p>
      </div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <motion.div
        className={`h-full rounded-full ${barColor}`}
        style={{ width: `${avgScore}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${avgScore}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);