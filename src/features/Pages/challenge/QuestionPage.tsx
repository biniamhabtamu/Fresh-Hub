// src/features/challenge/QuestionPage.tsx
import { useEffect, useState } from 'react';
import { Question } from '../../data/ChallengeExamCollection';
import { useChallenge } from '../../../hooks/useChallenge';

interface QuestionPageProps {
  questions: Question[];
  onComplete: (answers: Record<string, string>) => void;
  mode: 'self' | 'friend' | 'global';
  timePerQuestion?: number;
}

export default function QuestionPage({ questions, onComplete, mode, timePerQuestion = 60 }: QuestionPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const { addAnswer } = useChallenge();
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    setTimeLeft(timePerQuestion);
    setSelectedOption(null);
    setShowFeedback(false);
  }, [currentIndex, timePerQuestion]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleNextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleOptionSelect = (option: string) => {
    if (showFeedback) return;
    
    setSelectedOption(option);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: option
    };
    setAnswers(newAnswers);
    addAnswer(currentQuestion.id, option, correct);

    if (mode === 'self') {
      setTimeout(() => {
        handleNextQuestion();
      }, 1500);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(answers);
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-6 bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Timer */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-600">
            Question {currentIndex + 1} of {questions.length}
          </div>
          <div className={`text-lg font-semibold ${timeLeft <= 10 ? 'text-red-500' : 'text-blue-600'}`}>
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">{currentQuestion.question}</h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                let optionStyle = "p-4 border rounded-lg transition-all duration-200";
                
                if (showFeedback) {
                  if (option === currentQuestion.correctAnswer) {
                    optionStyle += " bg-green-100 border-green-500";
                  } else if (option === selectedOption && !isCorrect) {
                    optionStyle += " bg-red-100 border-red-500";
                  } else {
                    optionStyle += " border-gray-200";
                  }
                } else {
                  optionStyle += selectedOption === option 
                    ? " border-blue-500 bg-blue-50" 
                    : " border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer";
                }

                return (
                  <div
                    key={idx}
                    className={optionStyle}
                    onClick={() => !showFeedback && handleOptionSelect(option)}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {mode !== 'self' && showFeedback && (
          <button
            onClick={handleNextQuestion}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}

        {showFeedback && currentQuestion.explanation && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-2">Explanation</h3>
            <p className="text-yellow-700">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}