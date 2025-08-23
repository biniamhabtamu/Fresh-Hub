import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BarChart, Lock, Trophy, Sparkles, ChevronRight, Search, Filter, BookOpen, Crown, Star, Clock, Award, TrendingUp } from 'lucide-react';
import { Subject } from '../../types';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
  isLocked: boolean;
  isPremium?: boolean;
  completionPercentage?: number;
}

interface UserPerformance {
  averageScore: number;
  attempts: number;
  bestScore?: number;
}

const colorThemes = [
  { 
    bg: 'from-blue-100 to-cyan-100', 
    darkBg: 'from-blue-900/20 to-cyan-900/20',
    text: 'text-blue-800 dark:text-blue-200', 
    border: 'border-blue-200 dark:border-blue-700',
    progress: 'from-blue-400 to-cyan-400'
  },
  { 
    bg: 'from-purple-100 to-indigo-100', 
    darkBg: 'from-purple-900/20 to-indigo-900/20',
    text: 'text-purple-800 dark:text-purple-200', 
    border: 'border-purple-200 dark:border-purple-700',
    progress: 'from-purple-400 to-indigo-400'
  },
  { 
    bg: 'from-green-100 to-emerald-100', 
    darkBg: 'from-green-900/20 to-emerald-900/20',
    text: 'text-green-800 dark:text-green-200', 
    border: 'border-green-200 dark:border-green-700',
    progress: 'from-green-400 to-emerald-400'
  },
  { 
    bg: 'from-amber-100 to-yellow-100', 
    darkBg: 'from-amber-900/20 to-yellow-900/20',
    text: 'text-amber-800 dark:text-amber-200', 
    border: 'border-amber-200 dark:border-amber-700',
    progress: 'from-amber-400 to-yellow-400'
  },
  { 
    bg: 'from-pink-100 to-rose-100', 
    darkBg: 'from-pink-900/20 to-rose-900/20',
    text: 'text-pink-800 dark:text-pink-200', 
    border: 'border-pink-200 dark:border-pink-700',
    progress: 'from-pink-400 to-rose-400'
  },
];

