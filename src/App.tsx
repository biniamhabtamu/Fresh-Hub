import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthForm from './components/Auth/AuthForm';
import Dashboard from './components/Home/Dashboard';
import YearSelection from './components/Subject/YearSelection';
import ChapterSelection from './components/Subject/ChapterSelection';
import QuizPage from './components/Quiz/QuizPage';
import PremiumPage from './components/Premium/PremiumPage';
import LeaderboardPage from './components/Leaderboard/LeaderboardPage';

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
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;