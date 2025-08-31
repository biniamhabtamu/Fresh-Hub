import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { questions as allQuestions, Question } from '../../data/questionChallenge';
import BottomBar from '../../../components/Layout/BottomBar';
import Header from '../../../components/Layout/Header';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const QuestionPage: React.FC = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const subject = query.get('subject');
  const term = query.get('term');
  const type = query.get('type');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const filteredQuestions = allQuestions.filter(
    (q) =>
      q.subject === subject &&
      q['question-term'] === term &&
      q['question-type'] === type
  );

  useEffect(() => {
    if (showResult || filteredQuestions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNext();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, showResult, filteredQuestions.length]);

  const handleAnswerSelect = (index: number) => {
    if (userAnswer === null) {
      setUserAnswer(index);
      if (index === filteredQuestions[currentIndex].correctAnswer) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    setUserAnswer(null);
    if (currentIndex + 1 < filteredQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setTimeLeft(60);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setUserAnswer(null);
      setTimeLeft(60);
    }
  };

  if (filteredQuestions.length === 0) {
    return (
      <div className="relative min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center p-4 pt-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-xl max-w-sm mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2">No Questions Available</h1>
            <p className="text-gray-600 mb-6">
              There are no questions for this chapter yet. We will add them soon.
            </p>
            <button
              onClick={() => navigate('/challenge/questionselection')}
              className="w-full bg-purple-600 text-white p-3 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
            >
              Back to Selection
            </button>
          </div>
        </div>
        <BottomBar />
      </div>
    );
  }

  const currentQuestion: Question = filteredQuestions[currentIndex];

  if (showResult) {
    return (
      <div className="relative min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center p-4 pt-16">
          <div className="p-6 md:p-10 max-w-sm mx-auto text-center bg-white rounded-2xl shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-purple-700 animate-pulse">Quiz Completed! 🎉</h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-700">
              Your Score: <span className="font-bold text-green-600">{score}</span> / <span className="font-bold text-purple-600">{filteredQuestions.length}</span>
            </p>
            <button
              onClick={() => navigate('/challenge/questionselection')}
              className="w-full bg-purple-600 text-white p-3 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105 shadow-lg"
            >
              Back to Selection
            </button>
          </div>
        </div>
        <BottomBar />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4 sm:p-6 pt-20 pb-24">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-2xl border-t-8 border-purple-500 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="text-base md:text-lg font-bold text-gray-600 mb-2 md:mb-0">
              Question <span className="text-purple-600">{currentIndex + 1}</span> of <span className="text-purple-600">{filteredQuestions.length}</span>
            </div>
            <div className="text-xl md:text-3xl font-extrabold text-purple-600 flex items-center gap-2 transition-all duration-500 transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="tabular-nums">{timeLeft}s</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-inner border-2 border-gray-100 mb-6">
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 leading-relaxed">{currentQuestion.question}</h2>
          </div>

          <div className="flex flex-col space-y-4 mb-6">
            {currentQuestion.options.map((opt, index) => {
              let bgColor = "bg-gray-50 hover:bg-purple-50";
              let borderColor = "border-gray-200";
              let ringColor = "";

              if (userAnswer !== null) {
                if (index === currentQuestion.correctAnswer) {
                  bgColor = "bg-green-100";
                  borderColor = "border-green-500";
                  ringColor = "ring-2 ring-green-500";
                } else if (index === userAnswer) {
                  bgColor = "bg-red-100";
                  borderColor = "border-red-500";
                  ringColor = "ring-2 ring-red-500";
                }
              }

              return (
                <button
                  key={index}
                  className={`w-full p-4 rounded-xl border-2 ${bgColor} ${borderColor} font-medium text-left transition-all duration-300 ease-in-out transform hover:scale-[1.01] ${userAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'} ${ringColor}`}
                  disabled={userAnswer !== null}
                  onClick={() => handleAnswerSelect(index)}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {userAnswer !== null && (
            <div className="p-4 bg-gray-100 rounded-xl text-gray-700 text-sm md:text-base leading-relaxed border border-gray-200 animate-slide-in-up shadow-md">
              <span className="font-bold text-gray-900">Explanation: </span>{currentQuestion.explanation}
            </div>
          )}

          <div className="mt-8 flex justify-between space-x-4">
            <button
              onClick={handleBack}
              disabled={currentIndex === 0}
              className={`flex-1 p-3 rounded-xl font-bold text-lg transition-colors duration-300 transform hover:scale-105 ${currentIndex === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-500 text-white hover:bg-gray-600 shadow-md'}`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </span>
            </button>
            <button
              onClick={handleNext}
              disabled={userAnswer === null}
              className={`flex-1 p-3 rounded-xl font-bold text-lg transition-colors duration-300 transform hover:scale-105 ${userAnswer === null ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md'}`}
            >
              <span className="flex items-center justify-center gap-2">
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default QuestionPage;