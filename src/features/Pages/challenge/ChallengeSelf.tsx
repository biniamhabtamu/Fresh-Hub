// src/features/challenge/ChallengeSelf.tsx
import { useState } from 'react';
import SubjectSelection from './SubjectSelection';
import QuestionPage from './QuestionPage';
import ResultsPage from './ResultsPage';
import { getRandomQuestions } from '../../data/ChallengeExamCollection';
import { useChallenge } from '../../../hooks/useChallenge';

export default function ChallengeSelf({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState<'subject' | 'questions' | 'results'>('subject');
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [questionCount, setQuestionCount] = useState(10);
  const [timePerQuestion, setTimePerQuestion] = useState(60);
  const { setChallengeMode } = useChallenge();

  const handleSubjectSelect = (subject: string) => {
    setChallengeMode('self');
    const selectedQuestions = getRandomQuestions(subject as any, questionCount);
    setQuestions(selectedQuestions);
    setStep('questions');
  };

  const handleComplete = (userAnswers: Record<string, string>) => {
    setAnswers(userAnswers);
    setStep('results');
  };

  const handleRestart = () => {
    const selectedQuestions = getRandomQuestions(questions[0].subject, questionCount);
    setQuestions(selectedQuestions);
    setAnswers({});
    setStep('questions');
  };

  const handleNewChallenge = () => {
    setQuestions([]);
    setAnswers({});
    setStep('subject');
  };

  if (step === 'subject') {
    return (
      <SubjectSelection 
        onSubjectSelect={handleSubjectSelect} 
        mode="self" 
        onBack={onBack}
      />
    );
  }

  if (step === 'questions') {
    return (
      <QuestionPage
        questions={questions}
        onComplete={handleComplete}
        mode="self"
        timePerQuestion={timePerQuestion}
      />
    );
  }

  return (
    <ResultsPage
      questions={questions}
      answers={answers}
      mode="self"
      onRestart={handleRestart}
      onNewChallenge={handleNewChallenge}
    />
  );
}