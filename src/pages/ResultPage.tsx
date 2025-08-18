import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  
  const { score, totalQuestions, questions, selectedOptions, challengeType } = location.state || {};
  const [rank, setRank] = useState<number | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  useEffect(() => {
    if (!location.state) {
      navigate('/');
      return;
    }

    const fetchRank = async () => {
      if (!auth.currentUser) return;
      
      const resultsRef = collection(db, 'challengeResults');
      const q = query(
        resultsRef,
        where('challengeType', '==', challengeType),
        orderBy('score', 'desc')
      );
      
      const snapshot = await getDocs(q);
      const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      const userIndex = results.findIndex(result => result.userId === auth.currentUser?.uid);
      if (userIndex !== -1) {
        setRank(userIndex + 1);
      }
      
      setLeaderboard(results.slice(0, 10));
    };

    fetchRank();

    const timer = setTimeout(() => {
      setShowAnswers(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [location.state, navigate, auth.currentUser, challengeType]);

  if (!location.state) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Challenge Results</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Your Score</h2>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              {score} / {totalQuestions}
            </div>
            <div className="text-lg">
              {score === totalQuestions ? 'Perfect! 🎉' : score >= totalQuestions * 0.8 ? 'Great job! 👍' : 'Keep practicing! 💪'}
            </div>
          </div>
        </div>

        {showAnswers && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Question Review</h2>
            <div className="space-y-4">
              {questions.map((question: any, index: number) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="font-medium mb-2">{question.question}</h3>
                  <div className="space-y-2">
                    {question.options.map((option: string, optIndex: number) => (
                      <div 
                        key={optIndex}
                        className={`p-2 rounded ${
                          option === question.correctAnswer 
                            ? 'bg-green-100' 
                            : selectedOptions[index] === option 
                              ? 'bg-red-100' 
                              : 'bg-gray-100'
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {rank && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Your Rank</h2>
            <div className="text-center text-2xl font-bold">
              #{rank}
            </div>
          </div>
        )}

        {leaderboard.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
            <div className="space-y-2">
              {leaderboard.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`flex justify-between p-2 rounded ${
                    item.userId === auth.currentUser?.uid ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  <span>#{index + 1} {item.userId === auth.currentUser?.uid ? 'You' : `User ${index + 1}`}</span>
                  <span>{item.score} points</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;