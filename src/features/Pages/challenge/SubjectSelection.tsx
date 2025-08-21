// src/features/challenge/SubjectSelection.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Subject, subjects } from '../../data/subjects';
import { useChallenge } from '../../../hooks/useChallenge';

interface SubjectSelectionProps {
  onSubjectSelect: (subject: Subject) => void;
  mode: 'self' | 'friend' | 'global';
  onBack: () => void;
}

export default function SubjectSelection({ onSubjectSelect, mode, onBack }: SubjectSelectionProps) {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [query, setQuery] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [previewSubject, setPreviewSubject] = useState<Subject | null>(null);

  const listRef = useRef<HTMLDivElement | null>(null);
  const { setChallengeSubject } = useChallenge();

  // Normalize subjects into an array of { id, title, description } if your data supports description
  // If subjects are just strings, map them to objects with simple defaults.
  const subjectItems = useMemo(() => {
    return subjects.map((s) =>
      typeof s === 'string'
        ? ({ id: s, title: s, description: '' } as { id: string; title: string; description: string })
        : s
    );
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return subjectItems;
    const q = query.trim().toLowerCase();
    return subjectItems.filter((s) => s.title.toLowerCase().includes(q) || (s.description || '').toLowerCase().includes(q));
  }, [query, subjectItems]);

  // small emoji / icon map for common subjects (feel free to expand)
  const emojiFor = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('math')) return '➗';
    if (t.includes('bio')) return '🧬';
    if (t.includes('chem')) return '⚗️';
    if (t.includes('phys')) return '🔬';
    if (t.includes('hist')) return '📜';
    if (t.includes('geo')) return '🗺️';
    if (t.includes('eng')) return '📘';
    if (t.includes('comp')) return '💻';
    return '📚';
  };

  useEffect(() => {
    // keep keyboard focus index inside filtered bounds
    if (focusedIndex >= filtered.length) setFocusedIndex(filtered.length - 1);
  }, [filtered, focusedIndex]);

  useEffect(() => {
    // move focus to focusedIndex's button for screen readers/keyboard users
    if (focusedIndex >= 0 && listRef.current) {
      const btn = listRef.current.querySelectorAll<HTMLButtonElement>('[data-subject-button]')[focusedIndex];
      btn?.focus();
    }
  }, [focusedIndex]);

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setChallengeSubject?.(subject);
    onSubjectSelect(subject);
  };

  const handleRandom = () => {
    if (subjectItems.length === 0) return;
    const r = Math.floor(Math.random() * subjectItems.length);
    const subj = subjectItems[r] as any as Subject;
    setSelectedSubject(subj);
    setChallengeSubject?.(subj);
    onSubjectSelect(subj);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((i) => Math.max(0, i - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < filtered.length) {
        handleSubjectSelect(filtered[focusedIndex] as any as Subject);
      }
    } else if (e.key === 'Escape') {
      setQuery('');
      setFocusedIndex(-1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Challenge Selection
            </button>
            <h2 className="text-2xl font-bold mt-4">
              Select a Subject for{' '}
              <span className="text-indigo-600">
                {mode === 'self' ? 'Your Challenge' : mode === 'friend' ? 'Friend Challenge' : 'Global Challenge'}
              </span>
            </h2>
            <p className="mt-1 text-sm text-gray-600">Choose a subject to generate randomized questions.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRandom}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white shadow hover:opacity-95"
              aria-label="Pick a random subject"
            >
              🎲 Random
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            {/* Search */}
            <div className="flex items-center gap-3 mb-5">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search subjects (e.g. Biology, Math)..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                aria-label="Search subjects"
              />
              <button
                onClick={() => { setQuery(''); setFocusedIndex(-1); }}
                className="px-3 py-2 rounded-lg border hover:bg-gray-50"
                aria-label="Clear search"
              >
                Clear
              </button>
            </div>

            {/* Grid of subjects */}
            <div
              ref={listRef}
              role="list"
              aria-label="Available subjects"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {filtered.map((s, idx) => {
                const isSelected = selectedSubject?.toString() === s.id.toString();
                return (
                  <button
                    key={s.id}
                    data-subject-button
                    onClick={() => handleSubjectSelect(s as any as Subject)}
                    onMouseEnter={() => setFocusedIndex(idx)}
                    onFocus={() => setFocusedIndex(idx)}
                    onMouseLeave={() => setFocusedIndex(-1)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-150 flex flex-col gap-3 focus:outline-none focus:ring-2
                      ${isSelected ? 'border-indigo-500 bg-indigo-50 shadow-md' : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'}`}
                    aria-pressed={isSelected}
                    aria-label={`Select ${s.title}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md flex items-center justify-center text-lg bg-white shadow-sm">
                          <span aria-hidden>{emojiFor(s.title)}</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{s.title}</div>
                          {s.description ? (
                            <div className="text-xs text-gray-500 line-clamp-2">{s.description}</div>
                          ) : (
                            <div className="text-xs text-gray-400">No description</div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewSubject(s as any as Subject);
                          }}
                          className="px-2 py-1 rounded-md text-xs border hover:bg-gray-50"
                          aria-label={`Preview ${s.title}`}
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* If no results */}
              {filtered.length === 0 && (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No subjects match your search.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Preview / info panel */}
        {previewSubject && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{previewSubject}</h3>
                {/* If your Subject type has a description property, replace the line below */}
                <p className="mt-2 text-sm text-gray-600">{
                  // try to read description from subjectItems map
                  (subjectItems.find(si => si.id === previewSubject)?.description) || 'No description available for this subject.'
                }</p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2">
                <button
                  onClick={() => {
                    setPreviewSubject(null);
                  }}
                  className="px-3 py-1 rounded border hover:bg-gray-50"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    setPreviewSubject(null);
                    handleSubjectSelect(previewSubject as any as Subject);
                  }}
                  className="px-3 py-1 rounded bg-indigo-600 text-white"
                >
                  Start {mode === 'self' ? 'Challenge' : 'Mode'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer CTA / selected */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            {selectedSubject ? (
              <div className="inline-flex items-center gap-3 bg-white p-2 rounded-lg shadow">
                <div className="text-sm text-gray-700">Selected:</div>
                <div className="font-medium text-gray-900">{selectedSubject}</div>
                <button
                  onClick={() => {
                    setSelectedSubject(null);
                    setChallengeSubject?.(null as any);
                  }}
                  className="px-2 py-1 rounded border ml-2 text-sm"
                >
                  Clear
                </button>
              </div>
            ) : (
              <div className="text-sm text-gray-600">No subject selected.</div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (!selectedSubject) return;
                handleSubjectSelect(selectedSubject);
              }}
              disabled={!selectedSubject}
              className={`px-4 py-2 rounded-lg text-white ${selectedSubject ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300 cursor-not-allowed'}`}
            >
              Continue
            </button>

            <button
              onClick={() => { setQuery(''); setSelectedSubject(null); setPreviewSubject(null); setFocusedIndex(-1); }}
              className="px-3 py-2 rounded-lg border hover:bg-gray-50"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
