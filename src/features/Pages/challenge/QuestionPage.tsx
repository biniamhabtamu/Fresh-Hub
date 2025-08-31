import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions as allQuestions, Question } from "../../data/questionChallenge";
import { ArrowLeftCircle, ArrowRightCircle, RotateCcw, Home, BarChart3, Volume2, VolumeX } from "lucide-react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const QuestionPage: React.FC = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const subject = query.get("subject");
  const term = query.get("term");
  const type = query.get("type");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [progress, setProgress] = useState(0);

  const filteredQuestions = allQuestions.filter(
    (q) =>
      q.subject === subject &&
      q["question-term"] === term &&
      q["question-type"] === type
  );

  useEffect(() => {
    if (showResult || filteredQuestions.length === 0 || isPaused) return;

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
  }, [currentIndex, showResult, filteredQuestions.length, isPaused]);

  useEffect(() => {
    // Calculate progress
    setProgress(((currentIndex + 1) / filteredQuestions.length) * 100);
  }, [currentIndex, filteredQuestions.length]);

  const playSound = (correct: boolean) => {
    if (!isSoundOn) return;
    
    // In a real app, you would play actual sound files here
    console.log(correct ? "Playing correct sound" : "Playing incorrect sound");
  };

  const handleAnswerSelect = (index: number) => {
    if (userAnswer !== null) return;
    
    setUserAnswer(index);
    setAnsweredQuestions([...answeredQuestions, currentIndex]);
    
    const isCorrect = index === filteredQuestions[currentIndex].correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      playSound(true);
    } else {
      playSound(false);
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
      setUserAnswer(answeredQuestions.includes(currentIndex - 1) ? userAnswer : null);
      setTimeLeft(60);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setUserAnswer(null);
    setScore(0);
    setShowResult(false);
    setTimeLeft(60);
    setAnsweredQuestions([]);
  };

  if (filteredQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      
        <div className="text-center p-6 bg-white rounded-2xl shadow-xl max-w-sm mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            No Questions Available
          </h1>
          <p className="text-gray-600 mb-6">
            There are no questions for this chapter yet. We will add them soon.
          </p>
          <button
            onClick={() => navigate("/challenge/questionselection")}
            className="w-full bg-purple-600 text-white p-3 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
          >
            Back to Selection
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion: Question = filteredQuestions[currentIndex];

  if (showResult) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="p-6 md:p-10 max-w-sm mx-auto text-center bg-white rounded-2xl shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-purple-700 animate-pulse">
            Quiz Completed! 🎉
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div 
              className="bg-purple-600 h-4 rounded-full transition-all duration-500" 
              style={{ width: `${(score / filteredQuestions.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-xl md:text-2xl mb-2 text-gray-700">
            Your Score:{" "}
            <span className="font-bold text-green-600">{score}</span> /{" "}
            <span className="font-bold text-purple-600">
              {filteredQuestions.length}
            </span>
          </p>
          <p className="text-lg mb-6 text-gray-600">
            {score === filteredQuestions.length ? "Perfect score! Amazing! 🎯" : 
             score >= filteredQuestions.length * 0.7 ? "Great job! 👍" : 
             "Keep practicing! 💪"}
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={restartQuiz}
              className="w-full bg-gray-700 text-white p-3 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} /> Restart Quiz
            </button>
            <button
              onClick={() => navigate("/challenge/questionselection")}
              className="w-full bg-purple-600 text-white p-3 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Home size={20} /> Back to Selection
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center p-4 sm:p-6">
      {/* Header with progress and controls */}
      <div className="w-full max-w-2xl mb-4 flex justify-between items-center">
        <button 
          onClick={() => navigate("/challenge/questionselection")}
          className="p-2 bg-white rounded-full shadow-md"
        >
          <Home size={24} className="text-purple-600" />
        </button>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsSoundOn(!isSoundOn)}
            className="p-2 bg-white rounded-full shadow-md"
          >
            {isSoundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className="px-3 py-1 bg-white rounded-full shadow-md text-sm font-medium"
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-2xl border-t-8 border-purple-500">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Question Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-base md:text-lg font-bold text-gray-600">
            Question{" "}
            <span className="text-purple-600">{currentIndex + 1}</span> of{" "}
            <span className="text-purple-600">{filteredQuestions.length}</span>
          </div>
          <div className={`text-xl md:text-3xl font-extrabold flex items-center gap-2 ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-purple-600'}`}>
            ⏱ <span className="tabular-nums">{timeLeft}s</span>
          </div>
        </div>

        {/* Question Text */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-inner border-2 border-gray-100 mb-6">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800 leading-relaxed">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="flex flex-col space-y-4 mb-6">
          {currentQuestion.options.map((opt, index) => {
            let bgColor = "bg-gray-50 hover:bg-purple-50";
            let borderColor = "border-gray-200";

            if (userAnswer !== null) {
              if (index === currentQuestion.correctAnswer) {
                bgColor = "bg-green-100";
                borderColor = "border-green-500";
              } else if (index === userAnswer && index !== currentQuestion.correctAnswer) {
                bgColor = "bg-red-100";
                borderColor = "border-red-500";
              }
            }

            return (
              <button
                key={index}
                className={`w-full p-4 rounded-xl border-2 ${bgColor} ${borderColor} font-medium text-left transition-all duration-300`}
                disabled={userAnswer !== null}
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-start">
                  <span className="font-bold mr-3 text-purple-600">{String.fromCharCode(65 + index)}.</span>
                  <span>{opt}</span>
                </div>
              </button>
            );
          })}
        </div>

        {userAnswer !== null && (
          <div className="p-4 bg-gray-100 rounded-xl text-gray-700 text-sm md:text-base leading-relaxed border border-gray-200 shadow-md mb-6">
            <span className="font-bold text-gray-900">Explanation: </span>
            {currentQuestion.explanation}
          </div>
        )}
      </div>

      {/* Fixed BottomBar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg p-4 flex justify-between items-center max-w-2xl mx-auto rounded-t-2xl">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className={`flex-1 mr-2 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
            currentIndex === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:scale-105 hover:shadow-md"
          }`}
        >
          <ArrowLeftCircle size={22} /> Back
        </button>

        <div className="flex flex-col items-center mx-2">
          <div className="text-xs text-gray-500">Score</div>
          <div className="font-bold text-purple-600">{score}/{filteredQuestions.length}</div>
        </div>

        <button
          onClick={handleNext}
          disabled={userAnswer === null}
          className={`flex-1 ml-2 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
            userAnswer === null
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:scale-105 hover:shadow-md"
          }`}
        >
          {currentIndex + 1 === filteredQuestions.length ? "Finish" : "Next"} <ArrowRightCircle size={22} />
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;