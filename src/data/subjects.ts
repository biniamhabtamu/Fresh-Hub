// src/data/subjects.ts
import { Subject } from '../types';

export const subjects: Subject[] = [

  { 
    id: 'Sample', 
    name: 'Sample', 
    icon: '📖', // Different from natural science English
    field: 'natural', 
    isFree: false 
  },
  // Natural Science Subjects
  { 
    id: 'english', 
    name: 'EnglishSkill1', 
    icon: '✍️', // Alternative: '📚'
    field: 'natural', 
    isFree: true 
  },
  { 
    id: 'english2', 
    name: 'EnglishSkill2', 
    icon: '✍️', // Alternative: '📚'
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'math', 
    name: 'Math', 
    icon: '🧮', // Alternative: '∫' (math symbol)
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'geography', 
    name: 'Geography', 
    icon: '🌎', // Alternative: '🗺️'
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
    id: 'chemistry', 
    name: 'Chemistry', 
    icon: '⚗️', // Alternative: '🧪'
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'physics', 
    name: 'Physics', 
    icon: '⚛️', // Atomic symbol
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'cpp', 
    name: 'C++', 
    icon: '👨‍💻', // Alternative: '💻'
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'history', 
    name: 'History', 
    icon: '📜', // Ancient scroll
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
    id: 'inclusive', 
    name: 'Inclusive', 
    icon: '🤝', // Better representation of inclusion
    field: 'natural', 
    isFree: false 
  },
  { 
    id: 'logic', 
    name: 'Logic', 
    icon: '🧩', // Symbols representing logic
    field: 'natural', 
    isFree: true 
  },
   { 
    id: 'economics', 
    name: 'Economics', 
    icon: '💹', // Chart with yen symbol
    field: 'natural', 
    isFree: false 
  },

  // Social Science Subjects
   { 
    id: 'Sample', 
    name: 'Sample', 
    icon: '📖', // Different from natural science English
    field: 'social', 
    isFree: false 
  },,
  { 
    id: 'english', 
    name: 'EnglishSkill2', 
    icon: '📖', // Different from natural science English
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'geography', 
    name: 'Geography', 
    icon: '🗾', // Map of Japan for variety
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'history', 
    name: 'History', 
    icon: '⏳', // Hourglass representing time/history
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'civic', 
    name: 'Civic', 
    icon: '🏙️', // Cityscape
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'economics', 
    name: 'Economics', 
    icon: '💹', // Chart with yen symbol
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'sociology', 
    name: 'Sociology', 
    icon: '👥', // Multiple people
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'emerging', 
    name: 'Emerging', 
    icon: '🌱', // Growing plant for social emerging
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'inclusive', 
    name: 'Inclusive', 
    icon: '🌈', // Diversity flag
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'psychology', 
    name: 'Psychology', 
    icon: '🧘', // Meditating person
    field: 'social', 
    isFree: false 
  },
  { 
    id: 'logic', 
    name: 'Logic', 
    icon: '🧩', 
    field: 'social', 
    isFree: true 
  },
];

// For even more attractive icons, consider using SVG icons from libraries like:
// - Lucide (already in your project)
// - Heroicons
// - Font Awesome
// Here's how you could implement SVG icons instead:

/*
interface Subject {
  id: string;
  name: string;
  icon: React.ReactNode; // Now accepts JSX
  field: 'natural' | 'social';
  isFree: boolean;
}

export const subjects: Subject[] = [
  {
    id: 'math',
    name: 'Math',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
    field: 'natural',
    isFree: false
  },
  // ... other subjects
];
*/

export const examYears = [2013, 2014, 2015, 2016, 2017];
export const chaptersPerSubject = 7;