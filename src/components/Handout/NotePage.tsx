import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { noteCollections } from '../../data/NoteCollections';
import { ChevronDown, ChevronUp, ArrowLeft, Download, BookOpen, Bookmark, Search } from 'lucide-react';

const NotePage = () => {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const subject = noteCollections.find(s => s.id === subjectId);
    if (subject) {
      const chapter = subject.chapters.find(c => c.id === chapterId);
      if (chapter) {
        setContent(chapter.content);
        // Check if chapter is bookmarked in localStorage
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

  const highlightSearchTerms = (text) => {
    if (!searchQuery) return text;
    
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.split(regex).map((part, i) => 
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-200">{part}</mark>
      ) : (
        part
      )
    );
  };

  const currentSubject = noteCollections.find(s => s.id === subjectId);
  const currentChapter = currentSubject?.chapters.find(c => c.id === chapterId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Floating Navigation */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 py-2 px-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <button
              onClick={() => navigate('/handouts')}
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">{currentSubject?.name}</span>
            </button>
            <h2 className="text-sm sm:text-base font-medium text-gray-700 truncate max-w-xs sm:max-w-md">
              {currentChapter?.title}
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={toggleBookmark}
                className={`p-2 rounded-full ${isBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
              >
                <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
              </button>
              <button
                onClick={scrollToBottom}
                className="p-2 rounded-full text-indigo-600 hover:bg-indigo-50"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pt-16 sm:pt-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <button
              onClick={() => navigate('/handouts')}
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mb-2"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Subjects
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {currentSubject?.name}
            </h1>
            <h2 className="text-xl sm:text-2xl text-indigo-600 mt-2">
              {currentChapter?.title}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search in notes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <Download className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              {content ? (
                <div dangerouslySetInnerHTML={{ __html: highlightSearchTerms(content) }} />
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
          <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">More Chapters</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {currentSubject.chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => navigate(`/notes/${subjectId}/${chapter.id}`)}
                    className={`p-3 rounded-lg border transition-colors text-left ${chapterId === chapter.id
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                      : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <h4 className="font-medium">{chapter.title}</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {chapter.description || 'No description available'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating action buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
        {isScrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}
        <button
          onClick={scrollToBottom}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default NotePage;