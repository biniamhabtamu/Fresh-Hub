// src/components/Subject/ChapterSelection.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { chaptersPerSubject } from '../../data/subjects';
import Header from '../Layout/Header';
import { ArrowLeft, Play, Award, AlertTriangle, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChapterResult {
  chapter: number;
  score: number;
  completed: boolean;
}

export default function ChapterSelection() {
  const { subjectId, year } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [chapterResults, setChapterResults] = useState<ChapterResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadChapterResults();
  }, [subjectId, year, currentUser]);

  const loadChapterResults = async () => {
    if (!currentUser || !subjectId || !year) return;
    setIsLoading(true);

    try {
      const resultsQuery = query(
        collection(db, 'results'),
        where('userId', '==', currentUser.id),
        where('subject', '==', subjectId),
        where('year', '==', parseInt(year))
      );
      
      const resultsSnapshot = await getDocs(resultsQuery);
      const results = resultsSnapshot.docs.map(doc => doc.data());
      
      const chapters = Array.from({ length: chaptersPerSubject }, (_, i) => {
        const chapterNum = i + 1;
        const result = results.find(r => r.chapter === chapterNum);
        
        return {
          chapter: chapterNum,
          score: result?.percentage || 0,
          completed: !!result
        };
      });
      
      setChapterResults(chapters);
    } catch (error) {
      console.error('Error loading chapter results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getChapterCardClass = (result: ChapterResult) => {
    if (!result.completed) return 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-400';
    if (result.score < 60) return 'bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:border-red-400';
    return 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:border-green-400';
  };

  const getChapterTextClass = (result: ChapterResult) => {
    if (!result.completed) return 'text-gray-700';
    if (result.score < 60) return 'text-red-700';
    return 'text-green-700';
  };

  const getStatusIcon = (result: ChapterResult) => {
    if (!result.completed) return <Rocket size={18} className="text-blue-500" />;
    if (result.score < 60) return <AlertTriangle size={18} className="text-red-500" />;
    return <Award size={18} className="text-green-500" />;
  };

  const handleChapterClick = (chapter: number) => {
    navigate(`/subject/${subjectId}/year/${year}/chapter/${chapter}`);
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
          onClick={() => navigate(`/subject/${subjectId}`)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Years</span>
        </motion.button>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            {year} Exam Chapters
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto md:mx-0">
            Select a chapter to begin your learning journey
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Chapters Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {!isLoading && chapterResults.map((result) => (
            <motion.div
              key={result.chapter}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleChapterClick(result.chapter)}
              className={`
                cursor-pointer rounded-xl border-2 p-6 transition-all duration-300 
                hover:shadow-lg flex flex-col
                ${getChapterCardClass(result)}
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(result)}
                  <h3 className={`text-xl font-bold ${getChapterTextClass(result)}`}>
                    Chapter {result.chapter}
                  </h3>
                </div>
                <div className="p-2 bg-white rounded-full shadow-sm">
                  <Play size={16} className={getChapterTextClass(result)} />
                </div>
              </div>
              
              <div className="mt-auto">
                <p className={`text-sm mb-3 font-medium ${getChapterTextClass(result)}`}>
                  {result.completed 
                    ? `Your score: ${result.score.toFixed(1)}%` 
                    : 'Ready to begin?'
                  }
                </p>
                
                {/* Progress Bar */}
                {result.completed && (
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div
                      className={`h-2.5 rounded-full ${
                        result.score < 60 ? 'bg-red-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${result.score}%` }}
                    />
                  </div>
                )}
                
                {/* Status Badge */}
                <div className="flex justify-between items-center">
                  <span className={`
                    inline-flex items-center text-xs px-3 py-1 rounded-full font-medium
                    ${result.completed 
                      ? (result.score < 60 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700')
                      : 'bg-blue-100 text-blue-700'
                    }
                  `}>
                    {result.completed 
                      ? (result.score < 60 ? 'Needs Practice' : 'Excellent!')
                      : 'Start Learning'
                    }
                  </span>
                  
                  {result.completed && (
                    <span className={`text-xs font-semibold ${getChapterTextClass(result)}`}>
                      {result.score < 60 ? 'Try Again' : 'Review'}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}