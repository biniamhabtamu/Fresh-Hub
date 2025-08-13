import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../Layout/Header';
import BottomBar from '../Layout/BottomBar';
import {
  Trophy,
  Medal,
  Award,
  Crown,
  Star,
  Zap,
  Flame,
  Rocket,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface LeaderboardEntry {
  id: string;
  fullName: string;
  field?: string;
  averageScore: number;
  totalQuizzes: number;
  rank: number;
  points: number;
  avatar?: string;
}

interface UserDoc {
  id: string;
  fullName?: string;
  field?: string;
  photoURL?: string;
}

interface ResultDoc {
  userId: string;
  percentage: number;
  pointsEarned?: number;
}

// --- Small helpers ---
const chunk = <T,>(arr: T[], size: number) => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const getPodiumStyle = (rank: number) => {
  if (rank === 1) return 'bg-gradient-to-br from-yellow-200 to-yellow-400 border-yellow-500 shadow-lg';
  if (rank === 2) return 'bg-gradient-to-br from-gray-200 to-gray-400 border-gray-500 shadow-md';
  if (rank === 3) return 'bg-gradient-to-br from-orange-200 to-orange-400 border-orange-500 shadow-sm';
  return '';
};

const getPodiumAvatarSize = (rank: number) => {
  if (rank === 1) return 'w-24 h-24 text-4xl';
  if (rank === 2) return 'w-20 h-20 text-3xl';
  if (rank === 3) return 'w-16 h-16 text-2xl';
  return '';
};

const RankIcon: React.FC<{ rank: number; size?: number }> = ({ rank, size = 24 }) => {
  if (rank === 1) return <Crown size={size} className="text-yellow-600" />;
  if (rank === 2) return <Medal size={size} className="text-gray-500" />;
  if (rank === 3) return <Award size={size} className="text-orange-500" />;
  return <span className="text-sm font-bold text-gray-600">#{rank}</span>;
};

// --- Leaderboard Item (memoized) ---
interface LeaderboardItemProps {
  entry: LeaderboardEntry;
  isCurrentUser?: boolean;
  expandedUser: string | null;
  toggleExpandUser: (id: string) => void;
  leaderboard: LeaderboardEntry[];
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = React.memo(({ entry, isCurrentUser, expandedUser, toggleExpandUser, leaderboard }) => {
  const isExpanded = expandedUser === entry.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.28 }}
      onClick={() => toggleExpandUser(entry.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') toggleExpandUser(entry.id); }}
      className={`bg-white rounded-xl shadow-sm transition-all p-4 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 ${
        isCurrentUser ? 'ring-2 ring-blue-500 bg-blue-50 border-l-4 border-blue-500' : 'border-l-4 border-gray-100'
      }`}
      aria-expanded={isExpanded}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 flex-shrink-0 text-center">
            <RankIcon rank={entry.rank} size={22} />
          </div>

          <div className="flex items-center gap-3">
            {entry.avatar ? (
              <img src={entry.avatar} alt={entry.fullName} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                {entry.fullName.charAt(0) || '?'}
              </div>
            )}

            <div className="min-w-0">
              <h3 className={`text-md font-semibold truncate ${isCurrentUser ? 'text-blue-800' : 'text-gray-900'}`}>{entry.fullName}</h3>
              <div className="text-xs text-gray-500 truncate">
                {isCurrentUser ? 'Your Ranking' : (entry.field || '—')}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <div className={`text-lg font-extrabold ${isCurrentUser ? 'text-blue-600' : 'text-gray-800'}`}>{entry.averageScore.toFixed(1)}%</div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Star size={14} className="text-yellow-400" />
              <span>{entry.points} pts</span>
            </div>
          </div>

          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.18 }}>
            {isExpanded ? <ChevronUp className="text-gray-400" size={20} /> : <ChevronDown className="text-gray-400" size={20} />}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.26 }} className="mt-4 border-t border-gray-100 pt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-3 flex items-center justify-between">
                <div>
                  <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Performance</div>
                  <div className="text-lg font-extrabold text-blue-800 mt-1">Top {leaderboard.length ? Math.round((entry.rank / leaderboard.length) * 100) : 0}%</div>
                </div>
                <div className="p-2 bg-blue-100 rounded-full">
                  <Rocket size={20} className="text-blue-600" />
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 flex items-center justify-between">
                <div>
                  <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide">Stats</div>
                  <div className="mt-1 text-lg font-extrabold text-purple-800 flex items-center gap-2">{entry.totalQuizzes} quizzes</div>
                </div>
                <div className="p-2 bg-purple-100 rounded-full">
                  <Trophy size={20} className="text-purple-600" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

