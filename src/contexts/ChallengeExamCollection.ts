import { Question, Subject } from '../types';

const questions: Question[] = [
  // Logic
  {
    id: 'logic-1',
    subject: 'Logic',
    question: 'If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?',
    options: ['True', 'False', 'Sometimes', 'Cannot be determined'],
    correctAnswer: 'True',
    difficulty: 'easy'
  },
  {
    id: 'logic-2',
    subject: 'Logic',
    question: 'What is the next number in the sequence: 2, 4, 8, 16, ...?',
    options: ['24', '32', '64', '128'],
    correctAnswer: '32',
    difficulty: 'easy'
  },
  // Add 4 more logic questions...

  // Psychology
  {
    id: 'psych-1',
    subject: 'Psychology',
    question: 'Which psychologist is known for his work on classical conditioning?',
    options: ['Sigmund Freud', 'Ivan Pavlov', 'Carl Jung', 'B.F. Skinner'],
    correctAnswer: 'Ivan Pavlov',
    difficulty: 'medium'
  },
  // Add 5 more psychology questions...

  // Continue with other subjects...
  // Geography, Anthropology, History, etc.
  // Each subject should have 6 questions
];

export const getQuestionsBySubject = (subject: Subject, count: number): Question[] => {
  const subjectQuestions = questions.filter(q => q.subject === subject);
  
  // Shuffle array and get first 'count' elements
  const shuffled = [...subjectQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getAllQuestions = (): Question[] => {
  return [...questions];
};

export const getSubjects = (): Subject[] => {
  return Array.from(new Set(questions.map(q => q.subject))) as Subject[];
};