// src/features/challenge/ChallengeFriend.tsx
import { useState } from 'react';
import SubjectSelection from './SubjectSelection';
import FriendSelection from './FriendSelection';
import QuestionPage from './QuestionPage';
import ResultsPage from './ResultsPage';
import { getRandomQuestions } from '../../data/ChallengeExamCollection';
import { useChallenge } from '../../../hooks/useChallenge';

export default function ChallengeFriend({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState<'subject' | 'friend' | 'questions' | 'results'>('subject');
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedFriend, setSelectedFriend] = useState<any>(null);
  const { setChallengeMode } = useChallenge();

  const handleSubjectSelect = (subject: string) => {
    setChallengeMode('friend');
    setStep('friend');
  };

  const handleFriendSelect = (friend: any) => {
    setSelectedFriend(friend);
    const selectedQuestions = getRandomQuestions(friend.subject, 10); // 10 questions for friend challenge
    setQuestions(selectedQuestions);
    setStep('questions');
  };

  const handleComplete = (userAnswers: Record<string, string>) => {
    setAnswers(userAnswers);
    setStep('results');
  };

  const handleRestart = () => {
    setAnswers({});
    setStep('questions');
  };

  const handleNewChallenge = () => {
    setQuestions([]);
    setAnswers({});
    setSelectedFriend(null);
    setStep('subject');
  };

  if (step === 'subject') {
    return (
      <SubjectSelection 
        onSubjectSelect={handleSubjectSelect} 
        mode="friend" 
        onBack={onBack}
      />
    );
  }

  if (step === 'friend') {
    return (
      <FriendSelection
        onFriendSelect={handleFriendSelect}
        onBack={() => setStep('subject')}
      />
    );
  }

  if (step === 'questions') {
    return (
      <QuestionPage
        questions={questions}
        onComplete={handleComplete}
        mode="friend"
      />
    );
  }

  return (
    <ResultsPage
      questions={questions}
      answers={answers}
      mode="friend"
      onRestart={handleRestart}
      onNewChallenge={handleNewChallenge}
    />
  );
}