import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Timer } from '../components/Timer';
import { QuestionCard } from '../components/QuestionCard';
import { getQuestionsBySubject, Subject } from '../data/ChallengeExamCollection';
import { db } from '../firebase/config';
import { collection, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const ChallengeYourself = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const auth = getAuth();
  
  const [subject, setSubject] = useState<Subject | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timePerQuestion, setTimePerQuestion] = useState(60);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [isCustom, setIsCustom] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const questionsParam = searchParams.get('questions');
    if (questionsParam) {
      setTotalQuestions(parseInt(questionsParam));
      setIsCustom(false);
    } else {
      setIsCustom(true);
    }
  }, [searchParams]);

  const handleSubjectSelect = (selectedSubject: Subject) => {
    setSubject(selectedSubject);
    const questions = getQuestionsBySubject(selectedSubject, totalQuestions);
    setQuestions(questions);
    setIsLoading(false);
  };

  const handleAnswer = (option: string) => {
    setSelectedOption(option);
    setShowResult(true);
    
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
        setShowResult(false);
      } else {
        saveResults();
        navigate('/results', { 
          state: { 
            score, 
            totalQuestions: questions.length,
            questions,
            selectedOptions: [...selectedOptions, option],
            challengeType: 'self'
          } 
        });
      }
    }, 1500);
  };

  const handleTimeout = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      saveResults();
      navigate('/results', { 
        state: { 
          score, 
          totalQuestions: questions.length,
          questions,
          selectedOptions: [...selectedOptions, null],
          challengeType: 'self'
        } 
      });
    }
  };

  const saveResults = async () => {
    if (!auth.currentUser) return;
    
    const userRef = doc(db, 'users', auth.currentUser.uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      await updateDoc(userRef, {
        totalPoints: userSnap.data().totalPoints + score,
        challengesCompleted: userSnap.data().challengesCompleted + 1
      });
    } else {
      await setDoc(userRef, {
        userId: auth.currentUser.uid,
        wins: 0,
        losses: 0,
        totalPoints: score,
        challengesCompleted: 1
      });
    }
    
    await addDoc(collection(db, 'challengeResults'), {
      userId: auth.currentUser.uid,
      score,
      totalQuestions: questions.length,
      correctAnswers: score,
      subject,
      timestamp: new Date(),
      challengeType: 'self'
    });
  };

  if (!subject) {
    return <SubjectSelection onSelect={handleSubjectSelect} />;
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{subject} Challenge</h2>
          <div className="text-lg">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>

        <div className="mb-4">
          <Timer 
            initialTime={timePerQuestion} 
            onTimeout={handleTimeout} 
            isActive={!showResult} 
          />
        </div>

        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-blue-600 h-4 rounded-full" 
              style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <QuestionCard
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          selectedOption={selectedOption}
          showResult={showResult}
        />

        <div className="mt-4 text-lg font-semibold">
          Score: {score} / {questions.length}
        </div>
      </div>
    </div>
  );
};

export default ChallengeYourself;