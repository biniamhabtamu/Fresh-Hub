// src/features/challenge/SubjectSelection.tsx
import { useState } from 'react';
import { Subject, subjects } from '../../data/subjects';
import { useChallenge } from '../../../hooks/useChallenge';

interface SubjectSelectionProps {
  onSubjectSelect: (subject: Subject) => void;
  mode: 'self' | 'friend' | 'global';
  onBack: () => void;
}

export default function SubjectSelection({ onSubjectSelect, mode, onBack }: SubjectSelectionProps) {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const { setChallengeSubject } = useChallenge();

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setChallengeSubject(subject);
    onSubjectSelect(subject);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Challenge Selection
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Select a Subject for {mode === 'self' ? 'Your Challenge' : mode === 'friend' ? 'Friend Challenge' : 'Global Challenge'}
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => handleSubjectSelect(subject)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${selectedSubject === subject 
                    ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md' 
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`}
                >
                  <span className="font-medium">{subject}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}