// src/components/Subject/ChapterSelection.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { chaptersPerSubject } from '../../data/subjects';
import Header from '../Layout/Header';
import { ArrowLeft, Play } from 'lucide-react';

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

  useEffect(() => {
    loadChapterResults();
  }, [subjectId, year, currentUser]);

  const loadChapterResults = async () => {
    if (!currentUser || !subjectId || !year) return;

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
    }
  };

  const getChapterCardClass = (result: ChapterResult) => {
    if (!result.completed) return 'bg-white border-gray-200 hover:border-blue-300';
    if (result.score < 60) return 'bg-red-100 border-red-300 hover:border-red-400';
    return 'bg-green-100 border-green-300 hover:border-green-400';
  };

  const getChapterTextClass = (result: ChapterResult) => {
    if (!result.completed) return 'text-gray-600';
    if (result.score < 60) return 'text-red-700';
    return 'text-green-700';
  };

  const handleChapterClick = (chapter: number) => {
    navigate(`/subject/${subjectId}/year/${year}/chapter/${chapter}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(`/subject/${subjectId}`)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Years</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {year} Exam Chapters
          </h2>
          <p className="text-gray-600">
            Choose a chapter to start your quiz
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapterResults.map((result) => (
            <div
              key={result.chapter}
              onClick={() => handleChapterClick(result.chapter)}
              className={`
                cursor-pointer rounded-xl border-2 p-6 transition-all duration-300 
                hover:scale-105 hover:shadow-lg
                ${getChapterCardClass(result)}
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-bold ${getChapterTextClass(result)}`}>
                  Chapter {result.chapter}
                </h3>
                <Play size={20} className={getChapterTextClass(result)} />
              </div>
              
              <p className={`text-sm mb-3 ${getChapterTextClass(result)}`}>
                {result.completed 
                  ? `Score: ${result.score.toFixed(1)}%` 
                  : 'Not attempted yet'
                }
              </p>
              
              {/* Progress Bar */}
              {result.completed && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      result.score < 60 ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${result.score}%` }}
                  />
                </div>
              )}
              
              {/* Status Badge */}
              <div className="mt-3">
                <span className={`
                  text-xs px-2 py-1 rounded-full font-medium
                  ${result.completed 
                    ? (result.score < 60 ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700')
                    : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {result.completed 
                    ? (result.score < 60 ? 'Needs Improvement' : 'Well Done!')
                    : 'Start Quiz'
                  }
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}