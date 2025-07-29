import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../Layout/Header';
import { Trophy, Medal, Award, ChevronDown, ChevronUp, Crown, Star, Zap, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BottomBar from '../Layout/BottomBar';

interface LeaderboardEntry {
  id: string;
  fullName: string;
  field: string;
  averageScore: number;
  totalQuizzes: number;
  rank: number;
  points: number;
  avatar?: string;
}

export default function LeaderboardPage() {
  const { currentUser } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'field'>('field');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    loadLeaderboard();
  }, [currentUser, activeTab]);

  const loadLeaderboard = async () => {
    if (!currentUser) return;

    try {
      setLoading(true);
      
      // Base query for users
      let usersQuery = query(collection(db, 'users'));
      
      if (activeTab === 'field') {
        usersQuery = query(usersQuery, where('field', '==', currentUser.field));
      }
      
      const usersSnapshot = await getDocs(usersQuery);
      const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Get all results
      const resultsSnapshot = await getDocs(collection(db, 'results'));
      const results = resultsSnapshot.docs.map(doc => doc.data());

      // Calculate stats for each user
      const leaderboardData = users.map(user => {
        const userResults = results.filter(r => r.userId === user.id);
        const averageScore = userResults.length > 0
          ? userResults.reduce((sum, r) => sum + r.percentage, 0) / userResults.length
          : 0;
        const totalPoints = userResults.reduce((sum, r) => sum + (r.pointsEarned || 0), 0);

        return {
          id: user.id,
          fullName: user.fullName || 'Anonymous',
          field: user.field,
          averageScore,
          totalQuizzes: userResults.length,
          points: totalPoints,
          avatar: user.photoURL
        };
      });

      // Sort and rank
      const sortedLeaderboard = leaderboardData
        .sort((a, b) => b.averageScore - a.averageScore)
        .map((entry, index) => ({
          ...entry,
          rank: index + 1
        }));

      setLeaderboard(sortedLeaderboard);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number, size = 24) => {
    if (rank === 1) return <Crown size={size} className="text-yellow-500 fill-yellow-400" />;
    if (rank === 2) return <Medal size={size} className="text-gray-400 fill-gray-300" />;
    if (rank === 3) return <Award size={size} className="text-orange-500 fill-orange-300" />;
    return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
  };

  const getRankStyle = (rank: number, isCurrentUser: boolean) => {
    let baseStyle = "bg-white rounded-xl shadow-sm transition-all hover:shadow-md ";
    
    if (isCurrentUser) {
      baseStyle += "ring-2 ring-blue-500 bg-blue-50 ";
    }
    
    if (rank === 1) return baseStyle + "border-l-4 border-yellow-500";
    if (rank === 2) return baseStyle + "border-l-4 border-gray-400";
    if (rank === 3) return baseStyle + "border-l-4 border-orange-500";
    
    return baseStyle + "border-l-4 border-gray-200";
  };

  const toggleExpandUser = (userId: string) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="rounded-full h-32 w-32 border-b-4 border-blue-600 mx-auto"
            ></motion.div>
            <p className="mt-4 text-gray-600 text-lg">Loading leaderboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-full mb-4">
            <div className="bg-white rounded-full p-2">
              <Trophy className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Academic Leaderboard
            </span>
          </h1>
          <p className="text-gray-600 md:text-lg">
            See where you stand among your peers
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('field')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'field' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {isMobile ? 'My Field' : 'My Field Leaderboard'}
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {isMobile ? 'All' : 'Global Leaderboard'}
            </button>
          </div>
        </div>

        {/* Top 3 Podium */}
        {leaderboard.length >= 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row items-end justify-center gap-3 md:gap-6 max-w-4xl mx-auto">
              {/* 2nd Place */}
              <motion.div 
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full md:w-1/3 order-2 md:order-1"
              >
                <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-xl p-4 pb-6 text-center shadow-md border border-gray-200">
                  <div className="flex justify-center mb-2">
                    <div className="relative">
                      {leaderboard[1].avatar ? (
                        <img 
                          src={leaderboard[1].avatar} 
                          alt={leaderboard[1].fullName}
                          className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 mx-auto"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl font-bold mx-auto">
                          {leaderboard[1].fullName.charAt(0)}
                        </div>
                      )}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 truncate px-2">{leaderboard[1].fullName}</h3>
                  <div className="flex items-center justify-center mt-2 space-x-2">
                    <span className="text-lg font-bold text-gray-700">
                      {leaderboard[1].averageScore.toFixed(1)}%
                    </span>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                      {leaderboard[1].totalQuizzes} quizzes
                    </span>
                  </div>
                </div>
                <div className="bg-gray-500 h-8 md:h-12 rounded-b-lg flex items-center justify-center shadow-inner">
                  <span className="text-white text-sm font-medium">Runner Up</span>
                </div>
              </motion.div>

              {/* 1st Place */}
              <motion.div 
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full md:w-1/3 order-1 md:order-2"
              >
                <div className="bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-t-xl p-4 pb-8 text-center shadow-lg border border-yellow-300">
                  <div className="flex justify-center mb-2">
                    <div className="relative">
                      {leaderboard[0].avatar ? (
                        <img 
                          src={leaderboard[0].avatar} 
                          alt={leaderboard[0].fullName}
                          className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400 mx-auto"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-yellow-200 flex items-center justify-center text-yellow-700 text-3xl font-bold mx-auto">
                          {leaderboard[0].fullName.charAt(0)}
                        </div>
                      )}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-yellow-900 truncate px-2">{leaderboard[0].fullName}</h3>
                  <div className="flex items-center justify-center mt-2 space-x-2">
                    <span className="text-xl font-bold text-yellow-800">
                      {leaderboard[0].averageScore.toFixed(1)}%
                    </span>
                    <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full">
                      {leaderboard[0].totalQuizzes} quizzes
                    </span>
                  </div>
                </div>
                <div className="bg-yellow-600 h-10 md:h-16 rounded-b-lg flex items-center justify-center shadow-inner">
                  <span className="text-white text-sm md:text-base font-bold">TOP PERFORMER</span>
                </div>
              </motion.div>

              {/* 3rd Place */}
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full md:w-1/3 order-3"
              >
                <div className="bg-gradient-to-b from-orange-100 to-orange-200 rounded-t-xl p-4 pb-4 text-center shadow-md border border-orange-200">
                  <div className="flex justify-center mb-2">
                    <div className="relative">
                      {leaderboard[2].avatar ? (
                        <img 
                          src={leaderboard[2].avatar} 
                          alt={leaderboard[2].fullName}
                          className="w-14 h-14 rounded-full object-cover border-2 border-orange-300 mx-auto"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 text-xl font-bold mx-auto">
                          {leaderboard[2].fullName.charAt(0)}
                        </div>
                      )}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-orange-900 truncate px-2">{leaderboard[2].fullName}</h3>
                  <div className="flex items-center justify-center mt-2 space-x-2">
                    <span className="text-md font-bold text-orange-800">
                      {leaderboard[2].averageScore.toFixed(1)}%
                    </span>
                    <span className="text-xs bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full">
                      {leaderboard[2].totalQuizzes} quizzes
                    </span>
                  </div>
                </div>
                <div className="bg-orange-500 h-6 md:h-10 rounded-b-lg flex items-center justify-center shadow-inner">
                  <span className="text-white text-xs font-medium">Third Place</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Full Leaderboard */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center">
              <Flame className="text-orange-500 mr-2" size={isMobile ? 20 : 24} />
              {activeTab === 'field' ? 'Field Rankings' : 'Global Rankings'}
            </h2>
            <div className="flex items-center space-x-2">
              <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {leaderboard.length} {leaderboard.length === 1 ? 'participant' : 'participants'}
              </div>
              {activeTab === 'field' && (
                <div className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full capitalize">
                  {currentUser?.field}
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-3 mb-8">
            {leaderboard.map((entry) => {
              const isCurrentUser = entry.id === currentUser?.id;
              
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (entry.rank * 0.05) }}
                  className={`${getRankStyle(entry.rank, isCurrentUser)} p-4`}
                >
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpandUser(entry.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
                        {getRankIcon(entry.rank, isMobile ? 20 : 24)}
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        {entry.avatar ? (
                          <img 
                            src={entry.avatar} 
                            alt={entry.fullName}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            {entry.fullName.charAt(0)}
                          </div>
                        )}
                        
                        <div>
                          <h3 className={`font-semibold text-sm md:text-base ${isCurrentUser ? 'text-blue-700' : 'text-gray-800'}`}>
                            {entry.fullName}
                            {isCurrentUser && <span className="ml-2 text-xs text-blue-600">(You)</span>}
                          </h3>
                          <p className="text-xs text-gray-600">
                            {entry.field} • {entry.totalQuizzes} quiz{entry.totalQuizzes !== 1 ? 'es' : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col items-end">
                        <div className={`text-sm md:text-base font-bold ${isCurrentUser ? 'text-blue-700' : 'text-gray-800'}`}>
                          {entry.averageScore.toFixed(1)}%
                        </div>
                        <div className="text-xs text-gray-500 flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-300 mr-1" />
                          {entry.points} pts
                        </div>
                      </div>
                      {expandedUser === entry.id ? (
                        <ChevronUp className="text-gray-500" size={isMobile ? 16 : 20} />
                      ) : (
                        <ChevronDown className="text-gray-500" size={isMobile ? 16 : 20} />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedUser === entry.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-3"
                      >
                        <div className="border-t border-gray-200 pt-3">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg">
                              <p className="text-xs text-blue-600 font-medium uppercase tracking-wider">Performance</p>
                              <div className="w-full bg-white rounded-full h-2 mt-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" 
                                  style={{ width: `${Math.min(100, entry.averageScore)}%` }}
                                ></div>
                              </div>
                              <p className="text-xs text-gray-600 mt-1">
                                Top {Math.round((entry.rank / leaderboard.length) * 100)}% of {activeTab === 'field' ? 'field' : 'all'} participants
                              </p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg">
                              <p className="text-xs text-purple-600 font-medium uppercase tracking-wider">Achievements</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                                  Level {Math.floor(entry.points / 100) + 1}
                                </span>
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                  {entry.totalQuizzes} Quizzes
                                </span>
                                {entry.rank <= 10 && (
                                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                                    Top 10
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {isCurrentUser && (
                            <button 
                              onClick={() => navigate('/subjects')}
                              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                            >
                              Take Another Quiz
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Empty State */}
          {leaderboard.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white rounded-xl shadow-sm"
            >
              <div className="inline-flex bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-full mb-4">
                <Zap className="h-10 w-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No rankings yet</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {activeTab === 'field' 
                  ? 'Complete quizzes in your field to appear on the leaderboard!'
                  : 'Be the first to complete quizzes and top the global leaderboard!'}
              </p>
              <button 
                onClick={() => navigate('/subjects')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all shadow-md"
              >
                Start Learning
              </button>
            </motion.div>
          )}

          {/* Current User Position (if not in top) */}
          {currentUser && leaderboard.length > 3 && 
            !leaderboard.some(entry => entry.id === currentUser.id) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800">Your Position</h4>
                    <p className="text-xs text-blue-600">
                      Complete more quizzes to climb the leaderboard
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/subjects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-1.5 px-3 rounded-lg transition-colors"
                >
                  Take Quiz
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
      <BottomBar />
    </div>
  );
}