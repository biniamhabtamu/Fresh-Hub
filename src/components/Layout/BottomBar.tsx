import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiAward, FiBookOpen } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: FiHome, path: '/dashboard', activeColor: 'text-cyan-400' },
    { name: 'Handouts', icon: FiBookOpen, path: '/handouts', activeColor: 'text-cyan-400' },
    { name: 'Challenge', icon: FaFire, path: '/challenge', activeColor: 'text-red-500' },
    { name: 'Leaderboard', icon: FiAward, path: '/leaderboard', activeColor: 'text-cyan-400' },
    { name: 'Profile', icon: FiUser, path: '/profilepage', activeColor: 'text-cyan-400' },
  ];

  return (
    // Main container now fixed to the very bottom with no margin
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 z-50 bg-slate-800/80 backdrop-blur-lg">
      {/* Container to center and style the items */}
      <div className="container mx-auto max-w-lg h-full flex items-center justify-around px-4">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          const iconColor = isActive ? item.activeColor.replace('text-', '') : '#9ca3af';

          return (
            <motion.button
              key={item.name}
              onClick={() => navigate(item.path)}
              whileTap={{ scale: 0.9 }}
              className="relative flex h-full flex-1 flex-col items-center justify-center text-gray-400 focus:outline-none"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-item"
                  className="absolute top-0 w-12 h-1 bg-cyan-400 rounded-b-md"
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Icon with scaling effect */}
              <motion.div
                className={`transition-colors duration-300 ${isActive ? item.activeColor : 'text-gray-400'}`}
                animate={{ scale: isActive ? 1.2 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <item.icon size={26} />
              </motion.div>

              {/* Text label that fades in/out */}
              <motion.span
                className={`text-xs font-bold mt-1 transition-colors duration-300 ${isActive ? item.activeColor : 'text-gray-400'}`}
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;