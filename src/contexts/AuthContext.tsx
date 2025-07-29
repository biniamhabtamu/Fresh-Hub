import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { User } from '../types';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  isOnline: boolean;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const refreshUser = async () => {
    if (auth.currentUser) {
      try {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists()) {
          setCurrentUser({ id: auth.currentUser.uid, ...userDoc.data() } as User);
        }
      } catch (error) {
        console.error('Error refreshing user:', error);
        // In offline mode, we might still have cached data
      }
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    let unsubscribeAuth: () => void;
    let unsubscribeUser: () => void;

    const initializeAuth = async () => {
      unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
        if (user) {
          // Set up a real-time listener for user data
          const userRef = doc(db, 'users', user.uid);
          unsubscribeUser = onSnapshot(userRef, (doc) => {
            if (doc.exists()) {
              setCurrentUser({ id: user.uid, ...doc.data() } as User);
            }
          }, (error) => {
            console.error('Error listening to user data:', error);
          });

          // Also do an immediate fetch in case we're online
          try {
            const userDoc = await getDoc(userRef);
            if (userDoc.exists()) {
              setCurrentUser({ id: user.uid, ...userDoc.data() } as User);
            }
          } catch (error) {
            console.error('Error fetching user:', error);
          }
        } else {
          setCurrentUser(null);
          if (unsubscribeUser) unsubscribeUser();
        }
        setLoading(false);
      });
    };

    initializeAuth();

    return () => {
      if (unsubscribeAuth) unsubscribeAuth();
      if (unsubscribeUser) unsubscribeUser();
    };
  }, []);

  const value = {
    currentUser,
    loading,
    isOnline,
    logout,
    refreshUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}