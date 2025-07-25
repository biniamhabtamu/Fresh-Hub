import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthForm from './components/Auth/AuthForm';
import Dashboard from './components/Home/Dashboard';
import YearSelection from './components/Subject/YearSelection';
import ChapterSelection from './components/Subject/ChapterSelection';
import QuizPage from './components/Quiz/QuizPage';
import PremiumPage from './components/Premium/PremiumPage';
import LeaderboardPage from './components/Leaderboard/LeaderboardPage';
import ProfilePage from './components/Layout/ProfilePage';
import SettingsPage from './components/Layout/SettingsPage';
import './App.css';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAuth();
  return currentUser ? <>{children}</> : <Navigate to="/auth" />;
}

function AppRoutes() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route 
        path="/auth" 
        element={currentUser ? <Navigate to="/dashboard" /> : <AuthForm />} 
      />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/subject/:subjectId" 
        element={
          <ProtectedRoute>
            <YearSelection />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/subject/:subjectId/year/:year" 
        element={
          <ProtectedRoute>
            <ChapterSelection />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/subject/:subjectId/year/:year/chapter/:chapter" 
        element={
          <ProtectedRoute>
            <QuizPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/premium" 
        element={
          <ProtectedRoute>
            <PremiumPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/leaderboard" 
        element={
          <ProtectedRoute>
            <LeaderboardPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profilepage" 
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/settings" 
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        } 
      />
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progressText, setProgressText] = useState('Initializing');
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const messages = [
      'Loading resources',
      'Preparing interface',
      'Optimizing experience',
      'Almost there'
    ];
    let currentMessage = 0;

    const startTime = Date.now();
    const duration = 3200; // 3.2 seconds total

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const percent = Math.floor(progress * 100);
      
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }

      setProgressPercent(percent);

      // Update progress message every 800ms
      if (elapsed > currentMessage * 800 && currentMessage < messages.length) {
        setProgressText(messages[currentMessage]);
        currentMessage++;
      }

      if (progress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(updateProgress);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="cosmic-background">
          <div className="galaxy-spiral"></div>
          {Array.from({ length: 25 }).map((_, i) => (
            <div 
              key={`particle-${i}`}
              className="cosmic-particle"
              style={{
                '--size': `${Math.random() * 12 + 4}px`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--delay': `${Math.random() * 3}s`,
                '--duration': `${Math.random() * 15 + 10}s`,
                '--opacity': `${Math.random() * 0.7 + 0.2}`,
                '--hue': `${Math.random() * 60 + 200}`
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="loading-content">
          <div className="luxury-logo">
            <div className="logo-sphere">
              <div className="sphere-core"></div>
              <div className="sphere-shine"></div>
              <div className="sphere-glow"></div>
            </div>
            <div className="logo-aurora">
              <div className="aurora-ring aurora-1"></div>
              <div className="aurora-ring aurora-2"></div>
              <div className="aurora-ring aurora-3"></div>
            </div>
            <div className="logo-constellation">
              {Array.from({ length: 16 }).map((_, i) => (
                <div 
                  key={`star-${i}`}
                  className="star" 
                  style={{ 
                    '--angle': `${i * 22.5}deg`,
                    '--delay': `${i * 0.05}s`
                  } as React.CSSProperties}
                />
              ))}
            </div>
          </div>

          <h1 className="app-title">
            {['F', 'r', 'e', 's', 'h', 'H', 'u', 'b'].map((letter, i) => (
              <span key={`letter-${i}`} className="title-letter" style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}>
                {letter}
              </span>
            ))}
          </h1>

          <div className="loading-status">
            <div className="status-text">{progressText}</div>
            <div className="status-dots">
              {[0, 1, 2].map((i) => (
                <span key={`dot-${i}`} className="dot" style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}></span>
              ))}
            </div>
          </div>

          <div className="luxury-progress">
            <div className="progress-container">
              <div ref={progressRef} className="progress-fill"></div>
              <div className="progress-sparkle"></div>
            </div>
            <div className="progress-percentage">
              {progressPercent}%
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;