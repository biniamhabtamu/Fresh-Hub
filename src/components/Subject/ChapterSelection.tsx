import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { getChaptersOrTopicsPerSubject, englishTopics } from '../../data/subjects';
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
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const getStatusBadge = (score: number, completed: boolean) => {
  if (!completed) return { text: 'Start Quiz', color: 'bg-gray-100 text-gray-600' };
  if (score < 60) return { text: 'Needs Improvement', color: 'bg-red-100 text-red-700' };
  return { text: 'Well Done!', color: 'bg-green-100 text-green-700' };
};

export default function ChapterSelection() {
  const { subjectId, year } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [chapterResults, setChapterResults] = useState<ChapterResult[]>([]);
  const [loading, setLoading] = useState(true);

  const isEnglishSubject = subjectId === 'english' || subjectId === 'english2';
  const itemsPerSubject = getChaptersOrTopicsPerSubject(subjectId || '');

  useEffect(() => {
    if (currentUser) loadChapterResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      const chapters = Array.from({ length: itemsPerSubject }, (_, i) => {
        const chapterNum = i + 1;
        const result = results.find(r => r.chapter === chapterNum);
        return {
          chapter: chapterNum,
          score: result?.percentage || 0,
          completed: !!result,
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Header />

      <div className="container mx-auto px-4 py-6 pb-24">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(`/subject/${subjectId}`)}
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to Years</span>
          </button>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">
              {year} {isEnglishSubject ? 'English Topics' : 'Exam Chapters'}
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-1">
            {isEnglishSubject
              ? 'Select a topic to begin your quiz or review your progress.'
              : 'Select a chapter to begin your quiz or review your progress.'}
          </p>
        </motion.div>

        {/* Loading skeleton */}
        {loading && (
          <div className="space-y-4">
            {[...Array(itemsPerSubject)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white/90 rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-40 mb-2" />
                      <div className="h-3 bg-gray-200 rounded w-24" />
                    </div>
                  </div>
                  <div className="w-16 h-6 bg-gray-200 rounded-full" />
                </div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mt-4" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Chapters list */}
        {!loading && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {chapterResults.map((result) => {
                const status = getStatusBadge(result.score, result.completed);
                const itemName = isEnglishSubject
                  ? englishTopics[result.chapter - 1] || `Topic ${result.chapter}`
                  : `Chapter ${result.chapter}`;

                return (
                  <motion.div
                    key={result.chapter}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleChapterClick(result.chapter)}
                    className="cursor-pointer bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg p-6 relative overflow-hidden"
                  >
                    {/* Glow hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0"
                      whileHover={{ opacity: 0.15 }}
                      style={{
                        background: result.completed
                          ? result.score < 60
                            ? 'radial-gradient(circle at center, #fecaca 0%, transparent 70%)'
                            : 'radial-gradient(circle at center, #bbf7d0 0%, transparent 70%)'
                          : 'radial-gradient(circle at center, #bfdbfe 0%, transparent 70%)',
                      }}
                    />

                    {/* Header row */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="p-3 bg-indigo-100 rounded-full">
                        <BookOpen size={24} className="text-indigo-600" />
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${status.color}`}>
                        {status.text}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 mt-5 text-xl font-bold text-gray-800">
                      {itemName}
                    </h3>

                    {/* Score */}
                    <div className="relative z-10 mt-2 flex items-center space-x-2 text-gray-600 text-sm">
                      <Star size={16} className="text-yellow-400" />
                      <p>
                        {result.completed
                          ? `Score: ${result.score.toFixed(1)}%`
                          : 'Not attempted yet'}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    {result.completed && (
                      <div className="relative z-10 mt-4 w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          className={`h-2.5 rounded-full ${result.score < 60 ? 'bg-red-500' : 'bg-green-500'}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${result.score}%` }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
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