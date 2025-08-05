import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiAward, FiBookOpen } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // All 5 navigation items are now in a single array for a unified layout
  const navItems = [
    { name: 'Home', icon: FiHome, path: '/dashboard', activeColor: 'text-cyan-400' },
    { name: 'Handouts', icon: FiBookOpen, path: '/handouts', activeColor: 'text-cyan-400' },
    { name: 'Challenge', icon: FaFire, path: '/challenge', activeColor: 'text-red-500' },
    { name: 'Leaderboard', icon: FiAward, path: '/leaderboard', activeColor: 'text-cyan-400' },
    { name: 'Profile', icon: FiUser, path: '/profilepage', activeColor: 'text-cyan-400' },
  ];

  return (
    // Main container to create the floating effect
    <div className="md:hidden fixed bottom-4 left-4 right-4 h-16 z-50">
      {/* Main navigation bar with glassmorphism effect and 5 items */}
      <div className="flex h-full w-full items-center justify-around rounded-2xl border border-white/10 bg-slate-800/60 p-2 shadow-xl backdrop-blur-lg">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          const iconColor = isActive ? item.activeColor.replace('text-', '') : '#9ca3af';

          return (
            <motion.button
              key={item.name}
              onClick={() => navigate(item.path)}
              whileTap={{ scale: 0.85 }}
              animate={isActive ? 'active' : 'inactive'}
              variants={{
                active: { scale: 1.1 },
                inactive: { scale: 1 },
              }}
              className="relative flex h-full flex-1 flex-col items-center justify-center text-gray-400 focus:outline-none"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {/* Icon with pop-up animation */}
              <motion.div
                variants={{
                  active: { y: -8, color: iconColor },
                  inactive: { y: 0, color: '#9ca3af' }, // gray-400
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <item.icon size={24} />
              </motion.div>

              {/* Text label that fades in */}
              <motion.span
                className={`absolute bottom-1 text-xs font-bold ${item.activeColor}`}
                variants={{
                  active: { opacity: 1, scale: 1 },
                  inactive: { opacity: 0, scale: 0.8 },
                }}
                transition={{ duration: 0.2, delay: 0.1 }}
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