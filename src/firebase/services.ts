import { db } from "./db";
import { collection, doc, setDoc, getDoc, updateDoc, increment, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { ChallengeResult, UserStats } from "../types/user";

export const saveChallengeResult = async (result: ChallengeResult) => {
  try {
    // Save the challenge result
    const resultRef = doc(collection(db, "challengeResults"));
    await setDoc(resultRef, result);
    
    // Update user stats
    const statsRef = doc(db, "userStats", result.userId);
    const statsSnap = await getDoc(statsRef);
    
    const updateData: Partial<UserStats> = {
      totalChallenges: increment(1),
      totalPoints: increment(result.score),
      lastChallenge: result.date
    };
    
    if (result.challengeType === "friend") {
      updateData.friendChallenges = increment(1);
      if (result.score > (result.totalQuestions / 2)) {
        updateData.wins = increment(1);
      } else {
        updateData.losses = increment(1);
      }
    }
    
    await setDoc(statsRef, updateData, { merge: true });
    
    return true;
  } catch (error) {
    console.error("Error saving challenge result:", error);
    return false;
  }
};

export const getGlobalRanking = async (userId: string): Promise<number> => {
  try {
    // Get the user's total points
    const userStatsRef = doc(db, "userStats", userId);
    const userStatsSnap = await getDoc(userStatsRef);
    const userPoints = userStatsSnap.data()?.totalPoints || 0;
    
    // Count how many users have more points
    const usersRef = collection(db, "userStats");
    const q = query(usersRef, where("totalPoints", ">", userPoints));
    const snapshot = await getDocs(q);
    
    return snapshot.size + 1;
  } catch (error) {
    console.error("Error getting global ranking:", error);
    return 0;
  }
};

export const sendChallengeInvite = async (fromUserId: string, toUserId: string) => {
  try {
    const notificationRef = doc(collection(db, "notifications"));
    await setDoc(notificationRef, {
      type: "challenge",
      fromUserId,
      toUserId,
      status: "pending",
      createdAt: new Date().toISOString(),
      read: false
    });
    return true;
  } catch (error) {
    console.error("Error sending challenge invite:", error);
    return false;
  }
};