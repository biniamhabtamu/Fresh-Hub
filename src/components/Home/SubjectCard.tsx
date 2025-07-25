import React, { useEffect, useState } from 'react';
import { BarChart, Loader2, Lock, Star, Trophy, Zap, Rocket } from 'lucide-react';
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
    if (isLocked) return 'from-gray-50 to-gray-100';
    if (isPremium) return 'from-purple-50 to-indigo-50';
    return 'from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100';
  };

  const getBorderColor = () => {
    if (isLocked) return 'border-gray-200';
    if (isPremium) return 'border-indigo-100';
    return 'border-emerald-100';
  };

  const hasAttempts = performance?.attempts && performance.attempts > 0;

  return (
    <div
      onClick={!isLocked ? onClick : undefined}
      className={`
        relative rounded-xl shadow-sm p-5 transition-all duration-300
        border overflow-hidden min-h-[200px] flex flex-col justify-between
        cursor-pointer hover:shadow-md ${getBorderColor()}
        bg-gradient-to-br ${getCardGradient()}
        ${!isLocked ? 'hover:scale-[1.02] transform-gpu' : ''}
        ${isLocked ? 'filter blur-[1px]' : ''}
      `}
      aria-label={`${subject.name} subject card`}
    >
      {/* Premium lock indicator (smaller and less intrusive) */}
      {isLocked && (
        <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
          <Lock className="h-4 w-4 text-gray-600" />
        </div>
      )}

      {/* Premium badge */}
      {!isLocked && isPremium && (
        <div className="absolute top-3 right-3">
          <span className="text-xs bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-1 rounded-full font-bold shadow-sm flex items-center">
            <Zap className="h-3 w-3 mr-1" />
            PREMIUM
          </span>
        </div>
      )}

      <div className="flex justify-between items-start">
        {/* Subject Icon */}
        <div className={`text-4xl p-3 rounded-lg shadow-sm ${
          isLocked ? 'bg-gray-100' : isPremium ? 'bg-indigo-50 text-indigo-500' : 'bg-white text-emerald-500'
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
      <div className="mt-2">
        {loading ? (
          <div className="flex items-center justify-center py-2">
            <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
          </div>
        ) : error ? (
          <div className="text-xs text-red-500 text-center">{error}</div>
        ) : hasAttempts ? (
          <>
            <div className="flex items-center space-x-2 text-sm mb-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    performance.averageScore >= 80 ? 'bg-green-400' :
                    performance.averageScore >= 50 ? 'bg-yellow-400' : 'bg-red-400'
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
            
            <div className="flex justify-between text-xs text-gray-600">
              <div className="flex items-center">
                <BarChart className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
                <span>{performance.attempts} attempt{performance.attempts !== 1 ? 's' : ''}</span>
              </div>
              
              {performance.bestScore !== undefined && (
                <div className="flex items-center">
                  <Trophy className="h-3.5 w-3.5 mr-1.5 text-yellow-500" />
                  <span>Best: {performance.bestScore}%</span>
                </div>
              )}
            </div>
            
            {performance.lastAttempt && (
              <div className="text-xs text-gray-400 mt-1.5">
                Last tried: {new Date(performance.lastAttempt).toLocaleDateString()}
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-3">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-full mb-2">
              <Rocket className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-sm text-gray-500 mb-2 text-center">No attempts yet</p>
            {!isLocked && (
              <button 
                className={`text-xs px-4 py-1.5 rounded-full font-medium ${
                  isPremium ? 
                    'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' :
                    'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                } transition-colors shadow-sm`}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
              >
                Start Learning
              </button>
            )}
          </div>
        )}
      </div>

      {/* Free badge (only show if not premium) */}
      {!isPremium && !isLocked && (
        <div className="self-end mt-4">
          <span className="text-xs bg-gradient-to-r from-emerald-400 to-green-500 text-white px-3 py-1 rounded-full font-medium shadow-sm">
            FREE ACCESS
          </span>
        </div>
      )}

      {/* Small premium CTA for locked subjects */}
      {isLocked && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
          <button 
            className="text-xs bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1.5 rounded-full font-medium shadow-sm"
            onClick={(e) => {
              e.stopPropagation();
              // Navigate to premium page
            }}
          >
            Unlock Premium
          </button>
        </div>
      )}
    </div>
  );
}