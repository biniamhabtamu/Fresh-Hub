import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { noteCollections } from '../../data/NoteCollections';
import { ChevronDown, ChevronUp, ArrowLeft, BookOpen, Bookmark, Layers, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NotePage = () => {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Color themes for different subjects
  const subjectColors = {
    Psychology: { bg: 'from-purple-50 to-pink-50', text: 'text-purple-600', border: 'border-purple-200', iconBg: 'bg-purple-600' },
    Logic: { bg: 'from-blue-50 to-cyan-50', text: 'text-blue-600', border: 'border-blue-200', iconBg: 'bg-blue-600' },
    Geography: { bg: 'from-green-50 to-teal-50', text: 'text-green-600', border: 'border-green-200', iconBg: 'bg-green-600' },
    'English skill 1': { bg: 'from-red-50 to-orange-50', text: 'text-red-600', border: 'border-red-200', iconBg: 'bg-red-600' },
    Anthropology: { bg: 'from-amber-50 to-yellow-50', text: 'text-amber-600', border: 'border-amber-200', iconBg: 'bg-amber-600' },
    Economics: { bg: 'from-emerald-50 to-lime-50', text: 'text-emerald-600', border: 'border-emerald-200', iconBg: 'bg-emerald-600' },
    Physics: { bg: 'from-indigo-50 to-violet-50', text: 'text-indigo-600', border: 'border-indigo-200', iconBg: 'bg-indigo-600' },
    Math: { bg: 'from-sky-50 to-blue-50', text: 'text-sky-600', border: 'border-sky-200', iconBg: 'bg-sky-600' },
    'Organic Chemistry': { bg: 'from-rose-50 to-pink-50', text: 'text-rose-600', border: 'border-rose-200', iconBg: 'bg-rose-600' },
    'C++': { bg: 'from-fuchsia-50 to-purple-50', text: 'text-fuchsia-600', border: 'border-fuchsia-200', iconBg: 'bg-fuchsia-600' },
    'Applied Math': { bg: 'from-cyan-50 to-blue-50', text: 'text-cyan-600', border: 'border-cyan-200', iconBg: 'bg-cyan-600' },
    'Global Trade': { bg: 'from-teal-50 to-emerald-50', text: 'text-teal-600', border: 'border-teal-200', iconBg: 'bg-teal-600' },
    'Emerging Technology': { bg: 'from-violet-50 to-purple-50', text: 'text-violet-600', border: 'border-violet-200', iconBg: 'bg-violet-600' },
    History: { bg: 'from-amber-50 to-orange-50', text: 'text-amber-600', border: 'border-amber-200', iconBg: 'bg-amber-600' },
    default: { bg: 'from-gray-50 to-blue-50', text: 'text-gray-600', border: 'border-gray-200', iconBg: 'bg-gray-600' }
  };

  useEffect(() => {
    const subject = noteCollections.find(s => s.id === subjectId);
    if (subject) {
      const chapter = subject.chapters.find(c => c.id === chapterId);
      if (chapter) {
        setContent(chapter.content);
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
        setIsBookmarked(!!bookmarks[chapterId]);
      } else {
        navigate('/handouts');
      }
    } else {
      navigate('/handouts');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      if (window.scrollY > 50) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [subjectId, chapterId, navigate]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
    if (isBookmarked) {
      delete bookmarks[chapterId];
    } else {
      bookmarks[chapterId] = {
        subjectId,
        chapterId,
        title: noteCollections.find(s => s.id === subjectId)?.chapters.find(c => c.id === chapterId)?.title,
        subjectName: noteCollections.find(s => s.id === subjectId)?.name
      };
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setIsBookmarked(!isBookmarked);
  };

  const currentSubject = noteCollections.find(s => s.id === subjectId);
  const currentChapter = currentSubject?.chapters.find(c => c.id === chapterId);
  const colors = subjectColors[currentSubject?.name] || subjectColors.default;

  return (
    <div className={`min-h-screen font-sans ${currentSubject ? `bg-gradient-to-br ${colors.bg}` : 'bg-gray-50'}`}>
      {/* Floating Navigation */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-20 py-3 px-6 border-b ${colors.border}`}
          >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <button
                onClick={() => navigate('/handouts')}
                className={`flex items-center text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors`}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">{currentSubject?.name}</span>
              </button>
              <h2 className="text-sm sm:text-base font-semibold text-gray-800 truncate max-w-xs sm:max-w-md">
                {currentChapter?.title}
              </h2>
              <button
                onClick={toggleBookmark}
                className={`p-2 rounded-full transition-colors ${isBookmarked ? `${colors.text} bg-white` : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 pt-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-4 text-sm font-semibold text-gray-600 mb-2">
            <button
              onClick={() => navigate('/handouts')}
              className={`flex items-center gap-2 ${colors.text} hover:underline transition-colors`}
            >
              <Layers className="h-4 w-4" />
              <span>{currentSubject?.name}</span>
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">Chapter</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            {currentChapter?.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            {currentChapter?.description}
          </p>
          <div className="mt-6 flex justify-center items-center gap-4">
            <button
              onClick={toggleBookmark}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${isBookmarked
                  ? `${colors.iconBg} text-white hover:bg-opacity-90`
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
                }`}
            >
              <Bookmark className="h-4 w-4" fill={isBookmarked ? "currentColor" : "none"} />
              {isBookmarked ? 'Bookmarked' : 'Bookmark this chapter'}
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white"
        >
          {showScrollHint && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10 ${colors.text}`}
            >
              <span className="text-sm">Scroll Down</span>
              <ChevronDown className="w-5 h-5 mt-1" />
            </motion.div>
          )}

          <div className="p-6 sm:p-10">
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              {content ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-pulse text-gray-400">
                    Loading note content...
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Chapter Navigation */}
        {currentSubject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <h3 className={`text-xl font-bold ${colors.text} mb-6 text-center`}>
              Explore More Chapters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentSubject.chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => navigate(`/notes/${subjectId}/${chapter.id}`)}
                  className={`p-5 rounded-2xl border transition-all text-left backdrop-blur-sm shadow-md ${chapterId === chapter.id
                    ? `bg-white/90 border-white shadow-lg ${colors.text} font-bold`
                    : 'bg-white/50 border-white/30 hover:bg-white/70 hover:shadow-md'
                    }`}
                >
                  <h4 className="font-semibold text-gray-800">{chapter.title}</h4>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {chapter.description || 'Chapter content'}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Floating action buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
        <button
          onClick={scrollToTop}
          className={`p-3 rounded-full shadow-lg ${colors.iconBg} text-white backdrop-blur-sm hover:scale-110 transition-all`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
        <button
          onClick={scrollToBottom}
          className={`p-3 rounded-full shadow-lg ${colors.iconBg} text-white backdrop-blur-sm hover:scale-110 transition-all`}
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default NotePage;