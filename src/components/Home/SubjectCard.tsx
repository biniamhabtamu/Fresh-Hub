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
}

interface UserPerformance {
  averageScore: number;
  attempts: number;
  bestScore?: number;
}

const colorThemes = [
  { bg: 'from-blue-100 to-cyan-100', text: 'text-blue-800', border: 'border-blue-200' },
  { bg: 'from-purple-100 to-indigo-100', text: 'text-purple-800', border: 'border-purple-200' },
  { bg: 'from-green-100 to-emerald-100', text: 'text-green-800', border: 'border-green-200' },
  { bg: 'from-amber-100 to-yellow-100', text: 'text-amber-800', border: 'border-amber-200' },
  { bg: 'from-pink-100 to-rose-100', text: 'text-pink-800', border: 'border-pink-200' },
];

export default function SubjectCard({ 
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
    if (isLocked && isPremium) {
      e.preventDefault();
      e.stopPropagation();
      navigate('/premium');
    } else if (!isLocked) {
      onClick();
    }
  };

  const handleLockClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/premium');
  };

  const hasAttempts = performance?.attempts && performance.attempts > 0;
  const displayPercentage = hasAttempts ? performance?.averageScore : completionPercentage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: isLocked ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
      className={`
        relative overflow-hidden h-full min-h-[160px] flex flex-col p-4
        cursor-pointer transition-all duration-200 shadow-sm
        bg-white border ${theme.border}
        rounded-lg
        ${isHovered ? 'shadow-md' : 'shadow-sm'}
      `}
    >
      {/* Lock Icon */}
      {isLocked && (
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-2 right-2 z-10"
          onClick={handleLockClick}
        >
          <div className="p-1.5 bg-white rounded-full shadow-sm border border-gray-200">
            <Lock className="h-4 w-4 text-purple-600" />
          </div>
        </motion.div>
      )}

      {/* Subject Icon */}
      <motion.div 
        animate={{ y: isHovered ? -2 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`
          w-full h-16 mb-3 rounded-lg overflow-hidden flex items-center justify-center
          bg-gradient-to-br ${theme.bg}
          border ${theme.border}
        `}
      >
        <div className="text-3xl">
          {subject.icon}
        </div>
      </motion.div>

      {/* Subject Name */}
      <h3 className={`
        text-sm font-bold mb-1 ${theme.text} truncate
      `}>
        {subject.name}
      </h3>

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden border border-gray-200 mb-2">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${displayPercentage}%` }}
          transition={{ duration: 0.8, type: 'spring' }}
          className={`h-full rounded-full ${
            displayPercentage && displayPercentage >= 80 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
            displayPercentage && displayPercentage >= 50 ? 'bg-gradient-to-r from-yellow-400 to-amber-400' : 
            'bg-gradient-to-r from-red-400 to-pink-400'
          } shadow-sm`}
        />
      </div>

      {/* Stats or CTA */}
      {hasAttempts ? (
        <div className="flex justify-between items-center mt-auto">
          <span className={`text-xs ${theme.text} flex items-center`}>
            <BarChart className="h-3 w-3 mr-1" />
            {performance?.attempts}x
          </span>
          {performance?.bestScore && (
            <span className="text-xs text-amber-600 flex items-center">
              <Trophy className="h-3 w-3 mr-1" />
              {performance.bestScore}%
            </span>
          )}
        </div>
      ) : (
        <motion.div 
          animate={{ y: isHovered ? -1 : 0 }}
          className={`text-center mt-auto py-1 rounded-md ${theme.bg} border ${theme.border} text-xs ${theme.text}`}
        >
          {isLocked ? 'Premium' : 'Start Now'}
        </motion.div>
      )}

      {/* Hover Arrow */}
      {isHovered && !isLocked && (
        <motion.div 
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -5 }}
          className="absolute bottom-2 right-2"
        >
          <ChevronRight className={`h-4 w-4 ${theme.text}`} />
        </motion.div>
      )}

      {/* Premium Badge */}
      {isPremium && !isLocked && (
        <motion.div 
          animate={{ rotate: isHovered ? [0, 10, -10, 0] : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-1 left-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-1 rounded-full shadow-sm"
        >
          <Sparkles className="h-3 w-3" />
        </motion.div>
      )}
    </motion.div>
  );
}