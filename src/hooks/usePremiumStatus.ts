import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';

export function usePremiumStatus() {
  const { currentUser } = useAuth();
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!currentUser?.uid) {
      setIsLoading(false);
      return;
    }

    const userRef = doc(db, 'users', currentUser.uid);
    const unsubscribe = onSnapshot(userRef, (doc) => {
      setIsPremium(doc.data()?.isPremium || false);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser?.uid]);

  return { isPremium, isLoading };
}