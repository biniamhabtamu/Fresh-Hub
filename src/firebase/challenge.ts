// src/firebase/challenge.ts
import { db } from './config';
import { collection, addDoc, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

interface ChallengeResult {
  userId: string;
  subject: string;
  mode: 'self' | 'friend' | 'mid-global' | 'final-global';
  score: number;
  totalQuestions: number;
  timestamp: Date;
}

interface Friend {
  id: string;
  name: string;
  photoURL?: string;
  wins?: number;
  losses?: number;
}

export const saveChallengeResult = async (result: Omit<ChallengeResult, 'userId'>) => {
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  
  if (!userId) throw new Error('User not authenticated');

  const challengeResult = {
    ...result,
    userId,
    timestamp: new Date()
  };

  try {
    // Save the challenge result
    const docRef = await addDoc(collection(db, 'challengeResults'), challengeResult);
    
    // For global challenges, calculate rank
    if (result.mode === 'mid-global' || result.mode === 'final-global') {
      const q = query(
        collection(db, 'challengeResults'),
        where('subject', '==', result.subject),
        where('mode', '==', result.mode)
      );
      
      const querySnapshot = await getDocs(q);
      const allResults = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Sort by score descending, then by timestamp ascending (earlier submissions rank higher)
      allResults.sort((a, b) => {
        if (a.score !== b.score) return b.score - a.score;
        return a.timestamp.toDate() - b.timestamp.toDate();
      });
      
      const rank = allResults.findIndex(r => r.id === docRef.id) + 1;
      
      // Update user stats
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        [`${result.mode}Attempts`]: increment(1),
        [`${result.mode}HighScore`]: result.score,
        [`${result.mode}BestRank`]: Math.min(
          rank,
          (await getDoc(userRef)).data()?.[`${result.mode}BestRank`] || Infinity
        )
      });
      
      return { rank };
    }
    
    return {};
  } catch (error) {
    console.error('Error saving challenge result:', error);
    throw error;
  }
};

export const getFriendsList = async (): Promise<Friend[]> => {
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  
  if (!userId) throw new Error('User not authenticated');

  try {
    // In a real app, you would fetch the user's actual friends list
    // For demo purposes, we'll return a mock list
    const q = query(collection(db, 'users'), where('id', '!=', userId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.displayName || 'Anonymous',
        photoURL: data.photoURL,
        wins: data.challengeWins || 0,
        losses: data.challengeLosses || 0
      };
    });
  } catch (error) {
    console.error('Error fetching friends list:', error);
    return [];
  }
};

export const sendChallengeInvite = async (friendId: string, subject: string) => {
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  
  if (!userId) throw new Error('User not authenticated');

  try {
    await addDoc(collection(db, 'challengeInvites'), {
      fromUserId: userId,
      toUserId: friendId,
      subject,
      status: 'pending',
      timestamp: new Date()
    });
    return true;
  } catch (error) {
    console.error('Error sending challenge invite:', error);
    return false;
  }
};