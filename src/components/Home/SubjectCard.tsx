import React, { useEffect, useState } from 'react';
import { BarChart, Loader2, Lock, Trophy, Sparkles } from 'lucide-react';
import { Subject } from '../../types';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPerformance = async () => {
      if (!currentUser?.uid) return;
      
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

  const handleLockClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/premium');
  };

  const hasAttempts = performance?.attempts && performance.attempts > 0;

  return (
    <div
      onClick={!isLocked ? onClick : undefined}
      className={`
        relative overflow-hidden min-h-[200px] flex flex-col p-6
        ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-[1.02]'}
        transition-all duration-300 shadow-lg border-2
        ${isPremium ? 
          'bg-gradient-to-br from-purple-50 to-indigo-50 border-indigo-200' : 
          'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200'
        }
        rounded-2xl
      `}
    >
      {/* Premium Glow Effect */}
      {isPremium && !isLocked && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-2xl" />
      )}

      {/* Lock Overlay */}
      {isLocked && (
        <div 
          className="absolute inset-0 flex items-center justify-center z-10 bg-white/90"
          onClick={handleLockClick}
        >
          <div className="text-center p-6 rounded-xl bg-white shadow-lg border border-gray-100">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full inline-flex mb-4 shadow-md">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-1">Premium Content</h4>
            <p className="text-gray-600 mb-4">Unlock full access</p>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg transition-shadow">
              Upgrade Now
            </button>
          </div>
        </div>
      )}

      {/* Premium Crown Badge */}
      {isPremium && !isLocked && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-2 rounded-full shadow-md">
          <Sparkles className="h-4 w-4" />
        </div>
      )}

      {/* Subject Icon */}
      <div className={`
        text-5xl p-4 rounded-xl mb-4 self-start
        ${isPremium ? 'bg-indigo-100 text-indigo-600' : 'bg-blue-100 text-blue-600'}
        shadow-inner
      `}>
        {subject.icon}
      </div>

      {/* Subject Name */}
      <h3 className={`
        text-xl font-bold mb-2
        ${isPremium ? 'text-indigo-900' : 'text-blue-900'}
      `}>
        {subject.name}
      </h3>

      {/* Performance Stats */}
      <div className="mt-auto">
        {loading ? (
          <div className="flex justify-center py-3">
            <Loader2 className="h-5 w-5 animate-spin text-blue-400" />
          </div>
        ) : hasAttempts ? (
          <>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-full bg-white/80 rounded-full h-2.5 shadow-inner overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    performance.averageScore >= 80 ? 'bg-green-400' :
                    performance.averageScore >= 50 ? 'bg-yellow-400' : 'bg-red-400'
                  }`}
                  style={{ width: `${performance.averageScore}%` }}
                />
              </div>
              <span className={`font-bold ${
                performance.averageScore >= 80 ? 'text-green-600' :
                performance.averageScore >= 50 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {performance.averageScore}%
              </span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className={`flex items-center ${
                isPremium ? 'text-indigo-700' : 'text-blue-700'
              }`}>
                <BarChart className="h-4 w-4 mr-1.5" />
                {performance.attempts} attempt{performance.attempts !== 1 ? 's' : ''}
              </span>
              
              {performance.bestScore && (
                <span className="flex items-center text-amber-600">
                  <Trophy className="h-4 w-4 mr-1.5" />
                  Best: {performance.bestScore}%
                </span>
              )}
            </div>
          </>
        ) : (
          <div className={`text-center py-3 rounded-lg ${
            isPremium ? 'bg-indigo-100/50' : 'bg-blue-100/50'
          }`}>
            <p className={`mb-2 ${isPremium ? 'text-indigo-700' : 'text-blue-700'}`}>
              No attempts yet
            </p>
            {!isLocked && (
              <button 
                className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                  isPremium ? 
                    'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' :
                    'bg-blue-100 text-blue-700 hover:bg-blue-200'
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
    </div>
  );
}