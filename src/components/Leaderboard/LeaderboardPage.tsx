import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../Layout/Header';
import { Trophy, Medal, Award, Crown, Star, Zap, Flame, User, Rocket, ChevronDown, ChevronUp } from 'lucide-react';
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

const getPodiumStyle = (rank: number) => {
  if (rank === 1) return "bg-gradient-to-br from-yellow-200 to-yellow-400 border-yellow-500 shadow-lg";
  if (rank === 2) return "bg-gradient-to-br from-gray-200 to-gray-400 border-gray-500 shadow-md";
  if (rank === 3) return "bg-gradient-to-br from-orange-200 to-orange-400 border-orange-500 shadow-sm";
  return "";
};

const getPodiumAvatarSize = (rank: number) => {
  if (rank === 1) return "w-24 h-24 text-4xl";
  if (rank === 2) return "w-20 h-20 text-3xl";
  if (rank === 3) return "w-16 h-16 text-2xl";
  return "";
};

const getRankIcon = (rank: number, size = 24) => {
  if (rank === 1) return <Crown size={size} className="text-yellow-600 fill-yellow-500" />;
  if (rank === 2) return <Medal size={size} className="text-gray-500 fill-gray-400" />;
  if (rank === 3) return <Award size={size} className="text-orange-500 fill-orange-400" />;
  return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
};

