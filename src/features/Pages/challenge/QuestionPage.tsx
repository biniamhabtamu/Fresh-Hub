// src/features/challenge/QuestionPage.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Question } from '../../data/ChallengeExamCollection';
import { useChallenge } from '../../../hooks/useChallenge';

interface QuestionPageProps {
  questions: Question[];
  onComplete: (answers: Record<string, string>) => void;
  mode: 'self' | 'friend' | 'global';
  timePerQuestion?: number;
  /** milliseconds to wait after showing feedback before advancing in `self` mode */
  autoAdvanceMs?: number;
}

export default function QuestionPage({
  questions,
  onComplete,
  mode,
  timePerQuestion = 60,
  autoAdvanceMs = 1500
}: QuestionPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedOptions, setDisplayedOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(timePerQuestion);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [paused, setPaused] = useState(false);

  const { addAnswer } = useChallenge();

  const intervalRef = useRef<number | null>(null);
  const autoAdvanceRef = useRef<number | null>(null);

  const currentQuestion = questions?.[currentIndex];

  // shuffle helper (Fisher-Yates)
  const shuffle = (arr: string[]) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  };

  // initialize question (options, timer, feedback reset)
  useEffect(() => {
    // reset timer and feedback for the new question
    setTimeLeft(timePerQuestion);
    setSelectedOption(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setPaused(false);

    // set displayed (shuffled) options for the question
    if (currentQuestion?.options && currentQuestion.options.length > 0) {
      setDisplayedOptions(shuffle(currentQuestion.options));
    } else {
      setDisplayedOptions([]);
    }

    // clear any pending auto-advance
    if (autoAdvanceRef.current) {
      window.clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = null;
    }
  }, [currentIndex, currentQuestion, timePerQuestion]);

  // timer management with a stable interval
  useEffect(() => {
    // don't start timer if paused, no question, or feedback is showing (we'll pause during feedback)
    if (paused || !currentQuestion || showFeedback) return;

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused, currentQuestion, showFeedback]);

  // when timeLeft hits zero
  useEffect(() => {
    if (!currentQuestion) return;

    if (timeLeft <= 0 && !showFeedback) {
      // mark as unanswered and advance
      const newAnswers = { ...answers, [currentQuestion.id]: '' }; // empty string for no answer
      setAnswers(newAnswers);
      addAnswer?.(currentQuestion.id, '', false);

      // show feedback (incorrect) briefly before advancing
      setIsCorrect(false);
      setShowFeedback(true);

      if (mode === 'self') {
        autoAdvanceRef.current = window.setTimeout(() => {
          handleNextQuestionInternal(newAnswers);
        }, autoAdvanceMs);
      }
    }
    // intentionally depend on timeLeft only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  // keyboard accessibility
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!currentQuestion) return;

      // number keys 1..9 select options
      if (/^[1-9]$/.test(e.key)) {
        const idx = Number(e.key) - 1;
        const opt = displayedOptions[idx];
        if (opt && !showFeedback) {
          handleOptionSelect(opt);
        }
      }

      if (e.key === 'Enter') {
        // if feedback shown in non-self modes, go to next
        if (showFeedback && mode !== 'self') {
          handleNextQuestion();
        }
      }

      if (e.key === 'ArrowRight') {
        // allow moving forward if feedback shown (non-self) or if user wants to skip
        if (showFeedback) handleNextQuestion();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedOptions, showFeedback, currentQuestion, mode]);

  // cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (autoAdvanceRef.current) window.clearTimeout(autoAdvanceRef.current);
    };
  }, []);

  const handleOptionSelect = (option: string) => {
    if (!currentQuestion || showFeedback) return;

    setSelectedOption(option);

    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    const newAnswers = { ...answers, [currentQuestion.id]: option };
    setAnswers(newAnswers);

    // persist via hook
    addAnswer?.(currentQuestion.id, option, correct);

    // pause the timer while showing feedback
    setPaused(true);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (mode === 'self') {
      // auto advance after a short delay
      autoAdvanceRef.current = window.setTimeout(() => {
        handleNextQuestionInternal(newAnswers);
      }, autoAdvanceMs);
    }
  };

  const handleNextQuestionInternal = (answersSnapshot?: Record<string, string>) => {
    // clear any pending auto-advance
    if (autoAdvanceRef.current) {
      window.clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = null;
    }

    // resume timer (it will be reset in the effect that watches currentIndex)
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      // complete; pass the latest answers
      onComplete(answersSnapshot ?? answers);
    }
  };

  const handleNextQuestion = () => {
    // for non-self modes (where user clicks Next)
    if (!showFeedback && mode !== 'self') {
      // if user tries to go next without answering, treat as blank answer
      if (currentQuestion) {
        const newAnswers = { ...answers, [currentQuestion.id]: '' };
        setAnswers(newAnswers);
        addAnswer?.(currentQuestion.id, '', false);
        setShowFeedback(true);
        setIsCorrect(false);
      }
      return;
    }

    // if feedback is shown, just go to next
    if (showFeedback) {
      handleNextQuestionInternal();
    }
  };

  const progress = questions && questions.length > 0
    ? ((currentIndex + 1) / questions.length) * 100
    : 0;

  // guard: no questions
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-semibold mb-2">No questions available</h2>
          <p className="text-sm text-gray-600">Please go back and select a subject or try a different configuration.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-2.5 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
              aria-hidden
            />
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>Question {currentIndex + 1} / {questions.length}</span>
            <span>{Object.keys(answers).length} answered</span>
          </div>
        </div>

        {/* Header + Timer */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{currentQuestion.title ?? `Q${currentIndex + 1}`}</h3>
            <p className="text-sm text-gray-600">{currentQuestion.subject}</p>
          </div>

          <div className="text-right">
            <div
              className={`text-lg font-semibold ${timeLeft <= 10 ? 'text-red-600' : 'text-blue-700'}`}
              aria-live="polite"
            >
              {Math.floor(Math.max(0, timeLeft) / 60)}
              :
              {(Math.max(0, timeLeft) % 60).toString().padStart(2, '0')}
            </div>

            <div className="mt-2 flex items-center gap-2">
              <button
                onClick={() => setPaused((p) => !p)}
                className="text-sm px-3 py-1 rounded bg-white border shadow-sm hover:opacity-95"
                aria-pressed={paused}
              >
                {paused ? 'Resume' : 'Pause'}
              </button>

              {mode !== 'self' && (
                <button
                  onClick={handleNextQuestion}
                  className="text-sm px-3 py-1 rounded bg-indigo-600 text-white shadow-sm hover:opacity-95"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6" role="region" aria-labelledby="question-title">
          <div className="p-6">
            <h2 id="question-title" className="text-xl font-bold text-gray-800 mb-6">{currentQuestion.question}</h2>

            <div className="grid gap-3">
              {displayedOptions.map((option, idx) => {
                const optionNumber = idx + 1;
                const isSelected = selectedOption === option;
                let optionCls = 'p-4 border rounded-lg transition-all duration-150 flex items-start gap-3';

                if (showFeedback) {
                  if (option === currentQuestion.correctAnswer) {
                    optionCls += ' bg-green-50 border-green-400';
                  } else if (isSelected && !isCorrect) {
                    optionCls += ' bg-red-50 border-red-400';
                  } else {
                    optionCls += ' border-gray-200';
                  }
                } else {
                  optionCls += isSelected ? ' border-blue-500 bg-blue-50' : ' border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer';
                }

                return (
                  <button
                    key={option}
                    className={optionCls}
                    onClick={() => handleOptionSelect(option)}
                    disabled={showFeedback}
                    aria-pressed={isSelected}
                    aria-label={`Option ${optionNumber}: ${option}`}
                    type="button"
                  >
                    <div className="w-6 flex-shrink-0 text-sm font-semibold text-gray-700">{optionNumber}.</div>
                    <div className="text-left text-sm text-gray-800">{option}</div>
                  </button>
                );
              })}
            </div>

            {/* Explanation / feedback */}
            {showFeedback && currentQuestion.explanation && (
              <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'}`}>
                <h4 className="font-medium mb-1">{isCorrect ? 'Correct' : 'Explanation'}</h4>
                <p className="text-sm text-gray-700">{currentQuestion.explanation}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer controls */}
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm text-gray-600">
            Tip: press number keys (1-{Math.min(9, displayedOptions.length)}) to answer quickly.
          </div>

          <div className="flex items-center gap-2">
            {/* Allow skipping (records blank answer) */}
            <button
              onClick={() => {
                if (!currentQuestion) return;
                if (showFeedback) {
                  // if feedback is shown, go to next
                  handleNextQuestion();
                  return;
                }
                // mark blank answer and show feedback
                const newAnswers = { ...answers, [currentQuestion.id]: '' };
                setAnswers(newAnswers);
                addAnswer?.(currentQuestion.id, '', false);
                setIsCorrect(false);
                setShowFeedback(true);
                setPaused(true);
                if (mode === 'self') {
                  autoAdvanceRef.current = window.setTimeout(() => {
                    handleNextQuestionInternal(newAnswers);
                  }, autoAdvanceMs);
                }
              }}
              className="px-3 py-1 rounded bg-white border shadow-sm hover:opacity-95 text-sm"
            >
              Skip
            </button>

            <button
              onClick={() => {
                // reveal correct answer (for study mode) - this won't auto-advance
                if (!currentQuestion) return;
                setSelectedOption(currentQuestion.correctAnswer);
                setIsCorrect(true);
                setShowFeedback(true);
                setPaused(true);
                const newAnswers = { ...answers, [currentQuestion.id]: currentQuestion.correctAnswer };
                setAnswers(newAnswers);
                addAnswer?.(currentQuestion.id, currentQuestion.correctAnswer, true);
              }}
              className="px-3 py-1 rounded bg-indigo-600 text-white shadow-sm hover:opacity-95 text-sm"
            >
              Reveal Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
