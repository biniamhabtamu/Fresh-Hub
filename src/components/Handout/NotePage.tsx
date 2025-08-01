import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { noteCollections } from '../../data/NoteCollections';
import { ChevronDown, ChevronUp, ArrowLeft, BookOpen, Bookmark, Layers } from 'lucide-react';

const NotePage = () => {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Color themes for different subjects
  const subjectColors = {
    Psychology: { bg: 'from-purple-100 to-pink-100', text: 'text-purple-600', border: 'border-purple-200' },
    Logic: { bg: 'from-blue-100 to-cyan-100', text: 'text-blue-600', border: 'border-blue-200' },
    Geography: { bg: 'from-green-100 to-teal-100', text: 'text-green-600', border: 'border-green-200' },
    'English skill 1': { bg: 'from-red-100 to-orange-100', text: 'text-red-600', border: 'border-red-200' },
    Anthropology: { bg: 'from-amber-100 to-yellow-100', text: 'text-amber-600', border: 'border-amber-200' },
    Economics: { bg: 'from-emerald-100 to-lime-100', text: 'text-emerald-600', border: 'border-emerald-200' },
    Physics: { bg: 'from-indigo-100 to-violet-100', text: 'text-indigo-600', border: 'border-indigo-200' },
    Math: { bg: 'from-sky-100 to-blue-100', text: 'text-sky-600', border: 'border-sky-200' },
    'Organic Chemistry': { bg: 'from-rose-100 to-pink-100', text: 'text-rose-600', border: 'border-rose-200' },
    'C++': { bg: 'from-fuchsia-100 to-purple-100', text: 'text-fuchsia-600', border: 'border-fuchsia-200' },
    'Applied Math': { bg: 'from-cyan-100 to-blue-100', text: 'text-cyan-600', border: 'border-cyan-200' },
    'Global Trade': { bg: 'from-teal-100 to-emerald-100', text: 'text-teal-600', border: 'border-teal-200' },
    'Emerging Technology': { bg: 'from-violet-100 to-purple-100', text: 'text-violet-600', border: 'border-violet-200' },
    History: { bg: 'from-amber-100 to-orange-100', text: 'text-amber-600', border: 'border-amber-200' },
    default: { bg: 'from-gray-100 to-blue-100', text: 'text-gray-600', border: 'border-gray-200' }
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
    <div className={`min-h-screen bg-gradient-to-br ${colors.bg}`}>
      {/* Floating Navigation */}
      {isScrolled && (
        <div className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-10 py-3 px-6 border-b ${colors.border}`}>
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <button
              onClick={() => navigate('/handouts')}
              className={`flex items-center ${colors.text} hover:opacity-80 transition-opacity`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">{currentSubject?.name}</span>
            </button>
            <h2 className="text-sm sm:text-base font-medium text-gray-700 truncate max-w-xs sm:max-w-md">
              {currentChapter?.title}
            </h2>
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-full ${isBookmarked ? colors.text : 'text-gray-400 hover:' + colors.text}`}
            >
              <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 pt-20 sm:pt-24">
        {/* Header */}
        <div className="mb-10 text-center">
          <button
            onClick={() => navigate('/handouts')}
            className={`flex items-center mx-auto ${colors.text} hover:opacity-80 transition-opacity mb-6`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Subjects
          </button>
          
          <div className={`inline-block px-6 py-2 rounded-full ${colors.text} bg-white/50 backdrop-blur-sm mb-4`}>
            <div className="flex items-center">
              <Layers className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">{currentSubject?.name}</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {currentChapter?.title}
          </h1>
          
          <div className="flex justify-center items-center text-sm text-gray-500">
            <BookOpen className="h-4 w-4 mr-2" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20">
          <div className="p-6 sm:p-8">
            <div className="prose max-w-none text-gray-700">
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
        </div>

        {/* Chapter Navigation */}
        {currentSubject && (
          <div className="mt-12">
            <h3 className={`text-lg font-semibold ${colors.text} mb-6 text-center`}>
              Explore More Chapters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentSubject.chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => navigate(`/notes/${subjectId}/${chapter.id}`)}
                  className={`p-5 rounded-xl border transition-all text-left backdrop-blur-sm ${chapterId === chapter.id
                    ? `bg-white/90 border-white shadow-lg ${colors.text} font-medium`
                    : 'bg-white/50 border-white/30 hover:bg-white/70 hover:shadow-md'
                  }`}
                >
                  <h4 className="font-medium">{chapter.title}</h4>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {chapter.description || 'Chapter content'}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating action buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
        {isScrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`p-3 rounded-full shadow-lg ${colors.text} bg-white/90 backdrop-blur-sm hover:bg-white transition-all`}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}
        <button
          onClick={scrollToBottom}
          className={`p-3 rounded-full shadow-lg ${colors.text} bg-white/90 backdrop-blur-sm hover:bg-white transition-all`}
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default NotePage;