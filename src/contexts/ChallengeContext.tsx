import { createContext, useContext, useState } from 'react';

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

const ChallengeContext = createContext<ChallengeContextType>({
  challengeMode: null,
  challengeSubject: null,
  setChallengeMode: () => {},
  setChallengeSubject: () => {},
  answers: {},
  addAnswer: () => {},
  resetChallenge: () => {}
});

export function ChallengeProvider({ children }: { children: React.ReactNode }) {
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

  return (
    <ChallengeContext.Provider value={{
      challengeMode,
      challengeSubject,
      setChallengeMode,
      setChallengeSubject,
      answers,
      addAnswer,
      resetChallenge
    }}>
      {children}
    </ChallengeContext.Provider>
  );
}

export const useChallenge = () => useContext(ChallengeContext);