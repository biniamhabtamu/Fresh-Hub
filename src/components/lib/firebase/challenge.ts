import { db } from '@/lib/firebase/config';
import { doc, setDoc, updateDoc, getDoc, collection, addDoc } from 'firebase/firestore';

interface SaveChallengeResultParams {
  userId: string;
  score: number;
  totalQuestions: number;
  subject: string;
  challengeType: 'self' | 'friend' | 'mid' | 'final';
}

export const saveChallengeResult = async ({
  userId,
  score,
  totalQuestions,
  subject,
  challengeType
}: SaveChallengeResultParams) => {
  try {
    // Update user stats
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      await updateDoc(userRef, {
        'stats.totalPoints': (userSnap.data().stats?.totalPoints || 0) + score,
        'stats.challengesCompleted': (userSnap.data().stats?.challengesCompleted || 0) + 1
      });
    } else {
      await setDoc(userRef, {
        stats: {
          totalPoints: score,
          challengesCompleted: 1,
          wins: 0,
          losses: 0
        }
      });
    }
    
    // Save challenge result
    await addDoc(collection(db, 'challengeResults'), {
      userId,
      score,
      totalQuestions,
      correctAnswers: score,
      subject,
      timestamp: new Date(),
      challengeType
    });
    
    return true;
  } catch (error) {
    console.error('Error saving challenge result:', error);
    return false;
  }
};

export const getLeaderboard = async (challengeType: 'self' | 'friend' | 'mid' | 'final', limit = 10) => {
  const resultsRef = collection(db, 'challengeResults');
  const q = query(
    resultsRef,
    where('challengeType', '==', challengeType),
    orderBy('score', 'desc'),
    limit(limit)
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};import { db } from '@/lib/firebase/config';
import { doc, setDoc, updateDoc, getDoc, collection, addDoc } from 'firebase/firestore';

interface SaveChallengeResultParams {
  userId: string;
  score: number;
  totalQuestions: number;
  subject: string;
  challengeType: 'self' | 'friend' | 'mid' | 'final';
}

export const saveChallengeResult = async ({
  userId,
  score,
  totalQuestions,
  subject,
  challengeType
}: SaveChallengeResultParams) => {
  try {
    // Update user stats
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      await updateDoc(userRef, {
        'stats.totalPoints': (userSnap.data().stats?.totalPoints || 0) + score,
        'stats.challengesCompleted': (userSnap.data().stats?.challengesCompleted || 0) + 1
      });
    } else {
      await setDoc(userRef, {
        stats: {
          totalPoints: score,
          challengesCompleted: 1,
          wins: 0,
          losses: 0
        }
      });
    }
    
    // Save challenge result
    await addDoc(collection(db, 'challengeResults'), {
      userId,
      score,
      totalQuestions,
      correctAnswers: score,
      subject,
      timestamp: new Date(),
      challengeType
    });
    
    return true;
  } catch (error) {
    console.error('Error saving challenge result:', error);
    return false;
  }
};

export const getLeaderboard = async (challengeType: 'self' | 'friend' | 'mid' | 'final', limit = 10) => {
  const resultsRef = collection(db, 'challengeResults');
  const q = query(
    resultsRef,
    where('challengeType', '==', challengeType),
    orderBy('score', 'desc'),
    limit(limit)
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};