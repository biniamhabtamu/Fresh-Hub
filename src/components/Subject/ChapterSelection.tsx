// src/components/Subject/ChapterSelection.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { chaptersPerSubject } from '../../data/subjects';
import Header from '../Layout/Header';
import { ArrowLeft, BookOpen, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BottomBar from '../Layout/BottomBar';

interface ChapterResult {
  chapter: number;
  score: number;
  completed: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const getStatusBadge = (score: number, completed: boolean) => {
  if (!completed) {
    return { text: 'Start Quiz', color: 'bg-gray-200 text-gray-600' };
  }
  if (score < 60) {
    return { text: 'Needs Improvement', color: 'bg-red-200 text-red-700' };
  }
  return { text: 'Well Done!', color: 'bg-green-200 text-green-700' };
};

export default function ChapterSelection() {
  const { subjectId, year } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [chapterResults, setChapterResults] = useState<ChapterResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      loadChapterResults();
    }
  }, [subjectId, year, currentUser]);

  const loadChapterResults = async () => {
    if (!currentUser || !subjectId || !year) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
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
      setLoading(false);
    }
  };

  const handleChapterClick = (chapter: number) => {
    navigate(`/subject/${subjectId}/year/${year}/chapter/${chapter}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header and Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(`/subject/${subjectId}`)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Years</span>
          </button>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-4 mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {year} Exam Chapters
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Select a chapter to start your quiz or review your previous score.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
            ></motion.div>
            <p className="mt-4 text-gray-600 text-lg">Loading chapters...</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {chapterResults.map((result) => {
                const status = getStatusBadge(result.score, result.completed);
                return (
                  <motion.div
                    key={result.chapter}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleChapterClick(result.chapter)}
                    className="cursor-pointer rounded-2xl border-2 border-gray-200 p-6 bg-white transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Glowing background on hover */}
                    <motion.div
                      className="absolute inset-0 z-0 opacity-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        backgroundImage: `radial-gradient(circle at center, ${status.color.includes('green') ? '#dcfce7' : status.color.includes('red') ? '#fee2e2' : '#e0f2fe'} 0%, transparent 70%)`
                      }}
                    />
                    
                    <div className="relative z-10 flex items-start justify-between mb-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <BookOpen size={24} className="text-blue-600" />
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-bold ${status.color}`}>
                        {status.text}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Chapter {result.chapter}
                    </h3>
                    
                    <div className="flex items-center space-x-2 text-gray-600 text-sm mb-4">
                      <Star size={16} className="text-yellow-400" />
                      <p>
                        {result.completed 
                          ? `Score: ${result.score.toFixed(1)}%` 
                          : 'Not attempted yet'
                        }
                      </p>
                    </div>
                    
                    {/* Progress Bar */}
                    {result.completed && (
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          className={`h-full rounded-full ${
                            result.score < 60 ? 'bg-red-500' : 'bg-green-500'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${result.score}%` }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
      <BottomBar />
    </div>
  );
}