import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { questions as allQuestions, Question } from '../../data/questionChallenge';

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

  const filteredQuestions = allQuestions.filter(
    (q) =>
      q.subject === subject &&
      q['question-term'] === term &&
      q['question-type'] === type
  );

  useEffect(() => {
    if (userAnswer !== null) {
      const timer = setTimeout(() => {
        if (userAnswer === filteredQuestions[currentIndex].correctAnswer) {
          setScore((prev) => prev + 1);
        }
        if (currentIndex + 1 < filteredQuestions.length) {
          setCurrentIndex(currentIndex + 1);
          setUserAnswer(null);
        } else {
          setShowResult(true);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [userAnswer]);

  if (filteredQuestions.length === 0) {
    return (
      <div className="p-4 max-w-md mx-auto text-center">
        <p>No questions found for your selection.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white p-2 rounded mt-4"
        >
          Back
        </button>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="p-4 max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
        <p className="text-lg mb-2">Your Score: {score} / {filteredQuestions.length}</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Back to Selection
        </button>
      </div>
    );
  }

  const currentQuestion: Question = filteredQuestions[currentIndex];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">{currentQuestion.question}</h2>

      <div className="flex flex-col space-y-2">
        {currentQuestion.options.map((opt, index) => {
          let bgColor = "bg-gray-100";
          if (userAnswer !== null) {
            if (index === currentQuestion.correctAnswer) bgColor = "bg-green-300";
            else if (index === userAnswer) bgColor = "bg-red-300";
          }

          return (
            <button
              key={index}
              className={`p-2 rounded border ${bgColor}`}
              disabled={userAnswer !== null}
              onClick={() => setUserAnswer(index)}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {userAnswer !== null && (
        <p className="mt-4 text-gray-700">{currentQuestion.explanation}</p>
      )}
    </div>
  );
};

export default QuestionPage;
