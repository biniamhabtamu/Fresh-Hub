import React, { useEffect, useState } from 'react';
import { BarChart, Loader2, Lock, Trophy } from 'lucide-react';
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

  useEffect(() => {
    const fetchUserPerformance = async () => {
      if (!currentUser?.uid) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchUserPerformance();
  }, [currentUser, subject.id]);

  const hasAttempts = performance?.attempts && performance.attempts > 0;

  return (
    <div
      onClick={!isLocked ? onClick : undefined}
      className={`
        relative bg-white rounded-xl shadow-md p-5 min-h-[180px] flex flex-col
        border-2 ${isLocked ? 'border-gray-200' : 'border-transparent'}
        ${!isLocked ? 'hover:shadow-lg cursor-pointer transition-all' : ''}
      `}
    >
      {/* Lock icon for premium subjects */}
      {isPremium && (
        <div className={`absolute top-3 right-3 p-1.5 rounded-full ${
          isLocked ? 'bg-gray-100' : 'bg-indigo-100'
        }`}>
          <Lock className={`h-4 w-4 ${
            isLocked ? 'text-gray-500' : 'text-indigo-600'
          }`} />
        </div>
      )}

      {/* Subject Icon */}
      <div className={`text-4xl p-3 rounded-lg ${
        isLocked ? 'bg-gray-100' : 'bg-blue-50 text-blue-500'
      }`}>
        {subject.icon}
      </div>

      {/* Subject Name */}
      <h3 className={`text-xl font-bold mt-2 ${
        isLocked ? 'text-gray-500' : 'text-gray-800'
      }`}>
        {subject.name}
      </h3>

      {/* Performance Stats */}
      <div className="mt-2">
        {loading ? (
          <div className="flex justify-center py-2">
            <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
          </div>
        ) : hasAttempts ? (
          <>
            <div className="flex items-center gap-2 text-sm">
              <BarChart className="h-4 w-4 text-blue-500" />
              <span>Avg: <strong>{performance.averageScore}%</strong></span>
              <span className="text-gray-500">({performance.attempts} tries)</span>
            </div>
            {performance.bestScore && (
              <div className="flex items-center gap-2 text-sm mt-1">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span>Best: <strong>{performance.bestScore}%</strong></span>
              </div>
            )}
          </>
        ) : (
          <div className="text-sm text-gray-500 py-2">
            No attempts yet
          </div>
        )}
      </div>

      {/* Premium CTA for locked subjects */}
      {isLocked && (
        <button 
          className="mt-2 text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1.5 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            // Navigate to premium page
          }}
        >
          Unlock Premium
        </button>
      )}
    </div>
  );
}