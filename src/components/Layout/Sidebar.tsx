import React, { useEffect, useRef } from 'react';
import { X, User, Settings, Crown, LogOut, Mail, Users, BookOpen, Calculator, ChevronRight, Award, Home, LayoutDashboard, Shield } from 'lucide-react';
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

  interface MenuItem {
    path: string;
    icon: React.ComponentType<{ size?: number }>;
    label: string;
    color: string;
    iconColor: string;
    hoverColor: string;
    isAdmin?: boolean;
  }

  const baseMenuItems: MenuItem[] = [
    { path: '/', icon: Home, label: 'Home', color: 'bg-indigo-100', iconColor: 'text-indigo-600', hoverColor: 'hover:bg-indigo-50' },
    { path: '/profilepage', icon: User, label: 'Profile', color: 'bg-blue-100', iconColor: 'text-blue-600', hoverColor: 'hover:bg-blue-50' },
    { path: '/settings', icon: Settings, label: 'Settings', color: 'bg-gray-100', iconColor: 'text-gray-600', hoverColor: 'hover:bg-gray-50' },
    { path: '/contact', icon: Mail, label: 'Contact Us', color: 'bg-green-100', iconColor: 'text-green-600', hoverColor: 'hover:bg-green-50' },
    { path: '/community', icon: Users, label: 'Community', color: 'bg-purple-100', iconColor: 'text-purple-600', hoverColor: 'hover:bg-purple-50' },
    { path: '/handouts', icon: BookOpen, label: 'Handouts', color: 'bg-orange-100', iconColor: 'text-orange-600', hoverColor: 'hover:bg-orange-50' },
    { path: '/gpa-calculator', icon: Calculator, label: 'GPA Calculator', color: 'bg-red-100', iconColor: 'text-red-600', hoverColor: 'hover:bg-red-50' },
    { path: '/leaderboard', icon: Award, label: 'Leaderboard', color: 'bg-yellow-100', iconColor: 'text-yellow-600', hoverColor: 'hover:bg-yellow-50' },
  ];

  const adminMenuItem: MenuItem = {
    path: '/admin/premium-approvals',
    icon: LayoutDashboard,
    label: 'Admin Dashboard',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    hoverColor: 'hover:bg-purple-50',
    isAdmin: true
  };

  const menuItems = [
    ...baseMenuItems,
    ...(currentUser?.email === 'biniamhabtamu320@gmail.com' ? [adminMenuItem] : [])
  ];

  const isAdminUser = currentUser?.email === 'biniamhabtamu320@gmail.com';

  return (
    <>
      {/* Overlay with fade animation */}
      <div 
        className={`fixed inset-0 bg-black z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar with left-to-right slide-in animation */}
      <div 
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-white to-gray-50 shadow-2xl z-50 
          transform transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header with close button */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Navigation
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:rotate-90"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* User Info Card with subtle animation */}
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 mb-6 text-white 
            shadow-lg transform transition-transform duration-300 hover:scale-[1.01]"
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
                <p className="text-sm opacity-90">
                  {currentUser?.email || 'No email'}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  {currentUser?.isPremium && (
                    <>
                      <Crown size={14} className="text-yellow-300 animate-pulse" />
                      <span className="text-xs font-medium">Premium Member</span>
                    </>
                  )}
                  {isAdminUser && (
                    <>
                      <Shield size={14} className="text-green-300" />
                      <span className="text-xs font-medium">Admin</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items with hover animations */}
          <nav className="space-y-1 flex-1 overflow-y-auto pr-2">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center justify-between p-3 text-left rounded-lg transition-all duration-200 ${item.hoverColor} group`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 ${item.color} rounded-lg group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} className={item.iconColor} />
                  </div>
                  <span className="font-medium text-gray-700">{item.label}</span>
                </div>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
              </button>
            ))}

            {/* Premium Upgrade Button (only for non-premium users) */}
            {!currentUser?.isPremium && (
              <button
                onClick={() => handleNavigation('/premium')}
                className="w-full flex items-center justify-between p-3 text-left rounded-lg transition-all duration-200 hover:bg-yellow-50 group mt-4 border border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg group-hover:scale-110 transition-transform">
                    <Crown size={20} className="text-yellow-600" />
                  </div>
                  <span className="font-medium text-yellow-700">Upgrade to Premium</span>
                </div>
                <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold rounded-full">
                  PRO
                </div>
              </button>
            )}
          </nav>
            
          {/* Logout Button with bounce animation */}
          <div className="pt-4 border-t border-gray-200 mt-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-3 p-3 text-left hover:bg-red-50 text-red-600 rounded-lg transition-all duration-200 group"
            >
              <div className="p-2 bg-red-100 rounded-lg group-hover:animate-bounce">
                <LogOut size={20} className="text-red-600" />
              </div>
              <span className="font-medium">Logout</span>
            </button>
          </div>
          <h1 className='pt-4 text-sm text-gray-500'>Version 1.0.0</h1>
        </div>
      </div>
    </>
  );
}