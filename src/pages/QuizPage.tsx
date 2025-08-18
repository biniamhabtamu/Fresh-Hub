import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { QuestionCard } from "../components/QuestionCard";
import { Timer } from "../components/Timer";
import { ProgressBar } from "../components/ProgressBar";
import { Question } from "../types/question";
import { saveChallengeResult } from "../firebase/services";
import { useAuth } from "../firebase/auth";

export const QuizPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { questions, challengeType, opponent } = location.state || {};
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(60);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = useCallback(
    (selectedIndex: number) => {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[currentQuestionIndex] = selectedIndex;
      setSelectedAnswers(newSelectedAnswers);

      if (selectedIndex === currentQuestion.correctIndex) {
        setScore(prev => prev + 1);
      }

      // For self challenge, show result immediately
      if (challengeType === "self") {
        setShowResult(true);
        setTimeout(() => {
          goToNextQuestion();
        }, 2000);
      } else {
        goToNextQuestion();
      }
    },
    [currentQuestionIndex, selectedAnswers, currentQuestion, challengeType]
  );

  const goToNextQuestion = () => {
    setShowResult(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimeLeft(60);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = async () => {
    setQuizCompleted(true);
    if (currentUser) {
      await saveChallengeResult({
        userId: currentUser.uid,
        challengeType,
        subject: questions[0]?.subject || "Mixed",
        score,
        totalQuestions: questions.length,
        opponentId: opponent?.id,
        date: new Date().toISOString()
      });
    }
    
    // For friend challenge, wait until both complete
    if (challengeType === "friend" && opponent) {
      // Listen for opponent's result in real-time
      // Then navigate to results
    } else {
      setTimeout(() => {
        navigate("/results", {
          state: {
            questions,
            selectedAnswers,
            score,
            totalQuestions: questions.length,
            challengeType,
            opponent
          }
        });
      }, challengeType === "self" ? 0 : 3000);
    }
  };

  useEffect(() => {
    if (timeLeft === 0 && !showResult && !quizCompleted) {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[currentQuestionIndex] = null; // No answer selected
      setSelectedAnswers(newSelectedAnswers);
      goToNextQuestion();
    }
  }, [timeLeft, showResult, quizCompleted]);

  if (!questions || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">No questions available</h2>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            {challengeType === "self" ? "Challenge Yourself" : 
             challengeType === "friend" ? "Challenge with Friend" : "Challenge"}
          </h2>
          <div className="text-lg font-semibold">
            Score: {score}/{questions.length}
          </div>
        </div>

        <ProgressBar
          current={currentQuestionIndex + 1}
          total={questions.length}
        />

        <div className="mb-6">
          <Timer
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            key={currentQuestionIndex}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswers[currentQuestionIndex]}
              showResult={showResult}
              onAnswer={handleAnswer}
            />
          </motion.div>
        </AnimatePresence>

        {quizCompleted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 p-4 bg-green-100 rounded-lg text-center"
          >
            <h3 className="text-lg font-semibold text-green-800">
              Quiz Completed!
            </h3>
            <p className="text-green-700">
              {challengeType === "friend"
                ? "Waiting for opponent to finish..."
                : "Calculating results..."}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};