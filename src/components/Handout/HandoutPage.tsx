import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { noteCollections } from '../../data/NoteCollections';
import { ChevronDown, FileText, Lock, Crown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BottomBar from '../Layout/BottomBar';
import Header from '../Layout/Header';
import { useAuth } from '../../contexts/AuthContext';

/* New Modal component to display content in the center of the screen */
const Modal = React.memo(function Modal({ children, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm dark:bg-gray-900/80"
      onClick={onClose} // Close modal on backdrop click
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="relative w-full max-w-lg max-h-full overflow-y-auto rounded-xl shadow-2xl bg-white dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
});

/* New simplified Subject Card component for the grid layout */
const SubjectGridCard = React.memo(function SubjectGridCard({ subject, onClick, isLocked }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className={`
        rounded-2xl shadow-sm dark:shadow-xl border overflow-hidden relative cursor-pointer
        transform transition-all duration-200 hover:scale-105 hover:shadow-lg
        ${isLocked ?
          'bg-gray-100/50 dark:bg-gray-800/40 border-gray-200 dark:border-gray-700' :
          'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800'
        }
      `}
      onClick={onClick}
    >
      <div className="p-4 sm:p-5 flex flex-col items-center text-center">
        <div className={`
          p-3 rounded-xl flex items-center justify-center shrink-0 mb-3
          ${isLocked ?
            'bg-gray-300/50 dark:bg-gray-600/50' :
            'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
          }
        `}>
          <span className={`text-2xl ${isLocked ? 'text-gray-500' : 'text-purple-600 dark:text-purple-300'}`}>
            {isLocked ? '🔒' : subject.icon}
          </span>
        </div>
        <div className="flex-1">
          <h3 className={`text-sm sm:text-base font-semibold truncate mb-1 ${
            isLocked ? 'text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-100'
          }`}>
            {subject.name}
          </h3>
          <p className={`text-xs ${
            isLocked ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500 dark:text-gray-400'
          }`}>
            {isLocked ? 'Upgrade to access' : `${subject.chapters.length} chapters`}
          </p>
        </div>
        {!isLocked && !subject.isFree && (
          <span className="absolute top-2 right-2 text-amber-500" title="Premium Content">
            <Crown className="w-4 h-4" />
          </span>
        )}
      </div>
    </motion.article>
  );
});

/* New component to handle the collapsible chapter list */
const SubjectAccordion = React.memo(function SubjectAccordion({ subject, onOpenChapter, onLockedClick, isPremiumUser, onClose }) {
  const isFree = subject.isFree !== undefined ? subject.isFree : true;
  const isLocked = !isFree && !isPremiumUser;

  return (
    <motion.article
      initial={false}
      className={`rounded-2xl border overflow-hidden relative ${
        isLocked ?
          'bg-gray-100/50 dark:bg-gray-800/40 border-gray-200 dark:border-gray-700' :
          'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800'
      }`}
    >
      <div className="p-4 sm:p-5 flex justify-between items-start">
        <div className="flex items-center gap-3 min-w-0">
          <div className={`p-2 rounded-lg flex items-center justify-center shrink-0 ${
            isLocked ? 'bg-gray-300/50 dark:bg-gray-600/50' : 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
          }`}>
            <span className={`text-xl ${isLocked ? 'text-gray-500' : 'text-purple-600 dark:text-purple-300'}`}>
              {isLocked ? '🔒' : subject.icon}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className={`text-sm sm:text-base font-semibold truncate ${
              isLocked ? 'text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-100'
            }`}>
              {subject.name}
            </h3>
            <p className={`text-xs mt-0.5 ${
              isLocked ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500 dark:text-gray-400'
            }`}>
              {subject.chapters.length} chapter{subject.chapters.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>
        {/* Add close button to the SubjectAccordion */}
        <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors" aria-label="Close">
            <X size={18} />
        </button>
      </div>
      
      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <div className="border-t border-dashed border-gray-200 dark:border-gray-800 mt-2 pt-3" />
        <ul className="mt-3 space-y-2">
          {subject.chapters.map((chapter, i) => (
            <motion.div key={chapter.id} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.02 }}>
              <ChapterButton
                subjectId={subject.id}
                chapter={chapter}
                onOpen={onOpenChapter}
                isLocked={isLocked}
                onLockedClick={onLockedClick}
              />
            </motion.div>
          ))}
        </ul>
      </div>
    </motion.article>
  );
});