// --- Main Page ---
export default function LeaderboardPage(): JSX.Element {
  const { currentUser } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'field'>('field');

  // load leaderboard with optimizations: fetch users, then fetch only results for those users using 'in' queries in chunks
  const loadLeaderboard = useCallback(async () => {
    if (!currentUser) return;
    setLoading(true);

    try {
      // 1) build users query depending on tab
      const usersRef = collection(db, 'users');
      let usersQuery = query(usersRef);

      if (activeTab === 'field' && currentUser.field) {
        usersQuery = query(usersRef, where('field', '==', currentUser.field));
      }

      const usersSnapshot = await getDocs(usersQuery);
      const users: UserDoc[] = usersSnapshot.docs.map(d => ({ id: d.id, ...(d.data() as any) }));

      if (users.length === 0) {
        setLeaderboard([]);
        return;
      }

      // 2) fetch results only for users we have (Firestore 'in' supports up to 10 elements)
      const userIds = users.map(u => u.id);
      const resultsRef = collection(db, 'results');

      // chunk user ids to satisfy 'in' limits and fetch results in parallel
      const idChunks = chunk(userIds, 10);
      const resultsPromises = idChunks.map(async (chunkIds) => {
        const q = query(resultsRef, where('userId', 'in', chunkIds));
        const snap = await getDocs(q);
        return snap.docs.map(d => d.data() as ResultDoc);
      });

      const resultsArrays = await Promise.all(resultsPromises);
      const allResults: ResultDoc[] = resultsArrays.flat();

      // 3) compute leaderboard entries
      const leaderboardData: LeaderboardEntry[] = users.map(u => {
        const userResults = allResults.filter(r => r.userId === u.id);
        const averageScore = userResults.length > 0 ? (userResults.reduce((s, r) => s + (r.percentage || 0), 0) / userResults.length) : 0;
        const totalPoints = userResults.reduce((s, r) => s + (r.pointsEarned || 0), 0);

        return {
          id: u.id,
          fullName: u.fullName || 'Anonymous',
          field: u.field,
          averageScore,
          totalQuizzes: userResults.length,
          points: totalPoints,
          avatar: u.photoURL,
          rank: 0 // placeholder, will compute after sort
        } as LeaderboardEntry;
      });

      // 4) sort & assign ranks
      const sorted = leaderboardData.sort((a, b) => b.averageScore - a.averageScore || b.points - a.points);
      const ranked = sorted.map((entry, idx) => ({ ...entry, rank: idx + 1 }));
      setLeaderboard(ranked);
    } catch (err) {
      console.error('Error loading leaderboard', err);
      setLeaderboard([]);
    } finally {
      setLoading(false);
    }
  }, [activeTab, currentUser]);

  useEffect(() => {
    if (!currentUser) return;
    loadLeaderboard();
  }, [currentUser, activeTab, loadLeaderboard]);

  const toggleExpandUser = useCallback((id: string) => {
    setExpandedUser(prev => (prev === id ? null : id));
  }, []);

  const navigate = useCallback((path: string) => {
    // Replace with react-router navigation in your app
    window.location.href = path;
  }, []);

  const top3 = useMemo(() => leaderboard.slice(0, 3), [leaderboard]);
  const remainingLeaderboard = useMemo(() => leaderboard.slice(3), [leaderboard]);
  const currentUserRank = useMemo(() => leaderboard.find(e => e.id === currentUser?.id) || null, [leaderboard, currentUser]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 mb-2 shadow-md">
            <Trophy className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Academic Leaderboard</span>
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">See where you stand among your peers and climb to the top!</p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            <button onClick={() => setActiveTab('field')} className={`px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition ${activeTab === 'field' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}>
              My Field
            </button>
            <button onClick={() => setActiveTab('all')} className={`px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition ${activeTab === 'all' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}>
              Global
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full" />
            <p className="mt-4 text-gray-600">Fetching leaderboard data...</p>
          </div>
        ) : (
          <>
            {top3.length > 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mb-10 max-w-3xl mx-auto">
                <div className="flex items-end justify-center gap-6 flex-wrap">
                  {/* 2nd place */}
                  {top3[1] && (
                    <div className="w-full sm:w-1/3 text-center flex flex-col items-center">
                      <div className={`p-1.5 rounded-full ${getPodiumStyle(2)} ring-2 ring-gray-300`}> 
                        {top3[1].avatar ? (
                          <img src={top3[1].avatar} alt={top3[1].fullName} className="w-20 h-20 rounded-full object-cover border border-gray-400" />
                        ) : (
                          <div className={`rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-700 ${getPodiumAvatarSize(2)}`}>
                            {top3[1].fullName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <h3 className="mt-3 font-extrabold text-lg text-gray-800 truncate max-w-[10rem]">{top3[1].fullName}</h3>
                      <p className="text-md text-gray-600 font-semibold">{top3[1].averageScore.toFixed(1)}%</p>
                      <div className="mt-2 text-gray-500 flex items-center gap-1">
                        <Medal size={18} />
                        <span className="font-semibold">#2</span>
                      </div>
                    </div>
                  )}

                  {/* 1st place */}
                  {top3[0] && (
                    <div className="w-full sm:w-1/3 text-center flex flex-col items-center relative">
                      <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-8">
                        <Crown size={44} className="text-yellow-500" />
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

                      <h3 className="mt-3 font-extrabold text-xl text-yellow-800 truncate max-w-[12rem]">{top3[0].fullName}</h3>
                      <p className="text-lg text-yellow-600 font-bold">{top3[0].averageScore.toFixed(1)}%</p>
                      <div className="mt-2 text-yellow-600 flex items-center gap-1">
                        <span className="font-bold text-lg">#1</span>
                      </div>
                    </div>
                  )}

                  {/* 3rd place */}
                  {top3[2] && (
                    <div className="w-full sm:w-1/3 text-center flex flex-col items-center">
                      <div className={`p-1 rounded-full ${getPodiumStyle(3)} ring-2 ring-orange-400`}> 
                        {top3[2].avatar ? (
                          <img src={top3[2].avatar} alt={top3[2].fullName} className="w-16 h-16 rounded-full object-cover border border-orange-500" />
                        ) : (
                          <div className={`rounded-full bg-orange-200 flex items-center justify-center font-bold text-orange-600 ${getPodiumAvatarSize(3)}`}>
                            {top3[2].fullName.charAt(0)}
                          </div>
                        )}
                      </div>

                      <h3 className="mt-3 font-extrabold text-lg text-gray-800 truncate max-w-[10rem]">{top3[2].fullName}</h3>
                      <p className="text-md text-gray-600 font-semibold">{top3[2].averageScore.toFixed(1)}%</p>
                      <div className="mt-2 text-orange-500 flex items-center gap-1">
                        <Award size={18} />
                        <span className="font-semibold">#3</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            <section className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-3">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Flame className="text-orange-500" /> {activeTab === 'field' ? 'Field Rankings' : 'Global Rankings'}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{leaderboard.length} users</span>
                  {activeTab === 'field' && currentUser?.field && <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full capitalize">{currentUser.field}</span>}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <AnimatePresence>
                  {remainingLeaderboard.map(entry => (
                    <LeaderboardItem key={entry.id} entry={entry} isCurrentUser={entry.id === currentUser?.id} expandedUser={expandedUser} toggleExpandUser={toggleExpandUser} leaderboard={leaderboard} />
                  ))}
                </AnimatePresence>
              </div>

              {leaderboard.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 bg-white rounded-xl shadow-md">
                  <div className="inline-flex bg-gray-100 p-4 rounded-full mb-4"><Zap className="h-10 w-10 text-yellow-500" /></div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">No rankings for this field yet.</h3>
                  <p className="text-gray-600 mb-6">Be the first to complete a quiz in your field and claim the top spot!</p>
                  <button onClick={() => navigate('/subjects')} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow">Start Learning</button>
                </motion.div>
              )}

              {currentUserRank && currentUserRank.rank > 3 && (
                <div className="mt-6">
                  <LeaderboardItem entry={currentUserRank} isCurrentUser expandedUser={expandedUser} toggleExpandUser={toggleExpandUser} leaderboard={leaderboard} />
                </div>
              )}
            </section>
          </>
        )}
      </main>

      <BottomBar />
    </div>
  );
}
