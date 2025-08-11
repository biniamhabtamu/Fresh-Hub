import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';
import { BookOpen, Mail, Lock, User, Phone, Brain, Leaf, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    field: 'natural' as 'natural' | 'social',
    password: '',
    confirmPassword: '',
    referralCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }

        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        
        // Prepare user data with optional referral code
        const userData: any = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          field: formData.field,
          isPremium: false,
          createdAt: new Date()
        };

        // Only add referralCode if it exists
        if (formData.referralCode.trim() !== '') {
          userData.referralCode = formData.referralCode.trim();
          userData.referredAt = new Date();
        }

        await setDoc(doc(db, 'users', userCredential.user.uid), userData);
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <BookOpen size={48} className="text-blue-400" />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Fresh-Hub
            </h1>
          </motion.div>
          <p className="text-gray-300 text-lg">Your gateway to exam success</p>
        </div>

        {/* Form Card with Glassmorphism */}
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`text-lg font-bold px-6 py-2 rounded-full transition-colors duration-300 ${
                isLogin ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`text-lg font-bold px-6 py-2 rounded-full transition-colors duration-300 ${
                !isLogin ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400'
              }`}
            >
              Sign Up
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? 'login' : 'signup'}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {!isLogin && (
                <>
                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <div className="relative">
                      <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Field of Study</label>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.button
                        type="button"
                        onClick={() => setFormData({ ...formData, field: 'natural' })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center ${
                          formData.field === 'natural'
                            ? 'border-green-500 bg-green-500/10 text-green-400'
                            : 'border-gray-700 hover:border-green-500 text-gray-400'
                        }`}
                      >
                        <Leaf size={24} className="mb-2" />
                        <span className="font-medium">Natural 🌿</span>
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => setFormData({ ...formData, field: 'social' })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center ${
                          formData.field === 'social'
                            ? 'border-purple-500 bg-purple-500/10 text-purple-400'
                            : 'border-gray-700 hover:border-purple-500 text-gray-400'
                        }`}
                      >
                        <Brain size={24} className="mb-2" />
                        <span className="font-medium">Social 🧠</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </>
              )}

              <motion.div variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </motion.div>

              {!isLogin && (
                <>
                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Confirm Password</label>
                    <div className="relative">
                      <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Referral Code <span className="text-gray-500">(optional)</span>
                    </label>
                    <div className="relative">
                      <Gift size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                        placeholder="Enter referral code if you have one"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Get bonus credits if you have a referral code</p>
                  </motion.div>
                </>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
              </motion.button>
            </motion.form>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}