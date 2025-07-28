// src/components/Subject/YearSelection.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { examYears } from '../../data/subjects';
import Header from '../Layout/Header';
import { ArrowLeft, Award, AlertTriangle, Clock, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface YearResult {
  year: number;
  averageScore: number;
}

export default function YearSelection() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [yearResults, setYearResults] = useState<YearResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadYearResults();
  }, [subjectId, currentUser]);

  const loadYearResults = async () => {
    if (!currentUser || !subjectId) return;
    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
    }
  };

  const getYearCardClass = (score: number) => {
    if (score === 0) return 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-400';
    if (score < 60) return 'bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:border-red-400';
    return 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:border-green-400';
  };

  const getYearTextClass = (score: number) => {
    if (score === 0) return 'text-gray-700';
    if (score < 60) return 'text-red-700';
    return 'text-green-700';
  };

  const getYearIcon = (score: number) => {
    if (score === 0) return <Clock size={18} className="text-gray-500" />;
    if (score < 60) return <AlertTriangle size={18} className="text-red-500" />;
    return <Award size={18} className="text-green-500" />;
  };

  const handleYearClick = (year: number) => {
    navigate(`/subject/${subjectId}/year/${year}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/dashboard')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Subjects</span>
        </motion.button>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Select Different Ethiopian university  
          </h2>
          <p className="text-gray-600 text-lg">
            mid and Final Exam all  Year Collection
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Years Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {!isLoading && examYears.map((year) => {
            const result = yearResults.find(r => r.year === year);
            const score = result?.averageScore || 0;
            
            return (
              <motion.div
                key={year}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleYearClick(year)}
                className={`
                  cursor-pointer rounded-xl border-2 p-6 transition-all duration-300 
                  hover:shadow-lg flex flex-col items-center
                  ${getYearCardClass(score)}
                `}
              >
                <div className="flex items-center space-x-2 mb-3">
                  {getYearIcon(score)}
                  <h3 className={`text-2xl font-bold ${getYearTextClass(score)}`}>
                    {year}
                  </h3>
                </div>
                
                <p className={`text-sm font-medium mb-4 ${getYearTextClass(score)}`}>
                  {score === 0 ? 'Not Attempted' : `${score.toFixed(1)}% Average`}
                </p>
                
                {/* Progress Indicator */}
                {score > 0 && (
                  <div className="w-full max-w-xs">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div
                        className={`h-2.5 rounded-full ${
                          score < 60 ? 'bg-red-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-gray-100"
        >
          <div className="flex items-center space-x-3 mb-4">
            <BarChart2 className="text-blue-500" size={20} />
            <h3 className="font-semibold text-gray-800 text-lg">Progress Guide</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Not Attempted</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Needs Improvement (&lt;60%)</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Good Performance (≥60%)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}