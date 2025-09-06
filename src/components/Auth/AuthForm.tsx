import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';
import { BookOpen, Mail, Lock, User, Phone, Brain, Leaf, Gift, School, Eye, EyeOff, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    field: 'natural' as 'natural' | 'social',
    password: '',
    confirmPassword: '',
    referralCode: ''
  });

  const universities = [
    "Addis Ababa University",
    "Addis Ababa Science and Technology University",
    "Adigrat University",
    "Aksum University",
    "Ambo University",
    "Arba Minch University",
    "Arsi University",
    "Assosa University",
    "Bahir Dar University",
    "Bonga University",
    "Borena University",
    "Bule Hora University",
    "Debark University",
    "Debre Berhan University",
    "Debre Markos University",
    "Debre Tabor University",
    "Dembi Dolo University",
    "Dilla University",
    "Dire Dawa University",
    "Ethiopian Civil Service University",
    "Gambella University",
    "Haramaya University",
    "Hawassa University",
    "Injibara University",
    "Jigjiga University",
    "Jimma University",
    "Jinka University",
    "Kebri Dehar University",
    "Kotebe Education (Metropolitan) University",
    "Madda Walabu University",
    "Mattu (Mettu) University",
    "Mekdela Amba University",
    "Mekelle University",
    "Mizan-Tepi University",
    "Oda Bultum University",
    "Oromia State University",
    "Raya University",
    "Selale University",
    "Semera University",
    "University of Gondar",
    "Wachamo (Wachemo) University",
    "Wolaita Sodo University",
    "Woldia (Woldiya) University",
    "Wolkite University",
    "Wollega University",
    "Wollo University"
  ];

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
          university: formData.university,
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
        <div className="text-center mb-8">
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
          <p className="text-gray-300 text-lg mb-2">Your gateway to exam success</p>
          <p className="text-gray-400 text-sm">
            {isLogin ? 'Welcome back! Please sign in to continue' : 'Create an account to get started'}
          </p>
        </div>

        {/* Form Card with Glassmorphism */}
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 md:p-8">
          {/* Tab Selection */}
          <div className="flex justify-center mb-6 bg-gray-800/50 p-1 rounded-full">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 text-center py-2 px-4 rounded-full transition-colors duration-300 ${
                isLogin ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 text-center py-2 px-4 rounded-full transition-colors duration-300 ${
                !isLogin ? 'bg-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
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
              className="space-y-5"
            >
              {!isLogin && (
                <>
                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <div className="relative">
                      <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">University</label>
                    <div className="relative">
                      <School size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
                      <select
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-10 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white appearance-none"
                        required
                      >
                        <option value="">Select your university</option>
                        {universities.map((university) => (
                          <option key={university} value={university}>
                            {university}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Field of Study</label>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        type="button"
                        onClick={() => setFormData({ ...formData, field: 'natural' })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-3 rounded-xl border transition-all flex flex-col items-center justify-center ${
                          formData.field === 'natural'
                            ? 'border-green-500 bg-green-500/20 text-green-300 shadow-md'
                            : 'border-gray-700 hover:border-green-500 text-gray-400 bg-gray-800/50'
                        }`}
                      >
                        <Leaf size={20} className="mb-1" />
                        <span className="font-medium text-sm">Natural</span>
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => setFormData({ ...formData, field: 'social' })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-3 rounded-xl border transition-all flex flex-col items-center justify-center ${
                          formData.field === 'social'
                            ? 'border-purple-500 bg-purple-500/20 text-purple-300 shadow-md'
                            : 'border-gray-700 hover:border-purple-500 text-gray-400 bg-gray-800/50'
                        }`}
                      >
                        <Brain size={20} className="mb-1" />
                        <span className="font-medium text-sm">Social</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </>
              )}

              <motion.div variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-10 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
                    placeholder="Enter your password"
                    required
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {!isLogin && (
                  <p className="text-xs text-gray-500 mt-1">Use at least 8 characters with a mix of letters and numbers</p>
                )}
              </motion.div>

              {!isLogin && (
                <>
                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                    <div className="relative">
                      <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-10 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
                        placeholder="Confirm your password"
                        required
                      />
                      <button 
                        type="button" 
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Referral Code <span className="text-gray-500">(optional)</span>
                    </label>
                    <div className="relative">
                      <Gift size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
                        placeholder="Enter referral code if you have one"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Enter a referral code to get bonus credits</p>
                  </motion.div>
                </>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </motion.button>
            </motion.form>
          </AnimatePresence>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </motion.div>
    </div>
  );
}