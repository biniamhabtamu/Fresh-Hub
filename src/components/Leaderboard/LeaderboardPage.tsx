import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { collection, getDocs, query, where, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
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
  ChevronUp,
  Share2,
  Download,
  RefreshCw,
  Search,
  UserPlus,
  MessageCircle,
  BarChart2,
  TrendingUp,
  Filter,
  Users,
  Calendar,
  Clock,
  Globe,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

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
  recentPoints?: number;
  lastActive?: string;
}

interface UserDoc {
  id: string;
  fullName?: string;
  field?: string;
  photoURL?: string;
  lastActive?: Timestamp;
}

interface ResultDoc {
  userId: string;
  percentage: number;
  pointsEarned?: number;
  createdAt?: any;
}

// --- Helpers ---
const chunk = <T,>(arr: T[], size: number) => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const now = () => new Date();
const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const daysAgo = (d: Date, n: number) => {
  const x = new Date(d);
  x.setDate(x.getDate() - n);
  return x;
};

const formatLastActive = (date?: Date) => {
  if (!date) return 'Unknown';
  const diff = now().getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

const RankIcon: React.FC<{ rank: number; size?: number }> = ({ rank, size = 24 }) => {
  if (rank === 1) return <Crown size={size} className="text-yellow-600" />;
  if (rank === 2) return <Medal size={size} className="text-gray-500" />;
  if (rank === 3) return <Award size={size} className="text-orange-500" />;
  return <span className="text-sm font-bold text-gray-600">#{rank}</span>;
};

const ScoreBar: React.FC<{ score: number }> = ({ score }) => {
  const pct = Math.min(100, Math.max(0, Math.round(score)));
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div className="h-2 rounded-full" style={{ width: `${pct}%`, background: `linear-gradient(90deg,#7c3aed,#06b6d4)` }} />
    </div>
  );
};

// --- Leaderboard Item ---
interface LeaderboardItemProps {
  entry: LeaderboardEntry;
  isCurrentUser?: boolean;
  expandedUser: string | null;
  toggleExpandUser: (id: string) => void;
  leaderboard: LeaderboardEntry[];
  onShare?: (entry: LeaderboardEntry) => void;
  onFollow?: (id: string) => void;
  isFollowing?: boolean;
  onProfilePreview: (entry: LeaderboardEntry) => void;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = React.memo(({
  entry,
  isCurrentUser,
  expandedUser,
  toggleExpandUser,
  leaderboard,
  onShare,
  onFollow,
  isFollowing,
  onProfilePreview
}) => {
  const isExpanded = expandedUser === entry.id;
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.28 }}
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm transition-all p-3 sm:p-4 overflow-hidden ${
        isCurrentUser ? 'ring-2 ring-indigo-200 border-l-4 border-indigo-400' : 'border-l-4 border-gray-100'
      }`}
    >
      <div className="flex items-center justify-between gap-2" onClick={() => onProfilePreview(entry)}>
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="flex-shrink-0 w-8 sm:w-11 text-center">
            <RankIcon rank={entry.rank} size={isMobile ? 18 : 22} />
          </div>

          <div className="flex items-center gap-2 min-w-0 flex-1">
            {entry.avatar ? (
              <img
                src={entry.avatar}
                loading="lazy"
                alt={entry.fullName}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm"
              />
            ) : (
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200 font-bold">
                {entry.fullName.charAt(0) || '?'}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <h3 className={`text-sm sm:text-md font-semibold truncate ${isCurrentUser ? 'text-indigo-700 dark:text-indigo-400' : 'text-gray-900 dark:text-gray-100'}`}>
                  {entry.fullName}
                </h3>
                {!isMobile && (
                  <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                    {entry.field || '—'}
                  </span>
                )}
              </div>

              <div className="mt-1">
                <ScoreBar score={entry.averageScore} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <div className={`text-md sm:text-lg font-extrabold ${isCurrentUser ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-800 dark:text-gray-100'}`}>
              {entry.averageScore.toFixed(1)}%
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
              <Star size={isMobile ? 12 : 14} className="text-yellow-400" />
              <span>{entry.points} pts</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <button
              onClick={(e) => { e.stopPropagation(); toggleExpandUser(entry.id); }}
              aria-expanded={isExpanded}
              className="p-1 sm:p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? <ChevronUp className="text-gray-500" size={isMobile ? 16 : 20} /> : <ChevronDown className="text-gray-500" size={isMobile ? 16 : 20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.26 }}
            className="mt-3 border-t border-gray-100 dark:border-gray-800 pt-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/10 dark:to-cyan-900/10 rounded-lg p-2 flex items-center justify-between">
                <div>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wide">Performance</div>
                  <div className="text-md sm:text-lg font-extrabold text-indigo-800 dark:text-indigo-200 mt-1">
                    Top {leaderboard.length ? Math.max(1, Math.round(((leaderboard.length - entry.rank + 1) / leaderboard.length) * 100)) : 0}%
                  </div>
                </div>
                <div className="p-1 sm:p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                  <Rocket size={isMobile ? 16 : 20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-lg p-2 flex items-center justify-between">
                <div>
                  <div className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wide">Stats</div>
                  <div className="mt-1 text-md sm:text-lg font-extrabold text-purple-800 dark:text-purple-200 flex items-center gap-1">
                    {entry.totalQuizzes} quizzes
                  </div>
                  {entry.lastActive && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                      <Clock size={10} /> Last active: {entry.lastActive}
                    </div>
                  )}
                </div>
                <div className="p-1 sm:p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <Trophy size={isMobile ? 16 : 20} className="text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>

