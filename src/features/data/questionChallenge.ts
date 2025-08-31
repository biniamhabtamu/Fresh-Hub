export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
  subject: string;
  'question-type': string;
  'question-term': string;
}

export const questions: Question[] = [
  {
    id: 'log-mid-simple-1',
    question: "The definition 'Demolish' means destroy is an example of:",
    options: [
      "A demonstrative definition",
      "A theoretical definition",
      "A definition by genus and difference",
      "A synonymous definition",
      "A precising definition"
    ],
    correctAnswer: 3,
    explanation: "This is a synonymous definition. It explains 'demolish' by using another word ('destroy') with the same meaning.",
    subject: 'logic',
    'question-type': 'simple',
    'question-term': 'mid',
  },
  {
    id: 'psy-final-medium-1',
    question: "Which of these is a key concept in behavioral psychology?",
    options: ["Id", "Operant conditioning", "Cognition", "Heuristic"],
    correctAnswer: 1,
    explanation: "Operant conditioning is a central concept in behavioral psychology.",
    subject: 'psychology',
    'question-type': 'medium',
    'question-term': 'final',
  },
  // Add more questions here
];
