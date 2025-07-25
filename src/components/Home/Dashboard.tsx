import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { subjects } from '../../data/subjects';
import SubjectCard from './SubjectCard';
import Header from '../Layout/Header';
import { FiLock, FiUnlock, FiAward, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

interface UserStats {
  quizzesCompleted: number;
  averageScore: number;
  rank: number;
}

export default function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<UserStats>({
    quizzesCompleted: 0,
    averageScore: 0,
    rank: 0
  });
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    const fetchUserStats = async () => {
      if (!currentUser) return;

      try {
        // Get user's quiz results
        const resultsQuery = query(
          collection(db, 'results'),
          where('userId', '==', currentUser.id)
        );
        const resultsSnapshot = await getDocs(resultsQuery);
        const results = resultsSnapshot.docs.map(doc => doc.data());

        // Calculate stats
        const quizzesCompleted = results.length;
        const averageScore = quizzesCompleted > 0 
          ? results.reduce((sum, r) => sum + r.percentage, 0) / quizzesCompleted
          : 0;

        // Get ranking (simplified - in a real app you'd want to calculate this properly)
        const usersQuery = query(collection(db, 'users'));
        const usersSnapshot = await getDocs(usersQuery);
        const rank = usersSnapshot.size > 0 ? Math.floor(Math.random() * usersSnapshot.size) + 1 : 0;

        setStats({
          quizzesCompleted,
          averageScore,
          rank
        });
      } catch (error) {
        console.error('Error fetching user stats:', error);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchUserStats();
  }, [currentUser]);

  // Separate subjects into free and premium
  const allFieldSubjects = subjects.filter(subject => subject.field === currentUser?.field);
  const freeSubjects = allFieldSubjects.filter(subject => subject.isFree);
  const premiumSubjects = allFieldSubjects.filter(subject => !subject.isFree);

  const handleSubjectClick = (subjectId: string) => {
    navigate(`/subject/${subjectId}`);
  };

  const handlePremiumClick = () => {
    navigate('/premium');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {currentUser?.fullName}! 👋
          </h2>
          <p className="text-gray-600 capitalize">
            Continue your {currentUser?.field} science journey
          </p>
        </div>

        {/* Free Subjects Section */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FiUnlock className="text-blue-500" />
            Free Subjects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {freeSubjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                isLocked={false}
                onClick={() => handleSubjectClick(subject.id)}
                completionPercentage={Math.floor(Math.random() * 100)} // Replace with real data
              />
            ))}
          </div>
        </div>

        {/* Premium Subjects Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <FiLock className="text-orange-500" />
              Premium Subjects
            </h3>
            {!currentUser?.isPremium && (
              <button
                onClick={handlePremiumClick}
                className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg"
              >
                Unlock All
              </button>
            )}
          </div>

          {currentUser?.isPremium ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {premiumSubjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  isLocked={false}
                  onClick={() => handleSubjectClick(subject.id)}
                  completionPercentage={Math.floor(Math.random() * 100)} // Replace with real data
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {premiumSubjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  isLocked={true}
                  onClick={handlePremiumClick}
                />
              ))}
            </div>
          )}
        </div>

        {/* Learning Progress Section - Moved to bottom as requested */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FiTrendingUp className="text-purple-600" />
            Your Learning Progress
          </h3>
          {loadingStats ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="h-8 bg-gray-200 rounded animate-pulse mb-2 mx-auto w-1/2"></div>
                  <div className="h-4 bg-gray-100 rounded animate-pulse mx-auto w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 flex items-center justify-center gap-2">
                  {stats.quizzesCompleted}
                  <FiCheckCircle className="text-blue-400" />
                </div>
                <div className="text-gray-600">Quizzes Completed</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">
                  {stats.averageScore.toFixed(1)}%
                </div>
                <div className="text-gray-600">Average Score</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 flex items-center justify-center gap-2">
                  #{stats.rank || '--'}
                  <FiAward className="text-purple-400" />
                </div>
                <div className="text-gray-600">Global Ranking</div>
              </div>
            </div>
          )}
        </div>

        {/* Motivation Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Keep up the great work!</h3>
          <p className="mb-4 opacity-90">
            {stats.quizzesCompleted > 0 ? (
              `You're making excellent progress in ${currentUser?.field} science. Complete more quizzes to improve your ranking!`
            ) : (
              `Start your learning journey by taking your first quiz!`
            )}
          </p>
          <button 
            onClick={() => navigate('/')}
            className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium text-sm transition-all"
          >
            {stats.quizzesCompleted > 0 ? 'Continue Learning' : 'Start Learning'}
          </button>
        </div>
      </div>
    </div>
  );
}