// Reusable component for each leaderboard list item
const LeaderboardItem = ({ entry, isCurrentUser, expandedUser, toggleExpandUser, leaderboard }) => {
  const isExpanded = expandedUser === entry.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-md transition-all hover:shadow-xl p-4 cursor-pointer relative overflow-hidden
        ${isCurrentUser ? 'ring-2 ring-blue-500 bg-blue-50 border-l-4 border-blue-500' : 'border-l-4 border-gray-200'}`}
      onClick={() => toggleExpandUser(entry.id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 flex-shrink-0 text-center">
            {getRankIcon(entry.rank, 24)}
          </div>
          <div className="flex items-center space-x-4">
            {entry.avatar ? (
              <img
                src={entry.avatar}
                alt={entry.fullName}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-bold border-2 border-white shadow">
                {entry.fullName.charAt(0)}
              </div>
            )}
            <div>
              <h3 className={`text-lg font-semibold ${isCurrentUser ? 'text-blue-800' : 'text-gray-900'}`}>
                {entry.fullName}
              </h3>
              {isCurrentUser && <span className="text-xs text-blue-500 font-medium">Your Ranking</span>}
              {!isCurrentUser && <span className="text-xs text-gray-500 font-medium capitalize">{entry.field}</span>}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <div className={`text-xl font-extrabold ${isCurrentUser ? 'text-blue-600' : 'text-gray-800'}`}>
              {entry.averageScore.toFixed(1)}%
            </div>
            <div className="flex items-center mt-1 space-x-1 text-sm text-gray-500">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span>{entry.points} pts</span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? <ChevronUp className="text-gray-400" size={24} /> : <ChevronDown className="text-gray-400" size={24} />}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden pt-4 mt-4 border-t border-gray-100"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-between shadow-inner">
                <div>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Performance</p>
                  <p className="text-lg font-extrabold text-blue-800 mt-1">
                    Top {leaderboard.length > 0 ? Math.round((entry.rank / leaderboard.length) * 100) : 0}%
                  </p>
                </div>
                <div className="p-2 bg-blue-50 rounded-full">
                  <Rocket className="text-blue-500" size={24} />
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg flex items-center justify-between shadow-inner">
                <div>
                  <p className="text-xs text-purple-600 font-bold uppercase tracking-wider">Stats</p>
                  <div className="mt-1 space-y-1">
                    <div className="text-lg font-extrabold text-purple-800 flex items-center">
                      <Zap className="text-purple-500 mr-2" size={18} />
                      {entry.totalQuizzes} quizzes
                    </div>
                  </div>
                </div>
                <div className="p-2 bg-purple-50 rounded-full">
                  <Trophy className="text-purple-500" size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function LeaderboardPage() {
  const { currentUser } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'field'>('field');

  useEffect(() => {
    // Only attempt to load the leaderboard if a user is authenticated.
    if (currentUser) {
      loadLeaderboard();
    }
  }, [currentUser, activeTab]);

  const loadLeaderboard = async () => {
    // Ensure we have a user before proceeding.
    if (!currentUser) return;

    try {
      setLoading(true);
      let usersQuery = query(collection(db, 'users'));

      // This is the key fix: only apply the 'field' filter if the activeTab is 'field' AND
      // the currentUser object has a 'field' property.
      if (activeTab === 'field' && currentUser.field) {
        usersQuery = query(usersQuery, where('field', '==', currentUser.field));
      }

      const usersSnapshot = await getDocs(usersQuery);
      const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      const resultsSnapshot = await getDocs(collection(db, 'results'));
      const results = resultsSnapshot.docs.map(doc => doc.data());

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

  const toggleExpandUser = (userId: string) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  const navigate = (path: string) => {
    console.log(`Navigating to ${path}`);
  };

  const top3 = leaderboard.slice(0, 3);
  const remainingLeaderboard = leaderboard.slice(3);
  const currentUserRank = leaderboard.find(entry => entry.id === currentUser?.id);

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
          ></motion.div>
          <p className="mt-4 text-gray-600 text-lg">Authenticating user...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 mb-2 shadow-md">
            <Trophy className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Academic Leaderboard
            </span>
          </h1>
          <p className="text-gray-500 text-md max-w-sm mx-auto">
            See where you stand among your peers and climb to the top!
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('field')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${activeTab === 'field' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              My Field
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${activeTab === 'all' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Global
            </button>
          </div>
        </div>

        {loading ? (
           <div className="flex flex-col items-center justify-center py-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
            ></motion.div>
            <p className="mt-4 text-gray-600 text-lg">Fetching leaderboard data...</p>
          </div>
        ) : (
          <>
            {top3.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12 max-w-3xl mx-auto"
              >
                <div className="flex items-end justify-center gap-4">
                  {/* 2nd Place */}
                  {top3[1] && (
                    <div className="w-1/3 text-center flex flex-col items-center">
                      <div className={`p-1.5 rounded-full ${getPodiumStyle(2)} ring-2 ring-gray-400`}>
                        {top3[1].avatar ? (
                          <img src={top3[1].avatar} alt={top3[1].fullName} className="w-20 h-20 rounded-full object-cover border border-gray-500" />
                        ) : (
                          <div className={`rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-700 ${getPodiumAvatarSize(2)}`}>
                            {top3[1].fullName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <h3 className="mt-3 font-extrabold text-lg text-gray-800 truncate">{top3[1].fullName}</h3>
                      <p className="text-md text-gray-600 font-semibold">{top3[1].averageScore.toFixed(1)}%</p>
                      <div className="mt-2 text-gray-500 flex items-center">
                        <Medal className="text-gray-400 fill-gray-300 mr-1" size={20} />
                        <span className="font-semibold">#2</span>
                      </div>
                    </div>
                  )}
                  {/* 1st Place */}
                  {top3[0] && (
                    <div className="w-1/3 text-center flex flex-col items-center mb-6 relative">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute -top-10"
                      >
                        <Crown className="text-yellow-500 fill-yellow-400" size={50} />
                      </motion.div>
                      <div className={`p-2 rounded-full ${getPodiumStyle(1)} ring-2 ring-yellow-400`}>
                        {top3[0].avatar ? (
                          <img src={top3[0].avatar} alt={top3[0].fullName} className="w-24 h-24 rounded-full object-cover border border-yellow-500" />
                        ) : (
                          <div className={`rounded-full bg-yellow-200 flex items-center justify-center font-bold text-yellow-700 ${getPodiumAvatarSize(1)}`}>
                            {top3[0].fullName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <h3 className="mt-3 font-extrabold text-xl text-yellow-800 truncate">{top3[0].fullName}</h3>
                      <p className="text-lg text-yellow-600 font-bold">{top3[0].averageScore.toFixed(1)}%</p>
                      <div className="mt-2 text-yellow-600 flex items-center">
                        <span className="font-bold text-lg">#1</span>
                      </div>
                    </div>
                  )}
                  {/* 3rd Place */}
                  {top3[2] && (
                    <div className="w-1/3 text-center flex flex-col items-center">
                      <div className={`p-1 rounded-full ${getPodiumStyle(3)} ring-2 ring-orange-400`}>
                        {top3[2].avatar ? (
                          <img src={top3[2].avatar} alt={top3[2].fullName} className="w-16 h-16 rounded-full object-cover border border-orange-500" />
                        ) : (
                          <div className={`rounded-full bg-orange-200 flex items-center justify-center font-bold text-orange-600 ${getPodiumAvatarSize(3)}`}>
                            {top3[2].fullName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <h3 className="mt-3 font-extrabold text-lg text-gray-800 truncate">{top3[2].fullName}</h3>
                      <p className="text-md text-gray-600 font-semibold">{top3[2].averageScore.toFixed(1)}%</p>
                      <div className="mt-2 text-orange-500 flex items-center">
                        <Award className="text-orange-500 fill-orange-400 mr-1" size={20} />
                        <span className="font-semibold">#3</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <Flame className="text-orange-500 mr-2" size={24} />
                  {activeTab === 'field' ? 'Field Rankings' : 'Global Rankings'}
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {leaderboard.length} users
                  </span>
                  {activeTab === 'field' && currentUser?.field && (
                    <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full capitalize">
                      {currentUser.field}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <AnimatePresence>
                  {remainingLeaderboard.map((entry) => (
                    <LeaderboardItem
                      key={entry.id}
                      entry={entry}
                      isCurrentUser={entry.id === currentUser?.id}
                      expandedUser={expandedUser}
                      toggleExpandUser={toggleExpandUser}
                      leaderboard={leaderboard}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {leaderboard.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 bg-white rounded-xl shadow-lg"
                >
                  <div className="inline-flex bg-gray-100 p-4 rounded-full mb-4">
                    <Zap className="h-10 w-10 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    No rankings for this field yet.
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 max-w-sm mx-auto">
                    Be the first to complete a quiz in your field and claim the top spot!
                  </p>
                  <button
                    onClick={() => navigate('/subjects')}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                  >
                    Start Learning
                  </button>
                </motion.div>
              )}
            </div>

            {currentUser && currentUserRank && currentUserRank.rank > 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <LeaderboardItem
                  entry={currentUserRank}
                  isCurrentUser={true}
                  expandedUser={expandedUser}
                  toggleExpandUser={toggleExpandUser}
                  leaderboard={leaderboard}
                />
              </motion.div>
            )}
          </>
        )}
      </div>
      <BottomBar />
    </div>
  );
}