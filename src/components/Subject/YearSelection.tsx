// src/components/Subject/YearSelection.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { examYears } from '../../data/subjects';
import Header from '../Layout/Header';
import { ArrowLeft } from 'lucide-react';

interface YearResult {
  year: number;
  averageScore: number;
}

export default function YearSelection() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [yearResults, setYearResults] = useState<YearResult[]>([]);

  useEffect(() => {
    loadYearResults();
  }, [subjectId, currentUser]);

  const loadYearResults = async () => {
    if (!currentUser || !subjectId) return;

    try {
      const resultsQuery = query(
        collection(db, 'results'),
        where('userId', '==', currentUser.id),
        where('subject', '==', subjectId)
      );
      
      const resultsSnapshot = await getDocs(resultsQuery);
      const results = resultsSnapshot.docs.map(doc => doc.data());
      
      const yearAverages = examYears.map(year => {
        const yearResults = results.filter(r => r.year === year);
        const average = yearResults.length > 0 
          ? yearResults.reduce((sum, r) => sum + r.percentage, 0) / yearResults.length 
          : 0;
        
        return { year, averageScore: average };
      });
      
      setYearResults(yearAverages);
    } catch (error) {
      console.error('Error loading year results:', error);
    }
  };

  const getYearCardClass = (score: number) => {
    if (score === 0) return 'bg-white border-gray-200';
    if (score < 60) return 'bg-red-100 border-red-300';
    return 'bg-green-100 border-green-300';
  };

  const getYearTextClass = (score: number) => {
    if (score === 0) return 'text-gray-600';
    if (score < 60) return 'text-red-700';
    return 'text-green-700';
  };

  const handleYearClick = (year: number) => {
    navigate(`/subject/${subjectId}/year/${year}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Subjects</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Select Exam Year
          </h2>
          <p className="text-gray-600">
            Choose a year to start practicing questions
          </p>
        </div>

        {/* Years Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {examYears.map((year) => {
            const result = yearResults.find(r => r.year === year);
            const score = result?.averageScore || 0;
            
            return (
              <div
                key={year}
                onClick={() => handleYearClick(year)}
                className={`
                  cursor-pointer rounded-xl border-2 p-6 text-center transition-all duration-300 
                  hover:scale-105 hover:shadow-lg
                  ${getYearCardClass(score)}
                `}
              >
                <h3 className={`text-2xl font-bold mb-2 ${getYearTextClass(score)}`}>
                  {year}
                </h3>
                <p className={`text-sm ${getYearTextClass(score)}`}>
                  {score === 0 ? 'Not Attempted' : `${score.toFixed(1)}% Average`}
                </p>
                
                {/* Progress Indicator */}
                {score > 0 && (
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          score < 60 ? 'bg-red-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Score Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <span className="text-sm text-gray-600">Not Attempted (0%)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-200 rounded"></div>
              <span className="text-sm text-gray-600">Needs Improvement (&lt;60%)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-200 rounded"></div>
              <span className="text-sm text-gray-600">Good Performance (≥60%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}