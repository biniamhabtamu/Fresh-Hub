import { useState } from 'react';
import SubjectSelection from './SubjectSelection';
import QuestionPage from './QuestionPage';
import ResultsPage from './ResultsPage';
import { getRandomQuestions } from '../../data/ChallengeExamCollection';
import { useChallenge } from '../../../hooks/useChallenge';

export default function ChallengeGlobal({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState<'subject' | 'type' | 'questions' | 'results'>('subject');
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [challengeType, setChallengeType] = useState<'mid' | 'final' | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const { setChallengeMode } = useChallenge();

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setStep('type');
  };

  const handleChallengeTypeSelect = (type: 'mid' | 'final') => {
    setChallengeType(type);
    setChallengeMode(type === 'mid' ? 'mid-global' : 'final-global');
    
    // For demo, we'll use random questions. In a real app, you'd fetch specific mid/final questions
    const allQuestions = getRandomQuestions(selectedSubject, type === 'mid' ? 15 : 30);
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
      <div className="min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-20 animate-pulse"
                style={{
                  width: Math.random() * 300 + 50,
                  height: Math.random() * 300 + 50,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(99, 102, 241, 0.5)' : i % 3 === 1 ? 'rgba(139, 92, 246, 0.5)' : 'rgba(59, 130, 246, 0.5)'})`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <button
            onClick={() => setStep('subject')}
            className="mb-6 flex items-center text-blue-300 hover:text-white transition-colors backdrop-blur-sm bg-slate-800/30 px-4 py-2 rounded-full"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Subject Selection
          </button>

          <div className="bg-slate-800/70 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-slate-700/30">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Select Challenge Type</h2>
              <p className="text-slate-300 mb-8">Test your knowledge against players worldwide</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="p-6 bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-xl border-2 border-blue-600/30 hover:border-blue-400 hover:scale-105 cursor-pointer transition-all backdrop-blur-sm"
                  onClick={() => handleChallengeTypeSelect('mid')}
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg className="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Mid-Term Challenge</h3>
                  <p className="text-slate-300 mb-4">15 questions, compete with global users</p>
                  <div className="inline-flex items-center bg-blue-500/20 px-3 py-1 rounded-full text-sm text-blue-300">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Global Competition
                  </div>
                </div>

                <div 
                  className="p-6 bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl border-2 border-purple-600/30 hover:border-purple-400 hover:scale-105 cursor-pointer transition-all backdrop-blur-sm"
                  onClick={() => handleChallengeTypeSelect('final')}
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="h-8 w-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Final Exam Challenge</h3>
                  <p className="text-slate-300 mb-4">30 comprehensive questions, global ranking</p>
                  <div className="inline-flex items-center bg-purple-500/20 px-3 py-1 rounded-full text-sm text-purple-300">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Global Ranking
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
                <h4 className="text-lg font-medium text-white mb-2">Current Global Stats</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">2,458</div>
                    <div className="text-sm text-slate-400">Active Players</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">78%</div>
                    <div className="text-sm text-slate-400">Avg. Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">15</div>
                    <div className="text-sm text-slate-400">Live Challenges</div>
                  </div>
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