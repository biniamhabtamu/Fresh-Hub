import { Question } from '../types';

export const sampleQuestions: Question[] = [
  {
    id: '1',
    question: 'What is the capital of Ethiopia?',
    options: ['Addis Ababa', 'Bahir Dar', 'Gondar', 'Mekelle'],
    correctAnswer: 0,
    explanation: 'Addis Ababa is the capital and largest city of Ethiopia.'
  },
  {
    id: '2',
    question: 'Which of the following is a renewable energy source?',
    options: ['Coal', 'Oil', 'Solar', 'Natural Gas'],
    correctAnswer: 2,
    explanation: 'Solar energy is a renewable energy source that comes from the sun.'
  },
  {
    id: '3',
    question: 'What is 15 × 8?',
    options: ['120', '125', '130', '115'],
    correctAnswer: 0,
    explanation: '15 × 8 = 120'
  },
  {
    id: '4',
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 1,
    explanation: 'William Shakespeare wrote the famous play "Romeo and Juliet".'
  },
  {
    id: '5',
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum".'
  }
];