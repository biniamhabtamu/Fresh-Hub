// src/features/challenge/ChallengeGlobal.tsx
import { useState } from 'react';
import SubjectSelection from './SubjectSelection';
import QuestionPage from './QuestionPage';
import ResultsPage from './ResultsPage';
import { getRandomQuestions } from '../data/ChallengeExamCollection';
import { useChallenge } from '../../hooks/useChallenge';

export default function ChallengeGlobal({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState<'subject' | 'type' | 'questions' | 'results'>('subject');
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [challengeType, setChallengeType] = useState<'mid' | 'final' | null>(null);
  const { setChallengeMode } = useChallenge();

  const handleSubjectSelect = (subject: string) => {
    setStep('type');
  };

  const handleChallengeTypeSelect = (type: 'mid' | 'final') => {
    setChallengeType(type);
    setChallengeMode(type === 'mid' ? 'mid-global' : 'final-global');
    
    // For demo, we'll use random questions. In a real app, you'd fetch specific mid/final questions
    const allQuestions = getRandomQuestions(subject, type === 'mid' ? 15 : 30);
    setQuestions(allQuestions);
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
    setChallengeType(null);
    setStep('subject');
  };

  if (step === 'subject') {
    return (
      <SubjectSelection 
        onSubjectSelect={handleSubjectSelect} 
        mode="global" 
        onBack={onBack}
      />
    );
  }

  if (step === 'type') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setStep('subject')}
            className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Subject Selection
          </button>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Challenge Type</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all"
                  onClick={() => handleChallengeTypeSelect('mid')}
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Mid-Term Challenge</h3>
                  <p className="text-gray-500">15 questions, compete with global users</p>
                </div>

                <div 
                  className="p-6 border-2 border-purple-200 rounded-xl hover:border-purple-400 hover:bg-purple-50 cursor-pointer transition-all"
                  onClick={() => handleChallengeTypeSelect('final')}
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Final Exam Challenge</h3>
                  <p className="text-gray-500">30 comprehensive questions, global ranking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'questions') {
    return (
      <QuestionPage
        questions={questions}
        onComplete={handleComplete}
        mode="global"
      />
    );
  }

  return (
    <ResultsPage
      questions={questions}
      answers={answers}
      mode="global"
      onRestart={handleRestart}
      onNewChallenge={handleNewChallenge}
    />
  );
}