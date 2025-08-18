// src/features/challenge/ResultsPage.tsx
import { useEffect, useState } from 'react';
import { Question } from '../../data/ChallengeExamCollection';
import { useChallenge } from '../../../hooks/useChallenge';
import { saveChallengeResult } from '../../../firebase/challenge';

interface ResultsPageProps {
  questions: Question[];
  answers: Record<string, string>;
  mode: 'self' | 'friend' | 'global';
  onRestart: () => void;
  onNewChallenge: () => void;
}

export default function ResultsPage({ 
  questions, 
  answers, 
  mode, 
  onRestart, 
  onNewChallenge 
}: ResultsPageProps) {
  const [score, setScore] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [rank, setRank] = useState<number | null>(null);
  const { challengeSubject, challengeMode, resetChallenge } = useChallenge();

  useEffect(() => {
    // Calculate score
    const correctAnswers = questions.filter(q => answers[q.id] === q.correctAnswer).length;
    setScore(correctAnswers);

    // Save results to Firebase
    if (challengeSubject && challengeMode) {
      saveChallengeResult({
        subject: challengeSubject,
        mode: challengeMode,
        score: correctAnswers,
        totalQuestions: questions.length,
        timestamp: new Date()
      }).then((result) => {
        if (result.rank) {
          setRank(result.rank);
        }
      });
    }
  }, [questions, answers, challengeSubject, challengeMode]);

  const handleRestart = () => {
    resetChallenge();
    onRestart();
  };

  const handleNewChallenge = () => {
    resetChallenge();
    onNewChallenge();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 text-center">
            <div className="flex justify-center mb-6">
              <div className={`h-24 w-24 rounded-full flex items-center justify-center 
                ${score >= questions.length / 2 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                <span className="text-3xl font-bold">{score}/{questions.length}</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {score >= questions.length / 2 ? 'Great Job!' : 'Keep Practicing!'}
            </h2>
            
            <p className="text-gray-600 mb-6">
              You scored {score} out of {questions.length} questions correctly.
            </p>

            {rank && (
              <div className="mb-6 p-3 bg-blue-50 rounded-lg inline-block">
                <span className="font-medium text-blue-700">Global Rank: #{rank}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button
                onClick={handleRestart}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={handleNewChallenge}
                className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium border border-gray-300 rounded-lg transition-colors"
              >
                New Challenge
              </button>
            </div>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center mx-auto"
            >
              {showDetails ? 'Hide Details' : 'Show Detailed Results'}
              <svg 
                className={`w-5 h-5 ml-2 transition-transform ${showDetails ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {showDetails && (
            <div className="border-t border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Question Details</h3>
              <div className="space-y-4">
                {questions.map((question, index) => {
                  const userAnswer = answers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={question.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-800">Question {index + 1}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">{question.question}</p>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium">Your answer:</span> {userAnswer || 'No answer'}
                        </div>
                        {!isCorrect && (
                          <div className="text-sm">
                            <span className="font-medium">Correct answer:</span> {question.correctAnswer}
                          </div>
                        )}
                        {question.explanation && (
                          <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
                            <span className="font-medium">Explanation:</span> {question.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}