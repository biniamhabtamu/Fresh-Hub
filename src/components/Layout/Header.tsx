import React, { useState, useEffect } from 'react';
import { Menu, Home, Book, GraduationCap, Settings, MoreVertical, X, LogOut, User, Info, Trophy, BarChart2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Set active navigation based on current route
  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setActiveNav(path || 'dashboard');
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showDropdown && !(event.target as HTMLElement).closest('.more-dropdown-container')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  // Navigation items
  const navItems = [
    { path: 'dashboard', icon: Home, label: 'Home' },
    { path: 'subjects', icon: Book, label: 'Subjects' },
    { path: 'profile', icon: User, label: 'Profile' },
    { path: 'quiz-history', icon: BarChart2, label: 'History' },
    { path: 'leaderboard', icon: Trophy, label: 'Leaderboard' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/auth');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <>
      <motion.header
        className={`
          fixed w-full z-50 transition-all duration-300
          ${scrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-xl py-3' 
            : 'bg-white/50 backdrop-blur-lg py-4'
          }
        `}
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          {/* Left Side - Logo and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className={`
                p-2 rounded-full transition-all duration-300 lg:hidden
                ${scrolled ? 'bg-indigo-100 text-indigo-600' : 'bg-indigo-50 text-indigo-600'}
                hover:bg-indigo-200
              `}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => navigate('/dashboard')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className={`
                text-3xl font-extrabold transition-all duration-300
                ${scrolled ? 'text-indigo-800' : 'text-indigo-800'}
                group-hover:text-purple-600
              `}>
                Fresh<span className="text-purple-600 drop-shadow-sm group-hover:text-indigo-800">Hub</span>
              </h1>
            </motion.div>
          </div>

          {/* Center - Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                onClick={() => navigate(`/${item.path}`)}
                className={`
                  flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300
                  ${activeNav === item.path
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <item.icon size={20} className={`mr-2 ${activeNav === item.path ? '' : 'text-indigo-500'}`} />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Right Side - User Actions and More */}
          <div className="flex items-center space-x-4">
            {currentUser && (
              <button 
                onClick={() => navigate('/profile')}
                className="hidden md:flex items-center space-x-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm"
              >
                <img
                  src={currentUser?.photoURL || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-semibold text-gray-800">
                  {currentUser?.fullName?.split(' ')[0]}
                </span>
              </button>
            )}

            <div className="relative more-dropdown-container">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className={`
                  p-2 rounded-full transition-all duration-300
                  ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-700 hover:bg-gray-100'}
                  ${showDropdown ? 'bg-gray-100' : ''}
                `}
                aria-label="More options"
              >
                <MoreVertical size={24} />
              </button>
              
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    className="absolute right-0 mt-3 w-64 md:w-72 bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-100"
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 border-b border-gray-100">
                      <h3 className="text-xl font-bold text-indigo-700">FreshHub</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        An innovative learning platform.
                      </p>
                    </div>
                    <div className="py-2 space-y-1">
                      <button 
                        onClick={() => { setShowDropdown(false); navigate('/about'); }}
                        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                      >
                        <Info size={20} className="mr-3" />
                        About Us
                      </button>
                      <button 
                        onClick={() => { setShowDropdown(false); navigate('/settings'); }}
                        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                      >
                        <Settings size={20} className="mr-3" />
                        Settings
                      </button>
                      {currentUser && (
                        <button 
                          onClick={() => { setShowDropdown(false); handleLogout(); }}
                          className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut size={20} className="mr-3" />
                          Log Out
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!currentUser && (
              <button 
                onClick={() => navigate('/auth')}
                className={`
                  px-5 py-2.5 rounded-full font-semibold transition-all duration-300
                  bg-indigo-600 text-white shadow-lg hover:shadow-xl hover:scale-105
                `}
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </motion.header>

      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentUser={currentUser}
        navItems={navItems}
        activeNav={activeNav}
      />
    </>
  );
}