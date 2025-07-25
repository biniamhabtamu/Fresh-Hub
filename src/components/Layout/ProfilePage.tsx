import React, { useEffect, useState } from 'react';
import { User, BookOpen, Award, BarChart, Clock, Edit3, Settings, Trophy, Star, Zap, ChevronRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface QuizResult {
  id: string;
  score: number;
  subject: string;
  timestamp: Date;
  topic: string;
}

interface UserStats {
  averageScore: number;
  totalQuizzes: number;
  highestScore: number;
  rank: number;
  level: number;
  progress: number;
  points: number;
  strongestSubject: string;
  weakestSubject: string;
  gpa?: number;
  handoutsCompleted?: number;
}

export default function ProfilePage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [stats, setStats] = useState<UserStats>({
    averageScore: 0,
    totalQuizzes: 0,
    highestScore: 0,
    rank: 0,
    level: 1,
    progress: 0,
    points: 0,
    strongestSubject: '',
    weakestSubject: '',
    gpa: 3.2,
    handoutsCompleted: 0
  });
  const [loading, setLoading] = useState(true);
  const [subjectPerformance, setSubjectPerformance] = useState<Record<string, {count: number, total: number}>>({});

  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentUser?.uid) return;

      try {
        setLoading(true);
        
        // 1. Fetch quiz results
        const resultsQuery = query(
          collection(db, 'quizResults'),
          where('userId', '==', currentUser.uid),
          orderBy('timestamp', 'desc'),
          limit(5)
        );
        
        const resultsSnapshot = await getDocs(resultsQuery);
        const results = resultsSnapshot.docs.map(doc => ({
          id: doc.id,
          score: doc.data().score || 0,
          subject: doc.data().subject || 'General',
          topic: doc.data().topic || 'General',
          timestamp: doc.data().timestamp?.toDate() || new Date()
        }));

        // 2. Calculate subject performance
        const subjectData: Record<string, {count: number, total: number}> = {};
        results.forEach(quiz => {
          if (!subjectData[quiz.subject]) {
            subjectData[quiz.subject] = { count: 0, total: 0 };
          }
          subjectData[quiz.subject].count++;
          subjectData[quiz.subject].total += quiz.score;
        });

        // 3. Calculate stats
        const totalQuizzes = results.length;
        const totalScore = results.reduce((sum, r) => sum + r.score, 0);
        const averageScore = totalQuizzes > 0 ? totalScore / totalQuizzes : 0;
        const highestScore = totalQuizzes > 0 ? Math.max(...results.map(r => r.score)) : 0;
        
        // 4. Calculate level and progress (100 points per level)
        const points = totalScore;
        const level = Math.floor(points / 100) + 1;
        const progress = (points % 100);

        // 5. Determine strongest/weakest subjects
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

        // 6. Fetch global rank from leaderboard
        const rank = await fetchGlobalRank(currentUser.uid);

        // 7. Get handouts data
        const handoutsQuery = query(
          collection(db, 'handoutsProgress'),
          where('userId', '==', currentUser.uid)
        );
        const handoutsSnapshot = await getDocs(handoutsQuery);

        setQuizResults(results);
        setSubjectPerformance(subjectData);
        setStats({
          averageScore,
          totalQuizzes,
          highestScore,
          rank,
          level,
          progress,
          points,
          strongestSubject: strongest,
          weakestSubject: weakest,
          gpa: 3.2 + (Math.random() * 0.8),
          handoutsCompleted: handoutsSnapshot.size
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  async function fetchGlobalRank(userId: string): Promise<number> {
    try {
      const usersQuery = query(
        collection(db, 'users'),
        orderBy('averageScore', 'desc')
      );
      const usersSnapshot = await getDocs(usersQuery);
      
      let rank = 1;
      for (const doc of usersSnapshot.docs) {
        if (doc.id === userId) {
          return rank;
        }
        rank++;
      }
      return rank;
    } catch (error) {
      console.error('Error fetching global rank:', error);
      return 0;
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

  const getLevelProgressColor = (progress: number) => {
    if (progress >= 75) return 'bg-gradient-to-r from-green-400 to-teal-500';
    if (progress >= 50) return 'bg-gradient-to-r from-blue-400 to-indigo-500';
    if (progress >= 25) return 'bg-gradient-to-r from-yellow-400 to-orange-500';
    return 'bg-gradient-to-r from-pink-400 to-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
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
                    <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                      {currentUser?.fullName?.charAt(0) || 'U'}
                    </div>
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

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* LeaderDashboard Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            onClick={() => navigate('/leaderboard')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-3 rounded-xl shadow-inner">
                <Trophy size={20} className="text-amber-600" />
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Leaderboard</h3>
            <p className="text-gray-600 mb-4">See how you rank against classmates</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm font-medium text-amber-600 bg-amber-100/50 px-3 py-1 rounded-full">
                <User size={16} className="mr-1" />
                <span>Top {stats.rank ? Math.ceil((stats.rank/100)*100) : 15}%</span>
              </div>
              <div className="flex items-center text-sm font-medium text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full">
                <BarChart size={16} className="mr-1" />
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

          {/* HandOut Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            onClick={() => navigate('/handouts')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-xl shadow-inner">
                <BookOpen size={20} className="text-green-600" />
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Study Handouts</h3>
            <p className="text-gray-600 mb-4">Access curated learning materials</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-green-100/60 text-green-800 text-xs rounded-full flex items-center">
                <BookOpen size={14} className="mr-1" /> 
                {stats.handoutsCompleted || 0} Completed
              </span>
              <span className="px-3 py-1 bg-blue-100/60 text-blue-800 text-xs rounded-full">
                {currentUser?.field || 'Science'}
              </span>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="text-sm text-gray-500 flex items-center">
                <Clock size={16} className="mr-1" />
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
                <BarChart size={20} className="text-purple-600" />
              </div>
              <ChevronRight size={20} className="text-gray-400" />
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
              <BarChart size={16} className="mr-2" />
              Calculate Projected GPA
            </button>
          </motion.div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatCard 
            icon={<BookOpen size={20} className="text-blue-600" />}
            value={stats.totalQuizzes}
            label="Quizzes Taken"
            loading={loading}
            gradient="bg-gradient-to-r from-blue-50 to-blue-100"
          />
          
          <StatCard 
            icon={<BarChart size={20} className="text-purple-600" />}
            value={stats.averageScore.toFixed(1)}
            label="Avg Score"
            unit="%"
            loading={loading}
            gradient="bg-gradient-to-r from-purple-50 to-purple-100"
          />
          
          <StatCard 
            icon={<Trophy size={20} className="text-yellow-600" />}
            value={stats.highestScore}
            label="High Score"
            unit="%"
            loading={loading}
            gradient="bg-gradient-to-r from-yellow-50 to-yellow-100"
          />
          
          <StatCard 
            icon={getRankIcon(stats.rank)}
            value={stats.rank > 0 ? `#${stats.rank}` : '--'}
            label="Global Rank"
            loading={loading}
            gradient={getRankBadge(stats.rank)}
          />
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Level Progress */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-800 flex items-center">
                <Star size={18} className="mr-2 text-yellow-500" />
                Level Progress
              </h3>
              <div className="text-sm font-medium">
                <span className="text-indigo-600">Level {stats.level}</span>
                <span className="mx-1">•</span>
                <span>{stats.progress}/100 XP</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${getLevelProgressColor(stats.progress)}`}
                style={{ width: `${stats.progress}%` }}
              ></div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-gray-500">Total Points</p>
                <p className="font-bold">{stats.points}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Quizzes</p>
                <p className="font-bold">{stats.totalQuizzes}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Next Level</p>
                <p className="font-bold">{100 - stats.progress} XP</p>
              </div>
            </div>
          </div>

          {/* Subject Performance */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="font-medium text-gray-800 flex items-center mb-3">
              <BookOpen size={18} className="mr-2 text-indigo-500" />
              Subject Performance
            </h3>
            {stats.strongestSubject && (
              <div className="mb-3">
                <p className="text-xs text-gray-500">Strongest Subject</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-medium capitalize">{stats.strongestSubject}</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 font-medium">
                    {subjectPerformance[stats.strongestSubject] 
                      ? Math.round(subjectPerformance[stats.strongestSubject].total / subjectPerformance[stats.strongestSubject].count)
                      : '--'}%
                  </span>
                </div>
              </div>
            )}
            {stats.weakestSubject && (
              <div>
                <p className="text-xs text-gray-500">Weakest Subject</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-medium capitalize">{stats.weakestSubject}</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800 font-medium">
                    {subjectPerformance[stats.weakestSubject] 
                      ? Math.round(subjectPerformance[stats.weakestSubject].total / subjectPerformance[stats.weakestSubject].count)
                      : '--'}%
                  </span>
                </div>
              </div>
            )}
            {stats.totalQuizzes > 0 && (
              <button 
                onClick={() => navigate('/performance')}
                className="mt-4 w-full flex items-center justify-between text-sm text-indigo-600 hover:text-indigo-800"
              >
                View detailed performance analysis
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
            {stats.totalQuizzes > 0 && (
              <button 
                onClick={() => navigate('/quiz-history')}
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                View All
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
                <div 
                  key={quiz.id} 
                  className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => navigate(`/quiz-result/${quiz.id}`)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${getPerformanceColor(quiz.score)}`}>
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium">{quiz.subject}</h3>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Clock size={14} className="mr-1" />
                          {quiz.timestamp.toLocaleDateString()}
                          {quiz.topic && (
                            <span className="ml-2 px-1.5 py-0.5 bg-gray-100 rounded text-xs">
                              {quiz.topic}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2.5 py-1 rounded-full text-sm font-medium ${getPerformanceColor(quiz.score)}`}>
                        {quiz.score}%
                      </span>
                      <ChevronRight size={16} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center">
                <div className="text-gray-400 mb-3">No quiz attempts yet</div>
                <button
                  onClick={() => navigate('/subjects')}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm shadow-md"
                >
                  Start Your First Quiz
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
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
}

const StatCard = ({ icon, value, label, unit = '', loading, gradient = 'bg-white' }: StatCardProps) => (
  <div className={`rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow ${gradient}`}>
    <div className="flex items-center space-x-3">
      <div className="p-2 rounded-lg bg-white shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-500 text-xs">{label}</h3>
        <p className="text-xl font-bold text-gray-800">
          {loading ? '--' : value}{unit}
        </p>
      </div>
    </div>
  </div>
);