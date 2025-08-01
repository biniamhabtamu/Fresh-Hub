import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiAward, FiBook } from 'react-icons/fi';
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
      bgColor: 'bg-purple-100',
      hoverColor: 'hover:bg-purple-50'
    },
    { 
      name: 'Challenge', 
      icon: <FaFire size={20} />, 
      activeIcon: <motion.div whileHover={{ scale: 1.2 }} animate={{ rotate: [0, 10, -10, 0] }}><FaFire size={20} /></motion.div>,
      path: '/',
      color: 'text-red-500',
      bgColor: 'bg-red-100',
      hoverColor: 'hover:bg-red-50'
    },
    { 
      name: 'Handout', 
      icon: <FiBook size={22} />, 
      activeIcon: <motion.div whileHover={{ scale: 1.1 }} animate={{ y: [0, -2, 0] }}><FiBook size={22} /></motion.div>,
      path: '/handouts',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      hoverColor: 'hover:bg-indigo-50'
    },
    { 
      name: 'Leaderboard', 
      icon: <FiAward size={22} />, 
      activeIcon: <motion.div whileHover={{ scale: 1.1 }}><FaTrophy size={22} /></motion.div>,
      path: '/leaderboard',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      hoverColor: 'hover:bg-blue-50'
    },
    { 
      name: 'Profile', 
      icon: <FiUser size={22} />, 
      activeIcon: <motion.div whileHover={{ scale: 1.1 }}><FiUser size={22} /></motion.div>,
      path: '/profilepage',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      hoverColor: 'hover:bg-green-50'
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <motion.button
            key={item.name}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
              location.pathname === item.path ? item.color : 'text-gray-500'
            } ${item.hoverColor}`}
            onClick={() => navigate(item.path)}
          >
            <motion.div 
              className={`p-2 rounded-full transition-all duration-300 ${
                location.pathname === item.path ? item.bgColor : ''
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {location.pathname === item.path ? item.activeIcon : item.icon}
            </motion.div>
            <motion.span 
              className="text-xs mt-1"
              animate={{
                scale: location.pathname === item.path ? [1, 1.05, 1] : 1
              }}
              transition={{ duration: 0.3 }}
            >
              {item.name}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;