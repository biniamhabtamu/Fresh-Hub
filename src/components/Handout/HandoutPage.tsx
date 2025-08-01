import React, { useState } from 'react';
import { noteCollections } from '../../data/NoteCollections';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, BookOpen, Eye, NotebookText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HandoutPage = () => {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleSubject = (subjectId: string) => {
    setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4 p-3 bg-white rounded-full shadow-sm">
            <NotebookText className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Study Handouts
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive resources for every subject, carefully curated for your learning journey
          </p>
        </motion.div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {noteCollections.map((subject) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredSubject(subject.id)}
              onMouseLeave={() => setHoveredSubject(null)}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              {/* Subject Header */}
              <div
                className="p-6 flex justify-between items-center cursor-pointer group"
                onClick={() => toggleSubject(subject.id)}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    animate={{
                      scale: hoveredSubject === subject.id ? 1.1 : 1,
                      rotate: hoveredSubject === subject.id ? 5 : 0
                    }}
                    className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100"
                  >
                    <span className="text-2xl text-purple-600">{subject.icon}</span>
                  </motion.div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
                      {subject.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {subject.chapters.length} chapters available
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedSubject === subject.id ? 180 : 0 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-purple-600 transition-colors" />
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
                    className="px-6 pb-6"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                    <ul className="space-y-3 mt-4">
                      {subject.chapters.map((chapter, index) => (
                        <motion.li
                          key={chapter.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <button
                            onClick={() => navigate(`/notes/${subject.id}/${chapter.id}`)}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all group"
                          >
                            <div className="flex items-center space-x-3 text-left">
                              <div className="p-2 rounded-lg bg-white shadow-sm group-hover:shadow-md transition">
                                <BookOpen className="w-4 h-4 text-purple-600" />
                              </div>
                              <div>
                                <span className="text-sm sm:text-base font-medium text-gray-800">
                                  {chapter.title}
                                </span>
                                {chapter.description && (
                                  <p className="text-xs text-gray-500 mt-1">{chapter.description}</p>
                                )}
                              </div>
                            </div>
                            <div className="p-1 rounded-full bg-white shadow-sm group-hover:bg-purple-100 transition">
                              <Eye className="w-4 h-4 text-purple-500" />
                            </div>
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

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            Click on any subject to explore available chapters and resources
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HandoutPage;