import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { noteCollections } from '../../data/NoteCollections';
import {
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Bookmark,
  Layers,
  X,
  BookOpen,
  BookText,
  BookmarkCheck,
  Menu,
  Search,
  Save,
  Trash2,
  RotateCw,
  Edit3,
  Type
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../firebase/config';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';

const NotePage = () => {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [showControls, setShowControls] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [showNoteTaking, setShowNoteTaking] = useState(false);
  const [userNotes, setUserNotes] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [viewsCount, setViewsCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [userViewed, setUserViewed] = useState(false);
  const [tocSearch, setTocSearch] = useState('');
  const [noteSearch, setNoteSearch] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [noteTitle, setNoteTitle] = useState('');
  const [allUserNotes, setAllUserNotes] = useState([]);
  const [isLandscape, setIsLandscape] = useState(false);
  const [showEditorToolbar, setShowEditorToolbar] = useState(false);
  const contentRef = useRef(null);
  const noteTitleRef = useRef(null);
  const noteEditorRef = useRef(null);
  const { currentUser } = useAuth();

  // Firebase document references
  const chapterStatsRef = doc(db, 'chapterStats', chapterId);
  const userStatsRef = currentUser
    ? doc(db, 'userStats', `${currentUser.uid}_${chapterId}`)
    : null;

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Auto-close TOC when switching to mobile if it was open
      if (mobile && showTableOfContents) {
        setShowTableOfContents(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showTableOfContents]);

  // Record view in Firebase
  const recordView = useCallback(async () => {
    if (!currentUser || userViewed) return;

    try {
      // Create user stats document if it doesn't exist
      await setDoc(
        userStatsRef,
        {
          userId: currentUser.uid,
          chapterId,
          viewed: true,
          liked: false,
          lastViewed: new Date(),
        },
        { merge: true }
      );

      // Update chapter stats
      await updateDoc(chapterStatsRef, {
        views: increment(1),
      });

      setUserViewed(true);
    } catch (error) {
      console.error('Error recording view: ', error);
    }
  }, [currentUser, chapterId, userStatsRef, chapterStatsRef, userViewed]);

  // Toggle like in Firebase
  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      // Redirect to login or show login prompt
      navigate('/login');
      return;
    }

    try {
      const userStatsSnap = await getDoc(userStatsRef);
      const hasLiked = userStatsSnap.exists() && userStatsSnap.data().liked;

      if (hasLiked) {
        // Remove like
        await updateDoc(userStatsRef, { liked: false });
        await updateDoc(chapterStatsRef, { likes: increment(-1) });
        setUserLiked(false);
        setLikesCount((prev) => prev - 1);
      } else {
        // Add like
        await setDoc(
          userStatsRef,
          {
            liked: true,
            userId: currentUser.uid,
            chapterId,
            lastLiked: new Date(),
          },
          { merge: true }
        );

        await updateDoc(
          chapterStatsRef,
          {
            likes: increment(1),
          },
          { merge: true }
        );

        setUserLiked(true);
        setLikesCount((prev) => prev + 1);
      }
    } catch (error) {
      console.error('Error toggling like: ', error);
    }
  }, [currentUser, chapterId, userStatsRef, chapterStatsRef, navigate]);

  // Load stats from Firebase
  const loadStats = useCallback(async () => {
    try {
      const chapterStatsSnap = await getDoc(chapterStatsRef);
      if (chapterStatsSnap.exists()) {
        const stats = chapterStatsSnap.data();
        setViewsCount(stats.views || 0);
        setLikesCount(stats.likes || 0);
      }

      if (currentUser && userStatsRef) {
        const userStatsSnap = await getDoc(userStatsRef);
        if (userStatsSnap.exists()) {
          const userStats = userStatsSnap.data();
          setUserViewed(userStats.viewed || false);
          setUserLiked(userStats.liked || false);
        }
      }
    } catch (error) {
      console.error('Error loading stats: ', error);
    }
  }, [chapterStatsRef, userStatsRef, currentUser]);

  // Load user notes
  const loadUserNotes = useCallback(() => {
    const notes = JSON.parse(localStorage.getItem('userNotes') || '{}');
    if (notes[chapterId]) {
      setUserNotes(notes[chapterId].content || '');
      setNoteTitle(notes[chapterId].title || '');
      setAllUserNotes(notes);
    }
  }, [chapterId]);

  useEffect(() => {
    const subject = noteCollections.find((s) => s.id === subjectId);
    if (subject) {
      const chapter = subject.chapters.find((c) => c.id === chapterId);
      if (chapter) {
        setContent(chapter.content);
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
        setIsBookmarked(!!bookmarks[chapterId]);

        // Load user notes if they exist
        loadUserNotes();
      } else {
        navigate('/handouts');
      }
    } else {
      navigate('/handouts');
    }

    const handleScroll = () => {
      // Hide controls when scrolling
      setShowControls(false);
      
      // Show controls again after scrolling stops
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setShowControls(true);
      }, 1500);
    };

    // Get highlighted text
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection.toString().trim()) {
        setHighlightedText(selection.toString());
      }
    };

    document.addEventListener('selectionchange', handleSelection);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('selectionchange', handleSelection);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, [subjectId, chapterId, navigate, loadUserNotes]);

  useEffect(() => {
    // Initialize Firebase stats
    const initializeStats = async () => {
      // Create chapter stats if it doesn't exist
      await setDoc(
        chapterStatsRef,
        {
          views: 0,
          likes: 0,
        },
        { merge: true }
      );

      // Load existing stats
      await loadStats();
    };

    initializeStats();
  }, [chapterId, chapterStatsRef, loadStats]);

  useEffect(() => {
    // Record view when component mounts
    const recordViewIfNeeded = async () => {
      if (!userViewed && currentUser) {
        await recordView();
      }
    };

    recordViewIfNeeded();
  }, [currentUser, userViewed, recordView]);

  // Add IDs to headings for TOC if not present
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h1, h2, h3');
      headings.forEach((heading) => {
        if (!heading.id) {
          heading.id = heading.textContent.replace(/\s+/g, '-').toLowerCase();
        }
      });
    }
  }, [content]);

  const currentSubject = noteCollections.find((s) => s.id === subjectId);
  const currentChapter = currentSubject?.chapters.find((c) => c.id === chapterId);

  // Navigation functions
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 5, 150));
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 5, 70));

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
    if (isBookmarked) {
      delete bookmarks[chapterId];
    } else {
      bookmarks[chapterId] = {
        subjectId,
        chapterId,
        title: currentChapter?.title,
        subjectName: currentSubject?.name,
      };
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setIsBookmarked(!isBookmarked);
  };

  const saveUserNotes = () => {
    const notes = JSON.parse(localStorage.getItem('userNotes') || '{}');
    notes[chapterId] = {
      title: noteTitle,
      content: userNotes,
      updatedAt: new Date().toISOString(),
      subjectId,
      chapterId
    };
    localStorage.setItem('userNotes', JSON.stringify(notes));
    setAllUserNotes(notes);
    setShowNoteTaking(false);
  };

  const deleteNote = () => {
    const notes = JSON.parse(localStorage.getItem('userNotes') || '{}');
    delete notes[chapterId];
    localStorage.setItem('userNotes', JSON.stringify(notes));
    setUserNotes('');
    setNoteTitle('');
    setAllUserNotes(notes);
    setShowNoteTaking(false);
  };

  // Toggle screen orientation
  const toggleScreenOrientation = () => {
    setIsLandscape(!isLandscape);
    if (!isLandscape) {
      document.documentElement.classList.add('landscape-mode');
    } else {
      document.documentElement.classList.remove('landscape-mode');
    }
  };

  // Toggle controls visibility
  const toggleControls = () => {
    setShowControls(!showControls);
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
    return Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent,
      level: parseInt(heading.tagName[1]),
    }));
  };

  const handleTocClick = (id) => {
    scrollToHeading(id);
    if (isMobile) {
      setShowTableOfContents(false);
    }
  };

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter TOC based on search
  const filteredTOC = () => {
    const toc = generateTableOfContents();
    if (!tocSearch) return toc;
    return toc.filter(item => 
      item.text.toLowerCase().includes(tocSearch.toLowerCase())
    );
  };

  // Add highlight to text
  const addHighlight = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.className = 'bg-yellow-200';
      range.surroundContents(span);
      selection.removeAllRanges();
      setHighlightedText('');
    }
  };

  // Save highlighted text as note
  const saveHighlightAsNote = () => {
    const notes = JSON.parse(localStorage.getItem('userNotes') || '{}');
    const existingNotes = notes[chapterId]?.content || '';
    const newNote = `${existingNotes ? existingNotes + '\n\n' : ''}${highlightedText}`;
    setUserNotes(newNote);
    notes[chapterId] = {
      ...notes[chapterId],
      content: newNote,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem('userNotes', JSON.stringify(notes));
    setHighlightedText('');
  };

  // Format text in note editor
  const formatText = (format) => {
    document.execCommand(format, false, null);
    noteEditorRef.current.focus();
  };

  return (
    <div 
      className="min-h-screen font-sans antialiased transition-colors duration-300 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800"
      onClick={toggleControls}
    >
      {/* Floating Navigation (Fixed header on scroll) */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-20 py-2 px-4 sm:py-3 sm:px-6 border-b border-gray-200"
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/handouts');
                }}
                className="flex items-center text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Back to Subjects</span>
              </button>
              <h2 className="text-xs sm:text-sm font-semibold text-gray-800 truncate max-w-[40%] sm:max-w-[50%]">
                {currentChapter?.title}
              </h2>
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTableOfContents(true);
                  }}
                  className="p-2 rounded-full text-gray-500 hover:text-indigo-500 transition-colors"
                  aria-label="Table of contents"
                >
                  <BookText className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNoteTaking(true);
                  }}
                  className="p-2 rounded-full text-gray-500 hover:text-amber-500 transition-colors"
                  aria-label="Your notes"
                >
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBookmark();
                  }}
                  className={`p-2 rounded-full transition-colors ${
                    isBookmarked
                      ? 'text-indigo-500 bg-indigo-50'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <Bookmark className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content and Panels container */}
      <div className="flex max-w-7xl mx-auto">
        {/* Table of Contents Panel (for desktop) */}
        <AnimatePresence>
          {showTableOfContents && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block w-72 xl:w-80 pt-20 pr-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-20 p-6 bg-white rounded-2xl shadow-md border border-gray-200 h-[calc(100vh-7rem)] flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b pb-4 border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Table of Contents</h2>
                  <button
                    onClick={() => setShowTableOfContents(false)}
                    className="p-1 rounded-full text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* TOC Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search in TOC..."
                    value={tocSearch}
                    onChange={(e) => setTocSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                  />
                </div>
                
                <div className="flex-1 overflow-y-auto">
                  <ul className="space-y-1">
                    {filteredTOC().map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleTocClick(item.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors hover:bg-indigo-50 hover:text-indigo-700 ${
                            item.level === 1
                              ? 'font-bold text-base'
                              : item.level === 2
                              ? 'font-medium pl-4 text-sm'
                              : 'pl-8 text-xs'
                          }`}
                        >
                          {item.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                  
                  {filteredTOC().length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      No matching sections found
                    </div>
                  )}
                </div>
                
                <div className="pt-4 border-t border-gray-200 mt-auto">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="h-4 w-4" />
                      <span>~{calculateReadingTime()} min read</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{viewsCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Note Content Area */}
        <div className={`flex-1 p-4 sm:p-6 ${showTableOfContents ? 'lg:pl-0' : ''} ${showNoteTaking ? 'lg:pr-0' : ''}`}>
          <div className="max-w-3xl mx-auto py-8 sm:py-12 pt-16 sm:pt-20">
            {/* Header Section */}
            {showControls && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-500 mb-1 sm:mb-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/handouts');
                    }}
                    className="flex items-center gap-1 text-indigo-500 hover:underline transition-colors"
                  >
                    <Layers className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{currentSubject?.name}</span>
                  </button>
                  <span className="text-gray-300">/</span>
                  <span className="text-gray-500">Chapter</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  {currentChapter?.title}
                </h1>
                <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-600">
                  {currentChapter?.description}
                </p>
                
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTableOfContents(!showTableOfContents);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 text-sm"
                  >
                    {showTableOfContents ? (
                      <>
                        <X className="h-4 w-4" />
                        <span>Close TOC</span>
                      </>
                    ) : (
                      <>
                        <BookText className="h-4 w-4" />
                        <span>Table of Contents</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowNoteTaking(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 text-sm"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Your Notes</span>
                    {userNotes && (
                      <span className="bg-amber-200 text-amber-800 text-xs px-2 py-0.5 rounded-full">
                        Saved
                      </span>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-xl border border-gray-200"
            >
              <div className="p-4 sm:p-6 md:p-8">
                <div
                  ref={contentRef}
                  className="prose prose-sm sm:prose-lg max-w-none leading-relaxed content-text select-text"
                  style={{ fontSize: `${fontSize}%` }}
                >
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
            {currentSubject && showControls && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 sm:mt-12"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Explore More Chapters
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {currentSubject.chapters.map((chapter) => (
                    <button
                      key={chapter.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/notes/${subjectId}/${chapter.id}`);
                      }}
                      className={`group p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all text-left shadow-sm hover:shadow-md ${
                        chapterId === chapter.id
                          ? 'bg-indigo-50 border-indigo-200 font-bold'
                          : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div
                          className={`p-1 sm:p-2 rounded-lg ${
                            chapterId === chapter.id ? 'bg-indigo-100' : 'bg-gray-100'
                          }`}
                        >
                          <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base text-gray-800 group-hover:text-indigo-600 transition-colors">
                            {chapter.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 line-clamp-2">
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
        </div>

        {/* Note Taking Panel (for desktop) */}
        <AnimatePresence>
          {showNoteTaking && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block w-72 xl:w-80 pt-20 pl-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-20 p-6 bg-white rounded-2xl shadow-md border border-gray-200 h-[calc(100vh-7rem)] flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b pb-4 border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Your Notes</h2>
                  <button
                    onClick={() => setShowNoteTaking(false)}
                    className="p-1 rounded-full text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Note Title */}
                <div className="mb-4">
                  <input
                    ref={noteTitleRef}
                    type="text"
                    placeholder="Note title..."
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-amber-300 font-medium"
                  />
                </div>
                
                {/* Notes Content */}
                <div className="flex-1 mb-4 relative">
                  {showEditorToolbar && (
                    <div className="absolute top-0 left-0 right-0 bg-gray-100 p-2 rounded-t-lg border-b border-gray-200 z-10 flex gap-1">
                      <button onClick={() => formatText('bold')} className="p-1 rounded hover:bg-gray-200 font-bold">B</button>
                      <button onClick={() => formatText('italic')} className="p-1 rounded hover:bg-gray-200 italic">I</button>
                      <button onClick={() => formatText('underline')} className="p-1 rounded hover:bg-gray-200 underline">U</button>
                      <button onClick={() => setShowEditorToolbar(false)} className="ml-auto p-1 rounded hover:bg-gray-200">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  <div
                    ref={noteEditorRef}
                    contentEditable
                    className="w-full h-full min-h-[300px] p-3 rounded-lg border border-gray-200 bg-gray-50 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 text-sm resize-none overflow-auto"
                    style={{ paddingTop: showEditorToolbar ? '50px' : '12px' }}
                    onInput={(e) => setUserNotes(e.currentTarget.innerHTML)}
                    dangerouslySetInnerHTML={{ __html: userNotes }}
                    onClick={() => setShowEditorToolbar(true)}
                  />
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={deleteNote}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm"
                    disabled={!userNotes}
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear
                  </button>
                  <button
                    onClick={saveUserNotes}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 text-sm font-medium ml-auto"
                  >
                    <Save className="h-4 w-4" />
                    Save
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile TOC Modal */}
      <AnimatePresence>
        {showTableOfContents && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setShowTableOfContents(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 overflow-y-auto lg:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b pb-4 border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Table of Contents</h2>
                  <button
                    onClick={() => setShowTableOfContents(false)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* TOC Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search in TOC..."
                    value={tocSearch}
                    onChange={(e) => setTocSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                  />
                </div>
                
                <div className="flex-1 overflow-y-auto">
                  <ul className="space-y-1">
                    {filteredTOC().map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleTocClick(item.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors hover:bg-indigo-50 hover:text-indigo-700 ${
                            item.level === 1
                              ? 'font-bold text-base'
                              : item.level === 2
                              ? 'font-medium pl-4 text-sm'
                              : 'pl-8 text-xs'
                          }`}
                        >
                          {item.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                  
                  {filteredTOC().length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      No matching sections found
                    </div>
                  )}
                </div>
                
                <div className="pt-4 border-t border-gray-200 mt-auto">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="h-4 w-4" />
                      <span>~{calculateReadingTime()} min read</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{viewsCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Note-Taking Modal - Full Screen */}
      <AnimatePresence>
        {showNoteTaking && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowNoteTaking(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b pb-4 border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Your Notes</h2>
                  <button
                    onClick={() => setShowNoteTaking(false)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Note Title */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Note title..."
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-amber-300 font-medium"
                  />
                </div>
                
                {/* Notes Content with Editor Toolbar */}
                <div className="flex-1 mb-4 relative">
                  {showEditorToolbar && (
                    <div className="absolute top-0 left-0 right-0 bg-gray-100 p-2 rounded-t-lg border-b border-gray-200 z-10 flex gap-1">
                      <button onClick={() => formatText('bold')} className="p-1 rounded hover:bg-gray-200 font-bold">B</button>
                      <button onClick={() => formatText('italic')} className="p-1 rounded hover:bg-gray-200 italic">I</button>
                      <button onClick={() => formatText('underline')} className="p-1 rounded hover:bg-gray-200 underline">U</button>
                      <button onClick={() => setShowEditorToolbar(false)} className="ml-auto p-1 rounded hover:bg-gray-200">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  <div
                    ref={noteEditorRef}
                    contentEditable
                    className="w-full h-full min-h-[300px] p-3 rounded-lg border border-gray-200 bg-gray-50 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 text-sm resize-none overflow-auto"
                    style={{ paddingTop: showEditorToolbar ? '50px' : '12px' }}
                    onInput={(e) => setUserNotes(e.currentTarget.innerHTML)}
                    dangerouslySetInnerHTML={{ __html: userNotes }}
                    onClick={() => setShowEditorToolbar(true)}
                  />
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={deleteNote}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm"
                    disabled={!userNotes}
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear
                  </button>
                  <button
                    onClick={saveUserNotes}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 text-sm font-medium ml-auto"
                  >
                    <Save className="h-4 w-4" />
                    Save
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Highlight Toolbar */}
      <AnimatePresence>
        {highlightedText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-full px-3 py-2 sm:px-4 sm:py-2 flex items-center gap-2 sm:gap-3 z-50 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={addHighlight}
              className="flex items-center gap-1 text-xs sm:text-sm hover:text-amber-300"
            >
              <Type className="h-3 w-3 sm:h-4 sm:w-4" />
              Highlight
            </button>
            <div className="h-3 sm:h-4 w-px bg-gray-600"></div>
            <button
              onClick={saveHighlightAsNote}
              className="flex items-center gap-1 text-xs sm:text-sm hover:text-indigo-300"
            >
              <Edit3 className="h-3 w-3 sm:h-4 sm:w-4" />
              Save as Note
            </button>
            <button
              onClick={() => setHighlightedText('')}
              className="ml-1 sm:ml-2 text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Scroll Buttons */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 flex flex-col space-y-2 sm:space-y-3 z-30"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToTop();
              }}
              className="p-2 sm:p-3 rounded-full shadow-lg bg-white text-gray-700 hover:scale-110 active:scale-95 transition-all"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToBottom();
              }}
              className="p-2 sm:p-3 rounded-full shadow-lg bg-white text-gray-700 hover:scale-110 active:scale-95 transition-all"
              aria-label="Scroll to bottom"
            >
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Control Bar */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-2xl border-t border-gray-200 z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
              {/* Left side: Rotate button */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  onClick={toggleScreenOrientation}
                  className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"
                  aria-label="Rotate screen"
                >
                  <RotateCw className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              {/* Center: Quick actions */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  onClick={() => setShowTableOfContents(!showTableOfContents)}
                  className={`p-2 sm:p-3 rounded-full transition-all ${
                    showTableOfContents 
                      ? 'bg-indigo-100 text-indigo-600' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                  aria-label="Table of contents"
                >
                  <BookText className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={() => setShowNoteTaking(!showNoteTaking)}
                  className={`p-2 sm:p-3 rounded-full transition-all ${
                    showNoteTaking 
                      ? 'bg-amber-100 text-amber-600' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                  aria-label="Your notes"
                >
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              {/* Right side: Font controls */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"
                  aria-label="Decrease font size"
                >
                  <Type className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs absolute -top-1 -right-1 bg-indigo-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                    {fontSize}%
                  </span>
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