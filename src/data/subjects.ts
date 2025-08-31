// src/data/subjects.ts
import { Subject } from '../types';

export const subjects: Subject[] = [
  { 
    id: 'Sample', 
    name: 'Free trial', 
    icon: '📖',
    field: 'natural', 
    isFree: true
  },
  // Natural Science Subjects
  { 
    id: 'logic', 
    name: 'Logic', 
    icon: '🧩',
    field: 'natural', 
    isFree: false
  },
  { 
    id: 'psychology', 
    name: 'Psychology', 
    icon: '🧠', 
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'geography', 
    name: 'Geography', 
    icon: '🌎',
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'english', 
    name: 'EnglishSkill1', 
    icon: '✍️',
    field: 'natural', 
    isFree: true 
  },
  { 
    id: 'physics', 
    name: 'Physics', 
    icon: '⚛️',
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'math', 
    name: 'Math', 
    icon: '🧮',
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'Anthropology', 
    name: 'Anthropology', 
    icon: '👥',
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'english2', 
    name: 'EnglishSkill2', 
    icon: '✍️',
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'chemistry', 
    name: 'Chemistry', 
    icon: '⚗️',
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'cpp', 
    name: 'C++', 
    icon: '👨‍💻',
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'history', 
    name: 'History', 
    icon: '📜',
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'civic', 
    name: 'Civic', 
    icon: '🏛️', 
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'emerging', 
    name: 'Emerging', 
    icon: '🚀', 
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'entrepreneurship', 
    name: 'Entrepreneurship', 
    icon: '🌎',
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'Inclusive', 
    name: 'Inclusive', 
    icon: '🤝',
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'economics', 
    name: 'Economics', 
    icon: '💹',
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'GlobalTrade', 
    name: 'Global Trade', 
    icon: '🌎',
    field: 'natural', 
    isFree: false 
  },

  // Social Science Subjects
  { 
    id: 'Sample', 
    name: 'Free trial', 
    icon: '📖',
    field: 'social', 
    isFree: true 
  },
  { 
    id: 'psychology', 
    name: 'Psychology', 
    icon: '🧠',
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'logic', 
    name: 'Logic', 
    icon: '🧩', 
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'economics', 
    name: 'Economics', 
    icon: '💹',
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'Anthropology', 
    name: 'Anthropology', 
    icon: '👥',
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'history', 
    name: 'History', 
    icon: '⏳',
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'english', 
    name: 'EnglishSkill1', 
    icon: '📖',
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'geography', 
    name: 'Geography', 
    icon: '🗾',
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'english2', 
    name: 'EnglishSkill2', 
    icon: '📖',
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'civic', 
    name: 'Civic', 
    icon: '🏙️',
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'emerging', 
    name: 'Emerging', 
    icon: '🌱',
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'inclusive', 
    name: 'Inclusive', 
    icon: '🌈',
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'globalTrade', 
    name: 'Global Trade', 
    icon: '🌎',
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'entrepreneurship', 
    name: 'Entrepreneurship', 
    icon: '🌎',
    field: 'social', 
    isFree: false 
  },
];

export const examYears = [2013_2017];

// Define the English topics
export const englishTopics = [
  'Tense',
  'Modal Verb',
  'Conditional',
  'Collocations',
  'Active and Passive Voices'
];

// ✅ Define the Free trial topics
export const SampleTopics = [ 
  'Logic Free Trial',
  'Psychology Free Trial',
  'Geography Free Trial',
  'Economics Free Trial',
  'English Free Trial',
  'Civic Free Trial',
  'Emerging Free Trial'
];

// Function to determine the number of items per subject
export const getChaptersOrTopicsPerSubject = (subjectId: string) => {
  if (subjectId === 'english' || subjectId === 'english2') {
    return englishTopics.length;
  }
  if (subjectId === 'Sample') {
    return SampleTopics.length;
  }
  return 7;
};

// Function to get the display name for a chapter/topic
export const getChapterOrTopicName = (subjectId: string, index: number) => {
  if ((subjectId === 'english' || subjectId === 'english2') && index >= 0 && index < englishTopics.length) {
    return englishTopics[index];
  }
  if (subjectId === 'Sample' && index >= 0 && index < SampleTopics.length) {
    return SampleTopics[index];
  }
  return `Chapter ${index + 1}`;
};

// Helpers
export const isEnglishSubject = (subjectId: string) => {
  return subjectId === 'english' || subjectId === 'english2';
};

export const isFreeTrialSubject = (subjectId: string) => {
  return subjectId === 'Sample';
};
