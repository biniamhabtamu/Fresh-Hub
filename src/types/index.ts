export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  field: 'natural' | 'social';
  isPremium: boolean;
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
}

export interface PaymentSubmission {
  userId: string;
  paymentMethod: 'ebirr' | 'telebirr';
  screenshot: string;
  status: 'pending' | 'verified' | 'rejected';
  submittedAt: Date;
}