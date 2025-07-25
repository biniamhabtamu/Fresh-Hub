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
}

interface UserPerformance {
  averageScore: number;
  attempts: number;
  bestScore?: number;
}

export default function SubjectCard({ subject, onClick, isLocked, isPremium }: SubjectCardProps) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [performance, setPerformance] = useState<UserPerformance | null>(null);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleLockClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/premium');
  };

  const hasAttempts = performance?.attempts && performance.attempts > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: isLocked ? 1 : 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={!isLocked ? onClick : undefined}
      className={`
        relative overflow-hidden min-h-[220px] flex flex-col p-6
        ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}
        transition-all duration-300 shadow-xl
        backdrop-blur-sm bg-white/70 border border-white/30
        ${isPremium ? 
          'shadow-purple-200/50 hover:shadow-purple-300/50' : 
          'shadow-blue-200/50 hover:shadow-blue-300/50'
        }
        rounded-2xl
      `}
      style={{
        boxShadow: isHovered && !isLocked ? 
          `0 10px 25px -5px ${isPremium ? 'rgba(168, 85, 247, 0.3)' : 'rgba(59, 130, 246, 0.3)'}` : 
          '0 4px 15px -5px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Glass Morphism Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-sm rounded-2xl" />
      
      {/* Premium Glow Effect */}
      {isPremium && !isLocked && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-indigo-400/10 rounded-2xl" />
      )}

      {/* Lock Overlay */}
      {isLocked && (
        <div 
          className="absolute inset-0 flex items-center justify-center z-10 bg-white/90 backdrop-blur-sm"
          onClick={handleLockClick}
        >
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="text-center p-6 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg border border-gray-100"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full inline-flex mb-4 shadow-lg">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-1">Premium Content</h4>
            <p className="text-gray-600 mb-4">Unlock full access to this subject</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg transition-all"
            >
              Upgrade Now
            </motion.button>
          </motion.div>
        </div>
      )}

      {/* Premium Crown Badge */}
      {isPremium && !isLocked && (
        <motion.div 
          animate={{ rotate: isHovered ? [0, 15, -15, 0] : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-2 rounded-full shadow-lg"
        >
          <Sparkles className="h-4 w-4" />
        </motion.div>
      )}

      {/* Subject Icon */}
      <motion.div 
        animate={{ y: isHovered && !isLocked ? -5 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`
          text-5xl p-4 rounded-xl mb-4 self-start
          ${isPremium ? 
            'bg-gradient-to-br from-purple-100 to-indigo-100 text-indigo-600' : 
            'bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600'
          }
          shadow-inner border border-white/50
        `}
      >
        {subject.icon}
      </motion.div>

      {/* Subject Name */}
      <h3 className={`
        text-xl font-bold mb-2
        ${isPremium ? 'text-indigo-900' : 'text-blue-900'}
      `}>
        {subject.name}
      </h3>

      {/* Performance Stats */}
      <div className="mt-auto">
        {hasAttempts ? (
          <>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-full bg-white/80 rounded-full h-2.5 shadow-inner overflow-hidden border border-white/50">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${performance?.averageScore}%` }}
                  transition={{ duration: 0.8, type: 'spring' }}
                  className={`h-full rounded-full ${
                    performance?.averageScore && performance.averageScore >= 80 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                    performance?.averageScore && performance.averageScore >= 50 ? 'bg-gradient-to-r from-yellow-400 to-amber-400' : 
                    'bg-gradient-to-r from-red-400 to-pink-400'
                  } shadow-md`}
                />
              </div>
              <span className={`font-bold ${
                performance?.averageScore && performance.averageScore >= 80 ? 'text-green-600' :
                performance?.averageScore && performance.averageScore >= 50 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {performance?.averageScore}%
              </span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className={`flex items-center ${
                isPremium ? 'text-indigo-700' : 'text-blue-700'
              }`}>
                <BarChart className="h-4 w-4 mr-1.5" />
                {performance?.attempts} attempt{performance?.attempts !== 1 ? 's' : ''}
              </span>
              
              {performance?.bestScore && (
                <span className="flex items-center text-amber-600">
                  <Trophy className="h-4 w-4 mr-1.5" />
                  Best: {performance.bestScore}%
                </span>
              )}
            </div>
          </>
        ) : (
          <motion.div 
            animate={{ y: isHovered && !isLocked ? -3 : 0 }}
            className={`text-center py-3 rounded-lg ${
              isPremium ? 'bg-indigo-100/30' : 'bg-blue-100/30'
            } backdrop-blur-sm border border-white/50`}
          >
            <p className={`mb-2 ${isPremium ? 'text-indigo-700' : 'text-blue-700'}`}>
              No attempts yet
            </p>
            {!isLocked && (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center mx-auto ${
                  isPremium ? 
                    'bg-gradient-to-r from-purple-100 to-indigo-100 text-indigo-700 hover:from-purple-200 hover:to-indigo-200' :
                    'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 hover:from-blue-200 hover:to-cyan-200'
                } transition-all shadow-sm`}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
              >
                Start Learning <ChevronRight className="h-4 w-4 ml-1" />
              </motion.button>
            )}
          </motion.div>
        )}
      </div>

      {/* Hover Arrow */}
      {!isLocked && isHovered && (
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="absolute bottom-4 right-4"
        >
          <ChevronRight className={`h-5 w-5 ${
            isPremium ? 'text-indigo-500' : 'text-blue-500'
          }`} />
        </motion.div>
      )}
    </motion.div>
  );
}