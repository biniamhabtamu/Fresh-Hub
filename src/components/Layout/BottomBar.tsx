import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiAward } from 'react-icons/fi';
import { FaFire, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { 
      name: 'Home', 
      icon: <FiHome size={22} />, 
      activeIcon: <motion.div whileHover={{ scale: 1.1 }}><FiHome size={22} /></motion.div>,
      path: '/',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    { 
      name: 'Challenge', 
      icon: <FaFire size={20} />, 
      activeIcon: <motion.div whileHover={{ scale: 1.2 }}><FaFire size={20} /></motion.div>,
      path: '/live-challenge',
      color: 'text-red-500',
      bgColor: 'bg-red-100'
    },
    { 
      name: 'Leaderboard', 
      icon: <FiAward size={22} />, 
      activeIcon: <motion.div whileHover={{ scale: 1.1 }}><FaTrophy size={22} /></motion.div>,
      path: '/leaderboard',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    { 
      name: 'Profile', 
      icon: <FiUser size={22} />, 
      activeIcon: <motion.div whileHover={{ scale: 1.1 }}><FiUser size={22} /></motion.div>,
      path: '/profilepage',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <motion.button
            key={item.name}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center justify-center w-full h-full ${
              location.pathname === item.path ? item.color : 'text-gray-500'
            }`}
            onClick={() => navigate(item.path)}
          >
            <div className={`p-2 rounded-full ${
              location.pathname === item.path ? item.bgColor : ''
            }`}>
              {location.pathname === item.path ? item.activeIcon : item.icon}
            </div>
            <span className="text-xs mt-1">{item.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;