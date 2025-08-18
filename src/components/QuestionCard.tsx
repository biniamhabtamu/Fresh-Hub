import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (selectedOption: string) => void;
  selectedOption: string | null;
  showResult: boolean;
}

export const QuestionCard = ({ 
  question, 
  onAnswer, 
  selectedOption, 
  showResult 
}: QuestionCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => {
          let bgColor = 'bg-gray-100 hover:bg-gray-200';
          if (showResult) {
            bgColor = option === question.correctAnswer 
              ? 'bg-green-200' 
              : selectedOption === option 
                ? 'bg-red-200' 
                : 'bg-gray-100';
          } else if (selectedOption === option) {
            bgColor = 'bg-blue-200';
          }

          return (
            <button
              key={index}
              className={`w-full text-left p-3 rounded-md transition-colors ${bgColor}`}
              onClick={() => onAnswer(option)}
              disabled={showResult}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};