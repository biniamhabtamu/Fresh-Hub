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
  
// ==================== LOGIC CHAPTER 1 QUESTIONS (30) ====================
{
  id: 'log-2013-1-1',
  question: 'If all cats are mammals and all mammals are animals, then all cats are?',
  options: ['Animals', 'Plants', 'Minerals', 'None of the above'],
  correctAnswer: 0,
  explanation: 'This is a classic syllogism.',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2013-1-2',
  question: 'Which of these is a valid logical operator?',
  options: ['AND', 'OR', 'NOT', 'All of the above'],
  correctAnswer: 3,
  explanation: 'AND, OR, and NOT are all valid logical operators.',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2013-1-3',
  question: 'What is the negation of "All birds can fly"?',
  options: [
    'No birds can fly',
    'Some birds cannot fly',
    'All birds cannot fly',
    'Some birds can fly'
  ],
  correctAnswer: 1,
  explanation: 'The negation of "all X are Y" is "some X are not Y".',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2014-1-1',
  question: 'If P implies Q, and Q is false, then:',
  options: [
    'P must be false',
    'P must be true',
    'P can be either true or false',
    'None of the above'
  ],
  correctAnswer: 0,
  explanation: 'This is the contrapositive (¬Q → ¬P).',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2014-1-2',
  question: 'Which of these represents "P and Q"?',
  options: ['P ∨ Q', 'P ∧ Q', 'P → Q', '¬P'],
  correctAnswer: 1,
  explanation: '∧ is the logical AND operator.',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2014-1-3',
  question: 'What is the converse of "If it\'s a dog, then it\'s a mammal"?',
  options: [
    'If it\'s a mammal, then it\'s a dog',
    'If it\'s not a dog, then it\'s not a mammal',
    'It\'s a dog if and only if it\'s a mammal',
    'None of the above'
  ],
  correctAnswer: 0,
  explanation: 'Converse swaps the hypothesis and conclusion.',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2015-1-1',
  question: 'Which is a tautology?',
  options: [
    'P ∨ ¬P',
    'P ∧ ¬P',
    'P → ¬P',
    'P ∧ P'
  ],
  correctAnswer: 0,
  explanation: 'A statement that is always true (law of excluded middle).',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2015-1-2',
  question: '"No reptiles are mammals" is an example of:',
  options: [
    'Universal negative',
    'Universal affirmative',
    'Particular affirmative',
    'Particular negative'
  ],
  correctAnswer: 0,
  explanation: '"No X are Y" is a universal negative.',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2015-1-3',
  question: 'If "Some A are B" is true, which must be false?',
  options: [
    'No A are B',
    'All A are B',
    'Some A are not B',
    'None must be false'
  ],
  correctAnswer: 0,
  explanation: '"Some A are B" contradicts "No A are B".',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2016-1-1',
  question: 'Which is equivalent to ¬(P ∧ Q)?',
  options: [
    '¬P ∧ ¬Q',
    '¬P ∨ ¬Q',
    'P ∨ Q',
    '¬P → Q'
  ],
  correctAnswer: 1,
  explanation: 'This is De Morgan\'s Law.',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2016-1-2',
  question: 'A syllogism has how many parts?',
  options: ['2', '3', '4', '5'],
  correctAnswer: 1,
  explanation: 'Major premise, minor premise, and conclusion.',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2016-1-3',
  question: '"All philosophers are thinkers. Socrates is a philosopher. Therefore, Socrates is a thinker." This is:',
  options: [
    'Valid and sound',
    'Valid but unsound',
    'Invalid',
    'None of the above'
  ],
  correctAnswer: 0,
  explanation: 'The argument is logically valid and the premises are true.',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2017-1-1',
  question: 'Which quantifier means "there exists"?',
  options: ['∀', '∃', '∈', '∴'],
  correctAnswer: 1,
  explanation: '∃ is the existential quantifier.',
  subject: 'logic',
  year: 2017,
  chapter: 1
},
{
  id: 'log-2017-1-2',
  question: 'In "If P then Q", Q is called the:',
  options: [
    'Antecedent',
    'Consequent',
    'Contrapositive',
    'Predicate'
  ],
  correctAnswer: 1,
  explanation: 'The "then" part is the consequent.',
  subject: 'logic',
  year: 2017,
  chapter: 1
},
{
  id: 'log-2017-1-3',
  question: 'A statement that is always false is called a:',
  options: [
    'Tautology',
    'Contradiction',
    'Contingency',
    'Implication'
  ],
  correctAnswer: 1,
  explanation: 'A contradiction is always false.',
  subject: 'logic',
  year: 2017,
  chapter: 1
},
{
  id: 'log-2013-1-4',
  question: 'Which logical fallacy assumes what it\'s trying to prove?',
  options: [
    'Straw man',
    'Circular reasoning',
    'False dilemma',
    'Ad hominem'
  ],
  correctAnswer: 1,
  explanation: 'Circular reasoning uses its conclusion as a premise.',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2014-1-4',
  question: 'The statement "P ∨ Q" is false when:',
  options: [
    'Both P and Q are false',
    'Both P and Q are true',
    'P is true and Q is false',
    'P is false and Q is true'
  ],
  correctAnswer: 0,
  explanation: 'OR (∨) is only false when both operands are false.',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2015-1-4',
  question: 'What is the inverse of "If it\'s sunny, then I\'ll go outside"?',
  options: [
    'If it\'s not sunny, then I won\'t go outside',
    'If I go outside, then it\'s sunny',
    'If I don\'t go outside, then it\'s not sunny',
    'I\'ll go outside if and only if it\'s sunny'
  ],
  correctAnswer: 0,
  explanation: 'Inverse negates both parts without swapping them.',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2016-1-4',
  question: 'Which is NOT a type of categorical proposition?',
  options: [
    'Universal affirmative',
    'Universal negative',
    'Particular affirmative',
    'Hypothetical conditional'
  ],
  correctAnswer: 3,
  explanation: 'The first three are standard categorical propositions.',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2017-1-4',
  question: 'In predicate logic, what does ∀x(P(x) → Q(x)) mean?',
  options: [
    'All P are Q',
    'Some P are Q',
    'No P are Q',
    'Some P are not Q'
  ],
  correctAnswer: 0,
  explanation: 'Universal quantifier with implication means "all P are Q".',
  subject: 'logic',
  year: 2017,
  chapter: 1
},
{
  id: 'log-2013-1-5',
  question: 'Which is logically equivalent to "Unless P, Q"?',
  options: [
    'P ∨ Q',
    '¬P → Q',
    'Q → P',
    'P ∧ Q'
  ],
  correctAnswer: 1,
  explanation: '"Unless P, Q" means "if not P, then Q".',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2014-1-5',
  question: 'The principle that P ∧ Q ≡ Q ∧ P demonstrates:',
  options: [
    'Associativity',
    'Commutativity',
    'Distributivity',
    'Idempotence'
  ],
  correctAnswer: 1,
  explanation: 'Commutativity means order doesn\'t matter for the operation.',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2015-1-5',
  question: 'Which rule allows deriving Q from P and P → Q?',
  options: [
    'Modus Ponens',
    'Modus Tollens',
    'Hypothetical Syllogism',
    'Disjunctive Syllogism'
  ],
  correctAnswer: 0,
  explanation: 'Modus Ponens: from P and P→Q, infer Q.',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2016-1-5',
  question: 'What is the symbolic form of "Neither P nor Q"?',
  options: [
    '¬P ∧ ¬Q',
    '¬P ∨ ¬Q',
    'P ∧ Q',
    'P ∨ Q'
  ],
  correctAnswer: 0,
  explanation: '"Neither P nor Q" means "not P and not Q".',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2017-1-5',
  question: 'Which is true about the statement "P → Q"?',
  options: [
    'It\'s equivalent to its converse',
    'It\'s equivalent to its contrapositive',
    'It\'s equivalent to its inverse',
    'None of the above'
  ],
  correctAnswer: 1,
  explanation: 'A conditional is equivalent to its contrapositive.',
  subject: 'logic',
  year: 2017,
  chapter: 1
},
{
  id: 'log-2013-1-6',
  question: 'What type of reasoning goes from general to specific?',
  options: [
    'Inductive',
    'Deductive',
    'Abductive',
    'Reductive'
  ],
  correctAnswer: 1,
  explanation: 'Deductive reasoning applies general rules to specific cases.',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2014-1-6',
  question: 'Which symbol represents logical equivalence?',
  options: ['→', '≡', '∴', '⊢'],
  correctAnswer: 1,
  explanation: '≡ means "is logically equivalent to".',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2015-1-6',
  question: 'The statement P ∧ ¬P is always:',
  options: [
    'True',
    'False',
    'Contingent',
    'Undefined'
  ],
  correctAnswer: 1,
  explanation: 'A statement and its negation cannot both be true.',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2016-1-6',
  question: 'Which is NOT a valid inference rule?',
  options: [
    'From P → Q and Q, infer P',
    'From P ∨ Q and ¬P, infer Q',
    'From P → Q and ¬Q, infer ¬P',
    'From P and Q, infer P ∧ Q'
  ],
  correctAnswer: 0,
  explanation: 'This would be affirming the consequent, a logical fallacy.',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2017-1-6',
  question: 'What is the main connective in (P ∧ Q) → (R ∨ S)?',
  options: [
    '∧',
    '∨',
    '→',
    'None of the above'
  ],
  correctAnswer: 2,
  explanation: 'The → is the last operator to be applied.',
  subject: 'logic',
  year: 2017,
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