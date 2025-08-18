import { useNavigate } from 'react-router-dom';
import ChallengeCard from '../../../components/ChallengeCard';

const ChallengeModeSelection = () => {
  const navigate = useNavigate();

  const modes = [
    {
      title: 'Quick Challenge',
      description: '10 questions, 1 minute each',
      onClick: () => navigate('/challenge/self?questions=10'),
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Custom Challenge',
      description: 'Set your own number of questions and time',
      onClick: () => navigate('/challenge/self/custom'),
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Challenge Yourself</h1>
        <div className="space-y-4">
          {modes.map((mode, index) => (
            <ChallengeCard
              key={index}
              title={mode.title}
              description={mode.description}
              onClick={mode.onClick}
              color={mode.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeModeSelection;