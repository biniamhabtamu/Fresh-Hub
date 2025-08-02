import React, { useState, useEffect } from 'react';
import { Menu, Home, Book, GraduationCap, Settings, MoreVertical } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const [showAboutUs, setShowAboutUs] = useState(false);
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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close About Us when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showAboutUs && !event.target.closest('.about-us-container')) {
        setShowAboutUs(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showAboutUs]);

  // Navigation items
  const navItems = [
    { path: 'dashboard', icon: Home, label: 'Home' },
    { path: 'subjects', icon: Book, label: 'Subjects' },
    { path: 'courses', icon: GraduationCap, label: 'Courses' },
    { path: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      <header 
        className={`
          fixed w-full z-50 transition-all duration-500 ease-out
          ${scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-indigo-100' 
            : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-4'
          }
        `}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left Side - Menu Icon */}
          <button
            onClick={() => setSidebarOpen(true)}
            className={`
              p-2 rounded-lg transition-all duration-300
              transform hover:scale-110
              ${scrolled 
                ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-md' 
                : 'bg-white/20 text-white'
              }
            `}
            aria-label="Open menu"
          >
            <Menu size={24} className="animate-bounce" />
          </button>

          {/* Center - Logo Section */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => navigate('/dashboard')}
            onMouseEnter={() => setIsHoveringLogo(true)}
            onMouseLeave={() => setIsHoveringLogo(false)}
          >
            <h1 className={`
              text-2xl font-bold transition-all duration-500
              ${scrolled ? 'text-indigo-700' : 'text-white'}
              group-hover:text-yellow-300
            `}>
              <span className="inline-block transition-transform duration-300 group-hover:scale-105">
                📘 Fresh<span className="text-yellow-300 drop-shadow-md">Hub</span>
              </span>
            </h1>
          </div>

          {/* Right Side - Icons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(`/${item.path}`)}
                  className={`
                    flex items-center px-3 py-2 rounded-lg transition-all duration-300
                    ${activeNav === item.path 
                      ? scrolled 
                        ? 'bg-indigo-100 text-indigo-700 shadow-inner' 
                        : 'bg-white/20 text-white'
                      : scrolled 
                        ? 'text-gray-700 hover:bg-indigo-50' 
                        : 'text-white/80 hover:bg-white/10'
                    }
                  `}
                >
                  <item.icon size={18} className="mr-2" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* 3-dot Menu Icon */}
            <div className="relative about-us-container">
              <button 
                onClick={() => setShowAboutUs(!showAboutUs)}
                className={`
                  p-2 rounded-full transition-all duration-300
                  ${scrolled 
                    ? 'text-gray-700 hover:bg-indigo-50' 
                    : 'text-white hover:bg-white/20'
                  }
                  ${showAboutUs ? (scrolled ? 'bg-indigo-100' : 'bg-white/30') : ''}
                `}
                aria-label="More options"
              >
                <MoreVertical size={24} />
              </button>

              {/* About Us Dropdown */}
              {showAboutUs && (
                <div className={`
                  absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50
                  transition-all duration-200 transform origin-top-right
                  ${showAboutUs ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                `}>
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-indigo-700">About FreshHub</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-3">
                      FreshHub is an innovative learning platform designed to help students 
                      master their subjects through interactive notes and comprehensive resources.
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      Our mission is to make quality education accessible to everyone, 
                      everywhere.
                    </p>
                    <div className="flex items-center text-sm text-indigo-600">
                      <span>Version 1.0.0</span>
                      <span className="mx-2">•</span>
                      <span>© 2023 FreshHub</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sign In Button (shown when not logged in) */}
            {!currentUser && (
              <button 
                onClick={() => navigate('/auth')}
                className={`
                  px-4 py-2 rounded-md font-medium transition-all duration-300
                  transform hover:scale-105 shadow-md
                  ${scrolled 
                    ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white hover:shadow-lg' 
                    : 'bg-white text-indigo-700 hover:bg-gray-50'
                  }
                `}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

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