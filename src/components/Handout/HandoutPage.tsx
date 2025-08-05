import React, { useState } from 'react';
import { noteCollections } from '../../data/NoteCollections';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, BookOpen, FileText, NotebookText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BottomBar from '../Layout/BottomBar';
import Header from '../Layout/Header';

const HandoutPage = () => {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleSubject = (subjectId: string) => {
    setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
  };

  const handleChapterClick = (subjectId: string, chapterId: string) => {
    navigate(`/notes/${subjectId}/${chapterId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="container mx-auto px-4 py-8 pt-20 max-w-7xl">
        {/* Hero Sect

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noteCollections.map((subject) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-200 transition-all duration-300"
            >
              {/* Subject Header */}
              <div
                className="p-6 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSubject(subject.id)}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 shadow-md"
                  >
                    <span className="text-2xl text-purple-600">
                      {subject.icon}
                    </span>
                  </motion.div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 transition-colors">
                      {subject.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {subject.chapters.length} chapters available
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedSubject === subject.id ? 180 : 0 }}
                  className="transition-transform"
                >
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>
              </div>

              {/* Chapters List */}
              <AnimatePresence>
                {expandedSubject === subject.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mx-6 border-t border-dashed border-gray-200 pt-4" />
                    <ul className="px-6 pb-6 space-y-3 mt-4">
                      {subject.chapters.map((chapter, index) => (
                        <motion.li
                          key={chapter.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <button
                            onClick={() => handleChapterClick(subject.id, chapter.id)}
                            className="w-full flex items-center justify-between px-5 py-3 rounded-2xl bg-gray-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-200 group"
                          >
                            <div className="flex items-center space-x-3 text-left">
                              <div className="p-2 rounded-lg bg-white shadow-sm group-hover:shadow-md transition">
                                <FileText className="w-5 h-5 text-purple-600" />
                              </div>
                              <div>
                                <span className="text-base font-semibold text-gray-800">
                                  {chapter.title}
                                </span>
                                {chapter.description && (
                                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">{chapter.description}</p>
                                )}
                              </div>
                            </div>
                            <span className="text-sm font-medium text-purple-500 group-hover:text-purple-700 transition">
                              View →
                            </span>
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default HandoutPage;