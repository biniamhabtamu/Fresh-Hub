import React, { useEffect, useState } from 'react';
import { BarChart, Loader2 } from 'lucide-react';
import { Subject } from '../../types';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
}

interface UserPerformance {
  averageScore: number;
  attempts: number;
  bestScore?: number;
  lastAttempt?: Date;
}

export default function SubjectCard({ subject, onClick }: SubjectCardProps) {
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

  return (
    <div
      onClick={onClick}
      className={`
        relative bg-gradient-to-br rounded-2xl shadow-xl p-5 transition-all duration-300
        border-2 overflow-hidden min-h-[180px] flex flex-col justify-between
        cursor-pointer hover:scale-[1.03] hover:shadow-2xl border-transparent
        from-green-50 to-emerald-100 hover:from-green-100 to-emerald-200
        transform-gpu transition-transform duration-300
      `}
      aria-label={`${subject.name} subject card`}
    >
      <div className="flex justify-between items-start">
        {/* Subject Icon */}
        <div className="text-4xl p-3 rounded-lg bg-white shadow-sm">
          {subject.icon}
        </div>
      </div>

      {/* Subject Name */}
      <h3 className="text-xl font-bold mt-2 text-gray-800">
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

      {/* Free Badge */}
      <div className="self-end mt-4">
        <span className="text-xs bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1.5 rounded-full font-bold shadow-sm">
          FREE ACCESS
        </span>
      </div>
    </div>
  );
}