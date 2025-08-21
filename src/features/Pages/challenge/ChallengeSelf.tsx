import React, { useEffect, useState } from 'react';
import SubjectSelection from './SubjectSelection';
import QuestionPage from './QuestionPage';
import ResultsPage from './ResultsPage';
import { getRandomQuestions } from '../../data/ChallengeExamCollection';
import { useChallenge } from '../../../hooks/useChallenge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Settings, RotateCcw, Award, Clock, BarChart3, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Question = {
  id: string;
  subject: string;
  question: string;
  choices: string[];
  answer: string;
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
};

export default function ChallengeSelf({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState<'subject' | 'questions' | 'results'>('subject');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [questionCount, setQuestionCount] = useState<number>(() => {
    try {
      return Number(localStorage.getItem('challenge:questionCount') || 10);
    } catch {
      return 10;
    }
  });
  const [timePerQuestion, setTimePerQuestion] = useState<number>(() => {
    try {
      return Number(localStorage.getItem('challenge:timePerQuestion') || 60);
    } catch {
      return 60;
    }
  });
  const [currentSubject, setCurrentSubject] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const { setChallengeMode } = useChallenge();

  // Persist settings
  useEffect(() => {
    try {
      localStorage.setItem('challenge:questionCount', String(questionCount));
      localStorage.setItem('challenge:timePerQuestion', String(timePerQuestion));
    } catch {
      /* ignore storage errors */
    }
  }, [questionCount, timePerQuestion]);

  // Ensure challenge mode is set when starting questions
  useEffect(() => {
    if (step === 'questions') setChallengeMode?.('self');
  }, [step, setChallengeMode]);

  const handleSubjectSelect = (subject: string) => {
    setCurrentSubject(subject);
    setChallengeMode?.('self');

    const selectedQuestions = getRandomQuestions(subject as any, questionCount) as Question[];

    // if the data source returned fewer questions than requested, still proceed but adjust
    if (!selectedQuestions || selectedQuestions.length === 0) {
      // fallback: empty -> stay on subject step and optionally show UI feedback (not implemented)
      setQuestions([]);
      setStep('subject');
      return;
    }

    if (selectedQuestions.length < questionCount) {
      // If fewer available, accept them and update questionCount to reflect actual number used
      setQuestionCount(selectedQuestions.length);
    }

    setQuestions(selectedQuestions);
    setAnswers({});
    setStep('questions');
  };

  const handleComplete = (userAnswers: Record<string, string>) => {
    setAnswers(userAnswers);
    setStep('results');
  };

  const handleRestart = () => {
    // restart with same subject and settings; guard if currentSubject is missing
    if (!currentSubject) {
      // if something weird happened, send user back to subject selection
      setQuestions([]);
      setAnswers({});
      setStep('subject');
      return;
    }

    const selectedQuestions = getRandomQuestions(currentSubject as any, questionCount) as Question[];

    if (!selectedQuestions || selectedQuestions.length === 0) {
      // if no questions available, go to subject selection
      setQuestions([]);
      setAnswers({});
      setStep('subject');
      return;
    }

    setQuestions(selectedQuestions);
    setAnswers({});
    setStep('questions');
  };

  const handleNewChallenge = () => {
    setQuestions([]);
    setAnswers({});
    setCurrentSubject(null);
    setStep('subject');
  };

  // Calculate score for results page
  const calculateScore = () => {
    if (!questions.length) return 0;
    
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.answer) {
        correct++;
      }
    });
    
    return Math.round((correct / questions.length) * 100);
  };

  // UI for settings shown on the subject selection step
  const SettingsPanel = () => (
    <motion.div 
      className="mb-6 bg-white rounded-xl shadow-sm p-5 border border-gray-100"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Challenge Settings
        </h3>
        <Badge variant="outline" className="text-xs">Saved locally</Badge>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Number of Questions</label>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setQuestionCount((c) => Math.max(1, c - 1))}
              aria-label="Decrease questions"
              className="px-3 py-2 rounded-lg"
              variant="outline"
              size="icon"
            >
              -
            </Button>
            <div className="flex-1 flex justify-center">
              <span className="text-lg font-bold bg-gray-100 px-4 py-2 rounded-lg min-w-[60px] text-center">
                {questionCount}
              </span>
            </div>
            <Button
              onClick={() => setQuestionCount((c) => Math.min(50, c + 1))}
              aria-label="Increase questions"
              className="px-3 py-2 rounded-lg"
              variant="outline"
              size="icon"
            >
              +
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Number of questions in the challenge
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Time Per Question (seconds)</label>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setTimePerQuestion((t) => Math.max(5, t - 5))}
              aria-label="Decrease time"
              className="px-3 py-2 rounded-lg"
              variant="outline"
              size="icon"
            >
              -5
            </Button>
            <div className="flex-1 flex justify-center">
              <span className="text-lg font-bold bg-gray-100 px-4 py-2 rounded-lg min-w-[60px] text-center">
                {timePerQuestion}
              </span>
            </div>
            <Button
              onClick={() => setTimePerQuestion((t) => Math.min(300, t + 5))}
              aria-label="Increase time"
              className="px-3 py-2 rounded-lg"
              variant="outline"
              size="icon"
            >
              +5
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Time allowed per question
          </p>
        </div>
      </div>
      
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">Difficulty Level</label>
        <div className="grid grid-cols-4 gap-2">
          {['all', 'easy', 'medium', 'hard'].map((level) => (
            <Button
              key={level}
              onClick={() => setSelectedDifficulty(level as any)}
              variant={selectedDifficulty === level ? "default" : "outline"}
              className="text-xs capitalize py-1 h-auto"
              size="sm"
            >
              {level}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Results Summary Card
  const ResultsSummary = () => {
    const score = calculateScore();
    const correctAnswers = questions.filter(q => answers[q.id] === q.answer).length;
    
    return (
      <Card className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Award className="text-amber-500" /> Challenge Complete!
          </CardTitle>
          <CardDescription>
            You answered {correctAnswers} out of {questions.length} questions correctly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{score}%</div>
              <div className="text-sm text-muted-foreground">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{questions.length - correctAnswers}</div>
              <div className="text-sm text-muted-foreground">Incorrect</div>
            </div>
          </div>
          <Progress value={score} className="mt-4 h-2" />
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button 
            onClick={onBack} 
            variant="ghost" 
            className="flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </Button>
          
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-600" />
            Self Challenge
          </h1>
          
          <Button 
            onClick={() => setShowSettings(!showSettings)} 
            variant={showSettings ? "default" : "outline"}
            size="icon"
            className="rounded-full"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="p-4 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 'subject' && (
            <motion.div
              key="subject"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold mb-2">Select a Subject</h2>
                <p className="text-muted-foreground">Choose a subject to test your knowledge</p>
              </div>
              
              {showSettings && <SettingsPanel />}
              
              <SubjectSelection 
                onSelect={handleSubjectSelect} 
                selectedDifficulty={selectedDifficulty}
              />
            </motion.div>
          )}

          {step === 'questions' && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QuestionPage
                questions={questions}
                timePerQuestion={timePerQuestion}
                onComplete={handleComplete}
                onBack={() => setStep('subject')}
              />
            </motion.div>
          )}

          {step === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ResultsSummary />
              
              <Tabs defaultValue="summary" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                  <TabsTrigger value="review">Review</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>
                
                <TabsContent value="summary">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResultsPage 
                        questions={questions} 
                        answers={answers} 
                        onRestart={handleRestart}
                        onNewChallenge={handleNewChallenge}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="review">
                  <Card>
                    <CardHeader>
                      <CardTitle>Question Review</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {questions.map((question, index) => (
                          <div key={question.id} className="p-4 border rounded-lg">
                            <div className="flex items-start gap-3 mb-3">
                              <Badge variant={answers[question.id] === question.answer ? "default" : "destructive"} className="mt-1">
                                {index + 1}
                              </Badge>
                              <p className="font-medium">{question.question}</p>
                            </div>
                            <div className="ml-7">
                              <p className={`text-sm ${answers[question.id] === question.answer ? 'text-green-600' : 'text-red-600'}`}>
                                Your answer: {answers[question.id] || 'Not answered'}
                              </p>
                              <p className="text-sm text-blue-600">
                                Correct answer: {question.answer}
                              </p>
                              {question.explanation && (
                                <p className="text-sm text-muted-foreground mt-2">
                                  Explanation: {question.explanation}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="details">
                  <Card>
                    <CardHeader>
                      <CardTitle>Challenge Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <Clock className="w-6 h-6 mx-auto text-blue-500" />
                          <div className="text-xl font-bold mt-2">{timePerQuestion}s</div>
                          <div className="text-sm text-muted-foreground">Time per question</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <BarChart3 className="w-6 h-6 mx-auto text-green-500" />
                          <div className="text-xl font-bold mt-2">{questions.length}</div>
                          <div className="text-sm text-muted-foreground">Total questions</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <div className="flex gap-3 mt-6">
                <Button 
                  onClick={handleRestart} 
                  className="flex-1 gap-2 py-3"
                  variant="outline"
                >
                  <RotateCcw className="w-4 h-4" /> Try Again
                </Button>
                <Button 
                  onClick={handleNewChallenge} 
                  className="flex-1 py-3"
                >
                  New Challenge
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};