import React from 'react';
import { X, User, Settings, Crown, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { currentUser, logout } = useAuth();
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
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
                <h3 className="font-semibold">{currentUser?.fullName}</h3>
                <p className="text-sm opacity-90 capitalize">{currentUser?.field} Science</p>
                {currentUser?.isPremium && (
                  <div className="flex items-center space-x-1 mt-1">
                    <Crown size={14} />
                    <span className="text-xs">Premium Member</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            <button
              onClick={() => handleNavigation('/profile')}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-100 rounded-lg transition-colors"
            >
              <User size={20} className="text-gray-600" />
              <span>Profile</span>
            </button>

            <button
              onClick={() => handleNavigation('/settings')}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Settings size={20} className="text-gray-600" />
              <span>Settings</span>
            </button>

            {!currentUser?.isPremium && (
              <button
                onClick={() => handleNavigation('/premium')}
                className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Crown size={20} className="text-yellow-500" />
                <span className="text-yellow-600 font-medium">Get Premium</span>
              </button>
            )}

            <button
              onClick={() => handleNavigation('/leaderboard')}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span className="text-xl">🏆</span>
              <span>Leaderboard</span>
            </button>

            <hr className="my-4" />

            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-red-50 text-red-600 rounded-lg transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}