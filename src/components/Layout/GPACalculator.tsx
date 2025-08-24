import React, { useEffect, useRef, useState } from 'react';
import { Plus, Trash2, Calculator, BookOpen, Download, Edit3, X, ChevronDown, ChevronUp } from 'lucide-react';

// Course type
interface Course {
  id: string;
  name: string;
  score: number | null;
  creditHours: number | null;
  grade: string;
  gradePoint: number;
}

const LOCAL_KEY = 'freshhub_gpa_courses_v1';

const GPACalculator: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) return JSON.parse(raw) as Course[];
    } catch (e) {}
    return [
      { id: '1', name: 'Psychology', score: 85, creditHours: 4, grade: 'A', gradePoint: 4.0 }
    ];
  });

  const [gpa, setGpa] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false); // now triggers centered modal
  const [newCourseName, setNewCourseName] = useState('');
  const [newCourseScore, setNewCourseScore] = useState<number | null>(null);
  const [newCourseCredit, setNewCourseCredit] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [editingCourse, setEditingCourse] = useState<string | null>(null);

  // UI helpers
  const [searchText, setSearchText] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'score' | 'credit'>('name');
  const [descending, setDescending] = useState(false);

  const nameInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    calculateGPA();
    try { localStorage.setItem(LOCAL_KEY, JSON.stringify(courses)); } catch (e) {}
  }, [courses]);

  const findGrade = (score: number): string => {
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 80) return 'A-';
    if (score >= 75) return 'B+';
    if (score >= 70) return 'B';
    if (score >= 65) return 'B-';
    if (score >= 60) return 'C+';
    if (score >= 50) return 'C';
    if (score >= 45) return 'C-';
    if (score >= 40) return 'D';
    return 'F';
  };

  const findGradePoint = (score: number): number => {
    if (score >= 90) return 4.0;
    if (score >= 85) return 4.0;
    if (score >= 80) return 3.75;
    if (score >= 75) return 3.5;
    if (score >= 70) return 3.0;
    if (score >= 65) return 2.7;
    if (score >= 60) return 2.5;
    if (score >= 50) return 2.0;
    if (score >= 45) return 1.75;
    if (score >= 40) return 1.0;
    return 0.0;
  };

  const calculateGPA = () => {
    let totalGradePoints = 0;
    let totalCreditHours = 0;
    let hasValidCourses = false;

    courses.forEach(course => {
      if (course.score !== null && course.creditHours !== null && course.score >= 0) {
        totalGradePoints += course.gradePoint * course.creditHours;
        totalCreditHours += course.creditHours;
        hasValidCourses = true;
      }
    });

    setTotalCredits(totalCreditHours);

    if (hasValidCourses && totalCreditHours > 0) {
      setGpa(parseFloat((totalGradePoints / totalCreditHours).toFixed(2)));
    } else {
      setGpa(null);
    }
  };

  const openModalForNew = () => {
    setEditingCourse(null);
    setNewCourseName('');
    setNewCourseScore(null);
    setNewCourseCredit(null);
    setShowAddForm(true);
    setTimeout(() => nameInputRef.current?.focus(), 120);
  };

  const addOrUpdateCourse = () => {
    if (newCourseName.trim() === '' || newCourseScore === null || newCourseCredit === null) {
      alert('Please fill all fields');
      return;
    }

    if (newCourseScore < 0 || newCourseScore > 100) {
      alert('Score must be between 0 and 100');
      return;
    }

    if (newCourseCredit <= 0) {
      alert('Credit hours must be > 0');
      return;
    }

    if (editingCourse) {
      setCourses(prev => prev.map(c => c.id === editingCourse ? {
        ...c,
        name: newCourseName,
        score: newCourseScore,
        creditHours: newCourseCredit,
        grade: findGrade(newCourseScore),
        gradePoint: findGradePoint(newCourseScore)
      } : c));
      setEditingCourse(null);
    } else {
      const newCourse: Course = {
        id: Date.now().toString(),
        name: newCourseName,
        score: newCourseScore,
        creditHours: newCourseCredit,
        grade: findGrade(newCourseScore),
        gradePoint: findGradePoint(newCourseScore)
      };
      setCourses(prev => [...prev, newCourse]);
    }

    // close modal after adding/updating
    setShowAddForm(false);
    setNewCourseName('');
    setNewCourseScore(null);
    setNewCourseCredit(null);
  };

  const removeCourse = (id: string) => {
    if (!confirm('Remove this course?')) return;
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  const startEditing = (id: string) => {
    const c = courses.find(x => x.id === id);
    if (!c) return;
    setEditingCourse(id);
    setNewCourseName(c.name);
    setNewCourseScore(c.score);
    setNewCourseCredit(c.creditHours);
    setShowAddForm(true);
    setTimeout(() => nameInputRef.current?.focus(), 120);
  };

  const resetForm = () => {
    setNewCourseName('');
    setNewCourseScore(null);
    setNewCourseCredit(null);
    setEditingCourse(null);
    setShowAddForm(false);
  };

  // Safer CSV builder (no escaped quotes)
  const exportCSV = () => {
    const header = ['Course Name', 'Score', 'Credit Hours', 'Grade', 'Grade Point'];
    const rows = courses.map(c => [c.name, c.score ?? '', c.creditHours ?? '', c.grade, c.gradePoint.toFixed(2)]);
    const all = [header, ...rows];

    const csvLines = all.map(row => {
      return row.map(cell => {
        const s = String(cell);
        const escaped = s.replace(/"/g, '""');
        return '"' + escaped + '"';
      }).join(',');
    });

    const csv = csvLines.join('\r\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gpa_courses.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  // derived data for UI: search, sort, slice
  const filtered = courses.filter(c => c.name.toLowerCase().includes(searchText.toLowerCase()));
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'score') return (a.score ?? 0) - (b.score ?? 0);
    return (a.creditHours ?? 0) - (b.creditHours ?? 0);
  });
  if (descending) sorted.reverse();

  const VISIBLE_LIMIT = 6;
  const visibleCourses = showAll ? sorted : sorted.slice(0, VISIBLE_LIMIT);

  return (
    // Extra padding top (pt-24) to avoid fixed header and pb-44 to avoid fixed bottom bar
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pb-44 px-4 pt-24">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Fixed Header */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white p-5">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calculator className="h-8 w-8" />
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold leading-tight">GPA Calculator</h1>
                  <p className="text-xs sm:text-sm opacity-90">Fresh-Hub — Student Tools</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-white bg-opacity-20 px-3 py-2 rounded-full text-sm font-semibold">{gpa !== null ? gpa.toFixed(2) : '0.00'}</div>
               
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input
                placeholder="Search courses..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="flex-1 w-full sm:w-64 p-3 border rounded-lg focus:ring-2 focus:ring-cyan-400 placeholder-slate-400"
              />

              <select value={sortBy} onChange={e => setSortBy(e.target.value as any)} className="p-3 border rounded-lg">
                <option value="name">Sort: Name</option>
                <option value="score">Sort: Score</option>
                <option value="credit">Sort: Credit</option>
              </select>

              <button onClick={() => setDescending(d => !d)} className="p-3 border rounded-lg" title="Toggle order">
                {descending ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => { setShowTutorial(s => !s); }} className="text-sm px-3 py-2 border rounded-lg">{showTutorial ? 'Hide tips' : 'Show tips'}</button>
              <button onClick={openModalForNew} className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-cyan-700">
                <Plus size={16} /> <span className="hidden sm:inline">Add Course</span>
              </button>
            </div>
          </div>

          {/* Tutorial */}
          {showTutorial && (
            <div className="p-4 bg-cyan-50 border-b border-cyan-100 text-cyan-900">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">How to use</h3>
                  <ul className="text-sm mt-2 list-disc list-inside">
                    <li>Add courses with score and credit hours.</li>
                    <li>GPA updates automatically and persists in your browser.</li>
                    <li>Click edit to update a course. Use export to download CSV.</li>
                  </ul>
                </div>
                <button onClick={() => setShowTutorial(false)} className="p-1">
                  <X size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Courses + content area */}
          <div className="p-4 max-h-[60vh] overflow-y-auto">
            {courses.length === 0 && (
              <div className="text-center py-10 text-slate-500">
                <BookOpen className="mx-auto h-12 w-12 text-slate-300 mb-3" />
                <p>No courses added yet</p>
                <p className="text-sm">Tap the + button to begin</p>
              </div>
            )}

            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm text-slate-600">Showing {sorted.length} course(s)</div>
              {sorted.length > VISIBLE_LIMIT && (
                <button onClick={() => setShowAll(s => !s)} className="text-sm text-cyan-600">{showAll ? 'Show less' : `Show all (${sorted.length})`}</button>
              )}
            </div>

            <div className="grid grid-cols-1 gap-3">
              {visibleCourses.map(course => (
                <div key={course.id} className="p-3 rounded-xl border shadow-sm bg-gradient-to-tr from-white to-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-800 text-base">{course.name}</h3>
                        <div className="text-xs text-slate-500 mt-1">Credit: <strong>{course.creditHours ?? '-'}</strong></div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-slate-600">Grade</div>
                        <div className="text-lg font-bold">{course.grade}</div>
                      </div>
                    </div>

                    {/* Score progress */}
                    <div className="mt-3">
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div style={{ width: `${Math.max(0, Math.min(100, course.score ?? 0))}%` }} className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300" />
                      </div>
                      <div className="text-xs text-slate-500 mt-1">Score: <strong>{course.score ?? '-'}</strong> · Pts: <strong>{course.gradePoint.toFixed(2)}</strong></div>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-0 flex items-center gap-2">
                    <button onClick={() => startEditing(course.id)} className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200">
                      <Edit3 size={16} />
                    </button>
                    <button onClick={() => removeCourse(course.id)} className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {sorted.length > VISIBLE_LIMIT && !showAll && (
              <div className="mt-4 text-center">
                <button onClick={() => setShowAll(true)} className="px-4 py-2 border rounded-full">Show more</button>
              </div>
            )}

          </div>

          {/* GPA Result - added bottom margin so it doesn't get covered by fixed bottom bar */}
          <div className="p-4 border-t bg-gradient-to-r from-emerald-50 to-white mb-24">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-xl shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpen size={24} />
                <div>
                  <div className="text-sm">Your GPA</div>
                  <div className="text-2xl font-bold">{gpa !== null ? gpa.toFixed(2) : '0.00'}</div>
                </div>
              </div>
              <div className="text-sm">
                <div>Based on {courses.filter(c => c.score !== null && c.creditHours !== null).length} course(s)</div>
                <div>{totalCredits} total credits</div>
              </div>
            </div>
          </div>

        </div>

        {/* Centered Modal for Add / Edit (used on all screen sizes) */}
        {showAddForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/40" onClick={() => setShowAddForm(false)} />
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{editingCourse ? 'Edit Course' : 'Add Course'}</h3>
                <button onClick={() => setShowAddForm(false)} className="p-1">
                  <X size={20} />
                </button>
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-slate-700 mb-1">Course Name</label>
                <input
                  ref={nameInputRef}
                  type="text"
                  placeholder="e.g., Mathematics"
                  value={newCourseName}
                  onChange={(e) => setNewCourseName(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Score (0-100)</label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    placeholder="0-100"
                    value={newCourseScore ?? ''}
                    onChange={(e) => setNewCourseScore(e.target.value === '' ? null : parseInt(e.target.value))}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Credit Hours</label>
                  <input
                    type="number"
                    min={0.5}
                    max={10}
                    step={0.5}
                    placeholder="1-10"
                    value={newCourseCredit ?? ''}
                    onChange={(e) => setNewCourseCredit(e.target.value === '' ? null : parseFloat(e.target.value))}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={addOrUpdateCourse} className="flex-1 py-3 bg-cyan-600 text-white rounded-2xl">{editingCourse ? 'Update' : 'Add Course'}</button>
                <button onClick={resetForm} className="flex-1 py-3 border rounded-2xl">Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Fixed bottom bar (visible on all screen sizes) */}
        <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none">
          <div className="max-w-3xl w-full px-4 pointer-events-auto">
            <div className="bg-white rounded-3xl shadow-lg p-4 flex items-center justify-between gap-6">
              <div>
                <div className="text-xs text-slate-500">Current GPA</div>
                <div className="text-lg font-bold">{gpa !== null ? gpa.toFixed(2) : '0.00'}</div>
              </div>
              <div className="flex items-center gap-3">
                {/* hide the add button while modal is open so it doesn't overlap */}
                {!showAddForm && (
                  <button onClick={openModalForNew} className="bg-cyan-600 text-white p-3 rounded-full shadow-md">
                    <Plus size={20} />
                  </button>
                )}
                <button onClick={exportCSV} className="p-3 border rounded-lg">
               
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GPACalculator;
