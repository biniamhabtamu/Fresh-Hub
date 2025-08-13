import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BarChart, Lock, Trophy, Sparkles, ChevronRight } from 'lucide-react';
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
import { motion } from 'framer-motion';

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

/**
 * Mobile-first, responsive, touch-friendly SubjectCard
 * - Free users clicking premium -> navigate('/premium')
 * - Paid users open subject with onClick()
 * - Reads user's subscription status from users/{uid} (adjust to your schema)
 * - Responsive Tailwind classes, accessible keyboard handlers
 */

const colorThemes = [
  { bg: 'from-blue-100 to-cyan-100', text: 'text-blue-800', border: 'border-blue-200' },
  { bg: 'from-purple-100 to-indigo-100', text: 'text-purple-800', border: 'border-purple-200' },
  { bg: 'from-green-100 to-emerald-100', text: 'text-green-800', border: 'border-green-200' },
  { bg: 'from-amber-100 to-yellow-100', text: 'text-amber-800', border: 'border-amber-200' },
  { bg: 'from-pink-100 to-rose-100', text: 'text-pink-800', border: 'border-pink-200' },
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
  // true = free user (no premium). We'll try to detect from Firestore
  const [isFreeUser, setIsFreeUser] = useState(true);

  // Choose a deterministic theme per subject so cards don't jump on rerenders
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
        // --- Fetch quiz performance for this user & subject
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

        // --- Try to fetch user subscription status from users/{uid}
        // Adjust field names to your schema (isPremium, subscriptionStatus, plan, etc.)
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
            // If no user document, assume free
            setIsFreeUser(true);
          }
        } catch (subErr) {
          // If subscription fetch fails, keep default (free) to be safe
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

  // Performance / display percentage safe fallback
  const hasAttempts = Boolean(performance?.attempts && performance.attempts > 0);
  const displayPercentage = Number(hasAttempts ? performance?.averageScore ?? 0 : completionPercentage ?? 0);

  // Card click handler: free users clicking premium -> /premium
  const handleCardClick = useCallback(
    (e?: React.MouseEvent | React.KeyboardEvent) => {
      // Prevent default if called from keyboard or mouse and we will navigate
      if (isPremium && isFreeUser) {
        // navigate to upgrade page
        navigate('/premium');
        return;
      }

      // If card is locked and not premium for this user, send to premium as well
      if (isLocked && isFreeUser) {
        navigate('/premium');
        return;
      }

      // otherwise open the subject using supplied handler
      if (!isLocked) {
        onClick();
      }
    },
    [isPremium, isFreeUser, isLocked, navigate, onClick]
  );

  // Lock-icon tap: explicit affordance for upgrade
  const handleLockClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isFreeUser) navigate('/premium');
    },
    [isFreeUser, navigate]
  );

  // keyboard accessibility: Enter or Space should activate card
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
        relative flex flex-col min-h-[140px] sm:min-h-[160px] w-full p-3 sm:p-4
        bg-white border ${theme.border} rounded-lg
        cursor-pointer outline-none
        transition-shadow duration-200
        ${isHovered ? 'shadow-md' : 'shadow-sm'}
        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300
      `}
    >
      {/* Lock / Premium Icon (touch-friendly) */}
      {isLocked && (
        <motion.button
          onClick={handleLockClick}
          whileTap={{ scale: 0.95 }}
          aria-label="Upgrade to access"
          title="Upgrade to access"
          className="absolute top-3 right-3 z-20 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/90 border border-gray-200 shadow-sm"
        >
          <Lock className="h-4 w-4 text-purple-600" />
        </motion.button>
      )}

      {/* Premium Badge (also shows for premium items even if unlocked) */}
      {isPremium && (
        <motion.div
          animate={{ rotate: isHovered ? [0, 7, -7, 0] : 0 }}
          transition={{ duration: 0.45 }}
          className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-sm"
        >
          <Sparkles className="h-3 w-3" />
          <span className="hidden sm:inline">Premium</span>
        </motion.div>
      )}

      {/* Icon / Image area */}
      <motion.div
        animate={{ y: isHovered ? -2 : 0 }}
        transition={{ type: 'spring', stiffness: 280 }}
        className={`
          w-full flex items-center justify-center rounded-lg mb-3
          h-14 sm:h-16 overflow-hidden border ${theme.border}
          bg-gradient-to-br ${theme.bg}
        `}
      >
        <div className="text-2xl sm:text-3xl select-none">{subject.icon}</div>
      </motion.div>

      {/* Title */}
      <h3 className={`truncate text-sm sm:text-base font-semibold ${theme.text} mb-1`}>
        {subject.name}
      </h3>

      {/* Progress / bar */}
      <div className="w-full mt-1">
        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden border border-gray-200">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${Math.max(0, Math.min(100, displayPercentage))}%` }}
            transition={{ duration: 0.8, type: 'spring' }}
            className={`
              h-full rounded-full shadow-sm
              ${displayPercentage >= 80 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                displayPercentage >= 50 ? 'bg-gradient-to-r from-yellow-400 to-amber-400' :
                  'bg-gradient-to-r from-red-400 to-pink-400'}
            `}
            aria-valuenow={displayPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
          />
        </div>
      </div>

      {/* Stats / CTA - aligned bottom */}
      <div className="mt-3 flex items-center justify-between gap-2">
        {hasAttempts ? (
          <>
            <div className={`flex items-center gap-2 ${theme.text} text-xs sm:text-sm`}>
              <BarChart className="h-4 w-4" />
              <span>{performance?.attempts} attempts</span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-600">
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
              text-center py-1 px-3 rounded-md text-xs sm:text-sm font-medium
              border ${theme.border} ${theme.text}
              bg-gradient-to-r ${theme.bg} w-full
            `}
          >
            {isPremium && isFreeUser ? 'Premium — Upgrade to Open' :
              isLocked ? 'Locked' : 'Start Now'}
          </div>
        )}
      </div>

      {/* Hover arrow for non-locked, non-premium (desktop/touch hint) */}
      {!isLocked && !(isPremium && isFreeUser) && (
        <motion.div
          initial={{ opacity: 0, x: 4 }}
          animate={{ opacity: isHovered ? 1 : 0.95, x: 0 }}
          className="absolute bottom-3 right-3"
          aria-hidden
        >
          <ChevronRight className={`h-4 w-4 ${theme.text}`} />
        </motion.div>
      )}
    </motion.div>
  );
});
