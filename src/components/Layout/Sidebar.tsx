import React, { useEffect, useRef, useMemo } from "react";
import {
  X,
  User,
  Settings,
  Crown,
  LogOut,
  Mail,
  Users,
  BookOpen,
  Calculator,
  ChevronRight,
  Award,
  Home,
  LayoutDashboard,
  Shield,
  Star,
  Sparkles,
  Zap,
  Moon,
  Sun
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: any;
}

const Sidebar = ({ isOpen, onClose, currentUser }: SidebarProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const handleLogout = async () => {
    await logout();
    onClose();
    navigate("/auth");
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can add logic here to change the theme of your app
  };

  const isAdminUser = currentUser?.email === "biniamhabtamu320@gmail.com";

  const menuItems = useMemo(
    () => [
      { path: "/", icon: Home, label: "Home", color: "text-blue-400" },
      { path: "/profilepage", icon: User, label: "Profile", color: "text-purple-400" },
      { path: "/handouts", icon: BookOpen, label: "Handouts", color: "text-emerald-400" },
      { path: "/Layout/GPACalculator", icon: Calculator, label: "GPA Calculator", color: "text-amber-400" },
      { path: "/leaderboard", icon: Award, label: "Leaderboard", color: "text-rose-400" },
      { path: "/community", icon: Users, label: "Community", color: "text-indigo-400" },
      { path: "/settings", icon: Settings, label: "Settings", color: "text-gray-400" },
      { path: "/contactus", icon: Mail, label: "Contact Us", color: "text-cyan-400" },
      ...(isAdminUser
        ? [{ path: "/admin/premium-approvals", icon: LayoutDashboard, label: "Admin Dashboard", color: "text-red-400" }]
        : []),
    ],
    [isAdminUser]
  );

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { duration: 0.4 } },
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            ref={sidebarRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 left-0 h-full w-[85%] sm:w-80 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 backdrop-blur-2xl shadow-2xl z-50 flex flex-col text-white border-r border-purple-700/30"
            role="navigation"
            aria-label="Sidebar"
          >
            <div className="p-5 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 p-3 bg-white/5 rounded-xl">
                <div className="flex items-center">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mr-3">
                    <Zap size={20} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    EduHub
                  </h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} className="text-purple-300" />
                </motion.button>
              </div>

              {/* User Info */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => handleNavigation("/profilepage")}
                className="bg-gradient-to-r from-purple-800/40 to-blue-800/40 rounded-2xl p-4 mb-6 shadow-lg border border-purple-500/30 cursor-pointer backdrop-blur-sm"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center p-1 bg-gradient-to-r from-purple-500 to-blue-500">
                      {currentUser?.photoURL ? (
                        <img
                          src={currentUser.photoURL}
                          alt="Profile"
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <User size={28} className="text-white" />
                      )}
                    </div>
                    {currentUser?.isPremium && (
                      <div className="absolute -bottom-1 -right-1 bg-amber-400 rounded-full p-1">
                        <Crown size={12} className="text-amber-900" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white truncate">{currentUser?.displayName || "Guest"}</h3>
                    <p className="text-sm text-purple-200 truncate">{currentUser?.email || "No email"}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      {currentUser?.isPremium && (
                        <span className="flex items-center text-amber-300 text-xs font-semibold px-2 py-1 rounded-full bg-amber-500/20">
                          <Sparkles size={10} className="mr-1" /> Premium
                        </span>
                      )}
                      {isAdminUser && (
                        <span className="flex items-center text-cyan-300 text-xs font-semibold px-2 py-1 rounded-full bg-cyan-500/20">
                          <Shield size={10} className="mr-1" /> Admin
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Menu */}
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-1 flex-1 overflow-y-auto pr-2 custom-scrollbar"
              >
                {menuItems.map((item) => (
                  <motion.button
                    key={item.path}
                    variants={listItemVariants}
                    onClick={() => handleNavigation(item.path)}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 group transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg bg-white/5 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all ${item.color}`}>
                        <item.icon size={20} className="group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-medium text-gray-200 group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                    <ChevronRight size={18} className="text-purple-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                ))}
              </motion.nav>

              {/* Theme Toggle */}
              <motion.button
                variants={listItemVariants}
                onClick={toggleDarkMode}
                className="w-full flex items-center justify-between p-3 mt-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-amber-500/20">
                    {isDarkMode ? (
                      <Sun size={20} className="text-amber-300" />
                    ) : (
                      <Moon size={20} className="text-amber-300" />
                    )}
                  </div>
                  <span className="font-medium text-gray-200">
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                </div>
                <div className={`w-10 h-5 flex items-center rounded-full p-1 ${isDarkMode ? 'bg-purple-600 justify-end' : 'bg-gray-600 justify-start'}`}>
                  <div className="bg-white w-3 h-3 rounded-full"></div>
                </div>
              </motion.button>

              {/* Premium Button */}
              {!currentUser?.isPremium && (
                <motion.button
                  variants={listItemVariants}
                  onClick={() => handleNavigation("/premium")}
                  className="w-full flex items-center justify-between p-3 mt-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-transform shadow-amber-500/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Crown size={20} className="text-white" />
                    </div>
                    <span className="font-bold text-white">Go Premium</span>
                  </div>
                  <Sparkles size={18} className="text-white" />
                </motion.button>
              )}

              {/* Logout */}
              <div className="pt-4 border-t border-purple-700/30 mt-4">
                <motion.button
                  onClick={handleLogout}
                  whileHover={{ x: 5 }}
                  className="w-full flex items-center space-x-4 p-3 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors"
                >
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <LogOut size={20} className="text-red-400" />
                  </div>
                  <span className="font-medium">Logout</span>
                </motion.button>
              </div>

              {/* Version */}
              <p className="pt-4 text-xs text-purple-400/60 text-center">EduHub v2.0.0</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  );
};

export default Sidebar;