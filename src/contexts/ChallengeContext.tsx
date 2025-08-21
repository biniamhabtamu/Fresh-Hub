// src/contexts/ChallengeContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';

type Challenge = {
  id: string;
  title: string;
  subject: string;
  questions: any[];
  participants?: string[];
};

type ChallengeContextType = {
  currentChallenge: Challenge | null;
  setCurrentChallenge: (challenge: Challenge | null) => void;
  createNewChallenge: (subject: string, type: string) => void;
  joinChallenge: (challengeId: string) => void;
};

const ChallengeContext = createContext<ChallengeContextType | undefined>(undefined);

export function ChallengeProvider({ children }: { children: ReactNode }) {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);

  const createNewChallenge = (subject: string, type: string) => {
    const newChallenge: Challenge = {
      id: Math.random().toString(36).substring(2, 9),
      title: `${type} Challenge - ${subject}`,
      subject,
      questions: [], // You'll populate these from your backend
    };
    setCurrentChallenge(newChallenge);
  };

  const joinChallenge = (challengeId: string) => {
    // Here you would fetch the challenge from your backend
    // For now, we'll just mock it
    const joinedChallenge: Challenge = {
      id: challengeId,
      title: "Friend Challenge",
      subject: "General Knowledge",
      questions: [],
      participants: ["user1", "user2"]
    };
    setCurrentChallenge(joinedChallenge);
  };

  return (
    <ChallengeContext.Provider 
      value={{ 
        currentChallenge, 
        setCurrentChallenge,
        createNewChallenge,
        joinChallenge
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}

export function useChallenge() {
  const context = useContext(ChallengeContext);
  if (context === undefined) {
    throw new Error('useChallenge must be used within a ChallengeProvider');
  }
  return context;
}