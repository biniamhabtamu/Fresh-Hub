import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BottomBar from '../../../components/Layout/BottomBar';
import Header from '../../../components/Layout/Header';

interface Selection {
  subject: string;
  term: string;
  questionType: string;
}

const subjects = [
  { name: "Psychology", icon: "🧠" },
  { name: "Logic", icon: "🧩" },
  { name: "Geography", icon: "🌍" },
  { name: "Economics", icon: "💰" },
  { name: "Anthropology", icon: "👥" },
  { name: "English", icon: "📖" },
  { name: "Civic", icon: "⚖️" },
  { name: "Emerging Technology", icon: "🤖" },
  { name: "Physics", icon: "🔬" },
  { name: "C++", icon: "💻" },
  { name: "History", icon: "🏰" },
  { name: "Inclusive", icon: "🌈" },
  { name: "Entrepreneurship", icon: "📈" },
];

const terms = ['Mid', 'Final'];
const questionTypes = ['Simple', 'Medium', 'Hard', 'Difficult'];

const SkeletonCard = () => (
  <div className="p-4 bg-white rounded-2xl border-2 border-gray-200 shadow-md animate-pulse">
    <div className="flex flex-col items-center">
      <div className="bg-gray-300 w-12 h-12 rounded-full mb-2"></div>
      <div className="bg-gray-300 h-4 w-3/4 rounded-full"></div>
    </div>
  </div>
);

const QuestionSelection: React.FC = () => {
  const navigate = useNavigate();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selection, setSelection] = useState<Selection>({
    subject: '',
    term: '',
    questionType: '',
  });

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubjectClick = (subjectName: string) => {
    setSelectedSubject(subjectName);
    setSelection(prev => ({ ...prev, subject: subjectName.toLowerCase() }));
    setShowOptionsModal(true);
  };

  const handleStart = () => {
    if (!selection.subject || !selection.term || !selection.questionType) {
      alert("Please select all fields!");
      return;
    }
    navigate(`/challenge/question-page?subject=${selection.subject}&term=${selection.term}&type=${selection.questionType}`);
  };

  const handleSelect = (key: 'term' | 'questionType', value: string) => {
    setSelection(prev => ({ ...prev, [key]: value.toLowerCase() }));
  };

  const filteredSubjects = subjects.filter(sub =>
    sub.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Header />

      <div className="flex flex-col items-center p-4 sm:p-6 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mt-12 mb-4"
        >
          Exam Challenge 🚀
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-lg sm:text-xl text-gray-600 mb-6 font-medium"
        >
          Choose a subject to begin.
        </motion.p>

        {/* Search Bar */}
        <div className="w-full max-w-lg mb-8">
          <input
            type="text"
            placeholder="🔍 Search subject..."
            className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl mb-24">
          {isLoading ? (
            subjects.map((_, index) => <SkeletonCard key={index} />)
          ) : (
            filteredSubjects.map((sub) => (
              <motion.button
                key={sub.name}
                onClick={() => handleSubjectClick(sub.name)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white rounded-2xl border-2 border-gray-200 text-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:border-purple-500"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl mb-2">{sub.icon}</span>
                  <span className="font-bold text-sm sm:text-base">{sub.name}</span>
                </div>
              </motion.button>
            ))
          )}
        </div>

        {/* Options Modal */}
        <AnimatePresence>
          {showOptionsModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-lg"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowOptionsModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                  ✖
                </button>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-4">
                  {selectedSubject} Quiz
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  Select your options to continue.
                </p>

                {/* Progress Indicator */}
                <div className="flex justify-center mb-6 space-x-2">
                  <span className={`w-3 h-3 rounded-full ${selection.term ? 'bg-blue-600' : 'bg-gray-300'}`}></span>
                  <span className={`w-3 h-3 rounded-full ${selection.questionType ? 'bg-green-600' : 'bg-gray-300'}`}></span>
                </div>

                {/* Term and Type Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* Exam Term */}
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <label className="block text-base font-bold text-gray-700 mb-2">Exam Term</label>
                    <div className="grid grid-cols-2 gap-3">
                      {terms.map((term) => (
                        <button
                          key={term}
                          onClick={() => handleSelect('term', term)}
                          className={`p-2 rounded-lg border font-semibold transition-all duration-300 ${
                            selection.term === term.toLowerCase()
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question Type */}
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <label className="block text-base font-bold text-gray-700 mb-2">Question Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {questionTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => handleSelect('questionType', type)}
                          className={`p-2 rounded-lg border font-semibold transition-all duration-300 ${
                            selection.questionType === type.toLowerCase()
                              ? 'bg-green-600 border-green-600 text-white'
                              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Start Button */}
                <button
                  onClick={handleStart}
                  disabled={!selection.subject || !selection.term || !selection.questionType}
                  className="w-full bg-purple-600 text-white p-4 rounded-xl font-bold text-lg sm:text-xl hover:bg-purple-700 transition transform hover:scale-105 shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Start Quiz
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <BottomBar />
    </div>
  );
};

export default QuestionSelection;
