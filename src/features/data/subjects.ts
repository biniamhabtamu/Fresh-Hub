export const subjects = [
  'Logic',
  'Psychology',
  'Geography',
  'Anthropology',
  'History',
  'Economics',
  'English skill1',
  'English skill2',
  'Interpretation',
  'C++',
  'Organic Chemistry',
  'Inclusive',
  'GlobalTrade',
  'Physics',
  'Emerging Technologies'
] as const;

export type Subject = typeof subjects[number];