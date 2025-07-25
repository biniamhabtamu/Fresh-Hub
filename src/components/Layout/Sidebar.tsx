import React from 'react';
import { X, User, Settings, Crown, LogOut, Mail, Users, BookOpen, Calculator } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: any;
}

export default function Sidebar({ isOpen, onClose, currentUser }: SidebarProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    onClose();
    navigate('/auth');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar - Now opening from right */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* User Info */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 mb-6 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <User size={20} />
              </div>
              <div>
                <h3 className="font-semibold">{currentUser?.fullName || 'Guest'}</h3>
                <p className="text-sm opacity-90 capitalize">{currentUser?.field || 'General'} Science</p>
                {currentUser?.isPremium && (
                  <div className="flex items-center space-x-1 mt-1">
                    <Crown size={14} className="text-yellow-300" />
                    <span className="text-xs">Premium Member</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2 flex-1 overflow-y-auto">
            <button
              onClick={() => handleNavigation('/profilepage')}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors group"
            >
              <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <User size={20} className="text-blue-600" />
              </div>
              <span className="font-medium">Profile</span>
            </button>

            <button
              onClick={() => handleNavigation('/settings')}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                <Settings size={20} className="text-gray-600" />
              </div>
              <span className="font-medium">Settings</span>
            </button>

            <button
              onClick={() => handleNavigation('/contact')}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-green-50 rounded-lg transition-colors group"
            >
              <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <Mail size={20} className="text-green-600" />
              </div>
              <span className="font-medium">Contact Us</span>
            </button>

            <button
              onClick={() => handleNavigation('/community')}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-purple-50 rounded-lg transition-colors group"
            >
              <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                <Users size={20} className="text-purple-600" />
              </div>
              <span className="font-medium">Join Our Community</span>
            </button>

            <button
              onClick={() => handleNavigation('/handouts')}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-orange-50 rounded-lg transition-colors group"
            >
              <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                <BookOpen size={20} className="text-orange-600" />
              </div>
              <span className="font-medium">Handouts</span>
            </button>

            <button
              onClick={() => handleNavigation('/gpa-calculator')}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-red-50 rounded-lg transition-colors group"
            >
              <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                <Calculator size={20} className="text-red-600" />
              </div>
              <span className="font-medium">GPA Calculator</span>
            </button>

            {!currentUser?.isPremium && (
              <button
                onClick={() => handleNavigation('/premium')}
                className="w-full flex items-center space-x-3 p-3 text-left hover:bg-yellow-50 rounded-lg transition-colors group mt-4"
              >
                <div className="p-2 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
                  <Crown size={20} className="text-yellow-600" />
                </div>
                <span className="font-medium text-yellow-700">Get Premium</span>
              </button>
            )}

            <button
              onClick={() => handleNavigation('/leaderboard')}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-indigo-50 rounded-lg transition-colors group"
            >
              <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                <span className="text-xl">🏆</span>
              </div>
              <span className="font-medium">Leaderboard</span>
            </button>
          </nav>

          {/* Logout Button */}
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-3 p-3 text-left hover:bg-red-50 text-red-600 rounded-lg transition-colors group"
            >
              <LogOut size={20} className="group-hover:animate-bounce" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}