// / src/types/index.ts
export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  field: 'natural' | 'social';
  isPremium: boolean;
  premiumSince?: Date;
  createdAt: Date;
}



export interface Subject {
  id: string;
  name: string;
  icon: string;
  field: 'natural' | 'social';
  isFree: boolean;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  subject: string;
  year: number;
  chapter: number;
}

export interface QuizResult {
  userId: string;
  subject: string;
  year: number;
  chapter: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAt: Date;
  timeElapsed: number;
}

export interface PaymentSubmission {
  userId: string;
  paymentMethod: 'ebirr' | 'telebirr';
  screenshot: string;
  status: 'pending' | 'verified' | 'rejected';
  submittedAt: Date;
}

export interface YearResult {
  year: number;
  averageScore: number;
}

export interface ChapterResult {
  chapter: number;
  score: number;
  completed: boolean;
}

// Types for the quiz state
export interface QuizState {
  currentQuestion: number;
  answers: number[];
  timeElapsed: number;
  quizCompleted: boolean;
  score: number;
}

// Types for authentication context
export interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    field: 'natural' | 'social';
  }) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
}