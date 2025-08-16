import { Subject, subjects } from './subjects';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export const challengeQuestions: Record<Subject, Question[]> = {
  Logic: [
    {
      id: 'logic-1',
      question: 'If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?',
      options: ['True', 'False', 'Sometimes', 'Cannot be determined'],
      correctAnswer: 'True',
      explanation: 'This follows the basic logical principle of syllogism: If A is B and B is C, then A is C.'
    },
    // Add 5 more logic questions...
  ],
  Psychology: [
    {
      id: 'psych-1',
      question: 'Which psychological perspective emphasizes unconscious motives and conflicts?',
      options: ['Behavioral', 'Humanistic', 'Psychoanalytic', 'Cognitive'],
      correctAnswer: 'Psychoanalytic',
      explanation: 'The psychoanalytic perspective, developed by Freud, focuses on unconscious drives.'
    },
    // Add 5 more psychology questions...
  ],
  // Add questions for other subjects...
};

export const getRandomQuestions = (subject: Subject, count: number): Question[] => {
  const questions = challengeQuestions[subject];
  if (!questions || questions.length === 0) return [];
  
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};