// src/features/challenge/ChallengeSelf.tsx
import React, { useEffect, useState } from 'react';
import SubjectSelection from './SubjectSelection';
import QuestionPage from './QuestionPage';
import ResultsPage from './ResultsPage';
import { getRandomQuestions } from '../../data/ChallengeExamCollection';
import { useChallenge } from '../../../hooks/useChallenge';
import { Button } from '@/components/ui/button';

type Question = {
  id: string;
  subject: string;
  question: string;
  choices: string[];
  answer: string;
  // add other fields your app uses
};

export default function ChallengeSelf({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState<'subject' | 'questions' | 'results'>('subject');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [questionCount, setQuestionCount] = useState<number>(() => {
    try {
      return Number(localStorage.getItem('challenge:questionCount') || 10);
    } catch {
      return 10;
    }
  });
  const [timePerQuestion, setTimePerQuestion] = useState<number>(() => {
    try {
      return Number(localStorage.getItem('challenge:timePerQuestion') || 60);
    } catch {
      return 60;
    }
  });
  const [currentSubject, setCurrentSubject] = useState<string | null>(null);
  const { setChallengeMode } = useChallenge();

  // Persist settings
  useEffect(() => {
    try {
      localStorage.setItem('challenge:questionCount', String(questionCount));
      localStorage.setItem('challenge:timePerQuestion', String(timePerQuestion));
    } catch {
      /* ignore storage errors */
    }
  }, [questionCount, timePerQuestion]);

  // Ensure challenge mode is set when starting questions
  useEffect(() => {
    if (step === 'questions') setChallengeMode?.('self');
  }, [step, setChallengeMode]);

  const handleSubjectSelect = (subject: string) => {
    setCurrentSubject(subject);
    setChallengeMode?.('self');

    const selectedQuestions = getRandomQuestions(subject as any, questionCount) as Question[];

    // if the data source returned fewer questions than requested, still proceed but adjust
    if (!selectedQuestions || selectedQuestions.length === 0) {
      // fallback: empty -> stay on subject step and optionally show UI feedback (not implemented)
      setQuestions([]);
      setStep('subject');
      return;
    }

    if (selectedQuestions.length < questionCount) {
      // If fewer available, accept them and update questionCount to reflect actual number used
      setQuestionCount(selectedQuestions.length);
    }

    setQuestions(selectedQuestions);
    setAnswers({});
    setStep('questions');
  };

  const handleComplete = (userAnswers: Record<string, string>) => {
    setAnswers(userAnswers);
    setStep('results');
  };

  const handleRestart = () => {
    // restart with same subject and settings; guard if currentSubject is missing
    if (!currentSubject) {
      // if something weird happened, send user back to subject selection
      setQuestions([]);
      setAnswers({});
      setStep('subject');
      return;
    }

    const selectedQuestions = getRandomQuestions(currentSubject as any, questionCount) as Question[];

    if (!selectedQuestions || selectedQuestions.length === 0) {
      // if no questions available, go to subject selection
      setQuestions([]);
      setAnswers({});
      setStep('subject');
      return;
    }

    setQuestions(selectedQuestions);
    setAnswers({});
    setStep('questions');
  };

  const handleNewChallenge = () => {
    setQuestions([]);
    setAnswers({});
    setCurrentSubject(null);
    setStep('subject');
  };

  // UI for settings shown on the subject selection step
  const SettingsPanel = () => (
    <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Challenge Settings</h3>
        <div className="text-sm text-muted-foreground">Saved locally</div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Questions</label>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setQuestionCount((c) => Math.max(1, c - 1))}
              aria-label="Decrease questions"
              className="px-3 py-1"
            >
              -
            </Button>
            <input
              type="number"
              min={1}
              max={100}
              value={questionCount}
              onChange={(e) => {
                const v = Number(e.target.value || 1);
                setQuestionCount(Math.max(1, Math.floor(v)));
              }}
              className="w-20 text-center border rounded px-2 py-1"
            />
            <Button
              onClick={() => setQuestionCount((c) => Math.min(100, c + 1))}
              aria-label="Increase questions"
              className="px-3 py-1"
            >
              +
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Number of questions in the challenge</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Time / Question (sec)</label>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setTimePerQuestion((t) => Math.max(5, t - 5))}
              aria-label="Decrease time"
              className="px-3 py-1"
            >
              -
            </Button>
            <input
              type="number"
              min={5}
              max={600}
              value={timePerQuestion}
              onChange={(e) => {
                const v = Number(e.target.value || 5);
                setTimePerQuestion(Math.max(5, Math.floor(v)));
              }}
              className="w-20 text-center border rounded px-2 py-1"
            />
            <Button
              onClick={() => setTimePerQuestion((t) => Math.min(600, t + 5))}
              aria-label="Increase time"
              className="px-3 py-1"
            >
              +
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Time allowed per question</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4">
      {step === 'subject' && <SubjectSelection />}
      {step === 'questions' && <QuestionList />}
      {step === 'results' && <Results />}
      <SettingsPanel />
    </div>
  );
};

export default ChallengeSelf;
