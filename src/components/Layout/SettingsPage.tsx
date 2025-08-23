import React, { useState } from 'react';
import { Settings, User, Bell, Lock, Moon, Sun, Mail, Shield, LogOut, ChevronRight, Info, Trash2, Download, Database, Palette, Eye, EyeOff, Volume2, VolumeX, MessageCircle, HelpCircle, Star, Globe, Keyboard, Smartphone, Wifi, WifiOff, BatteryCharging, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BottomBar from './BottomBar';
import Header from './Header';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [dataSaverEnabled, setDataSaverEnabled] = useState(false);
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleEditProfile = () => console.log('Navigate to Edit Profile');
  const handleChangePassword = () => console.log('Open Change Password');
  const handleLogout = () => console.log('Logout');
  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to permanently delete your account? This cannot be undone.')) {
      console.log('Account deleted');
    }
  };
  const handleOpenPrivacyPolicy = () => console.log('Open Privacy Policy');
  const handleOpenTerms = () => console.log('Open Terms');
  const handleExportData = () => console.log('Export Data');
  const handleClearCache = () => console.log('Clear Cache');

  const itemVariants = {
    initial: { x: -6, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    hover: { scale: 1.01, transition: { duration: 0.12 } },
    tap: { scale: 0.99 },
  };

  const tabs = [
    { id: 'general', label: 'General', icon: <Settings size={16} /> },
    { id: 'privacy', label: 'Privacy', icon: <Shield size={16} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={16} /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette size={16} /> },
  ];

  const SettingItem = ({ icon, title, description, onClick, buttonText, isToggle, isToggled, onToggle, isDestructive }) => (
    <motion.div
      variants={itemVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      onClick={isToggle ? undefined : onClick}
      role={isToggle ? 'group' : 'button'}
      aria-label={title}
      className={`w-full flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-xl transition-all duration-200 border ${
        isDestructive ? 'bg-red-50 border-red-200 hover:bg-red-100' : 'bg-white border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700/40'
      }`}
    >
      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1">
        <div className={`flex-shrink-0 p-2 rounded-lg ${isDestructive ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 dark:bg-gray-700/40 dark:text-gray-200'}`}>
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className={`text-sm sm:text-base font-medium truncate ${isDestructive ? 'text-red-800' : 'text-gray-900 dark:text-white'}`}>{title}</h3>
          <p className={`text-xs sm:text-sm truncate ${isDestructive ? 'text-red-600' : 'text-gray-500 dark:text-gray-300'}`}>{description}</p>
        </div>
      </div>

      <div className="mt-3 sm:mt-0 sm:ml-4 flex items-center justify-end gap-3">
        {buttonText && (
          <button
            onClick={(e) => { e.stopPropagation(); onClick && onClick(); }}
            className={`hidden sm:inline-flex items-center gap-2 text-sm font-medium ${isDestructive ? 'text-red-600 hover:text-red-800' : 'text-indigo-600 hover:text-indigo-800'}`}
            aria-label={`${buttonText} for ${title}`}
          >
            <span>{buttonText}</span>
            <ChevronRight size={14} />
          </button>
        )}

        {isToggle && (
          <button
            onClick={(e) => { e.stopPropagation(); onToggle && onToggle(); }}
            aria-pressed={isToggled}
            aria-label={`Toggle ${title}`}
            className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 ${isToggled ? 'bg-indigo-600' : 'bg-gray-300'}`}
          >
            <span
              className={`inline-block h-5 w-5 bg-white rounded-full transform transition-transform ${isToggled ? 'translate-x-5' : 'translate-x-0'}`}
            />
          </button>
        )}

        {/* For very small screens show a compact chevron */}
        {!isToggle && !buttonText && (
          <ChevronRight size={16} className="text-gray-300 sm:hidden" />
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-20 dark:bg-gray-900">
      <Header />

      <main className="pt-20 px-4 max-w-xl mx-auto sm:max-w-3xl lg:max-w-4xl">
        <motion.header initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35 }} className="text-center mb-6">
          <div className="inline-flex p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/20 mb-2">
            <Settings size={28} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Settings</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto">Manage your account, preferences, and privacy settings.</p>
        </motion.header>

        {/* Tabs: horizontal, scrollable on mobile */}
        <motion.nav className="mb-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar p-1 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id ? 'bg-indigo-600 text-white' : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
                aria-pressed={activeTab === tab.id}
                aria-label={tab.label}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.nav>

        <AnimatePresence mode="wait">
          <motion.section key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className="space-y-6">

            {/* GENERAL */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Account</h2>
                  <div className="space-y-3">
                    <SettingItem icon={<User size={18} />} title="Profile Information" description="Update your personal details" buttonText="Edit" onClick={handleEditProfile} />
                    <SettingItem icon={<Lock size={18} />} title="Password" description="Change your password" buttonText="Change" onClick={handleChangePassword} />
                    <SettingItem icon={<Globe size={18} />} title="Language" description="English (United States)" buttonText="Change" onClick={() => console.log('Language')} />
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Storage & Data</h2>
                  <div className="space-y-3">
                    <SettingItem icon={<Download size={18} />} title="Export Data" description="Download your data as a ZIP file" buttonText="Export" onClick={handleExportData} />
                    <SettingItem icon={<Database size={18} />} title="Clear Cache" description="Free up storage space" buttonText="Clear" onClick={handleClearCache} />
                    <SettingItem icon={<Wifi size={18} />} title="Data Saver" description="Reduce data usage" isToggle isToggled={dataSaverEnabled} onToggle={() => setDataSaverEnabled(!dataSaverEnabled)} />
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">About</h2>
                  <div className="space-y-3">
                    <SettingItem icon={<Info size={18} />} title="App Version" description="Version 2.4.1 (Build 421)" onClick={() => {}} />
                    <SettingItem icon={<HelpCircle size={18} />} title="Help & Support" description="Get help with the app" buttonText="Contact" onClick={() => console.log('Support')} />
                    <SettingItem icon={<Star size={18} />} title="Rate the App" description="Enjoying the app? Rate us!" buttonText="Rate" onClick={() => console.log('Rate')} />
                  </div>
                </section>
              </div>
            )}

            {/* PRIVACY */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Privacy</h2>
                  <div className="space-y-3">
                    <SettingItem icon={<Shield size={18} />} title="Privacy Policy" description="Our privacy standards and how we use data" buttonText="View" onClick={handleOpenPrivacyPolicy} />
                    <SettingItem icon={<Shield size={18} />} title="Terms of Service" description="Our terms of use for the application" buttonText="View" onClick={handleOpenTerms} />
                    <SettingItem icon={<Eye size={18} />} title="Activity Status" description="Control who sees when you're active" isToggle isToggled={true} onToggle={() => console.log('Toggle activity')} />
                    <SettingItem icon={<MessageCircle size={18} />} title="Read Receipts" description="Let others know when you've seen their messages" isToggle isToggled={true} onToggle={() => console.log('Toggle read')} />
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Data</h2>
                  <div className="space-y-3">
                    <SettingItem icon={<Database size={18} />} title="Download Your Data" description="Get a copy of your data" buttonText="Request" onClick={() => console.log('Request data')} />
                    <SettingItem icon={<Trash2 size={18} />} title="Clear Search History" description="Delete your search history" buttonText="Clear" onClick={() => console.log('Clear search')} />
                  </div>
                </section>
              </div>
            )}

            {/* NOTIFICATIONS */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Notifications</h2>
                  <div className="space-y-3">
                    <SettingItem icon={<Bell size={18} />} title="Push Notifications" description="Receive app alerts and updates" isToggle isToggled={notificationsEnabled} onToggle={() => setNotificationsEnabled(!notificationsEnabled)} />
                    <SettingItem icon={<Mail size={18} />} title="Email Notifications" description="Receive email updates and summaries" isToggle isToggled={emailNotifications} onToggle={() => setEmailNotifications(!emailNotifications)} />
                    <SettingItem icon={<Volume2 size={18} />} title="Sounds" description="Play sounds for notifications" isToggle isToggled={soundEnabled} onToggle={() => setSoundEnabled(!soundEnabled)} />
                    <SettingItem icon={<Smartphone size={18} />} title="Vibration" description="Vibrate for notifications" isToggle isToggled={vibrationEnabled} onToggle={() => setVibrationEnabled(!vibrationEnabled)} />
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Notification Types</h2>
                  <div className="space-y-3">
                    <SettingItem icon={<MessageCircle size={18} />} title="Message Notifications" description="Get notified about new messages" isToggle isToggled={true} onToggle={() => console.log('Toggle message')} />
                    <SettingItem icon={<Calendar size={18} />} title="Reminder Notifications" description="Get reminded about upcoming events" isToggle isToggled={true} onToggle={() => console.log('Toggle reminder')} />
                    <SettingItem icon={<Star size={18} />} title="Promotional Notifications" description="Receive offers and promotions" isToggle isToggled={false} onToggle={() => console.log('Toggle promo')} />
                  </div>
                </section>
              </div>
            )}

            {/* APPEARANCE */}
            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Theme</h2>
                  <div className="space-y-3">
                    <SettingItem icon={darkMode ? <Moon size={18} /> : <Sun size={18} />} title="Dark Mode" description={darkMode ? 'Enabled' : 'Disabled'} isToggle isToggled={darkMode} onToggle={toggleDarkMode} />
                    <SettingItem icon={<Palette size={18} />} title="Accent Color" description="Change the app's color scheme" buttonText="Change" onClick={() => console.log('Accent')} />
                    <SettingItem icon={<EyeOff size={18} />} title="Reduce Motion" description="Minimize animations and effects" isToggle isToggled={false} onToggle={() => console.log('Toggle motion')} />
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Display</h2>
                  <div className="space-y-3">
                    <SettingItem icon={<BatteryCharging size={18} />} title="Battery Saver" description="Reduce power consumption" isToggle isToggled={false} onToggle={() => console.log('Toggle battery')} />
                    <SettingItem icon={<WifiOff size={18} />} title="Low Data Mode" description="Reduce data usage when on cellular" isToggle isToggled={false} onToggle={() => console.log('Toggle low data')} />
                  </div>
                </section>
              </div>
            )}

          </motion.section>
        </AnimatePresence>

        {/* Advanced Settings Toggle */}
        <motion.div className="mt-6">
          <button onClick={() => setShowAdvancedSettings(!showAdvancedSettings)} className="w-full flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <span className="font-medium text-gray-700 dark:text-gray-300">Advanced Settings</span>
            <ChevronRight size={18} className={`transform transition-transform ${showAdvancedSettings ? 'rotate-90' : ''}`} />
          </button>
        </motion.div>

        <AnimatePresence>
          {showAdvancedSettings && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="mt-3 overflow-hidden">
              <div className="space-y-3">
                <SettingItem icon={<Database size={18} />} title="Reset App Data" description="Clear all app data and start fresh" buttonText="Reset" onClick={() => console.log('Reset')} isDestructive />
                <SettingItem icon={<Keyboard size={18} />} title="Keyboard Shortcuts" description="View and customize keyboard shortcuts" buttonText="Customize" onClick={() => console.log('Shortcuts')} />
                <SettingItem icon={<Code size={18} />} title="Developer Options" description="Advanced settings for developers" buttonText="Open" onClick={() => console.log('Dev options')} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logout & Delete */}
        <div className="mt-6 space-y-3">
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-3 p-3 text-red-600 bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-2xl border border-red-300 dark:border-red-700 font-semibold">
            <LogOut size={18} />
            <span>Logout</span>
          </button>

          <button onClick={() => setShowDeleteConfirm(true)} className="w-full flex items-center justify-center gap-3 p-3 text-white bg-red-600 hover:bg-red-700 rounded-2xl font-semibold">
            <Trash2 size={18} />
            <span>Delete My Account</span>
          </button>
        </div>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {showDeleteConfirm && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setShowDeleteConfirm(false)}>
              <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white dark:bg-gray-800 rounded-2xl p-5 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Delete Account</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Are you sure you want to permanently delete your account? This action cannot be undone and all your data will be lost.</p>
                <div className="flex gap-3">
                  <button onClick={() => setShowDeleteConfirm(false)} className="flex-1 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">Cancel</button>
                  <button onClick={handleDeleteAccount} className="flex-1 py-2 rounded-lg bg-red-600 text-white">Delete</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <BottomBar />
    </div>
  );
}

// Small helper icon components used earlier (kept for compatibility)
const Code = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Text = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 5L13 19M13 5L19 19M13 5L7 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
