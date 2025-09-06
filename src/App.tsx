import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { App as CapacitorApp, PluginListenerHandle } from '@capacitor/app';
import { Toast } from '@capacitor/toast';
import AuthForm from './components/Auth/AuthForm';
import Dashboard from './components/Home/Dashboard';
import YearSelection from './components/Subject/YearSelection';
import ChapterSelection from './components/Subject/ChapterSelection';
import QuizPage from './components/Quiz/QuizPage';
import PremiumPage from './components/Premium/PremiumPage';
import LeaderboardPage from './components/Leaderboard/LeaderboardPage';
import ProfilePage from './components/Layout/ProfilePage';
import SettingsPage from './components/Layout/SettingsPage';
import { motion } from 'framer-motion';
import './App.css';
import AdminDashboard from './components/admin/premium-approvals';
import HandoutPage from './components/Handout/HandoutPage';
import NotePage from './components/Handout/NotePage';
import ContactUs from './components/Layout/ContactUs';
import CommunityPage from './components/Community/CommunityPage';
import ChallengeHome from './features/Pages/challenge/ChallengeHome';
import ChallengeModeSelection from './features/Pages/challenge/ChallengeModeSelection';
import ChallengeYourself from './features/Pages/challenge/ChallengeFriend';
import ResultsPage from './features/Pages/challenge/ResultsPage';
import ComingSoon from './features/Pages/challenge/ComingSoon';
import { ChallengeProvider } from './contexts/ChallengeContext';
import LiveChallenge from './features/Pages/challenge/LiveChallenge';
import ChallengeFriend from './features/Pages/challenge/ChallengeFriend';
import GPACalculator from './components/Layout/GPACalculator';
import QuestionSelection from './features/Pages/challenge/QuestionSelection';
import QuestionPage from './features/Pages/challenge/QuestionPage';
import AdminPage from './features/Pages/challenge/AdminPage';
import SubjectsModule from './components/SubjectsModule/SubjectsModule';

// Protects routes from unauthenticated users
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAuth();
  return currentUser ? <>{children}</> : <Navigate to="/auth" />;
}

// Defines all app routes
function AppRoutes() {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route
        path="/auth"
        element={currentUser ? <Navigate to="/dashboard" /> : <AuthForm />}
      />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/subject/:subjectId" element={<ProtectedRoute><YearSelection /></ProtectedRoute>} />
      <Route path="/subject/:subjectId/year/:year" element={<ProtectedRoute><ChapterSelection /></ProtectedRoute>} />
      <Route path="/subject/:subjectId/year/:year/chapter/:chapter" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
      <Route path="/premium" element={<ProtectedRoute><PremiumPage /></ProtectedRoute>} />
      <Route path="/admin/premium-approvals" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/leaderboard" element={<ProtectedRoute><LeaderboardPage /></ProtectedRoute>} />
      <Route path="/profilepage" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/handouts" element={<ProtectedRoute><HandoutPage /></ProtectedRoute>} />
      <Route path="/notes/:subjectId/:chapterId" element={<ProtectedRoute><NotePage /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
      <Route path="/ContactUs" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
      <Route path="/Community" element={<ProtectedRoute><CommunityPage /></ProtectedRoute>} />
      <Route path="/SubjectsModule" element={<ProtectedRoute><SubjectsModule /></ProtectedRoute>} />
      <Route path="/challenge" element={<ProtectedRoute><ChallengeHome /></ProtectedRoute>} />
      <Route path="/challenge/self" element={<ProtectedRoute><ChallengeModeSelection /></ProtectedRoute>} />
      <Route path="/challenge/self/custom" element={<ProtectedRoute><ChallengeYourself /></ProtectedRoute>} />
      <Route path="friend" element={<ComingSoon />} />
      <Route path="/challenge/livechallenge" element={<ProtectedRoute><LiveChallenge /></ProtectedRoute>} />
      <Route path="/challenge/questionselection" element={<ProtectedRoute><QuestionSelection /></ProtectedRoute>} />
      <Route path="/challenge/AdminPage" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
      <Route path="/challenge/question-page" element={<ProtectedRoute>< QuestionPage /></ProtectedRoute>} />
      <Route path="/challenge/self/:questions" element={<ProtectedRoute><ChallengeYourself /></ProtectedRoute>} />
      <Route path="/challenge/results" element={<ProtectedRoute><ResultsPage /></ProtectedRoute>} />
      <Route path="/challenge/coming-soon" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
      <Route path="/Layout/GPACalculator" element={<ProtectedRoute><GPACalculator /></ProtectedRoute>} />
      <Route path="/pages/challenge/Global" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

// Handles app content and loading states
function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [lastBackPress, setLastBackPress] = useState(0);
  const { currentUser, loadingAuth } = useAuth();
  const [backHandler, setBackHandler] = useState<PluginListenerHandle | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(true);
    const handleOfflineStatus = () => setIsOnline(false);

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, []);

  const showToast = async (message: string) => {
    await Toast.show({
      text: message,
      duration: 'short'
    });
  };

  useEffect(() => {
    // Return early if the app is still loading
    if (loadingAuth) return;

    const handleBackButton = ({ canGoBack }: { canGoBack: boolean }) => {
      // Logic for handling the back button on Android
      const exitRoutes = ['/', '/dashboard', '/auth'];
      const isExitRoute = exitRoutes.includes(location.pathname);

      if (isExitRoute) {
        const now = Date.now();
        if (now - lastBackPress < 2000) {
          CapacitorApp.exitApp();
        } else {
          showToast('Press back again to exit');
          setLastBackPress(now);
        }
      } else {
        if (canGoBack) {
          navigate(-1);
        } else {
          navigate('/dashboard', { replace: true });
        }
      }
    };

    const setupListener = async () => {
      try {
        const handler = await CapacitorApp.addListener('backButton', handleBackButton);
        setBackHandler(handler);
      } catch (error) {
        console.error('Error setting up back button listener:', error);
      }
    };

    setupListener();

    return () => {
      if (backHandler) {
        backHandler.remove()
          .catch(error => console.warn('Error removing back handler:', error));
      }
    };
  }, [navigate, location, lastBackPress, loadingAuth, backHandler]);

  // Display special loading screen while authentication is in progress
  if (loadingAuth) {
    if (!isOnline) {
      return (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center text-white p-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">No Internet Connection ⚠️</h1>
            <p className="text-gray-400">Please check your network and try again. Your account will automatically load once you are back online.</p>
          </div>
        </div>
      );
    }
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 flex flex-col items-center justify-center overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, -100],
              x: [0, (Math.random() - 0.5) * 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl font-bold mb-2"
              animate={{
                backgroundSize: ['200%', '400%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                backgroundImage: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ffff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              FreshHub
            </motion.h1>
            <motion.p
              className="text-purple-200 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Your learning companion
            </motion.p>
          </motion.div>
          <div className="flex items-center justify-center mb-8">
            <span className="text-white text-xl mr-1">Loading</span>
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Once authentication is confirmed, display the routes
  return <AppRoutes />;
}

// Main App component with providers
function App() {
  return (
    <AuthProvider>
      <Router>
        <ChallengeProvider>
          <AppContent />
        </ChallengeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;