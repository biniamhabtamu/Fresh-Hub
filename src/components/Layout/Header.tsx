import React, { useState, useEffect } from 'react';
import { Menu, BookOpen, Bell, Search, User, ChevronDown, Share2, Send, Home, Book, GraduationCap, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!currentUser?.displayName) return 'U';
    const names = currentUser.displayName.split(' ');
    return names.map(name => name[0]).join('').toUpperCase();
  };

  // Navigation items
  const navItems = [
    { path: 'dashboard', icon: Home, label: 'Home' },
    { path: 'subjects', icon: Book, label: 'Subjects' },
    { path: 'courses', icon: GraduationCap, label: 'Courses' },
    { path: 'profile', icon: User, label: 'Profile' },
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

          

            {/* User Profile */}
            {currentUser ? (
              <div className="relative group">
                <button 
                  onClick={() => navigate('/profilepage')}
                  className="flex items-center space-x-2 focus:outline-none"
                  aria-label="User profile"
                >
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-white font-bold
                    transition-all duration-300 transform group-hover:scale-110
                    bg-gradient-to-r from-indigo-400 to-pink-500 shadow-md
                    ${isHoveringLogo ? 'animate-pulse' : ''}
                  `}>
                    {getUserInitials()}
                  </div>
                  <div className="hidden lg:flex items-center">
                    <span className={`
                      font-medium transition-colors duration-300
                      ${scrolled ? 'text-gray-700 group-hover:text-indigo-600' : 'text-white group-hover:text-yellow-200'}
                    `}>
                      {currentUser.displayName?.split(' ')[0] || 'Profile'}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`
                        ml-1 transition-transform duration-300
                        ${scrolled ? 'text-indigo-600' : 'text-white'}
                        group-hover:translate-y-0.5
                      `} 
                    />
                  </div>
                </button>

                {/* Dropdown Menu */}
                <div className={`
                  absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 transform translate-y-1 group-hover:translate-y-0
                `}>
                  <button 
                    onClick={() => navigate('/profile')}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 w-full text-left"
                  >
                    <User size={16} className="mr-2" />
                    Profile
                  </button>
                  <button 
                    onClick={() => navigate('/settings')}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 w-full text-left"
                  >
                    <Settings size={16} className="mr-2" />
                    Settings
                  </button>
                  <button 
                    onClick={logout}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 w-full text-left"
                  >
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
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