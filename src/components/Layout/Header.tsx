import React, { useState, useEffect } from 'react';
import { Menu, BookOpen, Bell, Search, User, ChevronDown, Share2, Send } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

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
          

            {/* Share and Telegram Icons */}
            <div className="flex items-center space-x-2">
              <button 
                className={`
                  p-2 rounded-full transition-all duration-300
                  ${scrolled 
                    ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 shadow-sm' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                  }
                `}
                onClick={() => {/* Add share functionality */}}
                aria-label="Share"
              >
                <Share2 size={20} />
              </button>
              <button 
                className={`
                  p-2 rounded-full transition-all duration-300
                  ${scrolled 
                    ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 shadow-sm' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                  }
                `}
                onClick={() => window.open('https://t.me/@bh068', '_blank')}
                aria-label="Telegram"
              >
                <Send size={20} className="text-blue-500" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => navigate('/search')}
                className={`
                  p-2 rounded-full transition-all duration-300 transform hover:scale-110
                  ${scrolled 
                    ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 shadow-sm' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                  }
                `}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              
              <button 
                onClick={() => navigate('/notifications')}
                className={`
                  p-2 rounded-full transition-all duration-300 transform hover:scale-110 relative
                  ${scrolled 
                    ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 shadow-sm' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                  }
                `}
                aria-label="Notifications"
              >
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse border border-white"></span>
              </button>
              
              {/* User Profile with dropdown indicator */}
              {currentUser ? (
                <button 
                  onClick={() => navigate('/profilepage')}
                  className="flex items-center space-x-2 focus:outline-none group"
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
                  <div className="flex items-center">
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
        </div>
      </header>

      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentUser={currentUser}
      />
    </>
  );
}