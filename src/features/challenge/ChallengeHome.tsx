// src/features/challenge/ChallengeHome.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChallengeSelf from './ChallengeSelf';
import ChallengeFriend from './ChallengeFriend';
import ChallengeGlobal from './ChallengeGlobal';

type ChallengeMode = 'self' | 'friend' | 'global' | null;

export default function ChallengeHome() {
  const [mode, setMode] = useState<ChallengeMode>(null);
  const navigate = useNavigate();

  const handleModeSelect = (selectedMode: ChallengeMode) => {
    setMode(selectedMode);
  };

  if (mode === 'self') return <ChallengeSelf onBack={() => setMode(null)} />;
  if (mode === 'friend') return <ChallengeFriend onBack={() => setMode(null)} />;
  if (mode === 'global') return <ChallengeGlobal onBack={() => setMode(null)} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Challenge Yourself</h1>
          <p className="text-xl text-gray-600">
            Test your knowledge, compete with friends, or join global competitions!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Challenge Self Card */}
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            onClick={() => handleModeSelect('self')}
          >
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4 mx-auto">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">Challenge Yourself</h3>
              <p className="text-gray-500 text-center">
                Test your knowledge at your own pace with customizable settings.
              </p>
            </div>
          </div>

          {/* Challenge Friend Card */}
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            onClick={() => handleModeSelect('friend')}
          >
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-4 mx-auto">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">Challenge a Friend</h3>
              <p className="text-gray-500 text-center">
                Invite a friend to compete head-to-head in real-time.
              </p>
            </div>
          </div>

          {/* Global Challenge Card */}
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            onClick={() => handleModeSelect('global')}
          >
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4 mx-auto">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">Global Challenge</h3>
              <p className="text-gray-500 text-center">
                Compete with users worldwide in mid-term or final exams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}