/* Simple chapter button (re-used) */
const ChapterButton = React.memo(function ChapterButton({ subjectId, chapter, onOpen, isLocked, onLockedClick }) {
  const handleClick = () => {
    if (isLocked) {
      onLockedClick();
    } else {
      onOpen(subjectId, chapter.id);
    }
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
          isLocked
            ? 'bg-gray-100/70 dark:bg-gray-800/40 text-gray-400 dark:text-gray-500 cursor-not-allowed'
            : 'bg-white/70 dark:bg-gray-800/60 hover:shadow-md text-gray-800 dark:text-gray-100 cursor-pointer'
        }`}
        disabled={isLocked}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className={`p-2 rounded-md flex items-center justify-center shrink-0 ${
            isLocked
              ? 'bg-gray-200/50 dark:bg-gray-700/50'
              : 'bg-gray-50 dark:bg-gray-900/60'
          }`}>
            {isLocked ? (
              <Lock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            )}
          </div>
          <div className="min-w-0">
            <div className={`text-sm font-semibold truncate ${
              isLocked ? 'text-gray-500 dark:text-gray-400' : ''
            }`}>
              {chapter.title}
            </div>
            {chapter.description && (
              <div className={`text-xs mt-0.5 line-clamp-1 ${
                isLocked ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {isLocked ? 'Upgrade to premium to access' : chapter.description}
              </div>
            )}
          </div>
        </div>
        <div className={`ml-3 text-xs font-medium ${
          isLocked
            ? 'text-gray-400 dark:text-gray-500'
            : 'text-purple-500 dark:text-purple-300'
        }`}>
          {isLocked ? 'Locked' : 'View →'}
        </div>
      </button>
    </li>
  );
});

// New component for the subject card skeleton
const SubjectCardSkeleton = () => (
    <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl shadow-sm dark:shadow-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-5 flex flex-col items-center text-center animate-pulse bg-gray-100 dark:bg-gray-800"
    >
        <div className="p-3 rounded-xl mb-3 w-12 h-12 bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-1" />
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
        <div className="absolute top-2 right-2 text-gray-300 dark:text-gray-600">
            <Crown className="w-4 h-4" />
        </div>
    </motion.article>
);


const HandoutPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const isPremiumUser = Boolean(currentUser?.isPremium);

  const enhancedCollections = useMemo(() => {
    return (noteCollections || []).map(subject => ({
      ...subject,
      isFree: subject.isFree !== undefined ? subject.isFree : true
    }));
  }, []);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate a 1.5-second network delay
    return () => clearTimeout(timer);
  }, []);

  const handleSubjectCardClick = useCallback((subject) => {
    const isFree = subject.isFree !== undefined ? subject.isFree : true;
    const isLocked = !isFree && !isPremiumUser;
    
    if (isLocked) {
      navigate('/premium');
    } else {
      setSelectedSubject(subject);
      setShowModal(true);
    }
  }, [isPremiumUser, navigate]);

  const handleChapterClick = useCallback(
    (subjectId, chapterId) => {
      navigate(`/notes/${subjectId}/${chapterId}`);
      setShowModal(false); // Close modal when a chapter is selected
    },
    [navigate]
  );

  const handleLockedClick = useCallback(() => {
    navigate('/premium');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl pt-20 pb-24">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold mb-2">Study Handouts</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isPremiumUser
              ? "Access all subjects and chapters with your premium account."
              : "Explore free subjects or upgrade for full access to all materials."}
          </p>
          {!isPremiumUser && (
            <button
              onClick={() => navigate('/premium')}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
            >
              <Crown className="w-4 h-4" />
              Upgrade to Premium
            </button>
          )}
        </div>

        <section>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <AnimatePresence>
                {loading ? (
                    // Render skeletons when loading
                    enhancedCollections.map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <SubjectCardSkeleton />
                        </motion.div>
                    ))
                ) : (
                    // Render actual cards when loaded
                    enhancedCollections.map((subject) => (
                        <SubjectGridCard
                            key={subject.id}
                            subject={subject}
                            onClick={() => handleSubjectCardClick(subject)}
                            isLocked={!subject.isFree && !isPremiumUser}
                        />
                    ))
                )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <BottomBar />

      {/* The new modal component */}
      <AnimatePresence>
        {showModal && selectedSubject && (
          <Modal onClose={() => setShowModal(false)}>
            <SubjectAccordion
              subject={selectedSubject}
              onOpenChapter={handleChapterClick}
              onLockedClick={handleLockedClick}
              isPremiumUser={isPremiumUser}
              onClose={() => setShowModal(false)} // Pass the close function to the accordion
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HandoutPage;