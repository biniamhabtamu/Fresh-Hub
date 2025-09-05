import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiAward, FiBookOpen } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef(null);

  const navItems = [
    { name: 'Home', icon: FiHome, path: '/dashboard' },
    { name: 'Handouts', icon: FiBookOpen, path: '/handouts' },
    { name: 'Challenge', icon: FaFire, path: '/challenge' },
    { name: 'Leaderboard', icon: FiAward, path: '/leaderboard' },
    { name: 'Profile', icon: FiUser, path: '/profilepage' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3">
      <div 
        ref={containerRef}
        className="relative bg-slate-800/90 backdrop-blur-xl rounded-full shadow-lg border border-slate-700/50"
      >
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            const isChallenge = item.name === 'Challenge';

            return (
              <motion.button
                key={item.name}
                onClick={() => navigate(item.path)}
                whileTap={{ scale: 0.95 }}
                className="relative flex flex-col items-center justify-center p-2 flex-1 h-full text-center"
              >
                {isActive && (
                  <motion.div
                    layoutId="bubble"
                    className={`absolute inset-0 z-0 rounded-full transition-colors duration-300 ${
                      isChallenge
                        ? 'bg-red-500/20' // Less intense background for a unique icon
                        : 'bg-cyan-400/20'
                    }`}
                    transition={{
                      type: 'spring',
                      damping: 10,
                      stiffness: 100,
                    }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-center justify-center gap-1">
                  <motion.div
                    className={`transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : isChallenge
                        ? 'text-gray-400' // Ensure all inactive icons are the same color
                        : 'text-gray-400'
                    }`}
                    animate={{ scale: isActive ? 1.2 : 1 }}
                  >
                    <item.icon
                      size={isChallenge ? 30 : 24}
                      className={
                        isActive && isChallenge
                          ? 'text-red-500 animate-pulse'
                          : isActive
                          ? 'text-cyan-400'
                          : ''
                      }
                    />
                  </motion.div>
                  <motion.span
                    className={`text-[10px] font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400'
                    }`}
                    animate={{ opacity: isActive ? 1 : 0.8 }}
                  >
                    {item.name}
                  </motion.span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomBar;