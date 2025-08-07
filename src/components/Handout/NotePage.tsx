import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { noteCollections } from '../../data/NoteCollections';
import { 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  Bookmark, 
  Layers,
  Plus,
  Minus,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  X,
  Volume2,
  BookOpen,
  BookText,
  Share2,
  Copy,
  Star,
  Search,
  BookmarkPlus,
  BookmarkMinus,
  BookmarkCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NotePage = () => {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [showNoteTaking, setShowNoteTaking] = useState(false);
  const [userNotes, setUserNotes] = useState('');
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [highlightedText, setHighlightedText] = useState('');
  const contentRef = useRef(null);
  const synthRef = useRef(null);
  const utteranceRef = useRef(null);

  useEffect(() => {
    const subject = noteCollections.find(s => s.id === subjectId);
    if (subject) {
      const chapter = subject.chapters.find(c => c.id === chapterId);
      if (chapter) {
        setContent(chapter.content);
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
        setIsBookmarked(!!bookmarks[chapterId]);
        
        // Load user notes if they exist
        const notes = JSON.parse(localStorage.getItem('userNotes') || '{}');
        if (notes[chapterId]) {
          setUserNotes(notes[chapterId]);
        }
      } else {
        navigate('/handouts');
      }
    } else {
      navigate('/handouts');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    // Initialize text-to-speech
    synthRef.current = window.speechSynthesis;
    
    // Get highlighted text
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection.toString().trim()) {
        setHighlightedText(selection.toString());
      }
    };

    document.addEventListener('selectionchange', handleSelection);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('selectionchange', handleSelection);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      if (synthRef.current && synthRef.current.speaking) {
        synthRef.current.cancel();
      }
    };
  }, [subjectId, chapterId, navigate]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const currentSubject = noteCollections.find(s => s.id === subjectId);
  const currentChapter = currentSubject?.chapters.find(c => c.id === chapterId);

  // Navigation functions
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 5, 150));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 5, 70));
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
    if (isBookmarked) {
      delete bookmarks[chapterId];
    } else {
      bookmarks[chapterId] = {
        subjectId,
        chapterId,
        title: currentChapter?.title,
        subjectName: currentSubject?.name
      };
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setIsBookmarked(!isBookmarked);
  };
  
  const toggleTextToSpeech = () => {
    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    } else {
      const contentText = contentRef.current?.textContent || '';
      if (contentText) {
        utteranceRef.current = new SpeechSynthesisUtterance(contentText);
        utteranceRef.current.onend = () => setIsSpeaking(false);
        synthRef.current.speak(utteranceRef.current);
        setIsSpeaking(true);
      }
    }
  };

  const saveUserNotes = () => {
    const notes = JSON.parse(localStorage.getItem('userNotes') || '{}');
    notes[chapterId] = userNotes;
    localStorage.setItem('userNotes', JSON.stringify(notes));
    setShowNoteTaking(false);
  };

  const shareContent = () => {
    if (navigator.share) {
      navigator.share({
        title: currentChapter?.title,
        text: `Check out this note on ${currentSubject?.name}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
    setShowShareOptions(false);
  };

  // Calculate reading time
  const calculateReadingTime = () => {
    const words = contentRef.current?.textContent?.split(/\s+/)?.length || 0;
    const minutes = Math.ceil(words / 200);
    return minutes;
  };

  // Generate table of contents from headings
  const generateTableOfContents = () => {
    if (!contentRef.current) return [];
    const headings = contentRef.current.querySelectorAll('h1, h2, h3');
    return Array.from(headings).map(heading => ({
      id: heading.id || heading.textContent.replace(/\s+/g, '-').toLowerCase(),
      text: heading.textContent,
      level: parseInt(heading.tagName[1])
    }));
  };

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add highlight to text
  const addHighlight = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.className = 'bg-yellow-200 dark:bg-yellow-800';
      range.surroundContents(span);
      selection.removeAllRanges();
      setHighlightedText('');
    }
  };

  // Save highlighted text as note
  const saveHighlightAsNote = () => {
    const notes = JSON.parse(localStorage.getItem('userNotes') || '{}');
    const existingNotes = notes[chapterId] || '';
    const newNote = `${existingNotes ? existingNotes + '\n\n' : ''}${highlightedText}`;
    setUserNotes(newNote);
    notes[chapterId] = newNote;
    localStorage.setItem('userNotes', JSON.stringify(notes));
    setHighlightedText('');
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-gray-950 to-gray-900 text-gray-200' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800'}`}>
      
      {/* Floating Navigation (Fixed header on scroll) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-20 py-3 px-4 sm:px-6 border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800`}
          >
            <div className="max-w-4xl mx-auto flex justify-between items-center">
              <button
                onClick={() => navigate('/handouts')}
                className={`flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-white`}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Back to Subjects</span>
              </button>
              <h2 className="text-sm sm:text-base font-semibold text-gray-800 truncate max-w-[50%] dark:text-white">
                {currentChapter?.title}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowTableOfContents(true)}
                  className="p-2 rounded-full text-gray-500 hover:text-indigo-500 transition-colors dark:text-gray-400 dark:hover:text-indigo-400"
                  aria-label="Table of contents"
                >
                  <BookText className="h-5 w-5" />
                </button>
                <button
                  onClick={toggleBookmark}
                  className={`p-2 rounded-full transition-colors ${isBookmarked ? 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30' : 'text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'}`}
                  aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                >
                  {isBookmarked ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table of Contents Panel */}
      <AnimatePresence>
        {showTableOfContents && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-40 dark:bg-gray-900 dark:border-l dark:border-gray-800"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Table of Contents</h2>
                <button 
                  onClick={() => setShowTableOfContents(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <ul className="space-y-2">
                  {generateTableOfContents().map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToHeading(item.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-900/30 ${
                          item.level === 1 ? 'font-bold text-lg' : 
                          item.level === 2 ? 'font-medium pl-6' : 'pl-10 text-sm'
                        }`}
                      >
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <BookOpen className="h-5 w-5" />
                    <span>Estimated reading time: {calculateReadingTime()} min</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Note Taking Panel */}
      <AnimatePresence>
        {showNoteTaking && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-40 dark:bg-gray-900 dark:border-l dark:border-gray-800"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Notes</h2>
                <button 
                  onClick={() => setShowNoteTaking(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex-1">
                <textarea
                  value={userNotes}
                  onChange={(e) => setUserNotes(e.target.value)}
                  className="w-full h-full p-4 rounded-lg border border-gray-200 bg-gray-50 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Write your notes here..."
                />
              </div>
              
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowNoteTaking(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={saveUserNotes}
                  className="flex-1 px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600"
                >
                  Save Notes
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Options Panel */}
      <AnimatePresence>
        {showShareOptions && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-24 right-6 bg-white rounded-xl shadow-2xl p-4 z-40 dark:bg-gray-800"
          >
            <div className="flex flex-col gap-3">
              <button
                onClick={shareContent}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Share2 className="h-5 w-5 text-indigo-500" />
                <span>Share via link</span>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(contentRef.current?.textContent || '');
                  setShowShareOptions(false);
                }}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Copy className="h-5 w-5 text-indigo-500" />
                <span>Copy content</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 pt-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 mb-2 dark:text-gray-400">
            <button
              onClick={() => navigate('/handouts')}
              className={`flex items-center gap-1 text-indigo-500 hover:underline transition-colors`}
            >
              <Layers className="h-4 w-4" />
              <span>{currentSubject?.name}</span>
            </button>
            <span className="text-gray-300 dark:text-gray-600">/</span>
            <span className="text-gray-500 dark:text-gray-400">Chapter</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight dark:text-white">
            {currentChapter?.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {currentChapter?.description}
          </p>
          
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setShowTableOfContents(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300"
            >
              <BookText className="h-4 w-4" />
              <span>Table of Contents</span>
            </button>
            <button
              onClick={() => setShowNoteTaking(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300"
            >
              <BookOpen className="h-4 w-4" />
              <span>Take Notes</span>
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-white rounded-3xl shadow-xl border border-gray-200 dark:bg-gray-900 dark:border-gray-800"
        >
          <div className="p-6 sm:p-10">
            <div 
              ref={contentRef}
              className="prose prose-lg max-w-none leading-relaxed content-text dark:prose-invert"
              style={{ fontSize: `${fontSize}%` }}
            >
              {content ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-pulse text-gray-400 dark:text-gray-600">
                    Loading note content...
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Highlight Toolbar */}
        <AnimatePresence>
          {highlightedText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-full px-4 py-2 flex items-center gap-3 z-50 shadow-lg"
            >
              <button 
                onClick={addHighlight}
                className="flex items-center gap-1 text-sm hover:text-amber-300"
              >
                <Star className="h-4 w-4" />
                Highlight
              </button>
              <div className="h-4 w-px bg-gray-600"></div>
              <button 
                onClick={saveHighlightAsNote}
                className="flex items-center gap-1 text-sm hover:text-indigo-300"
              >
                <BookmarkPlus className="h-4 w-4" />
                Save as Note
              </button>
              <button 
                onClick={() => setHighlightedText('')}
                className="ml-2 text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chapter Navigation */}
        {currentSubject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <h3 className={`text-xl font-bold text-gray-900 mb-6 text-center dark:text-white`}>
              Explore More Chapters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentSubject.chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => navigate(`/notes/${subjectId}/${chapter.id}`)}
                  className={`group p-5 rounded-2xl border transition-all text-left shadow-sm hover:shadow-md dark:border-gray-800 ${
                    chapterId === chapter.id
                      ? 'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/30 dark:border-indigo-800 font-bold'
                      : 'bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      chapterId === chapter.id 
                        ? 'bg-indigo-100 dark:bg-indigo-900/50' 
                        : 'bg-gray-100 dark:bg-gray-800'
                    }`}>
                      <BookOpen className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-indigo-600 dark:text-gray-200 dark:group-hover:text-indigo-400 transition-colors">
                        {chapter.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                        {chapter.description || 'Chapter content'}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Floating Scroll Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-24 right-6 flex flex-col space-y-3 z-30"
      >
        <button
          onClick={scrollToTop}
          className={`p-3 rounded-full shadow-lg bg-white text-gray-700 hover:scale-110 active:scale-95 transition-all dark:bg-gray-800 dark:text-gray-200`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
        <button
          onClick={scrollToBottom}
          className={`p-3 rounded-full shadow-lg bg-white text-gray-700 hover:scale-110 active:scale-95 transition-all dark:bg-gray-800 dark:text-gray-200`}
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </motion.div>

      {/* Bottom Control Bar */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-2xl border-t border-gray-200 dark:bg-gray-900/80 dark:border-gray-800 z-30"
      >
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* Left side: Font controls */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={decreaseFontSize} 
              className="control-btn" 
              aria-label="Decrease font size"
            >
              <Minus className="h-5 w-5" />
            </button>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12 text-center select-none">
              {fontSize}%
            </div>
            <button 
              onClick={increaseFontSize} 
              className="control-btn" 
              aria-label="Increase font size"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {/* Center: Quick actions */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setShowShareOptions(!showShareOptions)}
              className={`control-btn ${showShareOptions ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' : ''}`}
              aria-label="Share options"
            >
              <Share2 className="h-5 w-5" />
            </button>
            <button 
              onClick={toggleTextToSpeech}
              className={`control-btn ${isSpeaking ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' : ''}`}
              aria-label={isSpeaking ? "Stop reading" : "Read aloud"}
            >
              <Volume2 className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setShowNoteTaking(true)}
              className="control-btn"
              aria-label="Take notes"
            >
              <BookOpen className="h-5 w-5" />
            </button>
          </div>
          
          {/* Right side: Actions */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleDarkMode} 
              className="control-btn" 
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={toggleFullscreen} 
              className="control-btn" 
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
            </button>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default NotePage;