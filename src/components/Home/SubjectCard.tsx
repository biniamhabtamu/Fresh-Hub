import React, { useEffect, useState } from 'react';
import { Lock, Crown, BarChart, Loader2 } from 'lucide-react';
import { Subject } from '../../types';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';

interface SubjectCardProps {
  subject: Subject;
  isPremium: boolean;
  onClick: () => void;
}

interface UserPerformance {
  averageScore: number;
  attempts: number;
  bestScore?: number;
  lastAttempt?: Date;
}

export default function SubjectCard({ subject, isPremium, onClick }: SubjectCardProps) {
  const { currentUser } = useAuth();
  const [performance, setPerformance] = useState<UserPerformance | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isAccessible = subject.isFree || isPremium;

  useEffect(() => {
    const fetchUserPerformance = async () => {
      if (!currentUser?.uid) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        
        // Check if user has premium access
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        const userIsPremium = userDoc.exists() && userDoc.data()?.isPremium;
        
        // Only fetch performance if subject is accessible
        if (subject.isFree || userIsPremium) {
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
            
            // Track best score
            if (score > bestScore) {
              bestScore = score;
            }
            
            // Track most recent attempt
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
        }
      } catch (error) {
        console.error('Error fetching performance data:', error);
        setError('Failed to load performance data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserPerformance();
  }, [currentUser, subject.id, subject.isFree, isPremium]);

  const handleClick = () => {
    if (isAccessible) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative bg-gradient-to-br rounded-2xl shadow-xl p-5 transition-all duration-300
        border-2 overflow-hidden min-h-[180px] flex flex-col justify-between
        ${isAccessible 
          ? `cursor-pointer hover:scale-[1.03] hover:shadow-2xl border-transparent
             ${subject.isFree ? 'from-green-50 to-emerald-100' : 'from-purple-50 to-indigo-100'} 
             hover:${subject.isFree ? 'from-green-100 to-emerald-200' : 'from-purple-100 to-indigo-200'}`
          : 'opacity-80 cursor-not-allowed from-gray-100 to-gray-200 border-gray-200'
        }
        transform-gpu transition-transform duration-300
      `}
      aria-label={`${subject.name} ${isAccessible ? '' : 'locked '}subject card`}
    >
      {/* Shimmer effect for premium subjects */}
      {!subject.isFree && isAccessible && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400" />
      )}
      
      {/* Lock overlay for inaccessible content */}
      {!isAccessible && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg">
            <Lock size={24} className="text-white" />
          </div>
        </div>
      )}

      <div className="flex justify-between items-start">
        {/* Subject Icon */}
        <div className="text-4xl p-3 rounded-lg bg-white shadow-sm">
          {subject.icon}
        </div>
        
        {/* Premium Indicator */}
        {!subject.isFree && (
          <div className="flex items-center space-x-1 bg-gradient-to-br from-amber-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold">
            <Crown size={14} className="text-yellow-200" />
            <span>PREMIUM</span>
          </div>
        )}
      </div>

      {/* Subject Name */}
      <h3 className="text-xl font-bold mt-2 text-gray-800">
        {subject.name}
      </h3>

      {/* Performance Stats */}
      {isAccessible && (
        <div className="mt-2 space-y-1">
          {loading && (
            <div className="flex items-center justify-center py-2">
              <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
            </div>
          )}
          
          {error && (
            <div className="text-xs text-red-500 text-center">{error}</div>
          )}
          
          {performance && !loading && (
            <>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <BarChart size={16} className="text-blue-500 flex-shrink-0" />
                <div className="flex-1">
                  <span>Avg: <strong className="text-blue-600">{performance.averageScore}%</strong></span>
                  {performance.attempts > 0 && (
                    <span className="ml-2 text-xs text-gray-500">({performance.attempts} attempts)</span>
                  )}
                </div>
              </div>
              
              {performance.bestScore !== undefined && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="h-4 w-4 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span>Best: <strong className="text-yellow-600">{performance.bestScore}%</strong></span>
                </div>
              )}
              
              {performance.lastAttempt && (
                <div className="text-xs text-gray-500 mt-1">
                  Last tried: {new Date(performance.lastAttempt).toLocaleDateString()}
                </div>
              )}
            </>
          )}
          
          {!performance && !loading && !error && (
            <div className="text-sm text-gray-500 text-center py-1">No attempts yet</div>
          )}
        </div>
      )}

      {/* Free Badge */}
      {subject.isFree && (
        <div className="self-end mt-4">
          <span className="text-xs bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1.5 rounded-full font-bold shadow-sm">
            FREE ACCESS
          </span>
        </div>
      )}
    </div>
  );
}