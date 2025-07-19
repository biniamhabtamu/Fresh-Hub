import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../Layout/Header';
import { Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardEntry {
  id: string;
  fullName: string;
  field: string;
  averageScore: number;
  totalQuizzes: number;
  rank: number;
}

export default function LeaderboardPage() {
  const { currentUser } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeaderboard();
  }, [currentUser]);

  const loadLeaderboard = async () => {
    if (!currentUser) return;

    try {
      // Get all users in the same field
      const usersQuery = query(
        collection(db, 'users'),
        where('field', '==', currentUser.field)
      );
      const usersSnapshot = await getDocs(usersQuery);
      const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Get all results
      const resultsSnapshot = await getDocs(collection(db, 'results'));
      const results = resultsSnapshot.docs.map(doc => doc.data());

      // Calculate averages for each user
      const leaderboardData = users.map(user => {
        const userResults = results.filter(r => r.userId === user.id);
        const averageScore = userResults.length > 0
          ? userResults.reduce((sum, r) => sum + r.percentage, 0) / userResults.length
          : 0;

        return {
          id: user.id,
          fullName: user.fullName,
          field: user.field,
          averageScore,
          totalQuizzes: userResults.length
        };
      });

      // Sort by average score and add ranks
      const sortedLeaderboard = leaderboardData
        .sort((a, b) => b.averageScore - a.averageScore)
        .map((entry, index) => ({
          ...entry,
          rank: index + 1
        }));

      setLeaderboard(sortedLeaderboard);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy size={24} className="text-yellow-500" />;
    if (rank === 2) return <Medal size={24} className="text-gray-400" />;
    if (rank === 3) return <Award size={24} className="text-orange-500" />;
    return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
  };

  const getRankStyle = (rank: number, isCurrentUser: boolean) => {
    let baseStyle = "bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl ";
    
    if (isCurrentUser) {
      baseStyle += "ring-2 ring-blue-500 bg-blue-50 ";
    }
    
    if (rank === 1) return baseStyle + "border-l-4 border-yellow-500";
    if (rank === 2) return baseStyle + "border-l-4 border-gray-400";
    if (rank === 3) return baseStyle + "border-l-4 border-orange-500";
    
    return baseStyle;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading leaderboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🏆 Leaderboard</h1>
          <p className="text-gray-600 capitalize">
            Top performers in {currentUser?.field} science
          </p>
        </div>

        {/* Top 3 Podium */}
        {leaderboard.length >= 3 && (
          <div className="mb-12">
            <div className="flex items-end justify-center space-x-4 max-w-2xl mx-auto">
              {/* 2nd Place */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-xl p-4 mb-2">
                  <Medal size={32} className="mx-auto mb-2" />
                  <h3 className="font-bold">{leaderboard[1].fullName}</h3>
                  <p className="text-sm opacity-90">{leaderboard[1].averageScore.toFixed(1)}%</p>
                </div>
                <div className="bg-gray-300 h-20 rounded-t-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">2</span>
                </div>
              </div>

              {/* 1st Place */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl p-4 mb-2">
                  <Trophy size={40} className="mx-auto mb-2" />
                  <h3 className="font-bold text-lg">{leaderboard[0].fullName}</h3>
                  <p className="text-sm opacity-90">{leaderboard[0].averageScore.toFixed(1)}%</p>
                </div>
                <div className="bg-yellow-400 h-32 rounded-t-lg flex items-center justify-center">
                  <span className="text-3xl font-bold text-yellow-900">1</span>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl p-4 mb-2">
                  <Award size={32} className="mx-auto mb-2" />
                  <h3 className="font-bold">{leaderboard[2].fullName}</h3>
                  <p className="text-sm opacity-90">{leaderboard[2].averageScore.toFixed(1)}%</p>
                </div>
                <div className="bg-orange-300 h-16 rounded-t-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-700">3</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Leaderboard */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Full Rankings</h2>
          
          <div className="space-y-4">
            {leaderboard.map((entry) => {
              const isCurrentUser = entry.id === currentUser?.id;
              
              return (
                <div
                  key={entry.id}
                  className={getRankStyle(entry.rank, isCurrentUser)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12">
                        {getRankIcon(entry.rank)}
                      </div>
                      
                      <div>
                        <h3 className={`font-semibold ${isCurrentUser ? 'text-blue-700' : 'text-gray-800'}`}>
                          {entry.fullName}
                          {isCurrentUser && <span className="ml-2 text-sm text-blue-600">(You)</span>}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {entry.totalQuizzes} quiz{entry.totalQuizzes !== 1 ? 'es' : ''} completed
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${isCurrentUser ? 'text-blue-700' : 'text-gray-800'}`}>
                        {entry.averageScore.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600">Average Score</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {leaderboard.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No rankings yet</h3>
              <p className="text-gray-600">Complete some quizzes to appear on the leaderboard!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}