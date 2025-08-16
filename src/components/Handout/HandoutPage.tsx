// HandoutPage.jsx
import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { noteCollections } from '../../data/NoteCollections';
import { ChevronDown, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BottomBar from '../Layout/BottomBar';
import Header from '../Layout/Header';

/**
 * Mobile-first, fully responsive HandoutPage
 * - Single-column by default (mobile), expands to multi-column on larger screens
 * - Large, touch-friendly buttons
 * - Avoids fixed widths; uses fluid sizing and safe-area insets for Capacitor
 * - Preserves existing navigation & animations
 */

/* Simple, memoized chapter button tuned for touch */
const ChapterButton = React.memo(function ChapterButton({ subjectId, chapter, onOpen }) {
  return (
    <li>
      <button
        onClick={() => onOpen(subjectId, chapter.id)}
        className="w-full flex items-center justify-between px-4 py-4 rounded-xl bg-white/70 dark:bg-gray-800/60 hover:shadow-md transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-purple-300"
        aria-label={`Open ${chapter.title}`}
        style={{ touchAction: 'manipulation' }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-md bg-gray-50 dark:bg-gray-900/60 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" aria-hidden />
          </div>

          <div className="min-w-0">
            <div className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
              {chapter.title}
            </div>
            {chapter.description && (
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                {chapter.description}
              </div>
            )}
          </div>
        </div>

        <div className="ml-3 text-xs font-medium text-purple-500 dark:text-purple-300">
          View →
        </div>
      </button>
    </li>
  );
});

/* Subject card tuned for mobile: large header tap area + collapsible content */
const SubjectCard = React.memo(function SubjectCard({
  subject,
  expanded,
  onToggle,
  onOpenChapter,
  index,
}) {
  return (
    <motion.article
      key={subject.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: index * 0.02 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden"
      role="group"
      aria-labelledby={`subject-${subject.id}-title`}
    >
      {/* Big, touch-friendly header */}
      <button
        onClick={() => onToggle(subject.id)}
        aria-expanded={expanded}
        aria-controls={`subject-${subject.id}-panel`}
        className="w-full px-4 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/60 transition-colors"
        style={{ touchAction: 'manipulation' }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 flex items-center justify-center shrink-0">
            <span className="text-xl text-purple-600 dark:text-purple-300" aria-hidden>
              {subject.icon}
            </span>
          </div>

          <div className="min-w-0">
            <h3
              id={`subject-${subject.id}-title`}
              className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100 truncate"
            >
              {subject.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {subject.chapters.length} chapter{subject.chapters.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>

        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="text-gray-400 dark:text-gray-500"
          aria-hidden
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      {/* Collapsible panel */}
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
              {subject.chapters.map((chapter, i) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.02 }}
                >
                  <ChapterButton subjectId={subject.id} chapter={chapter} onOpen={onOpenChapter} />
                </motion.div>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
});

const HandoutPage = () => {
  const [expandedSubject, setExpandedSubject] = useState(null);
  const navigate = useNavigate();

  // toggle subject panel
  const toggleSubject = useCallback((subjectId) => {
    setExpandedSubject((prev) => (prev === subjectId ? null : subjectId));
  }, []);

  // handle navigation to chapter
  const handleChapterClick = useCallback(
    (subjectId, chapterId) => {
      navigate(`/notes/${subjectId}/${chapterId}`);
    },
    [navigate]
  );

  const collections = useMemo(() => noteCollections || [], []);

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100"
      style={{
        paddingTop: 'env(safe-area-inset-top, 12px)',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <Header />

      {/* Main content area. Adds bottom padding to avoid BottomBar overlap on small screens */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg" style={{ paddingBottom: 92 }}>
        <div className="pt-14 sm:pt-18 pb-6 sm:pb-10">
          <div className="mb-4">
            <h1 className="text-lg sm:text-2xl font-extrabold tracking-tight">Study Handouts</h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              Tap a subject to expand chapters. Optimized for phones and tablets.
            </p>
          </div>

          {/* Mobile-first grid: 1 column by default, 2 on sm, 3 on lg */}
          <section
            aria-label="Subjects"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {collections.length === 0 ? (
              <div className="col-span-full bg-white dark:bg-gray-900 rounded-2xl p-4 text-center shadow-sm border border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">No subjects available yet.</p>
              </div>
            ) : (
              collections.map((subject, idx) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  expanded={expandedSubject === subject.id}
                  onToggle={toggleSubject}
                  onOpenChapter={handleChapterClick}
                  index={idx}
                />
              ))
            )}
          </section>
        </div>
      </main>

      {/* Fixed BottomBar area: place inside a safe-area container so it does not overlap system gestures */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-transparent pointer-events-none"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 12px)' }}
      >
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 pointer-events-auto">
          <BottomBar />
        </div>
      </div>
    </div>
  );
};

export default HandoutPage;
