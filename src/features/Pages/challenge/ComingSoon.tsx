import { useNavigate } from 'react-router-dom';
import { Clock, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden flex items-center justify-center px-4">
      
      {/* Floating animated blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-20 right-[-5%] w-80 h-80 bg-pink-300/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-10%] left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Main card */}
      <motion.div
        className="relative z-10 text-center bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-md w-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-6"
        >
          <Clock className="w-16 h-16 text-blue-500 animate-bounce" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Coming Soon!
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-6 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          🚀 We're cooking something exciting! This feature is under development. For now, enjoy challenging yourself or check back soon.
        </motion.p>

        {/* Buttons */}
        <motion.div className="flex flex-col md:flex-row items-center justify-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Back to Home
          </button>

          <button
            onClick={() => alert('You will be notified when it goes live!')}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <Bell className="w-5 h-5" /> Notify Me
          </button>
        </motion.div>
      </motion.div>

      {/* Blob animations */}
      <style>{`
        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(20px, -10px) scale(1.05); }
          66% { transform: translate(-15px, 10px) scale(0.95); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default ComingSoon;
