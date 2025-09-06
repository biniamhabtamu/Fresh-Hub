import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { collection, getDocs, query, where, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
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
  BarChart2,
  TrendingUp,
  Filter,
  Users,
  Calendar,
  Clock,
  Globe,
  X,
  TrendingDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Header from '../Layout/Header';
import BottomBar from '../Layout/BottomBar';

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
  streak?: number;
  rankChange?: number;
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

// --- Components ---
const RankIcon: React.FC<{ rank: number; size?: number }> = ({ rank, size = 24 }) => {
  if (rank === 1) return <Crown size={size} className="text-yellow-500" fill="currentColor" />;
  if (rank === 2) return <Medal size={size} className="text-gray-400" fill="currentColor" />;
  if (rank === 3) return <Award size={size} className="text-orange-500" fill="currentColor" />;
  return <span className="text-sm font-bold text-gray-600">#{rank}</span>;
};

const ScoreBar: React.FC<{ score: number }> = ({ score }) => {
  const pct = Math.min(100, Math.max(0, Math.round(score)));
  const color =
    score >= 80
      ? 'from-green-500 to-emerald-500'
      : score >= 60
      ? 'from-blue-500 to-cyan-500'
      : score >= 40
      ? 'from-yellow-500 to-amber-500'
      : 'from-red-500 to-pink-500';

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
      <div className={`h-2 rounded-full bg-gradient-to-r ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
};

const RankChangeIndicator: React.FC<{ change?: number }> = ({ change }) => {
  if (!change) return null;

  if (change > 0) {
    return (
      <div className="flex items-center text-green-600 text-xs font-semibold">
        <TrendingUp size={12} className="mr-1" />
        <span>+{change}</span>
      </div>
    );
  } else if (change < 0) {
    return (
      <div className="flex items-center text-red-600 text-xs font-semibold">
        <TrendingDown size={12} className="mr-1" />
        <span>{Math.abs(change)}</span>
      </div>
    );
  }

  return null;
};

const MobileProfilePreview: React.FC<{
  user: LeaderboardEntry | null;
  onClose: () => void;
  onShare: (entry: LeaderboardEntry) => void;
  onFollow: (id: string) => void;
  isFollowing: boolean;
  leaderboard: LeaderboardEntry[];
}> = ({ user, onClose, onShare, onFollow, isFollowing, leaderboard }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  if (!user) return null;

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(e, info) => {
        if (info.offset.y > 100) onClose();
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className="fixed inset-0 z-50 bg-white dark:bg-gray-950 rounded-t-3xl shadow-2xl p-6 overflow-y-auto pt-10"
    >
      <button
        ref={closeButtonRef}
        onClick={() => {
          if ('vibrate' in navigator) navigator.vibrate(50);
          onClose();
        }}
        className="absolute top-4 right-4 p-3 rounded-full bg-gray-100 dark:bg-gray-800"
        style={{ minWidth: '48px', minHeight: '48px' }}
        aria-label="Close profile preview"
      >
        <X size={24} className="text-gray-500" />
      </button>

      <div className="flex flex-col items-center text-center">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.fullName}
            className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-4xl">
            {user.fullName.charAt(0) || '?'}
          </div>
        )}
        <h2 className="text-2xl font-bold mt-4">{user.fullName}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-6">{user.field || 'General'}</p>
        <div className="flex items-center gap-2 mt-2">
          <RankIcon rank={user.rank} size={28} />
          <span className="text-lg font-bold">#{user.rank}</span>
          <RankChangeIndicator change={user.rankChange} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/10 dark:to-cyan-900/10 rounded-xl p-4 flex flex-col items-center text-center">
          <Rocket size={32} className="text-indigo-600 dark:text-indigo-400 mb-2" />
          <div className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wide">Performance</div>
          <div className="text-xl font-extrabold text-indigo-800 dark:text-indigo-200 mt-1">
            Top {leaderboard.length ? Math.max(1, Math.round(((leaderboard.length - user.rank + 1) / leaderboard.length) * 100)) : 0}%
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-xl p-4 flex flex-col items-center text-center">
          <Trophy size={32} className="text-purple-600 dark:text-purple-400 mb-2" />
          <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wide">Quizzes</div>
          <div className="text-xl font-extrabold text-purple-800 dark:text-purple-200 mt-1">{user.totalQuizzes}</div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl p-4 flex flex-col items-center text-center">
          <Star size={32} className="text-green-600 dark:text-green-400 mb-2" />
          <div className="text-sm text-green-600 dark:text-green-400 font-semibold uppercase tracking-wide">Points</div>
          <div className="text-xl font-extrabold text-green-800 dark:text-green-200 mt-1">{user.points}</div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl p-4 flex flex-col items-center text-center">
          <Clock size={32} className="text-blue-600 dark:text-blue-400 mb-2" />
          <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide">Last Active</div>
          <div className="text-xl font-extrabold text-blue-800 dark:text-blue-200 mt-1">{user.lastActive || '--'}</div>
        </div>
      </div>

      {user.streak && user.streak > 0 && (
        <div className="mt-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-xl p-4 flex items-center justify-center">
          <Flame size={24} className="text-amber-600 dark:text-amber-400 mr-2" />
          <span className="text-amber-800 dark:text-amber-200 font-bold">{user.streak} day streak</span>
        </div>
      )}

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => {
            if ('vibrate' in navigator) navigator.vibrate(50);
            onFollow(user.id);
          }}
          className="flex-1 px-6 py-4 bg-indigo-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 text-lg"
        >
          <UserPlus size={20} />
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
        <button
          onClick={() => {
            if ('vibrate' in navigator) navigator.vibrate(50);
            onShare(user);
          }}
          className="flex-1 px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-semibold flex items-center justify-center gap-2"
        >
          <Share2 size={20} />
          Share
        </button>
      </div>
    </motion.div>
  );
};

const MobileFilters: React.FC<{
  onClose: () => void;
  period: string;
  setPeriod: (p: string) => void;
  sortBy: string;
  setSortBy: (s: string) => void;
  activeTab: string;
  setActiveTab: (t: string) => void;
  onRefresh: () => void;
  onExport: () => void;
}> = ({ onClose, period, setPeriod, sortBy, setSortBy, activeTab, setActiveTab, onRefresh, onExport }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 640 });

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  const handlePeriodChange = (p: string) => {
    setPeriod(p);
  };
  const handleSortByChange = (s: string) => {
    setSortBy(s);
  };
  const handleTabChange = () => {
    setActiveTab(activeTab === 'field' ? 'all' : 'field');
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(e, info) => {
        if (info.offset.y > 100) onClose();
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className="fixed inset-0 z-50 bg-white dark:bg-gray-950 rounded-t-3xl shadow-2xl p-6 overflow-y-auto pt-10"
    >
      <button
        ref={closeButtonRef}
        onClick={() => {
          if ('vibrate' in navigator) navigator.vibrate(50);
          onClose();
        }}
        className="absolute top-4 right-4 p-3 rounded-full bg-gray-100 dark:bg-gray-800"
        style={{ minWidth: '48px', minHeight: '48px' }}
        aria-label="Close filters"
      >
        <X size={24} className="text-gray-500" />
      </button>

      <h2 className="text-2xl font-bold mb-6">Filters & Options</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Calendar size={20} /> Period
          </h3>
          <div className="flex flex-wrap gap-3">
            {(['today', 'week', 'month', 'all'] as const).map(p => (
              <button
                key={p}
                onClick={() => {
                  if ('vibrate' in navigator) navigator.vibrate(50);
                  handlePeriodChange(p);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  period === p ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
                }`}
              >
                {p === 'today' ? 'Today' : p === 'week' ? 'Week' : p === 'month' ? 'Month' : 'All Time'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <BarChart2 size={20} /> Sort By
          </h3>
          <div className="flex flex-wrap gap-3">
            {(['score', 'points', 'quizzes', 'recentPoints'] as const).map(s => (
              <button
                key={s}
                onClick={() => {
                  if ('vibrate' in navigator) navigator.vibrate(50);
                  handleSortByChange(s);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  sortBy === s ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
                }`}
              >
                {s === 'recentPoints' ? 'Trending' : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Users size={20} /> View
          </h3>
          <button
            onClick={() => {
              if ('vibrate' in navigator) navigator.vibrate(50);
              handleTabChange();
            }}
            className={`w-full px-4 py-3 rounded-xl text-lg font-bold transition-colors ${
              activeTab === 'field' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
            }`}
          >
            {activeTab === 'field' ? 'My Field Leaderboard' : 'Global Leaderboard'}
          </button>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => {
            if ('vibrate' in navigator) navigator.vibrate(50);
            onRefresh();
          }}
          className="flex-1 px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800"
        >
          <RefreshCw size={20} /> Refresh
        </button>
        <button
          onClick={() => {
            if ('vibrate' in navigator) navigator.vibrate(50);
            onExport();
          }}
          className="flex-1 px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 bg-indigo-600 text-white"
        >
          <Download size={20} /> Export
        </button>
      </div>
    </motion.div>
  );
};

const LeaderboardItem: React.FC<{
  entry: LeaderboardEntry;
  isCurrentUser?: boolean;
  onProfilePreview: (entry: LeaderboardEntry) => void;
  isMobile: boolean;
}> = React.memo(({ entry, isCurrentUser, onProfilePreview, isMobile }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.28 }}
      whileTap={{ scale: 0.98 }}
      role="button"
      aria-label={`View ${entry.fullName}'s profile, rank ${entry.rank}, score ${entry.averageScore.toFixed(1)}%`}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onProfilePreview(entry)}
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm transition-all p-3 sm:p-4 overflow-hidden ${
        isCurrentUser ? 'ring-2 ring-indigo-200 border-l-4 border-indigo-400' : 'border-l-4 border-gray-100'
      }`}
      onClick={() => {
        if ('vibrate' in navigator) navigator.vibrate(50);
        onProfilePreview(entry);
      }}
    >
      <div className="flex items-center justify-between gap-2">
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
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                {entry.fullName.charAt(0) || '?'}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <h3
                  className={`text-sm sm:text-md font-semibold truncate ${
                    isCurrentUser ? 'text-indigo-700 dark:text-indigo-400' : 'text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {entry.fullName}
                </h3>
                {isMobile && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDetails(!showDetails);
                    }}
                    aria-label={showDetails ? 'Hide details' : 'Show details'}
                  >
                    {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                )}
              </div>
              {showDetails && isMobile && (
                <span className="text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full mt-1 inline-block">
                  {entry.field || '—'}
                </span>
              )}
              {!isMobile && (
                <span className="text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full mt-1 inline-block">
                  {entry.field || '—'}
                </span>
              )}
              <div className="mt-1">
                <ScoreBar score={entry.averageScore} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div
            className={`text-md sm:text-lg font-extrabold ${
              isCurrentUser ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-800 dark:text-gray-100'
            }`}
          >
            {entry.averageScore.toFixed(1)}%
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Star size={isMobile ? 12 : 14} className="text-yellow-400" />
            <span>{entry.points} pts</span>
          </div>
          <RankChangeIndicator change={entry.rankChange} />
        </div>
      </div>
    </motion.div>
  );
});

// --- Main Page Component ---
export default function LeaderboardPage(): JSX.Element {
  const { currentUser } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'all' | 'field'>('field');
  const [period, setPeriod] = useState<'today' | 'week' | 'month' | 'all'>('all');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [sortBy, setSortBy] = useState<'score' | 'points' | 'quizzes' | 'recentPoints'>('score');
  const [following, setFollowing] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem('leaderboard_following') || '{}');
    } catch {
      return {};
    }
  });
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const [showFilters, setShowFilters] = useState(false);
  const [previewUser, setPreviewUser] = useState<LeaderboardEntry | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const mainRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Offline detection
  useEffect(() => {
    const handleOffline = () => setError('You are offline. Some data may not load.');
    window.addEventListener('offline', handleOffline);
    return () => window.removeEventListener('offline', handleOffline);
  }, []);

  const loadLeaderboard = useCallback(async () => {
    if (!currentUser) return;
    const start = performance.now();
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
        const averageScore = totalQuizzes > 0 ? (userResults.reduce((s, r) => s + (r.percentage || 0), 0) / totalQuizzes) : 0;
        const totalPoints = userResults.reduce((sum, r) => sum + (r.pointsEarned || 0), 0);

        const recentPoints = userResults.reduce((s, r) => {
          const created = r.createdAt && (typeof r.createdAt.toDate === 'function' ? r.createdAt.toDate() : new Date(r.createdAt));
          if (!created) return s;
          if (created >= weekStart) return s + (r.pointsEarned || 0);
          return s;
        }, 0);

        const lastActive = u.lastActive ? formatLastActive(u.lastActive.toDate ? u.lastActive.toDate() : new Date(u.lastActive)) : undefined;

        const streak = Math.floor(Math.random() * 15);
        const rankChange = Math.random() > 0.5 ? Math.floor(Math.random() * 10) - 5 : undefined;

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
          lastActive,
          streak,
          rankChange,
        } as LeaderboardEntry;
      });

      let list = leaderboardData;

      const filterByPeriod = (data: LeaderboardEntry[]) => {
        let periodStart: Date;
        if (period === 'today') periodStart = todayStart;
        else if (period === 'week') periodStart = weekStart;
        else if (period === 'month') periodStart = monthStart;
        else return data;

        return data
          .filter(l => {
            const userResults = allResults.filter(r => r.userId === l.id);
            return userResults.some(r => {
              const created = r.createdAt && (typeof r.createdAt.toDate === 'function' ? r.createdAt.toDate() : new Date(r.createdAt));
              return created && created >= periodStart;
            });
          })
          .map(l => {
            const filteredResults = allResults.filter(
              r => r.userId === l.id && r.createdAt && (typeof r.createdAt.toDate === 'function' ? r.createdAt.toDate() : new Date(r.createdAt)) >= periodStart
            );
            return {
              ...l,
              points: filteredResults.reduce((s, r) => s + (r.pointsEarned || 0), 0),
              totalQuizzes: filteredResults.length,
              averageScore: filteredResults.length > 0 ? filteredResults.reduce((s, r) => s + (r.percentage || 0), 0) / filteredResults.length : 0,
            };
          });
      };

      list = filterByPeriod(list);

      const sorted = list.sort((a, b) => {
        if (sortBy === 'score') return b.averageScore - a.averageScore || b.points - a.points;
        if (sortBy === 'points') return b.points - a.points || b.averageScore - a.averageScore;
        if (sortBy === 'quizzes') return b.totalQuizzes - a.totalQuizzes || b.averageScore - a.averageScore;
        return (b.recentPoints || 0) - (a.recentPoints || 0);
      });

      const ranked = sorted.map((entry, idx) => ({ ...entry, rank: idx + 1 }));
      setLeaderboard(ranked);
      console.log(`Leaderboard loaded in ${performance.now() - start}ms`);
    } catch (err) {
      console.error('Error loading leaderboard', err);
      setError('Failed to load leaderboard.');
      setLeaderboard([]);
    } finally {
      setLoading(false);
    }
  }, [activeTab, currentUser, period, sortBy]);

  useEffect(() => {
    if (!currentUser) return;
    loadLeaderboard();
  }, [currentUser, activeTab, period, sortBy, loadLeaderboard]);

  const toggleFollow = useCallback((id: string) => {
    setFollowing(prev => {
      const copy = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('leaderboard_following', JSON.stringify(copy));
      } catch {}
      return copy;
    });
  }, []);

  const onShare = useCallback(async (entry: LeaderboardEntry) => {
    const link = `${window.location.origin}/profile/${entry.id}`;
    try {
      if ((navigator as any).share) {
        await (navigator as any).share({
          title: `${entry.fullName} - Leaderboard`,
          text: `Check out ${entry.fullName} on the leaderboard with ${entry.averageScore.toFixed(1)}% average score!`,
          url: link,
        });
      } else {
        await navigator.clipboard.writeText(link);
        setToastMessage('Profile link copied to clipboard');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      }
    } catch (e) {
      console.error('Share failed', e);
      setToastMessage('Unable to share');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
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
    const q = debouncedSearch.trim().toLowerCase();
    if (!q) return leaderboard;
    return leaderboard.filter(
      l => l.fullName.toLowerCase().includes(q) || (l.field || '').toLowerCase().includes(q)
    );
  }, [leaderboard, debouncedSearch]);

  const loadMore = useCallback(() => setVisibleCount(v => v + 10), []);
  const handleProfilePreview = useCallback((entry: LeaderboardEntry) => setPreviewUser(entry), []);
  const closeProfilePreview = useCallback(() => setPreviewUser(null), []);
  const closeFilters = useCallback(() => setShowFilters(false), []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (mainRef.current?.scrollTop === 0) {
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchEndY - touchStartY.current > 100) {
      if ('vibrate' in navigator) navigator.vibrate(50);
      loadLeaderboard();
    }
  };

  const currentUserEntry = leaderboard.find(l => l.id === currentUser?.uid);

  return (
    <div
      ref={mainRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      style={{
        paddingTop: 'env(safe-area-inset-top, 12px)',
        paddingBottom: 'env(safe-area-inset-bottom, 12px)',
      }}
    >
      <Header />
      <main className="w-full max-w-screen-lg mx-auto px-3 sm:px-4 py-4 sm:py-6 overflow-y-auto overscroll-y-contain pb-24">
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
          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Track your progress and compete with peers in real-time rankings
          </p>
        </motion.div>

        {currentUser && currentUserEntry && (
          <motion.div
            className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg font-bold mb-2">Your Rank</h3>
            <LeaderboardItem
              entry={currentUserEntry}
              isCurrentUser={true}
              onProfilePreview={handleProfilePreview}
              isMobile={isMobile}
            />
          </motion.div>
        )}

        {isMobile && (
          <div className="mb-3">
            <button
              onClick={() => {
                if ('vibrate' in navigator) navigator.vibrate(50);
                setShowFilters(true);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-sm"
            >
              <Filter size={16} />
              <span>Filters & Options</span>
            </button>
          </div>
        )}

        {!isMobile && (
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 mb-4 sm:mb-5">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={16} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name or field..."
                className="w-full pl-9 pr-3 py-2 sm:py-3 rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 text-sm"
              />
            </div>
            <div className="flex-none flex items-center gap-2 overflow-x-auto lg:overflow-visible pb-2">
              <div className="flex gap-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
                {(['today', 'week', 'month', 'all'] as const).map(p => (
                  <motion.button
                    key={p}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if ('vibrate' in navigator) navigator.vibrate(50);
                      setPeriod(p);
                      setVisibleCount(10);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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
                className="px-3 py-2 rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 text-sm"
              >
                <option value="score">Score</option>
                <option value="points">Points</option>
                <option value="quizzes">Quizzes</option>
                <option value="recentPoints">Trending</option>
              </select>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if ('vibrate' in navigator) navigator.vibrate(50);
                  setActiveTab(prev => (prev === 'field' ? 'all' : 'field'));
                  setVisibleCount(10);
                }}
                className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md flex items-center gap-1 text-sm"
              >
                {activeTab === 'field' ? <Users size={14} /> : <Globe size={14} />}
                <span>{activeTab === 'field' ? 'Field' : 'Global'}</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if ('vibrate' in navigator) navigator.vibrate(50);
                  loadLeaderboard();
                }}
                className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md flex items-center gap-1 text-sm"
                aria-label="Refresh"
              >
                <RefreshCw size={14} />
                <span>Refresh</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if ('vibrate' in navigator) navigator.vibrate(50);
                  exportCSV();
                }}
                className="px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-sm hover:opacity-95 flex items-center gap-1 text-sm"
              >
                <Download size={14} />
                <span>Export</span>
              </motion.button>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 overflow-x-auto py-2 mb-4 scrollbar-hide"
        >
          <div className="flex-none bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm min-w-[140px] border border-gray-100 dark:border-gray-700">
            <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
              <Users size={14} /> Users
            </div>
            <div className="font-extrabold text-xl text-gray-800 dark:text-white">{leaderboard.length}</div>
          </div>
          <div className="flex-none bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm min-w-[140px] border border-gray-100 dark:border-gray-700">
            <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
              <TrendingUp size={14} /> Active (7d)
            </div>
            <div className="font-extrabold text-xl text-gray-800 dark:text-white">
              {leaderboard.filter(l => (l.recentPoints || 0) > 0).length}
            </div>
          </div>
          <div className="flex-none bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm min-w-[140px] border border-gray-100 dark:border-gray-700">
            <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
              <BarChart2 size={14} /> Sort
            </div>
            <div className="font-extrabold text-xl text-gray-800 dark:text-white capitalize">
              {sortBy === 'recentPoints' ? 'Trending' : sortBy}
            </div>
          </div>
          <div className="flex-none bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm min-w-[140px] border border-gray-100 dark:border-gray-700">
            <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
              <Calendar size={14} /> Period
            </div>
            <div className="font-extrabold text-xl text-gray-800 dark:text-white capitalize">
              {period === 'all' ? 'All' : period}
            </div>
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-3 text-red-700 dark:text-red-200 text-sm mb-4 leading-6"
          >
            {error}
          </motion.div>
        )}

        {loading && (
          <motion.div
            className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="h-full bg-indigo-600 animate-pulse" style={{ width: '100%' }} />
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
                <p className="mt-1 text-sm leading-6">Try adjusting your filters or check back later!</p>
              </div>
            )}

            <div className="space-y-2 sm:space-y-3">
              <AnimatePresence mode="popLayout">
                {filtered.slice(0, visibleCount).map(entry => (
                  <LeaderboardItem
                    key={entry.id}
                    entry={entry}
                    isCurrentUser={currentUser?.uid === entry.id}
                    onProfilePreview={handleProfilePreview}
                    isMobile={isMobile}
                  />
                ))}
              </AnimatePresence>
            </div>
            {visibleCount < filtered.length && (
              <div className="mt-4 sm:mt-6 flex justify-center">
                <button
                  onClick={() => {
                    if ('vibrate' in navigator) navigator.vibrate(50);
                    loadMore();
                  }}
                  className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-gray-300 dark:border-gray-700 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <BottomBar />

      <AnimatePresence>
        {isMobile && previewUser && (
          <MobileProfilePreview
            user={previewUser}
            onClose={closeProfilePreview}
            onShare={onShare}
            onFollow={toggleFollow}
            isFollowing={following[previewUser.id]}
            leaderboard={leaderboard}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMobile && showFilters && (
          <MobileFilters
            onClose={closeFilters}
            period={period}
            setPeriod={setPeriod}
            sortBy={sortBy}
            setSortBy={setSortBy}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onRefresh={loadLeaderboard}
            onExport={exportCSV}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}