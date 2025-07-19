import React, { useState, useEffect } from 'react';
import { Menu, BookOpen, Bell, Search, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
          fixed w-full z-50 transition-all duration-300
          ${scrolled 
            ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' 
            : 'bg-gradient-to-r from-indigo-600 to-purple-700 py-4'
          }
        `}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/dashboard')}
          >
            <div className={`
              p-2 rounded-lg transition-all duration-300
              ${scrolled 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white' 
                : 'bg-white/20 text-white'
              }
            `}>
              <BookOpen size={24} />
            </div>
            <h1 className={`
              text-2xl font-bold transition-colors duration-300
              ${scrolled ? 'text-indigo-700' : 'text-white'}
            `}>
              📘 Fresh<span className="text-yellow-300">Hub</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/search')}
              className="p-2 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <button 
              onClick={() => navigate('/notifications')}
              className="p-2 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {/* User Profile */}
            {currentUser ? (
              <button 
                onClick={() => navigate('/profile')}
                className="flex items-center space-x-2 focus:outline-none"
                aria-label="User profile"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold">
                  {getUserInitials()}
                </div>
                <span className={`
                  font-medium transition-colors duration-300
                  ${scrolled ? 'text-gray-700' : 'text-white'}
                `}>
                  {currentUser.displayName?.split(' ')[0] || 'Profile'}
                </span>
              </button>
            ) : (
              <button 
                onClick={() => navigate('/auth')}
                className="px-4 py-2 bg-white text-indigo-700 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className={`
              md:hidden p-2 rounded-lg transition-colors
              ${scrolled 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white/20 text-white'
              }
            `}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
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