//subjects.ts
import { Subject } from '../types';

export const subjects: Subject[] = [
  { id: 'english', name: 'English', icon: '📘', field: 'natural', isFree: true },
  { id: 'math', name: 'Math', icon: '➗', field: 'natural', isFree: false },
  { id: 'geography', name: 'Geography', icon: '🌍', field: 'natural', isFree: false },
  { id: 'psychology', name: 'Psychology', icon: '🧠', field: 'natural', isFree: false },
  { id: 'chemistry', name: 'Chemistry', icon: '🧪', field: 'natural', isFree: false },
  { id: 'physics', name: 'Physics', icon: '⚛️', field: 'natural', isFree: false },
  { id: 'cpp', name: 'C++', icon: '💻', field: 'natural', isFree: false },
  { id: 'history', name: 'History', icon: '📜', field: 'natural', isFree: false },
  { id: 'civic', name: 'Civic', icon: '⚖️', field: 'natural', isFree: false },
  { id: 'logic', name: 'Logic', icon: '🧠', field: 'natural', isFree: true },
  
  // Social subjects
  { id: 'english-social', name: 'English', icon: '📘', field: 'social', isFree: true },
  { id: 'geography-social', name: 'Geography', icon: '🌍', field: 'social', isFree: false },
  { id: 'history-social', name: 'History', icon: '📜', field: 'social', isFree: false },
  { id: 'civic-social', name: 'Civic', icon: '⚖️', field: 'social', isFree: false },
  { id: 'economics', name: 'Economics', icon: '📊', field: 'social', isFree: false },
  { id: 'sociology', name: 'Sociology', icon: '👥', field: 'social', isFree: false },
  { id: 'psychology-social', name: 'Psychology', icon: '🧠', field: 'social', isFree: false },
  { id: 'logic-social', name: 'Logic', icon: '🧠', field: 'social', isFree: true },
  
];

export const examYears = [2013, 2014, 2015, 2016, 2017,];

export const chaptersPerSubject = 7;