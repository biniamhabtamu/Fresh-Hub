import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { noteCollections } from '../../data/NoteCollections';
import { ChevronDown, FileText, Lock, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BottomBar from '../Layout/BottomBar';
import Header from '../Layout/Header';
import { useAuth } from '../../contexts/AuthContext';

/* Simple chapter button */
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

/* Subject Card */
const SubjectCard = React.memo(function SubjectCard({ 
  subject, 
  expanded, 
  onToggle, 
  onOpenChapter, 
  onLockedClick, 
  isPremiumUser, 
  index 
}) {
  // Default to true if isFree is not defined (for backward compatibility)
  const isFree = subject.isFree !== undefined ? subject.isFree : true;
  // Only lock if subject is NOT free AND user is NOT premium
  const isLocked = !isFree && !isPremiumUser;
  
  const handleClick = () => {
    if (isLocked) {
      onLockedClick();
    } else {
      onToggle(subject.id);
    }
  };

  return (
    <motion.article
      key={subject.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: index * 0.02 }}
      className={`rounded-2xl shadow-sm dark:shadow-lg border overflow-hidden relative ${
        isLocked 
          ? 'bg-gray-100/50 dark:bg-gray-800/40 border-gray-200 dark:border-gray-700' 
          : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800'
      }`}
    >
      <button
        onClick={handleClick}
        aria-expanded={expanded}
        aria-controls={`subject-${subject.id}-panel`}
        className={`w-full px-4 py-4 sm:py-5 flex items-center justify-between gap-4 text-left transition-colors ${
          isLocked 
            ? 'hover:bg-gray-200/50 dark:hover:bg-gray-700/60 cursor-not-allowed' 
            : 'hover:bg-gray-50 dark:hover:bg-gray-900/60 cursor-pointer'
        }`}
        disabled={isLocked}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className={`p-2 rounded-lg flex items-center justify-center shrink-0 ${
            isLocked 
              ? 'bg-gray-300/50 dark:bg-gray-600/50' 
              : 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
          }`}>
            <span className={`text-xl ${isLocked ? 'text-gray-500' : 'text-purple-600 dark:text-purple-300'}`}>
              {isLocked ? '🔒' : subject.icon}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className={`text-sm sm:text-base font-semibold truncate ${
              isLocked ? 'text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-100'
            }`}>
              {subject.name} {isLocked && '(Premium)'}
              {!isLocked && !isFree && (
                <span className="ml-2 text-xs text-amber-500" title="Premium Content">
                  <Crown className="w-3 h-3 inline" />
                </span>
              )}
            </h3>
            <p className={`text-xs mt-0.5 ${
              isLocked ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500 dark:text-gray-400'
            }`}>
              {subject.chapters.length} chapter{subject.chapters.length !== 1 ? 's' : ''} available
              {isLocked && ' • Upgrade to access'}
            </p>
          </div>
        </div>
        {!isLocked ? (
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          </motion.div>
        ) : (
          <Lock className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        )}
      </button>

      {/* Collapsible chapters - only show for non-locked subjects */}
      {!isLocked && (
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`subject-${subject.id}-panel`}
              key="panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.26 }}
              className="px-4 pb-4 sm:px-5 sm:pb-5"
            >
              <div className="border-t border-dashed border-gray-200 dark:border-gray-800 mt-2 pt-3" />
              <ul className="mt-3 space-y-2">
                {subject.chapters.map((chapter, i) => {
                  // Chapters inherit the subject's lock status
                  const chapterIsLocked = !isFree && !isPremiumUser;
                  return (
                    <motion.div key={chapter.id} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.02 }}>
                      <ChapterButton 
                        subjectId={subject.id} 
                        chapter={chapter} 
                        onOpen={onOpenChapter}
                        isLocked={chapterIsLocked}
                        onLockedClick={onLockedClick}
                      />
                    </motion.div>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.article>
  );
});

const HandoutPage = () => {
  const [expandedSubject, setExpandedSubject] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const isPremiumUser = Boolean(currentUser?.isPremium);

  const toggleSubject = useCallback((subjectId) => {
    setExpandedSubject((prev) => (prev === subjectId ? null : subjectId));
  }, []);

  const handleChapterClick = useCallback(
    (subjectId, chapterId) => {
      navigate(`/notes/${subjectId}/${chapterId}`);
    },
    [navigate]
  );

  const handleLockedClick = useCallback(() => {
    navigate('/premium');
  }, [navigate]);

  // Enhance collections with default isFree values if missing
  const enhancedCollections = useMemo(() => {
    return (noteCollections || []).map(subject => ({
      ...subject,
      // Default to true if isFree is not defined for backward compatibility
      isFree: subject.isFree !== undefined ? subject.isFree : true
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg pt-20 pb-24">
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold mb-2">Study Handouts</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isPremiumUser 
              ? "Access all subjects and chapters with your premium account." 
              : "Free subjects are available. Upgrade to premium for full access."}
          </p>
          {!isPremiumUser && (
            <button
              onClick={() => navigate('/premium')}
              className="mt-3 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold rounded-lg hover:shadow-md transition-all flex items-center gap-2"
            >
              <Crown className="w-4 h-4" />
              Upgrade to Premium
            </button>
          )}
        </div>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {enhancedCollections.map((subject, idx) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              expanded={expandedSubject === subject.id}
              onToggle={toggleSubject}
              onOpenChapter={handleChapterClick}
              onLockedClick={handleLockedClick}
              isPremiumUser={isPremiumUser}
              index={idx}
            />
          ))}
        </section>
      </main>
      <BottomBar />
    </div>
  );
};

export default HandoutPage;