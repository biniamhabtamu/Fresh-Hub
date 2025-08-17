import { createContext, useContext, useState, ReactNode } from 'react';

type ChallengeMode = 'self' | 'friend' | 'mid-global' | 'final-global' | null;
type Subject = string;

interface ChallengeContextType {
  challengeMode: ChallengeMode;
  challengeSubject: Subject | null;
  setChallengeMode: (mode: ChallengeMode) => void;
  setChallengeSubject: (subject: Subject) => void;
  answers: Record<string, { answer: string; correct: boolean }>;
  addAnswer: (questionId: string, answer: string, correct: boolean) => void;
  resetChallenge: () => void;
}

const ChallengeContext = createContext<ChallengeContextType | undefined>(undefined);

interface ChallengeProviderProps {
  children: ReactNode;
}

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [challengeMode, setChallengeMode] = useState<ChallengeMode>(null);
  const [challengeSubject, setChallengeSubject] = useState<Subject | null>(null);
  const [answers, setAnswers] = useState<Record<string, { answer: string; correct: boolean }>>({});

  const addAnswer = (questionId: string, answer: string, correct: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { answer, correct }
    }));
  };

  const resetChallenge = () => {
    setChallengeMode(null);
    setChallengeSubject(null);
    setAnswers({});
  };

  const value = {
    challengeMode,
    challengeSubject,
    setChallengeMode,
    setChallengeSubject,
    answers,
    addAnswer,
    resetChallenge
  };

  return (
    <ChallengeContext.Provider value={value}>
      {children}
    </ChallengeContext.Provider>
  );
}

export const useChallenge = () => {
  const context = useContext(ChallengeContext);
  if (context === undefined) {
    throw new Error('useChallenge must be used within a ChallengeProvider');
  }
  return context;
};