import { Question } from '../types';

// Structure your questions by subject, year, and chapter
// Use this format for easy organization:
// //subject-year-chapter-[question number]
// Example: //geography-2013-1-1 (Geography, 2013, Chapter 1, Question 1)

export const sampleQuestions: Question[] = [
  // ==================== GEOGRAPHY QUESTIONS ====================
  
  //geography-2013-1-1
  {
    id: 'geo-2013-1-1',
    question: 'What is the capital of Ethiopia?',
    options: ['Addis Ababa', 'Bahir Dar', 'Gondar', 'Mekelle'],
    correctAnswer: 0,
    explanation: 'Addis Ababa is the capital and largest city of Ethiopia.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  //geography-2013-1-2
  {
    id: 'geo-2013-1-2',
    question: 'Which of these is the longest river in Ethiopia?',
    options: ['Awash', 'Blue Nile', 'Omo', 'Wabe Shebelle'],
    correctAnswer: 1,
    explanation: 'The Blue Nile is the longest river in Ethiopia, originating from Lake Tana.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  //geography-2013-2-1
  {
    id: 'geo-2013-2-1',
    question: 'What is the highest mountain in Ethiopia?',
    options: ['Mount Batu', 'Mount Chilalo', 'Ras Dashen', 'Mount Abuna Yosef'],
    correctAnswer: 2,
    explanation: 'Ras Dashen is the highest mountain in Ethiopia at 4,550 meters above sea level.',
    subject: 'geography',
    year: 2013,
    chapter: 2
  },

  // ==================== MATH QUESTIONS ====================
  
  //math-2014-1-1
  {
    id: 'math-2014-1-1',
    question: 'What is 15 × 8?',
    options: ['120', '125', '130', '115'],
    correctAnswer: 0,
    explanation: '15 × 8 = 120',
    subject: 'math',
    year: 2014,
    chapter: 1
  },
  //math-2014-1-2
  {
    id: 'math-2014-1-2',
    question: 'What is the value of π (pi) rounded to two decimal places?',
    options: ['3.14', '3.16', '3.12', '3.18'],
    correctAnswer: 0,
    explanation: 'The value of π is approximately 3.14159, which rounds to 3.14 to two decimal places.',
    subject: 'math',
    year: 2014,
    chapter: 1
  },
  //math-2014-2-1
  {
    id: 'math-2014-2-1',
    question: 'If x + 5 = 12, what is the value of x?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: 'x + 5 = 12 → x = 12 - 5 → x = 7',
    subject: 'math',
    year: 2014,
    chapter: 2
  },

  // ==================== HISTORY QUESTIONS ====================
  
  //history-2015-1-1
  {
    id: 'history-2015-1-1',
    question: 'In which year did the Battle of Adwa occur?',
    options: ['1896', '1905', '1889', '1911'],
    correctAnswer: 0,
    explanation: 'The Battle of Adwa, where Ethiopia defeated Italy, occurred on March 1, 1896.',
    subject: 'history',
    year: 2015,
    chapter: 1
  },
  //history-2015-1-2
  {
    id: 'history-2015-1-2',
    question: 'Who was the emperor of Ethiopia during the Battle of Adwa?',
    options: ['Menelik II', 'Tewodros II', 'Yohannes IV', 'Haile Selassie'],
    correctAnswer: 0,
    explanation: 'Emperor Menelik II led Ethiopia during the Battle of Adwa.',
    subject: 'history',
    year: 2015,
    chapter: 1
  },

  // ==================== CHEMISTRY QUESTIONS ====================
  
  //chemistry-2016-1-1
  {
    id: 'chem-2016-1-1',
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum".',
    subject: 'chemistry',
    year: 2016,
    chapter: 1
  },
  //chemistry-2016-1-2
  {
    id: 'chem-2016-1-2',
    question: 'What is the pH value of pure water?',
    options: ['5', '7', '9', '11'],
    correctAnswer: 1,
    explanation: 'Pure water has a neutral pH of 7 at 25°C.',
    subject: 'chemistry',
    year: 2016,
    chapter: 1
  },

  // ==================== PHYSICS QUESTIONS ====================
  
  //physics-2017-1-1
  {
    id: 'phy-2017-1-1',
    question: 'What is the unit of electrical resistance?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    correctAnswer: 2,
    explanation: 'The ohm (Ω) is the unit of electrical resistance.',
    subject: 'physics',
    year: 2017,
    chapter: 1
  },
  //physics-2017-1-2
  {
    id: 'phy-2017-1-2',
    question: 'Which of these is NOT a fundamental force of nature?',
    options: ['Gravity', 'Electromagnetism', 'Strong Nuclear', 'Friction'],
    correctAnswer: 3,
    explanation: 'The four fundamental forces are gravity, electromagnetism, strong nuclear, and weak nuclear.',
    subject: 'physics',
    year: 2017,
    chapter: 1
  },

  // ==================== LOGIC QUESTIONS ====================
  
  //logic-2013-1-1
  {
    id: 'logic-2013-1-1',
    question: 'If all cats are mammals and all mammals are animals, then all cats are?',
    options: ['Animals', 'Plants', 'Minerals', 'None of the above'],
    correctAnswer: 0,
    explanation: 'This is a classic syllogism. If A is B and B is C, then A is C.',
    subject: 'logic',
    year: 2013,
    chapter: 1
  },
  //logic-2013-1-2
  {
    id: 'logic-2013-1-2',
    question: 'Which of these is a valid logical operator?',
    options: ['AND', 'OR', 'NOT', 'All of the above'],
    correctAnswer: 3,
    explanation: 'AND, OR, and NOT are all valid logical operators.',
    subject: 'logic',
    year: 2013,
    chapter: 1
  },

  // ==================== ENGLISH QUESTIONS ====================
  
  //english-2014-1-1
  {
    id: 'eng-2014-1-1',
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 1,
    explanation: 'William Shakespeare wrote the famous play "Romeo and Juliet".',
    subject: 'english',
    year: 2014,
    chapter: 1
  },
  //english-2014-1-2
  {
    id: 'eng-2014-1-2',
    question: 'Which of these is a noun?',
    options: ['Run', 'Beautiful', 'Quickly', 'Happiness'],
    correctAnswer: 3,
    explanation: 'Happiness is a noun representing a state of being.',
    subject: 'english',
    year: 2014,
    chapter: 1
  },

  // ==================== CIVIC QUESTIONS ====================
  
  //civic-2015-1-1
  {
    id: 'civic-2015-1-1',
    question: 'What is the minimum voting age in Ethiopia?',
    options: ['16', '18', '21', '25'],
    correctAnswer: 1,
    explanation: 'The minimum voting age in Ethiopia is 18 years.',
    subject: 'civic',
    year: 2015,
    chapter: 1
  },

  // ==================== PSYCHOLOGY QUESTIONS ====================
  
  //psychology-2016-1-1
  {
    id: 'psych-2016-1-1',
    question: 'Who is considered the father of modern psychology?',
    options: ['Sigmund Freud', 'Wilhelm Wundt', 'B.F. Skinner', 'Carl Rogers'],
    correctAnswer: 1,
    explanation: 'Wilhelm Wundt is often considered the father of modern psychology.',
    subject: 'psychology',
    year: 2016,
    chapter: 1
  },

  // ==================== C++ QUESTIONS ====================
  
  //cpp-2017-1-1
  {
    id: 'cpp-2017-1-1',
    question: 'Which operator is used for pointer dereferencing in C++?',
    options: ['*', '&', '->', '::'],
    correctAnswer: 0,
    explanation: 'The asterisk (*) is used for pointer dereferencing in C++.',
    subject: 'cpp',
    year: 2017,
    chapter: 1
  },

  // ==================== ECONOMICS QUESTIONS ====================
  
  //economics-2013-1-1
  {
    id: 'econ-2013-1-1',
    question: 'What does GDP stand for?',
    options: [
      'Gross Domestic Product',
      'General Domestic Price',
      'Government Development Plan',
      'Global Development Percentage'
    ],
    correctAnswer: 0,
    explanation: 'GDP stands for Gross Domestic Product.',
    subject: 'economics',
    year: 2013,
    chapter: 1
  },

  // ==================== SOCIOLOGY QUESTIONS ====================
  
  //sociology-2014-1-1
  {
    id: 'socio-2014-1-1',
    question: 'What is the study of human societies called?',
    options: ['Psychology', 'Anthropology', 'Sociology', 'Philosophy'],
    correctAnswer: 2,
    explanation: 'Sociology is the study of human societies.',
    subject: 'sociology',
    year: 2014,
    chapter: 1
  }
];

// To add more questions:
// 1. Choose a subject, year, and chapter
// 2. Use the format: //subject-year-chapter-[question number]
// 3. Add the question object with all required fields
// 4. Make sure the id follows the pattern: 'subjectShortened-year-chapter-questionNumber'
// Example for adding a new geography question for 2013, chapter 3:
// //geography-2013-3-1
// {
//   id: 'geo-2013-3-1',
//   question: 'Your question here?',
//   options: ['Option1', 'Option2', 'Option3', 'Option4'],
//   correctAnswer: 0, // index of correct answer
//   explanation: 'Explanation of the answer',
//   subject: 'geography',
//   year: 2013,
//   chapter: 3
// }