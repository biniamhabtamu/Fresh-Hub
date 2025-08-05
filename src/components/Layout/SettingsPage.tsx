import React, { useState } from 'react';
import { Settings, User, Bell, Lock, Moon, Sun, Mail, Shield, LogOut, ChevronRight, Info, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import BottomBar from './BottomBar';
import Header from './Header'; // New Header Import

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  // --- Feature: Function Placeholders ---
  const handleEditProfile = () => {
    // Add your logic to open a modal or navigate to a profile edit page
    console.log('Navigating to Edit Profile page...');
  };

  const handleChangePassword = () => {
    // Add your logic to open a password change modal or page
    console.log('Opening Change Password modal...');
  };

  const handleLogout = () => {
    // Add your actual logout logic here
    console.log('Logging out...');
  };

  const handleDeleteAccount = () => {
    // Implement your account deletion logic here. This should be a destructive action.
    if (window.confirm("Are you sure you want to permanently delete your account? This cannot be undone.")) {
      console.log('Deleting account...');
      // Add your Firebase account deletion logic here
    }
  };

  const handleOpenPrivacyPolicy = () => {
    // Add your logic to open the privacy policy URL
    console.log('Opening Privacy Policy...');
  };
  
  const handleOpenTerms = () => {
    // Add your logic to open the terms of service URL
    console.log('Opening Terms of Service...');
  };

  const itemVariants = {
    initial: { x: -10, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  const SettingItem = ({ icon, title, description, onClick, buttonText, isToggle, isToggled, onToggle }) => (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      whileTap="tap"
      className="flex items-center justify-between p-4 cursor-pointer bg-white rounded-xl shadow-sm transition-all duration-300 border border-gray-200"
      onClick={isToggle ? onToggle : onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="p-2.5 bg-gray-100 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      {buttonText && (
        <button className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium space-x-1">
          <span>{buttonText}</span>
          <ChevronRight size={16} />
        </button>
      )}
      {isToggle && (
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isToggled}
            onChange={onToggle}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
        </label>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-12">
      <Header />
      <div className="pt-24 max-w-4xl mx-auto px-4">
        {/* Settings Header (Simplified) */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex p-4 rounded-full bg-indigo-100 mb-2">
            <Settings size={32} className="text-indigo-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Settings
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-sm mx-auto">
            Manage your account, preferences, and privacy settings.
          </p>
        </motion.div>

        {/* Settings Sections */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-6"
        >
          {/* Account Settings */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 ml-2">Account</h2>
            <div className="space-y-3">
              <SettingItem
                icon={<User size={20} className="text-blue-600" />}
                title="Profile Information"
                description="Update your personal details"
                buttonText="Edit"
                onClick={handleEditProfile}
              />
              <SettingItem
                icon={<Lock size={20} className="text-purple-600" />}
                title="Password"
                description="Change your password"
                buttonText="Change"
                onClick={handleChangePassword}
              />
            </div>
          </div>

          {/* Notification Settings */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 ml-2">Notifications</h2>
            <div className="space-y-3">
              <SettingItem
                icon={<Bell size={20} className="text-yellow-600" />}
                title="Push Notifications"
                description="Receive app alerts and updates"
                isToggle
                isToggled={notificationsEnabled}
                onToggle={() => setNotificationsEnabled(!notificationsEnabled)}
              />
              <SettingItem
                icon={<Mail size={20} className="text-green-600" />}
                title="Email Notifications"
                description="Receive email updates and summaries"
                isToggle
                isToggled={emailNotifications}
                onToggle={() => setEmailNotifications(!emailNotifications)}
              />
            </div>
          </div>

          {/* Appearance */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 ml-2">Appearance</h2>
            <div className="space-y-3">
              <SettingItem
                icon={darkMode ? <Moon size={20} className="text-gray-600" /> : <Sun size={20} className="text-yellow-500" />}
                title="Dark Mode"
                description={darkMode ? 'Enabled' : 'Disabled'}
                isToggle
                isToggled={darkMode}
                onToggle={() => setDarkMode(!darkMode)}
              />
            </div>
          </div>

          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 ml-2">About</h2>
            <div className="space-y-3">
              <SettingItem
                icon={<Info size={20} className="text-gray-600" />}
                title="App Version"
                description="Version 1.0.0"
                onClick={() => {}}
              />
              <SettingItem
                icon={<Shield size={20} className="text-indigo-600" />}
                title="Privacy Policy"
                description="Our privacy standards and how we use data"
                buttonText="View"
                onClick={handleOpenPrivacyPolicy}
              />
              <SettingItem
                icon={<Shield size={20} className="text-indigo-600" />}
                title="Terms of Service"
                description="Our terms of use for the application"
                buttonText="View"
                onClick={handleOpenTerms}
              />
            </div>
          </div>

          {/* Logout Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
            className="pt-6"
          >
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-3 p-4 text-red-600 bg-white hover:bg-red-50 rounded-2xl shadow-lg border border-red-300 transition-all duration-300 font-semibold"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </motion.div>
          
          {/* Account Deletion Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
            className="mt-6"
          >
            <button
              onClick={handleDeleteAccount}
              className="w-full flex items-center justify-center space-x-3 p-4 text-white bg-red-600 hover:bg-red-700 rounded-2xl shadow-lg border border-red-800 transition-all duration-300 font-semibold"
            >
              <Trash2 size={20} />
              <span>Delete My Account</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
      <BottomBar />
    </div>
  );
}