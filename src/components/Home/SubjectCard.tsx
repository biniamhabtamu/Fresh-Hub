import React, { useEffect, useState } from 'react';
import { BarChart, Lock, Trophy, Sparkles, ChevronRight } from 'lucide-react';
import { Subject } from '../../types';
import { collection, query, where, getDocs } from 'firebase/firestore';
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
  hasPremiumAccess?: boolean;
}

interface UserPerformance {
  averageScore: number;
  attempts: number;
  bestScore?: number;
}

const colorThemes = [
  { 
    bg: 'from-blue-200 to-cyan-300', 
    text: 'text-blue-800', 
    border: 'border-blue-300',
    progress: 'from-blue-500 to-cyan-500',
    lock: 'text-blue-600'
  },
  { 
    bg: 'from-purple-200 to-indigo-300', 
    text: 'text-purple-800', 
    border: 'border-purple-300',
    progress: 'from-purple-500 to-indigo-500',
    lock: 'text-purple-600'
  },
  { 
    bg: 'from-green-200 to-emerald-300', 
    text: 'text-green-800', 
    border: 'border-green-300',
    progress: 'from-green-500 to-emerald-500',
    lock: 'text-green-600'
  },
  { 
    bg: 'from-amber-200 to-yellow-300', 
    text: 'text-amber-800', 
    border: 'border-amber-300',
    progress: 'from-amber-500 to-yellow-500',
    lock: 'text-amber-600'
  },
  { 
    bg: 'from-pink-200 to-rose-300', 
    text: 'text-pink-800', 
    border: 'border-pink-300',
    progress: 'from-pink-500 to-rose-500',
    lock: 'text-pink-600'
  },
];

export default function SubjectCard({
  subject,
  onClick,
  isLocked,
  isPremium = false,
  completionPercentage = 0,
  hasPremiumAccess = false
}: SubjectCardProps) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [performance, setPerformance] = useState<UserPerformance | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [theme] = useState(colorThemes[Math.floor(Math.random() * colorThemes.length)]);

  useEffect(() => {
    const fetchUserPerformance = async () => {
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
      
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const score = data.score || 0;
          totalScore += score;
          totalAttempts++;
          if (score > bestScore) bestScore = score;
        });
      
        setPerformance({
          averageScore: totalAttempts > 0 ? Math.round((totalScore / totalAttempts) * 10) / 10 : 0,
          attempts: totalAttempts,
          bestScore: totalAttempts > 0 ? bestScore : undefined
        });
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchUserPerformance();
  }, [currentUser, subject.id]);

  const handleCardClick = (e: React.MouseEvent) => {
    if (isLocked && isPremium && !hasPremiumAccess) {
      e.preventDefault();
      e.stopPropagation();
      navigate('/premium');
    } else if (!isLocked || (isPremium && hasPremiumAccess)) {
      onClick();
    }
  };

  const handleLockClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/premium');
  };

  const shouldShowLock = isLocked && isPremium && !hasPremiumAccess;
  const hasAttempts = performance?.attempts && performance.attempts > 0;
  const displayPercentage = hasAttempts ? performance?.averageScore : completionPercentage;

  // Determine if we should show progress or CTA
  const showProgress = hasAttempts || completionPercentage > 0;
  const showCTA = !hasAttempts && completionPercentage === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: shouldShowLock ? 1 : 1.03 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
      className={`
        relative overflow-hidden h-full min-h-[180px] flex flex-col p-5
        cursor-pointer transition-all duration-300 shadow-sm
        bg-white border ${theme.border}
        rounded-xl
        ${isHovered ? 'shadow-lg ring-2 ring-opacity-30 ' + theme.border : 'shadow-md'}
        ${shouldShowLock ? 'opacity-90' : ''}
        group
      `}
    >

      {/* Enhanced Lock Icon - Top Right */}
      {shouldShowLock && (
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 z-20"
          onClick={handleLockClick}
        >
          <div className="p-2 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full shadow-lg border border-amber-200 flex items-center justify-center">
            <Lock className="h-5 w-5 text-amber-600" />
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
          </div>
        </motion.div>
      )}

      {/* Subject Icon with Enhanced Styling */}
      <motion.div
        animate={{ y: isHovered ? -5 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`
          w-16 h-16 mb-4 rounded-2xl overflow-hidden flex items-center justify-center
          bg-gradient-to-br ${theme.bg}
          border-2 ${theme.border}
          shadow-inner
          group-hover:shadow-md
          ${shouldShowLock ? 'brightness-90' : ''}
          mx-auto
        `}
      >
        <div className="text-3xl">
          {subject.icon}
        </div>
      </motion.div>

      {/* Subject Name */}
      <h3 className={`
        text-lg font-bold mb-2 ${theme.text} text-center
        group-hover:underline decoration-2 underline-offset-2
      `}>
        {subject.name}
      </h3>

      {/* Enhanced Progress Bar */}
      {showProgress && (
        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden border border-gray-200 mb-3 shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${displayPercentage}%` }}
            transition={{ duration: 0.8, type: 'spring' }}
            className={`h-full rounded-full bg-gradient-to-r ${theme.progress} shadow-sm`}
          />
        </div>
      )}

      {/* Stats or CTA with Enhanced Design */}
      <div className="mt-auto w-full">
        {hasAttempts ? (
          <div className="flex justify-between items-center px-1">
            <span className={`text-sm font-medium ${theme.text} flex items-center`}>
              <BarChart className="h-4 w-4 mr-2" />
              <span className="font-bold">{performance?.attempts}</span> attempts
            </span>
            {performance?.bestScore && (
              <span className="text-sm font-medium text-amber-600 flex items-center">
                <Trophy className="h-4 w-4 mr-2" />
                Best: <span className="font-bold ml-1">{performance.bestScore}%</span>
              </span>
            )}
          </div>
        ) : showCTA ? (
          <motion.div
            animate={{ y: isHovered ? -2 : 0 }}
            className={`text-center py-2 rounded-xl ${theme.bg} border ${theme.border} text-sm font-semibold ${theme.text} shadow-sm group-hover:shadow-md`}
          >
            {shouldShowLock ? 'Unlock Premium →' : 'Start Learning →'}
          </motion.div>
        ) : null}
      </div>

      {/* Enhanced Hover Arrow */}
      {isHovered && !shouldShowLock && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="absolute bottom-3 right-3"
        >
          <ChevronRight className={`h-5 w-5 ${theme.text} bg-white/80 rounded-full p-1 shadow-lg`} />
        </motion.div>
      )}

      {/* Enhanced Premium Badge */}
      {isPremium && !shouldShowLock && (
        <motion.div
          animate={{ rotate: isHovered ? [0, 15, -15, 0] : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-lg shadow-md flex items-center"
        >
          <Sparkles className="h-4 w-4 mr-1" />
          <span className="text-xs font-bold">Premium</span>
        </motion.div>
      )}

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute right-0 top-0 w-20 h-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
      </div>
    </motion.div>
  );
}