            <div className="mt-2 flex gap-2">
              <button
                onClick={() => onProfilePreview(entry)}
                className="px-2 py-1 text-xs sm:text-sm bg-indigo-600 text-white rounded-md flex items-center gap-1"
              >
                <MessageCircle size={isMobile ? 12 : 14} /> Message
              </button>
              <button
                onClick={() => onFollow && onFollow(entry.id)}
                className="px-2 py-1 text-xs sm:text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md flex items-center gap-1"
              >
                <UserPlus size={isMobile ? 12 : 14} /> {isFollowing ? 'Unfollow' : 'Follow'}
              </button>
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
  const [period, setPeriod] = useState<'today' | 'week' | 'month' | 'all'>('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'score' | 'points' | 'quizzes' | 'recentPoints'>('score');
  const [following, setFollowing] = useState<Record<string, boolean>>(() => {
    try { return JSON.parse(localStorage.getItem('leaderboard_following') || '{}'); } catch { return {}; }
  });
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const [showFilters, setShowFilters] = useState(false);
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 640 });

  // New helper function for point calculation
  const calculatePoints = useCallback((results: ResultDoc[]) => {
    return results.reduce((sum, result) => sum + (result.pointsEarned || 0), 0);
  }, []);

  const loadLeaderboard = useCallback(async () => {
    if (!currentUser) return;
    setLoading(true);
    setError(null);

    try {
      const usersRef = collection(db, 'users');
      let usersQuery = query(usersRef);
      if (activeTab === 'field' && (currentUser as any).field) {
        usersQuery = query(usersRef, where('field', '==', (currentUser as any).field));
      }
      const usersSnapshot = await getDocs(usersQuery);
      const users: UserDoc[] = usersSnapshot.docs.map(d => ({ id: d.id, ...(d.data() as any) }));

      if (users.length === 0) {
        setLeaderboard([]);
        setLoading(false);
        return;
      }

      const userIds = users.map(u => u.id);
      const resultsRef = collection(db, 'results');
      const idChunks = chunk(userIds, 10);
      const resultsPromises = idChunks.map(async (chunkIds) => {
        const q = query(resultsRef, where('userId', 'in', chunkIds));
        const snap = await getDocs(q);
        return snap.docs.map(d => d.data() as ResultDoc);
      });

      const resultsArrays = await Promise.all(resultsPromises);
      const allResults: ResultDoc[] = resultsArrays.flat();

      const todayStart = startOfDay(now());
      const weekStart = daysAgo(todayStart, 7);
      const monthStart = daysAgo(todayStart, 30);

      const leaderboardData: LeaderboardEntry[] = users.map(u => {
        const userResults = allResults.filter(r => r.userId === u.id);
        const totalQuizzes = userResults.length;
        const averageScore = totalQuizzes > 0
          ? (userResults.reduce((s, r) => s + (r.percentage || 0), 0) / totalQuizzes)
          : 0;
        const totalPoints = calculatePoints(userResults);

        const recentPoints = userResults.reduce((s, r) => {
          const created = r.createdAt && (typeof r.createdAt.toDate === 'function' ? r.createdAt.toDate() : new Date(r.createdAt));
          if (!created) return s;
          if (created >= weekStart) return s + (r.pointsEarned || 0);
          return s;
        }, 0);

        const lastActive = u.lastActive ?
          formatLastActive(u.lastActive.toDate ? u.lastActive.toDate() : new Date(u.lastActive)) : undefined;

        return {
          id: u.id,
          fullName: u.fullName || 'Anonymous',
          field: u.field,
          averageScore,
          totalQuizzes,
          points: totalPoints,
          avatar: u.photoURL,
          rank: 0,
          recentPoints,
          lastActive
        } as LeaderboardEntry;
      });

      let list = leaderboardData;

      if (period === 'today') {
        list = leaderboardData.filter(l => {
          const userResults = allResults.filter(r => r.userId === l.id);
          return userResults.some(r => {
            const created = r.createdAt && (typeof r.createdAt.toDate === 'function' ? r.createdAt.toDate() : new Date(r.createdAt));
            return created && created >= todayStart;
          });
        }).map(l => {
            const dailyResults = allResults.filter(r => r.userId === l.id && r.createdAt && (typeof r.createdAt.toDate === 'function' ? r.createdAt.toDate() : new Date(r.createdAt)) >= todayStart);
            return {
                ...l,
                points: calculatePoints(dailyResults),
                totalQuizzes: dailyResults.length,
                averageScore: dailyResults.length > 0 ? (dailyResults.reduce((s, r) => s + (r.percentage || 0), 0) / dailyResults.length) : 0
            };
        });
      } else if (period === 'week') {
        list = leaderboardData.filter(l => {
          const userResults = allResults.filter(r => r.userId === l.id);
          return userResults.some(r => {
            const created = r.createdAt && (typeof r.createdAt.toDate === 'function' ? r.createdAt.toDate() : new Date(r.createdAt));
            return created && created >= weekStart;
          });
        }).map(l => {
            const weeklyResults = allResults.filter(r => r.userId === l.id && r.createdAt && (typeof r.createdAt.toDate === 'function' ? r.createdAt.toDate() : new Date(r.createdAt)) >= weekStart);
            return {
                ...l,
                points: calculatePoints(weeklyResults),
                totalQuizzes: weeklyResults.length,
                averageScore: weeklyResults.length > 0 ? (weeklyResults.reduce((s, r) => s + (r.percentage || 0), 0) / weeklyResults.length) : 0
            };
        });
      } else if (period === 'month') {
        list = leaderboardData.filter(l => {
          const userResults = allResults.filter(r => r.userId === l.id);
          return userResults.some(r => {
            const created = r.createdAt && (typeof r.createdAt.toDate === 'function' ? r.createdAt.toDate() : new Date(r.createdAt));
            return created && created >= monthStart;
          });
        }).map(l => {
            const monthlyResults = allResults.filter(r => r.userId === l.id && r.createdAt && (typeof r.createdAt.toDate === 'function' ? r.createdAt.toDate() : new Date(r.createdAt)) >= monthStart);
            return {
                ...l,
                points: calculatePoints(monthlyResults),
                totalQuizzes: monthlyResults.length,
                averageScore: monthlyResults.length > 0 ? (monthlyResults.reduce((s, r) => s + (r.percentage || 0), 0) / monthlyResults.length) : 0
            };
        });
      }

      const sorted = list.sort((a, b) => {
        if (sortBy === 'score') return b.averageScore - a.averageScore || b.points - a.points;
        if (sortBy === 'points') return b.points - a.points || b.averageScore - a.averageScore;
        if (sortBy === 'quizzes') return b.totalQuizzes - a.totalQuizzes || b.averageScore - a.averageScore;
        return (b.recentPoints || 0) - (a.recentPoints || 0);
      });

      const ranked = sorted.map((entry, idx) => ({ ...entry, rank: idx + 1 }));
      setLeaderboard(ranked);
    } catch (err) {
      console.error('Error loading leaderboard', err);
      setError('Failed to load leaderboard.');
      setLeaderboard([]);
    } finally {
      setLoading(false);
    }
  }, [activeTab, currentUser, period, sortBy, calculatePoints]);

  useEffect(() => {
    if (!currentUser) return;
    loadLeaderboard();
  }, [currentUser, activeTab, period, sortBy, loadLeaderboard]);

  const toggleExpandUser = useCallback((id: string) => {
    setExpandedUser(prev => (prev === id ? null : id));
  }, []);

  const onShare = useCallback(async (entry: LeaderboardEntry) => {
    const link = `${window.location.origin}/profile/${entry.id}`;
    try {
      if ((navigator as any).share) {
        await (navigator as any).share({
          title: `${entry.fullName} - Leaderboard`,
          text: `Check out ${entry.fullName} on the leaderboard with ${entry.averageScore.toFixed(1)}% average score!`,
          url: link
        });
      } else {
        await navigator.clipboard.writeText(link);
        alert('Profile link copied to clipboard');
      }
    } catch (e) {
      console.error('Share failed', e);
      alert('Unable to share');
    }
  }, []);

  const exportCSV = useCallback(() => {
    if (!leaderboard.length) return;
    const headers = ['rank', 'fullName', 'field', 'averageScore', 'totalQuizzes', 'points', 'recentPoints'];
    const rows = leaderboard.map(l => [l.rank, l.fullName, l.field || '', l.averageScore.toFixed(2), l.totalQuizzes, l.points, l.recentPoints || 0]);
    const csv = [headers, ...rows].map(r => r.map(String).map(v => `"${v.replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leaderboard-${period}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [leaderboard, period]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return leaderboard;
    return leaderboard.filter(l =>
      l.fullName.toLowerCase().includes(q) ||
      (l.field || '').toLowerCase().includes(q)
    );
  }, [leaderboard, search]);

  const toggleFollow = useCallback((id: string) => {
    setFollowing(prev => {
      const copy = { ...prev, [id]: !prev[id] };
      try { localStorage.setItem('leaderboard_following', JSON.stringify(copy)); } catch { }
      return copy;
    });
  }, []);

  const loadMore = useCallback(() => setVisibleCount(v => v + 10), []);

  const goToProfile = useCallback((id: string) => navigate(`/profile/${id}`), [navigate]);

  const [previewUser, setPreviewUser] = useState<LeaderboardEntry | null>(null);

  const toggleFilters = useCallback(() => setShowFilters(prev => !prev), []);

  const handleProfilePreview = useCallback((entry: LeaderboardEntry) => {
    setPreviewUser(entry);
    if (isMobile) {
      setShowMobilePreview(true);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" style={{ paddingTop: 'env(safe-area-inset-top, 12px)' }}>
      <Header />

      <main className="w-full max-w-screen-lg mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-4 sm:mb-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 mb-2 shadow-md"
          >
            <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Academic Leaderboard
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Track your progress and compete with peers in real-time rankings
          </p>
        </motion.div>

        {isMobile && (
          <div className="mb-3">
            <button
              onClick={toggleFilters}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-sm"
            >
              <Filter size={16} />
              <span>Filters & Options</span>
              {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}

        <div className={`${isMobile ? (showFilters ? 'block' : 'hidden') : 'flex'} flex-col lg:flex-row items-stretch lg:items-center gap-3 mb-4 sm:mb-5`}>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            <input
              ref={searchRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name or field..."
              className="w-full pl-9 pr-3 py-2 sm:py-3 rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 text-sm sm:text-base"
            />
          </div>

          <div className="flex-none flex items-center gap-2 overflow-x-auto lg:overflow-visible pb-2">
            <div className="flex gap-1 sm:gap-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
              {(['today', 'week', 'month', 'all'] as const).map(p => (
                <motion.button
                  key={p}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setPeriod(p); setVisibleCount(10); }}
                  className={`px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    period === p ? 'bg-indigo-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {p === 'today' ? 'Today' : p === 'week' ? 'Week' : p === 'month' ? 'Month' : 'All time'}
                </motion.button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-2 py-1 sm:px-3 sm:py-2 rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 text-xs sm:text-sm"
            >
              <option value="score">Score</option>
              <option value="points">Points</option>
              <option value="quizzes">Quizzes</option>
              <option value="recentPoints">Trending</option>
            </select>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => { setActiveTab(prev => prev === 'field' ? 'all' : 'field'); setVisibleCount(10); }}
              className="px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md flex items-center gap-1 text-xs sm:text-sm"
            >
              {activeTab === 'field' ? <Users size={14} /> : <Globe size={14} />}
              <span>{activeTab === 'field' ? 'Field' : 'Global'}</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => loadLeaderboard()}
              className="px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md flex items-center gap-1 text-xs sm:text-sm"
              aria-label="Refresh"
            >
              <RefreshCw size={14} />
              {!isMobile && <span>Refresh</span>}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={exportCSV}
              className="px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-sm hover:opacity-95 flex items-center gap-1 text-xs sm:text-sm"
            >
              <Download size={14} />
              {!isMobile && <span>Export</span>}
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-2 sm:gap-3 overflow-x-auto py-2 mb-3 sm:mb-4 scrollbar-hide"
        >
          <div className="flex-none bg-white dark:bg-gray-900 rounded-lg p-2 sm:p-3 shadow-sm min-w-[120px] sm:min-w-[160px] border border-gray-100 dark:border-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Users size={12} /> Users
            </div>
            <div className="font-extrabold text-md sm:text-lg text-gray-800 dark:text-gray-100">{leaderboard.length}</div>
          </div>

          <div className="flex-none bg-white dark:bg-gray-900 rounded-lg p-2 sm:p-3 shadow-sm min-w-[120px] sm:min-w-[160px] border border-gray-100 dark:border-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <TrendingUp size={12} /> Active (7d)
            </div>
            <div className="font-extrabold text-md sm:text-lg text-gray-800 dark:text-gray-100">
              {leaderboard.filter(l => (l.recentPoints || 0) > 0).length}
            </div>
          </div>

          <div className="flex-none bg-white dark:bg-gray-900 rounded-lg p-2 sm:p-3 shadow-sm min-w-[120px] sm:min-w-[160px] border border-gray-100 dark:border-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <BarChart2 size={12} /> Sort
            </div>
            <div className="font-extrabold text-md sm:text-lg text-gray-800 dark:text-gray-100 capitalize">
              {sortBy === 'recentPoints' ? 'Trending' : sortBy}
            </div>
          </div>

          <div className="flex-none bg-white dark:bg-gray-900 rounded-lg p-2 sm:p-3 shadow-sm min-w-[120px] sm:min-w-[160px] border border-gray-100 dark:border-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Calendar size={12} /> Period
            </div>
            <div className="font-extrabold text-md sm:text-lg text-gray-800 dark:text-gray-100 capitalize">
              {period === 'all' ? 'All' : period}
            </div>
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-3 text-red-700 dark:text-red-200 text-sm mb-4"
          >
            {error}
          </motion.div>
        )}

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4].map(i => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="animate-pulse bg-white dark:bg-gray-900 rounded-xl p-4 h-20 border border-gray-100 dark:border-gray-800"
              />
            ))}
          </div>
        ) : (
          <>
            {leaderboard.length === 0 && (
              <div className="text-center p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400">
                <Zap size={36} className="mx-auto mb-3 text-indigo-400" />
                <h3 className="text-lg sm:text-xl font-bold">No results found</h3>
                <p className="mt-1 text-sm">Try adjusting your filters or check back later!</p>
              </div>
            )}

            <div className="space-y-2 sm:space-y-3">
              <AnimatePresence mode="popLayout">
                {filtered.slice(0, visibleCount).map((entry) => (
                  <LeaderboardItem
                    key={entry.id}
                    entry={entry}
                    isCurrentUser={currentUser?.uid === entry.id}
                    expandedUser={expandedUser}
                    toggleExpandUser={toggleExpandUser}
                    leaderboard={filtered}
                    onShare={onShare}
                    onFollow={toggleFollow}
                    isFollowing={following[entry.id]}
                    onProfilePreview={handleProfilePreview}
                  />
                ))}
              </AnimatePresence>
            </div>
            {visibleCount < filtered.length && (
              <div className="mt-4 sm:mt-6 flex justify-center">
                <button
                  onClick={loadMore}
                  className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-gray-300 dark:border-gray-700 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </main>
      <BottomBar />
    </div>
  );
}