export default React.memo(function SubjectCard({
  subject,
  onClick,
  isLocked,
  isPremium = false,
  completionPercentage = 0
}: SubjectCardProps) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [performance, setPerformance] = useState<UserPerformance | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFreeUser, setIsFreeUser] = useState(true);

  const theme = useMemo(() => {
    const idx = Math.abs(
      subject?.id?.toString().split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
    ) % colorThemes.length;
    return colorThemes[idx];
  }, [subject?.id]);

  useEffect(() => {
    let mounted = true;

    const fetchUserPerformanceAndSubscription = async () => {
      if (!currentUser?.uid) return;

      try {
        const resultsQuery = query(
          collection(db, 'quizResults'),
          where('userId', '==', currentUser.uid),
          where('subjectId', '==', subject.id)
        );

        const querySnapshot = await getDocs(resultsQuery);
        let totalScore = 0;
        let totalAttempts = 0;
        let bestScore = 0;

        querySnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          const score = Number(data?.score ?? 0);
          totalScore += score;
          totalAttempts++;
          if (score > bestScore) bestScore = score;
        });

        if (!mounted) return;

        setPerformance({
          averageScore:
            totalAttempts > 0 ? Math.round((totalScore / totalAttempts) * 10) / 10 : 0,
          attempts: totalAttempts,
          bestScore: totalAttempts > 0 ? bestScore : undefined
        });

        try {
          const userRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userRef);
          if (!mounted) return;

          if (userSnap.exists()) {
            const u = userSnap.data() as Record<string, any>;
            const hasPremium =
              !!u?.isPremium || u?.subscriptionStatus === 'active' || u?.plan === 'premium';
            setIsFreeUser(!hasPremium);
          } else {
            setIsFreeUser(true);
          }
        } catch (subErr) {
          console.warn('Error reading user subscription status:', subErr);
          if (mounted) setIsFreeUser(true);
        }
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchUserPerformanceAndSubscription();

    return () => {
      mounted = false;
    };
  }, [currentUser, subject.id]);

  const hasAttempts = Boolean(performance?.attempts && performance.attempts > 0);
  const displayPercentage = Number(hasAttempts ? performance?.averageScore ?? 0 : completionPercentage ?? 0);

  const handleCardClick = useCallback(
    (e?: React.MouseEvent | React.KeyboardEvent) => {
      if (isPremium && isFreeUser) {
        navigate('/premium');
        return;
      }

      if (isLocked && isFreeUser) {
        navigate('/premium');
        return;
      }

      if (!isLocked) {
        onClick();
      }
    },
    [isPremium, isFreeUser, isLocked, navigate, onClick]
  );

  const handleLockClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isFreeUser) navigate('/premium');
    },
    [isFreeUser, navigate]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCardClick(e);
      }
    },
    [handleCardClick]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      whileHover={{ scale: isLocked ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={(e) => handleCardClick(e)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed="false"
      aria-label={`${subject.name} subject card${isPremium ? ', premium' : ''}`}
      className={`
        relative flex flex-col min-h-[160px] sm:min-h-[180px] w-full p-4 sm:p-5
        bg-white dark:bg-gray-800 border ${theme.border} rounded-2xl
        cursor-pointer outline-none
        transition-all duration-300
        ${isHovered ? 'shadow-lg' : 'shadow-md'}
        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300
      `}
    >
      {/* Lock / Premium Icon */}
      {isLocked && (
        <motion.button
          onClick={handleLockClick}
          whileTap={{ scale: 0.95 }}
          aria-label="Upgrade to access"
          title="Upgrade to access"
          className="absolute top-3 right-3 z-20 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/90 dark:bg-gray-700/90 border border-gray-200 dark:border-gray-600 shadow-sm"
        >
          <Lock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
        </motion.button>
      )}

      {/* Premium Badge */}
      {isPremium && (
        <motion.div
          animate={{ rotate: isHovered ? [0, 7, -7, 0] : 0 }}
          transition={{ duration: 0.45 }}
          className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Premium</span>
        </motion.div>
      )}

      {/* Icon / Image area */}
      <motion.div
        animate={{ y: isHovered ? -2 : 0 }}
        transition={{ type: 'spring', stiffness: 280 }}
        className={`
          w-full flex items-center justify-center rounded-xl mb-4
          h-16 sm:h-20 overflow-hidden border ${theme.border}
          bg-gradient-to-br ${theme.bg} dark:${theme.darkBg}
        `}
      >
        <div className="text-3xl sm:text-4xl select-none">{subject.icon}</div>
      </motion.div>

      {/* Title */}
      <h3 className={`truncate text-base sm:text-lg font-bold ${theme.text} mb-2`}>
        {subject.name}
      </h3>

      {/* Progress bar */}
      <div className="w-full mt-auto">
        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${Math.max(0, Math.min(100, displayPercentage))}%` }}
            transition={{ duration: 0.8, type: 'spring' }}
            className={`
              h-full rounded-full shadow-sm
              bg-gradient-to-r ${theme.progress}
            `}
            aria-valuenow={displayPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
          />
        </div>
      </div>

      {/* Stats / CTA */}
      <div className="mt-3 flex items-center justify-between gap-2">
        {hasAttempts ? (
          <>
            <div className={`flex items-center gap-2 ${theme.text} text-xs sm:text-sm`}>
              <BarChart className="h-4 w-4" />
              <span>{performance?.attempts} attempts</span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-600 dark:text-amber-400">
              {performance?.bestScore !== undefined && (
                <>
                  <Trophy className="h-4 w-4" />
                  <span>{performance.bestScore}%</span>
                </>
              )}
            </div>
          </>
        ) : (
          <div
            className={`
              text-center py-1.5 px-3 rounded-lg text-xs sm:text-sm font-medium
              border ${theme.border} ${theme.text}
              bg-gradient-to-r ${theme.bg} dark:${theme.darkBg} w-full
            `}
          >
            {isPremium && isFreeUser ? 'Premium — Upgrade to Open' :
              isLocked ? 'Locked' : 'Start Now'}
          </div>
        )}
      </div>

      {/* Hover arrow */}
      {!isLocked && !(isPremium && isFreeUser) && (
        <motion.div
          initial={{ opacity: 0, x: 4 }}
          animate={{ opacity: isHovered ? 1 : 0.95, x: 0 }}
          className="absolute bottom-4 right-4"
          aria-hidden
        >
          <ChevronRight className={`h-5 w-5 ${theme.text}`} />
        </motion.div>
      )}
    </motion.div>
  );
});

// Main page component
export const SubjectsPage = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all'); // all, free, premium
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const isPremiumUser = Boolean(currentUser?.isPremium);

  // Mock data - replace with your actual data fetching
  useEffect(() => {
    const mockSubjects: Subject[] = [
      {
        id: '1',
        name: 'Mathematics',
        icon: '🧮',
        isFree: true,
        chapters: []
      },
      {
        id: '2',
        name: 'Physics',
        icon: '⚛️',
        isFree: false,
        chapters: []
      },
      {
        id: '3',
        name: 'Chemistry',
        icon: '🧪',
        isFree: true,
        chapters: []
      },
      {
        id: '4',
        name: 'Biology',
        icon: '🧬',
        isFree: false,
        chapters: []
      },
      {
        id: '5',
        name: 'History',
        icon: '📜',
        isFree: true,
        chapters: []
      },
      {
        id: '6',
        name: 'Literature',
        icon: '📚',
        isFree: false,
        chapters: []
      }
    ];
    
    setSubjects(mockSubjects);
    setIsLoading(false);
  }, []);

  const filteredSubjects = useMemo(() => {
    return subjects.filter(subject => {
      // Search filter
      const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Premium filter
      let matchesFilter = true;
      if (filter === 'free') {
        matchesFilter = subject.isFree;
      } else if (filter === 'premium') {
        matchesFilter = !subject.isFree;
      }
      
      return matchesSearch && matchesFilter;
    });
  }, [subjects, searchQuery, filter]);

  const handleSubjectClick = (subjectId: string) => {
    navigate(`/subject/${subjectId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Study Subjects
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {isPremiumUser 
              ? "Access all subjects with your premium account." 
              : "Free subjects are available. Upgrade to premium for full access."}
          </p>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search subjects..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button 
                className={`px-4 py-3 rounded-xl flex items-center gap-2 text-sm font-medium ${filter === 'all' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
                onClick={() => setFilter('all')}
              >
                <Filter className="w-4 h-4" />
                All
              </button>
              <button 
                className={`px-4 py-3 rounded-xl flex items-center gap-2 text-sm font-medium ${filter === 'free' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
                onClick={() => setFilter('free')}
              >
                <BookOpen className="w-4 h-4" />
                Free
              </button>
              <button 
                className={`px-4 py-3 rounded-xl flex items-center gap-2 text-sm font-medium ${filter === 'premium' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
                onClick={() => setFilter('premium')}
              >
                <Crown className="w-4 h-4" />
                Premium
              </button>
            </div>
          </div>

          {!isPremiumUser && (
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => navigate('/premium')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Crown className="w-4 h-4" />
              Upgrade to Premium for Full Access
            </motion.button>
          )}
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium">Total Subjects</span>
            </div>
            <p className="text-2xl font-bold mt-2">{subjects.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">Free Access</span>
            </div>
            <p className="text-2xl font-bold mt-2">
              {subjects.filter(subject => subject.isFree).length}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium">Premium</span>
            </div>
            <p className="text-2xl font-bold mt-2">
              {subjects.filter(subject => !subject.isFree).length}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Your Progress</span>
            </div>
            <p className="text-2xl font-bold mt-2">42%</p>
          </div>
        </div>

        {/* Subjects Grid */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject, idx) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onClick={() => handleSubjectClick(subject.id)}
                isLocked={!subject.isFree && !isPremiumUser}
                isPremium={!subject.isFree}
                completionPercentage={Math.floor(Math.random() * 100)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">No subjects found matching your criteria</div>
              <button 
                className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg"
                onClick={() => {
                  setSearchQuery('');
                  setFilter('all');
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </motion.section>
      </div>
    </div>
  );
};