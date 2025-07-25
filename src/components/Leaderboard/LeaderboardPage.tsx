import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../Layout/Header';
import { Trophy, Medal, Award, ChevronDown, ChevronUp, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LeaderboardEntry {
  id: string;
  fullName: string;
  field: string;
  averageScore: number;
  totalQuizzes: number;
  rank: number;
}

export default function LeaderboardPage() {
  const { currentUser } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedUser, setExpandedUser] = useState<string | null>(null);

  useEffect(() => {
    loadLeaderboard();
  }, [currentUser]);

  const loadLeaderboard = async () => {
    if (!currentUser) return;

    try {
      // Get all users in the same field
      const usersQuery = query(
        collection(db, 'users'),
        where('field', '==', currentUser.field)
      );
      const usersSnapshot = await getDocs(usersQuery);
      const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Get all results
      const resultsSnapshot = await getDocs(collection(db, 'results'));
      const results = resultsSnapshot.docs.map(doc => doc.data());

      // Calculate averages for each user
      const leaderboardData = users.map(user => {
        const userResults = results.filter(r => r.userId === user.id);
        const averageScore = userResults.length > 0
          ? userResults.reduce((sum, r) => sum + r.percentage, 0) / userResults.length
          : 0;

        return {
          id: user.id,
          fullName: user.fullName,
          field: user.field,
          averageScore,
          totalQuizzes: userResults.length
        };
      });

      // Sort by average score and add ranks
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

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown size={24} className="text-yellow-500 fill-yellow-400" />;
    if (rank === 2) return <Medal size={24} className="text-gray-400 fill-gray-300" />;
    if (rank === 3) return <Award size={24} className="text-orange-500 fill-orange-300" />;
    return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
  };

  const getRankStyle = (rank: number, isCurrentUser: boolean) => {
    let baseStyle = "bg-white rounded-xl shadow-md p-4 transition-all hover:shadow-lg ";
    
    if (isCurrentUser) {
      baseStyle += "ring-2 ring-blue-500 bg-blue-50 ";
    }
    
    if (rank === 1) return baseStyle + "border-t-4 border-yellow-500";
    if (rank === 2) return baseStyle + "border-t-4 border-gray-400";
    if (rank === 3) return baseStyle + "border-t-4 border-orange-500";
    
    return baseStyle;
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h1>
          <p className="text-gray-600 text-lg capitalize">
            Top performers in <span className="font-semibold text-blue-600">{currentUser?.field}</span> field
          </p>
        </motion.div>

        {/* Top 3 Podium */}
        {leaderboard.length >= 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
              {/* 2nd Place */}
              <motion.div 
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full md:w-1/3 order-2 md:order-1"
              >
                <div className="bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 rounded-t-xl p-4 pb-6 text-center shadow-md">
                  <div className="flex justify-center mb-2">
                    <Medal size={32} className="text-gray-600 fill-gray-400" />
                  </div>
                  <h3 className="font-bold text-lg">{leaderboard[1].fullName}</h3>
                  <div className="text-3xl font-bold text-gray-700 mt-2">
                    {leaderboard[1].averageScore.toFixed(1)}%
                  </div>
                </div>
                <div className="bg-gray-400 h-16 md:h-24 rounded-b-lg flex items-center justify-center shadow-inner">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
              </motion.div>

              {/* 1st Place */}
              <motion.div 
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full md:w-1/3 order-1 md:order-2"
              >
                <div className="bg-gradient-to-b from-yellow-300 to-yellow-400 text-yellow-900 rounded-t-xl p-4 pb-8 text-center shadow-lg">
                  <div className="flex justify-center mb-2">
                    <Crown size={40} className="text-yellow-700 fill-yellow-500" />
                  </div>
                  <h3 className="font-bold text-xl">{leaderboard[0].fullName}</h3>
                  <div className="text-4xl font-bold text-yellow-800 mt-2">
                    {leaderboard[0].averageScore.toFixed(1)}%
                  </div>
                </div>
                <div className="bg-yellow-500 h-24 md:h-32 rounded-b-lg flex items-center justify-center shadow-inner">
                  <span className="text-3xl font-bold text-yellow-900">1</span>
                </div>
              </motion.div>

              {/* 3rd Place */}
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full md:w-1/3 order-3"
              >
                <div className="bg-gradient-to-b from-orange-200 to-orange-300 text-orange-800 rounded-t-xl p-4 pb-4 text-center shadow-md">
                  <div className="flex justify-center mb-2">
                    <Award size={32} className="text-orange-600 fill-orange-400" />
                  </div>
                  <h3 className="font-bold text-lg">{leaderboard[2].fullName}</h3>
                  <div className="text-2xl font-bold text-orange-700 mt-2">
                    {leaderboard[2].averageScore.toFixed(1)}%
                  </div>
                </div>
                <div className="bg-orange-400 h-12 md:h-20 rounded-b-lg flex items-center justify-center shadow-inner">
                  <span className="text-2xl font-bold text-orange-900">3</span>
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
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Full Rankings</h2>
            <div className="text-sm text-gray-500">
              {leaderboard.length} {leaderboard.length === 1 ? 'participant' : 'participants'}
            </div>
          </div>
          
          <div className="space-y-3">
            {leaderboard.map((entry) => {
              const isCurrentUser = entry.id === currentUser?.id;
              
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (entry.rank * 0.05) }}
                  className={getRankStyle(entry.rank, isCurrentUser)}
                >
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpandUser(entry.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10">
                        {getRankIcon(entry.rank)}
                      </div>
                      
                      <div>
                        <h3 className={`font-semibold ${isCurrentUser ? 'text-blue-700' : 'text-gray-800'}`}>
                          {entry.fullName}
                          {isCurrentUser && <span className="ml-2 text-sm text-blue-600">(You)</span>}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {entry.totalQuizzes} quiz{entry.totalQuizzes !== 1 ? 'es' : ''} completed
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className={`text-xl md:text-2xl font-bold ${isCurrentUser ? 'text-blue-700' : 'text-gray-800'}`}>
                          {entry.averageScore.toFixed(1)}%
                        </div>
                        <div className="text-xs text-gray-600">Average</div>
                      </div>
                      {expandedUser === entry.id ? (
                        <ChevronUp className="text-gray-500" />
                      ) : (
                        <ChevronDown className="text-gray-500" />
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
                        className="overflow-hidden pt-4"
                      >
                        <div className="border-t border-gray-200 pt-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-xs text-blue-600 font-medium">Field</p>
                              <p className="text-blue-800 capitalize">{entry.field}</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="text-xs text-purple-600 font-medium">Quizzes Taken</p>
                              <p className="text-purple-800">{entry.totalQuizzes}</p>
                            </div>
                          </div>
                          <div className="mt-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg">
                            <p className="text-xs font-medium">Performance</p>
                            <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mt-2">
                              <div 
                                className="bg-white h-2 rounded-full" 
                                style={{ width: `${Math.min(100, entry.averageScore)}%` }}
                              ></div>
                            </div>
                            <p className="text-xs mt-1 text-right">
                              Top {Math.round((entry.rank / leaderboard.length) * 100)}% of participants
                            </p>
                          </div>
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
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No rankings yet</h3>
              <p className="text-gray-600 mb-6">Complete some quizzes to appear on the leaderboard!</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Take a Quiz
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}