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

  const isAdminUser = currentUser?.email === "biniamhabtamu320@gmail.com";

  const menuItems = useMemo(
    () => [
      { path: "/", icon: Home, label: "Home" },
      { path: "/profilepage", icon: User, label: "Profile" },
      { path: "/handouts", icon: BookOpen, label: "Handouts" },
      { path: "/gpa-calculator", icon: Calculator, label: "GPA Calculator" },
      { path: "/leaderboard", icon: Award, label: "Leaderboard" },
      { path: "/community", icon: Users, label: "Community" },
      { path: "/settings", icon: Settings, label: "Settings" },
      { path: "/contactus", icon: Mail, label: "Contact Us" },
      ...(isAdminUser
        ? [{ path: "/admin/premium-approvals", icon: LayoutDashboard, label: "Admin Dashboard" }]
        : []),
    ],
    [isAdminUser]
  );

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 260, damping: 25 } },
    closed: { x: "-100%", transition: { duration: 0.3 } },
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
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
            className="fixed top-0 left-0 h-full w-[85%] sm:w-72 bg-gradient-to-br from-teal-900 to-blue-950 backdrop-blur-2xl shadow-2xl z-50 flex flex-col text-white border-r border-gray-800"
            role="navigation"
            aria-label="Sidebar"
          >
            <div className="p-6 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Dashboard
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-gray-300" />
                </motion.button>
              </div>

              {/* User Info */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => handleNavigation("/profilepage")}
                className="bg-white/10 rounded-3xl p-5 mb-6 shadow-inner border border-white/20 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center p-1 bg-white/20 ring-2 ring-blue-500/50">
                    {currentUser?.photoURL ? (
                      <img
                        src={currentUser.photoURL}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User size={28} className="text-gray-300" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg truncate">{currentUser?.displayName || "Guest"}</h3>
                    <p className="text-sm text-gray-400 truncate">{currentUser?.email || "No email"}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      {currentUser?.isPremium && (
                        <span className="flex items-center text-yellow-300 text-xs font-semibold px-2 py-1 rounded-full bg-yellow-900/40">
                          <Crown size={12} className="mr-1" /> Premium
                        </span>
                      )}
                      {isAdminUser && (
                        <span className="flex items-center text-emerald-300 text-xs font-semibold px-2 py-1 rounded-full bg-emerald-900/40">
                          <Shield size={12} className="mr-1" /> Admin
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
                className="space-y-2 flex-1 overflow-y-auto pr-2 custom-scrollbar"
              >
                {menuItems.map((item) => (
                  <motion.button
                    key={item.path}
                    variants={listItemVariants}
                    onClick={() => handleNavigation(item.path)}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/10 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-600 transition-colors">
                        <item.icon size={20} className="text-gray-300 group-hover:text-white" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-400 group-hover:text-white group-hover:translate-x-1" />
                  </motion.button>
                ))}
              </motion.nav>

              {/* Premium Button */}
              {!currentUser?.isPremium && (
                <motion.button
                  variants={listItemVariants}
                  onClick={() => handleNavigation("/premium")}
                  className="w-full flex items-center justify-between p-4 mt-4 border border-yellow-400 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl hover:scale-105 transition-transform shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-yellow-400 rounded-lg">
                      <Star size={20} className="text-white" />
                    </div>
                    <span className="font-bold text-yellow-300">Upgrade to Premium</span>
                  </div>
                  <ChevronRight size={18} className="text-yellow-300" />
                </motion.button>
              )}

              {/* Logout */}
              <div className="pt-4 border-t border-gray-800 mt-4">
                <motion.button
                  onClick={handleLogout}
                  whileHover={{ x: 5 }}
                  className="w-full flex items-center space-x-3 p-3 hover:bg-red-500/20 text-red-400 rounded-lg"
                >
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <LogOut size={20} className="text-red-400" />
                  </div>
                  <span className="font-medium">Logout</span>
                </motion.button>
              </div>

              {/* Version */}
              <p className="pt-4 text-xs text-gray-600 text-center">Version 1.0.0</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
