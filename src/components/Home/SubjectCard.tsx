import React, { useEffect, useState } from 'react';
import { BarChart, Loader2, Lock, Star, Trophy, Zap } from 'lucide-react';
import { Subject } from '../../types';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';

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
  lastAttempt?: Date;
}

export default function SubjectCard({ subject, onClick, isLocked, isPremium }: SubjectCardProps) {
  const { currentUser } = useAuth();
  const [performance, setPerformance] = useState<UserPerformance | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserPerformance = async () => {
      if (!currentUser?.uid) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        
        const resultsQuery = query(
          collection(db, 'quizResults'),
          where('userId', '==', currentUser.uid),
          where('subjectId', '==', subject.id)
        );
        
        const querySnapshot = await getDocs(resultsQuery);
        let totalScore = 0;
        let totalAttempts = 0;
        let bestScore = 0;
        let lastAttempt: Date | undefined;
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const score = data.score || 0;
          totalScore += score;
          totalAttempts++;
          
          if (score > bestScore) {
            bestScore = score;
          }
          
          const attemptDate = data.timestamp?.toDate();
          if (attemptDate && (!lastAttempt || attemptDate > lastAttempt)) {
            lastAttempt = attemptDate;
          }
        });
        
        const averageScore = totalAttempts > 0 ? Math.round((totalScore / totalAttempts) * 10) / 10 : 0;
        
        setPerformance({
          averageScore,
          attempts: totalAttempts,
          bestScore: totalAttempts > 0 ? bestScore : undefined,
          lastAttempt
        });
      } catch (error) {
        console.error('Error fetching performance data:', error);
        setError('Failed to load performance data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserPerformance();
  }, [currentUser, subject.id]);

  const getCardGradient = () => {
    if (isLocked) return 'from-gray-100 to-gray-200';
    if (isPremium) return 'from-purple-50 to-indigo-100';
    return 'from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200';
  };

  const getBorderColor = () => {
    if (isLocked) return 'border-gray-300';
    if (isPremium) return 'border-indigo-200';
    return 'border-emerald-200';
  };

  return (
    <div
      onClick={!isLocked ? onClick : undefined}
      className={`
        relative rounded-2xl shadow-lg p-5 transition-all duration-300
        border-2 overflow-hidden min-h-[200px] flex flex-col justify-between
        cursor-pointer hover:shadow-xl ${getBorderColor()}
        bg-gradient-to-br ${getCardGradient()}
        ${!isLocked ? 'hover:scale-[1.02] transform-gpu' : ''}
      `}
      aria-label={`${subject.name} subject card`}
    >
      {/* Lock overlay for premium subjects */}
      {isLocked && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10">
          <Lock className="h-8 w-8 text-gray-600 mb-2" />
          <p className="text-gray-700 font-medium text-center px-4">
            Upgrade to Premium to access this subject
          </p>
        </div>
      )}

      {/* Premium badge */}
      {!isLocked && isPremium && (
        <div className="absolute top-3 right-3">
          <span className="text-xs bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-1 rounded-full font-bold shadow-md flex items-center">
            <Zap className="h-3 w-3 mr-1" />
            PREMIUM
          </span>
        </div>
      )}

      <div className="flex justify-between items-start">
        {/* Subject Icon */}
        <div className={`text-4xl p-3 rounded-lg shadow-sm ${
          isLocked ? 'bg-gray-200' : isPremium ? 'bg-indigo-100 text-indigo-600' : 'bg-white'
        }`}>
          {subject.icon}
        </div>
      </div>

      {/* Subject Name */}
      <h3 className={`text-xl font-bold mt-2 ${
        isLocked ? 'text-gray-600' : isPremium ? 'text-indigo-800' : 'text-gray-800'
      }`}>
        {subject.name}
      </h3>

      {/* Performance Stats */}
      <div className="mt-2 space-y-1">
        {loading && (
          <div className="flex items-center justify-center py-2">
            <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
          </div>
        )}
        
        {error && (
          <div className="text-xs text-red-500 text-center">{error}</div>
        )}
        
        {performance && !loading && performance.attempts > 0 ? (
          <>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    performance.averageScore >= 80 ? 'bg-green-500' :
                    performance.averageScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${performance.averageScore}%` }}
                ></div>
              </div>
              <span className={`font-semibold ${
                performance.averageScore >= 80 ? 'text-green-600' :
                performance.averageScore >= 50 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {performance.averageScore}%
              </span>
            </div>
            
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <div className="flex items-center">
                <BarChart className="h-3 w-3 mr-1" />
                <span>{performance.attempts} attempt{performance.attempts !== 1 ? 's' : ''}</span>
              </div>
              
              {performance.bestScore !== undefined && (
                <div className="flex items-center">
                  <Trophy className="h-3 w-3 mr-1 text-yellow-500" />
                  <span>Best: {performance.bestScore}%</span>
                </div>
              )}
            </div>
            
            {performance.lastAttempt && (
              <div className="text-xs text-gray-500 mt-1">
                Last tried: {new Date(performance.lastAttempt).toLocaleDateString()}
              </div>
            )}
          </>
        ) : (
          !loading && !error && (
            <div className="text-center py-2">
              <div className="text-sm text-gray-500 mb-1">No attempts yet</div>
              <button 
                className={`text-xs px-3 py-1 rounded-full ${
                  isPremium ? 
                    'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' :
                    'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                } transition-colors`}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
              >
                Start Learning
              </button>
            </div>
          )
        )}
      </div>

      {/* Free badge (only show if not premium) */}
      {!isPremium && !isLocked && (
        <div className="self-end mt-4">
          <span className="text-xs bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full font-bold shadow-sm">
            FREE ACCESS
          </span>
        </div>
      )}
    </div>
  );
}