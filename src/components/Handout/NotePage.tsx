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
  Volume2,
  Sun,
  Moon,
  Maximize2,
  Minimize2,
  Settings,
  User,
  Book,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NotePage = () => {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [fontSize, setFontSize] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showVoiceOptions, setShowVoiceOptions] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [readingSpeed, setReadingSpeed] = useState(1);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);
  
  // Speech synthesis
  const synthRef = useRef(null);
  const utteranceRef = useRef(null);
  const contentRef = useRef(null);

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
    
    // Initialize speech synthesis
    synthRef.current = window.speechSynthesis;
    
    // Load voices
    const loadVoices = () => {
      const availableVoices = synthRef.current.getVoices();
      setVoices(availableVoices);
      
      // Try to find a default voice (preferably English)
      const defaultVoice = availableVoices.find(v => v.lang.includes('en')) || 
                           availableVoices.find(v => v.default) || 
                           availableVoices[0];
      setSelectedVoice(defaultVoice);
    };
    
    loadVoices();
    synthRef.current.onvoiceschanged = loadVoices;
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (utteranceRef.current) {
        synthRef.current.cancel();
      }
      synthRef.current.onvoiceschanged = null;
    };
  }, [subjectId, chapterId, navigate]);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

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

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 10, 150));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 10, 70));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleTextToSpeech = () => {
    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    } else {
      const contentText = contentRef.current?.textContent || '';
      if (contentText) {
        utteranceRef.current = new SpeechSynthesisUtterance(contentText);
        utteranceRef.current.voice = selectedVoice;
        utteranceRef.current.rate = readingSpeed;
        utteranceRef.current.onend = () => setIsSpeaking(false);
        synthRef.current.speak(utteranceRef.current);
        setIsSpeaking(true);
      }
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleVoiceChange = (voiceName) => {
    const voice = voices.find(v => v.name === voiceName);
    if (voice) {
      setSelectedVoice(voice);
      // Restart speech if currently speaking
      if (isSpeaking) {
        synthRef.current.cancel();
        toggleTextToSpeech();
      }
    }
    setShowVoiceOptions(false);
  };

  const handleSpeedChange = (speed) => {
    setReadingSpeed(speed);
    if (isSpeaking) {
      synthRef.current.cancel();
      toggleTextToSpeech();
    }
  };

  const currentSubject = noteCollections.find(s => s.id === subjectId);
  const currentChapter = currentSubject?.chapters.find(c => c.id === chapterId);
  const colors = subjectColors[currentSubject?.name] || subjectColors.default;

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${currentSubject ? `bg-gradient-to-br ${colors.bg}` : 'bg-gray-50'} dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800`}>
      {/* Floating Navigation */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-20 py-3 px-6 border-b ${colors.border} dark:bg-gray-800/90 dark:border-gray-700`}
          >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <button
                onClick={() => navigate('/handouts')}
                className={`flex items-center text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors dark:text-gray-300 dark:hover:text-white`}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">{currentSubject?.name}</span>
              </button>
              <h2 className="text-sm sm:text-base font-semibold text-gray-800 truncate max-w-xs sm:max-w-md dark:text-white">
                {currentChapter?.title}
              </h2>
              <button
                onClick={toggleBookmark}
                className={`p-2 rounded-full transition-colors ${isBookmarked ? `${colors.text} bg-white dark:bg-gray-700` : 'text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'}`}
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
          <div className="inline-flex items-center gap-4 text-sm font-semibold text-gray-600 mb-2 dark:text-gray-400">
            <button
              onClick={() => navigate('/handouts')}
              className={`flex items-center gap-2 ${colors.text} hover:underline transition-colors`}
            >
              <Layers className="h-4 w-4" />
              <span>{currentSubject?.name}</span>
            </button>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <span className="text-gray-500 dark:text-gray-400">Chapter</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight dark:text-white">
            {currentChapter?.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            {currentChapter?.description}
          </p>
          <div className="mt-6 flex justify-center items-center gap-4">
            <button
              onClick={toggleBookmark}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isBookmarked
                  ? `${colors.iconBg} text-white hover:bg-opacity-90`
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'
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
          className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white dark:bg-gray-800/80 dark:border-gray-700"
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
            <div 
              ref={contentRef}
              className="prose prose-lg max-w-none leading-relaxed content-text dark:prose-invert"
              style={{ fontSize: `${fontSize}%` }}
            >
              {content ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-pulse text-gray-400 dark:text-gray-500">
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
            <h3 className={`text-xl font-bold ${colors.text} mb-6 text-center dark:text-${colors.text.split('text-')[1]}-400`}>
              Explore More Chapters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentSubject.chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => navigate(`/notes/${subjectId}/${chapter.id}`)}
                  className={`p-5 rounded-2xl border transition-all text-left backdrop-blur-sm shadow-md ${
                    chapterId === chapter.id
                      ? `bg-white/90 border-white shadow-lg ${colors.text} font-bold dark:bg-gray-800/90 dark:border-gray-700 dark:text-${colors.text.split('text-')[1]}-400`
                      : 'bg-white/50 border-white/30 hover:bg-white/70 hover:shadow-md dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:bg-gray-700/70'
                  }`}
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">{chapter.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                    {chapter.description || 'Chapter content'}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Floating action buttons */}
      <div className="fixed bottom-24 right-6 flex flex-col space-y-3 z-30">
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

      {/* Bottom Control Bar */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg shadow-2xl border-t border-gray-200 dark:bg-gray-800/90 dark:border-gray-700 z-30"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-3 sm:mb-0">
            <button 
              onClick={decreaseFontSize}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              aria-label="Decrease font size"
            >
              <Minus className="h-5 w-5" />
            </button>
            
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12 text-center">
              {fontSize}%
            </div>
            
            <button 
              onClick={increaseFontSize}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              aria-label="Increase font size"
            >
              <Plus className="h-5 w-5" />
            </button>
            
            <div className="h-6 w-px bg-gray-300 mx-2 dark:bg-gray-600"></div>
            
            <button 
              onClick={toggleTextToSpeech}
              className={`p-2 rounded-full transition-colors relative ${
                isSpeaking 
                  ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
              aria-label={isSpeaking ? "Stop reading" : "Read aloud"}
            >
              <Volume2 className="h-5 w-5" />
              {isSpeaking && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              )}
            </button>
            
            {voices.length > 0 && (
              <div className="relative ml-2">
                <button 
                  onClick={() => setShowVoiceOptions(!showVoiceOptions)}
                  className="flex items-center text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300"
                >
                  <User className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">Voice</span>
                </button>
                
                <AnimatePresence>
                  {showVoiceOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute bottom-full mb-2 left-0 w-64 bg-white rounded-lg shadow-xl p-3 z-40 dark:bg-gray-800 dark:border dark:border-gray-700"
                    >
                      <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Select Voice</h4>
                      <div className="max-h-60 overflow-y-auto pr-2">
                        {voices.map((voice) => (
                          <button
                            key={voice.name}
                            onClick={() => handleVoiceChange(voice.name)}
                            className={`w-full text-left px-3 py-2 rounded mb-1 text-sm ${
                              selectedVoice?.name === voice.name
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                          >
                            {voice.name} ({voice.lang})
                          </button>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Reading Speed</h4>
                        <div className="flex gap-2">
                          {[0.5, 0.8, 1, 1.2, 1.5].map(speed => (
                            <button
                              key={speed}
                              onClick={() => handleSpeedChange(speed)}
                              className={`px-3 py-1 rounded-full text-sm ${
                                readingSpeed === speed
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                              }`}
                            >
                              {speed}x
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button 
              onClick={toggleFullscreen}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
            </button>
            
            <button 
              onClick={() => setShowSettingsPanel(!showSettingsPanel)}
              className={`p-2 rounded-full transition-colors ${
                showSettingsPanel
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
              aria-label="Settings"
            >
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettingsPanel && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 left-0 right-0 mx-4 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl p-6 z-40 dark:bg-gray-800/90 dark:border dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Reading Preferences</h3>
              <button 
                onClick={() => setShowSettingsPanel(false)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Font Settings</h4>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={decreaseFontSize}
                    className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  
                  <div className="text-lg font-medium text-gray-800 dark:text-gray-200 w-16 text-center">
                    {fontSize}%
                  </div>
                  
                  <button 
                    onClick={increaseFontSize}
                    className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Reading Voice</h4>
                <div className="flex flex-wrap gap-2">
                  {voices.slice(0, 3).map(voice => (
                    <button
                      key={voice.name}
                      onClick={() => handleVoiceChange(voice.name)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedVoice?.name === voice.name
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {voice.name.split(' ')[0]}
                    </button>
                  ))}
                  {voices.length > 3 && (
                    <button 
                      onClick={() => setShowVoiceOptions(true)}
                      className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    >
                      +{voices.length - 3} more
                    </button>
                  )}
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Reading Speed</h4>
                  <div className="flex gap-2">
                    {[0.5, 0.8, 1, 1.2, 1.5].map(speed => (
                      <button
                        key={speed}
                        onClick={() => handleSpeedChange(speed)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          readingSpeed === speed
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Content Display</h4>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                <button 
                  onClick={toggleDarkMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    isDarkMode ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotePage;