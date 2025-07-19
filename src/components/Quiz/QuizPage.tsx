import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { sampleQuestions } from '../../data/sampleQuestions';
import Header from '../Layout/Header';
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';

export default function QuizPage() {
  const { subjectId, year, chapter } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  // For demo purposes, we'll use sample questions
  // In a real app, you'd fetch questions based on subject, year, and chapter
  const questions = sampleQuestions;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setAnswers(new Array(questions.length).fill(-1));
  }, [questions.length]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    const correctAnswers = answers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    
    const percentage = (correctAnswers / questions.length) * 100;
    setScore(percentage);
    setQuizCompleted(true);

    // Save result to Firebase
    if (currentUser && subjectId && year && chapter) {
      try {
        const resultId = `${currentUser.id}_${subjectId}_${year}_${chapter}`;
        await setDoc(doc(db, 'results', resultId), {
          userId: currentUser.id,
          subject: subjectId,
          year: parseInt(year),
          chapter: parseInt(chapter),
          score: correctAnswers,
          totalQuestions: questions.length,
          percentage: percentage,
          completedAt: new Date(),
          timeElapsed: timeElapsed
        });
      } catch (error) {
        console.error('Error saving result:', error);
      }
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(-1));
    setTimeElapsed(0);
    setQuizCompleted(false);
    setScore(0);
  };

  const handleBackToChapters = () => {
    navigate(`/subject/${subjectId}/year/${year}`);
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="mb-6">
                <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
                <p className="text-gray-600">Great job on finishing the quiz</p>
              </div>

              {/* Score Display */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-2">Your Score</h3>
                <div className="text-4xl font-bold mb-2">{score.toFixed(1)}%</div>
                <p className="text-sm opacity-90">
                  {answers.filter((answer, index) => answer === questions[index].correctAnswer).length} out of {questions.length} correct
                </p>
              </div>

              {/* Performance Message */}
              <div className="mb-6">
                {score >= 80 ? (
                  <p className="text-green-600 font-medium">Excellent work! 🎉</p>
                ) : score >= 60 ? (
                  <p className="text-yellow-600 font-medium">Good job! Keep practicing! 👍</p>
                ) : (
                  <p className="text-red-600 font-medium">Keep studying and try again! 💪</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleRetakeQuiz}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Retake Quiz
                </button>
                <button
                  onClick={handleBackToChapters}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Back to Chapters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(`/subject/${subjectId}/year/${year}`)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Chapters</span>
        </button>

        <div className="max-w-4xl mx-auto">
          {/* Quiz Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Chapter {chapter} Quiz
                </h2>
                <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock size={20} />
                  <span>{formatTime(timeElapsed)}</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQ.question}
            </h3>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`
                    w-full text-left p-4 rounded-xl border-2 transition-all
                    ${answers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }
                  `}
                >
                  <span className="font-medium mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <div className="flex space-x-3">
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={answers[currentQuestion] === -1}
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={answers[currentQuestion] === -1}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              )}
            </div>
          </div>

          {/* Question Grid */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4">Question Navigator</h4>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`
                    w-10 h-10 rounded-lg font-medium text-sm transition-all
                    ${index === currentQuestion
                      ? 'bg-blue-600 text-white'
                      : answers[index] !== -1
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
                  `}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}