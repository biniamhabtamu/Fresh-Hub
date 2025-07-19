import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { subjects } from '../../data/subjects';
import SubjectCard from './SubjectCard';
import Header from '../Layout/Header';
import { FiLock, FiUnlock } from 'react-icons/fi';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {freeSubjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                isLocked={false}
                onClick={() => handleSubjectClick(subject.id)}
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
                className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-2 rounded-lg font-medium text-sm"
              >
                Unlock All
              </button>
            )}
          </div>

          {currentUser?.isPremium ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {premiumSubjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  isLocked={false}
                  onClick={() => handleSubjectClick(subject.id)}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

        {/* Stats Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Your Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">0</div>
              <div className="text-gray-600">Quizzes Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">0%</div>
              <div className="text-gray-600">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">--</div>
              <div className="text-gray-600">Ranking</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}