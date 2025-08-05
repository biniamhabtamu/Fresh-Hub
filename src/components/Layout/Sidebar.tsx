import React, { useEffect, useRef } from 'react';
import { X, User, Settings, Crown, LogOut, Mail, Users, BookOpen, Calculator, ChevronRight, Award, Home, LayoutDashboard, Shield, BarChart2, Trophy, ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: any;
  navItems: { path: string; icon: any; label: string }[];
  activeNav: string;
}

export default function Sidebar({ isOpen, onClose, currentUser, navItems, activeNav }: SidebarProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLogout = async () => {
    await logout();
    onClose();
    navigate('/auth');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const menuItems = [
    ...navItems,
    { path: 'profile', icon: User, label: 'Profile' },
    { path: 'settings', icon: Settings, label: 'Settings' },
    { path: '/', icon: BarChart2, label: 'Quiz History' },
    { path: 'leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: 'contact', icon: Mail, label: 'Contact Us' },
    // Add other sidebar-specific items here if needed
  ];

  const isAdminUser = currentUser?.email === 'biniamhabtamu320@gmail.com';

  const sidebarVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    closed: { x: '-100%', transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <motion.div
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 
          flex flex-col
        `}
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header with close button */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              FreshHub
            </h2>
            <motion.button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
              whileHover={{ rotate: 90 }}
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-600" />
            </motion.button>
          </div>

          {/* User Info Card */}
          {currentUser && (
            <motion.div 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 mb-6 text-white shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-inner">
                  {currentUser?.photoURL ? (
                    <img 
                      src={currentUser.photoURL} 
                      alt="Profile" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User size={20} />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{currentUser?.displayName || 'Guest'}</h3>
                  <p className="text-sm opacity-90 truncate">{currentUser?.email || 'No email'}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    {currentUser?.isPremium && (
                      <div className="flex items-center space-x-1">
                        <Crown size={14} className="text-yellow-300 animate-pulse" />
                        <span className="text-xs font-medium">Premium</span>
                      </div>
                    )}
                    {isAdminUser && (
                      <div className="flex items-center space-x-1">
                        <Shield size={14} className="text-green-300" />
                        <span className="text-xs font-medium">Admin</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Menu Items */}
          <nav className="space-y-1 flex-1 overflow-y-auto pr-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.path}
                onClick={() => handleNavigation(`/${item.path}`)}
                className={`w-full flex items-center justify-between p-3 text-left rounded-lg transition-all duration-200 group
                  ${activeNav === item.path
                    ? 'bg-indigo-100 text-indigo-700 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg transition-transform ${activeNav === item.path ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    <item.icon size={20} />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
                <ArrowRight size={18} className={`text-gray-400 transition-transform duration-300 group-hover:translate-x-1 ${activeNav === item.path ? 'text-indigo-600' : ''}`} />
              </motion.button>
            ))}

            {/* Premium Upgrade Button */}
            {!currentUser?.isPremium && (
              <motion.button
                onClick={() => handleNavigation('/premium')}
                className="w-full flex items-center justify-between p-3 text-left rounded-lg transition-all duration-200 mt-4 border border-yellow-300 bg-gradient-to-r from-yellow-50 to-yellow-100 group shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Crown size={20} className="text-yellow-600" />
                  </div>
                  <span className="font-medium text-yellow-800">Upgrade to Premium</span>
                </div>
                <div className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                  PRO
                </div>
              </motion.button>
            )}
          </nav>
            
          {/* Footer with Logout and Version */}
          <div className="pt-4 mt-auto border-t border-gray-200">
            <motion.button
              onClick={handleLogout}
              className="w-full flex items-center justify-start space-x-3 p-3 text-left hover:bg-red-50 text-red-600 rounded-lg transition-all duration-200 group"
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="p-2 bg-red-100 rounded-lg group-hover:animate-pulse">
                <LogOut size={20} className="text-red-600" />
              </div>
              <span className="font-medium">Logout</span>
            </motion.button>
            <p className='mt-4 text-center text-xs text-gray-400'>Version 1.0.0 © 2023 FreshHub</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}