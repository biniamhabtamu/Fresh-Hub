import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Trophy, Users, Globe, Target, Search, Bell, Info, Star } from 'lucide-react';
import BottomBar from '../../../components/Layout/BottomBar';

type Mode = {
  id: string;
  title: string;
  description: string;
  route: string;
  color: string;
  icon: React.ReactNode;
  disabled?: boolean;
};

export default function ChallengeHome() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [toast, setToast] = useState('');
  const [level, setLevel] = useState({ name: 'Beginner', percent: 28 });

  const challengeModes: Mode[] = useMemo(() => [
    {
      id: 'self',
      title: 'Challenge Yourself',
      description: 'Test your knowledge at your own pace',
      route: '/challenge/self',
      color: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      id: 'friend',
      title: 'Challenge with Friend',
      description: 'Compete live with a friend (coming soon)',
      route: '/challenge/coming-soon',
      color: 'bg-gradient-to-r from-green-500 to-emerald-600',
      icon: <Users className="w-6 h-6 text-white" />, 
      disabled: true
    },
    {
      id: 'mid',
      title: 'Mid Challenge',
      description: 'Global leaderboard event (coming soon)',
      route: '/challenge/coming-soon',
      color: 'bg-gradient-to-r from-yellow-500 to-orange-600',
      icon: <Globe className="w-6 h-6 text-white" />,
      disabled: true
    },
    {
      id: 'final',
      title: 'Final Challenge',
      description: 'The ultimate test for top scorers',
      route: '/challenge/coming-soon',
      color: 'bg-gradient-to-r from-red-500 to-pink-600',
      icon: <Trophy className="w-6 h-6 text-white" />,
      disabled: true
    }
  ], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return challengeModes;
    return challengeModes.filter(m => m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q));
  }, [query, challengeModes]);

  // fake recent activity & stats (replace with real data later)
  const recent = [
    { id: 1, title: 'Self Challenge - 15 Qs', score: 78, date: 'Aug 18' },
    { id: 2, title: 'Mini Quiz - 10 Qs', score: 92, date: 'Aug 10' }
  ];

  const topStats = {
    bestScore: 92,
    streak: 4,
    attempts: 12
  };

  // toast auto dismiss
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  function openMode(mode: Mode) {
    if (mode.disabled) {
      setShowModal(true);
      return;
    }
    navigate(mode.route);
  }

  function handleNotify() {
    if (!notifyEmail.includes('@')) {
      setToast('Please enter a valid email');
      return;
    }
    setToast('You will be notified — thanks!');
    setNotifyEmail('');
    setShowModal(false);
  }

  // progress ring helper
  function ProgressRing({ percent }: { percent: number }) {
    const size = 72;
    const stroke = 8;
    const radius = (size - stroke) / 2;
    const circumference = Math.PI * 2 * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
      <svg width={size} height={size} className="block">
        <circle
          stroke="rgba(99,102,241,0.12)"
          strokeWidth={stroke}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="url(#g)"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 600ms ease' }}
        />
        <defs>
          <linearGradient id="g" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize={12} fill="#111827">{percent}%</text>
      </svg>
    );
  }

  // small helper for mobile snap list
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 pb-24">
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              🚀 Knowledge Challenge
            </motion.h1>
            <p className="text-sm text-gray-600">Choose a mode, improve your level and climb the leaderboard.</p>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border">
              <ProgressRing percent={level.percent} />
              <div className="text-left">
                <div className="text-xs text-gray-500">Level</div>
                <div className="font-semibold">{level.name}</div>
              </div>
            </div>

            <Button className="px-3 py-2 rounded-full flex items-center gap-2" onClick={() => setToast('Quick practice started (demo)')}>
              <Star className="w-4 h-4" /> Practice
            </Button>
          </div>
        </div>

        {/* Search + filters (mobile friendly) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          <div className="sm:col-span-2">
            <label className="relative block">
              <span className="sr-only">Search challenges</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </span>
              <input
                className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-200 rounded-2xl py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="Search challenge modes or keywords..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search challenge modes"
              />
            </label>
          </div>

          <div className="flex gap-2 justify-end">
            <Button onClick={() => { setLevel(l => ({ ...l, percent: Math.min(100, l.percent + 5) })); setToast('Level increased for demo'); }} className="rounded-full px-4 py-2">+Level</Button>
            <Button onClick={() => { setLevel({ name: 'Beginner', percent: 28 }); setToast('Reset demo level'); }} className="rounded-full px-3 py-2">Reset</Button>
          </div>
        </div>

        {/* Main content: modes + quick stats */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* left: modes list */}
          <div className="lg:col-span-2">
            {/* Mobile horizontal scroll with snap */}
            <div ref={scrollRef} className="sm:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory py-2">
              {filtered.map((mode) => (
                <div key={mode.id} className="snap-start w-72 flex-shrink-0">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Card className="rounded-2xl shadow-md overflow-hidden border border-gray-100">
                      <CardHeader className="flex items-center gap-3 px-4 py-3">
                        <div className={`p-3 rounded-full ${mode.color}`}>
                          {mode.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold">{mode.title}</CardTitle>
                          <CardDescription className="text-sm">{mode.description}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button onClick={() => openMode(mode)} className={`w-full ${mode.color} text-white py-2 text-sm rounded-xl`} disabled={mode.disabled}>
                          {mode.disabled ? 'Coming Soon' : 'Start'}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Desktop / tablet grid */}
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((mode) => (
                <motion.div key={mode.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Card className="rounded-2xl shadow-md overflow-hidden border border-gray-100">
                    <CardHeader className="flex items-center gap-3 px-4 py-3">
                      <div className={`p-3 rounded-full ${mode.color}`}>
                        {mode.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">{mode.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">{mode.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-3 flex-col sm:flex-row">
                        <Button onClick={() => openMode(mode)} className={`flex-1 ${mode.color} text-white py-2 rounded-xl`} disabled={mode.disabled}>
                          {mode.disabled ? 'Coming Soon' : 'Start Now'}
                        </Button>

                        <Button onClick={() => setToast('Previewing rules (demo)')} variant="ghost" className="border rounded-xl">
                          <Info className="w-4 h-4 mr-2" /> Rules
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* small features: quick cards */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-white rounded-xl shadow-sm border p-3 text-center">
                <div className="text-xs text-gray-500">Best Score</div>
                <div className="font-semibold text-lg">{topStats.bestScore}%</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border p-3 text-center">
                <div className="text-xs text-gray-500">Streak</div>
                <div className="font-semibold text-lg">{topStats.streak} 🔥</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border p-3 text-center hidden sm:block">
                <div className="text-xs text-gray-500">Attempts</div>
                <div className="font-semibold text-lg">{topStats.attempts}</div>
              </div>
            </div>

            {/* recent activity */}
            <div className="mt-4">
              <Card className="rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent activity
                    <span className="text-sm text-gray-500">{recent.length} items</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recent.map(r => (
                      <div key={r.id} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{r.title}</div>
                          <div className="text-xs text-gray-500">{r.date}</div>
                        </div>
                        <div className="text-sm font-semibold">{r.score}%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>

          {/* right column: bigger stats & actions */}
          <aside className="space-y-4">
            <Card className="rounded-2xl shadow-md p-4 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Your Level</div>
                  <div className="font-semibold text-lg">{level.name}</div>
                </div>
                <div>
                  <ProgressRing percent={level.percent} />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <Button onClick={() => setToast('Study plan created (demo)')} className="col-span-2 rounded-xl py-2">Create Study Plan</Button>
                <Button variant="ghost" onClick={() => setToast('Leaderboard opens (demo)')}>Leaderboard</Button>
                <Button variant="ghost" onClick={() => setToast('Share link copied (demo)')}>Share</Button>
              </div>
            </Card>

            <Card className="rounded-2xl shadow-sm p-4 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Notifications</div>
                  <div className="font-semibold">0 unread</div>
                </div>
                <Button className="rounded-full p-2" onClick={() => setToast('Notifications toggled (demo)')}>
                  <Bell className="w-4 h-4" />
                </Button>
              </div>
            </Card>

          </aside>
        </div>


      </div>

      {/* bottom bar + modal + toast */}
      <BottomBar />

      {/* Coming soon modal */}
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-indigo-50 rounded-full">
                <Info className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Feature coming soon</h3>
                <p className="text-sm text-gray-600 mt-1">We are building this feature. Enter your email and we'll notify you when it's live.</p>
              </div>
            </div>

            <div className="mt-4">
              <input value={notifyEmail} onChange={(e) => setNotifyEmail(e.target.value)} placeholder="you@example.com" className="w-full border rounded-xl px-3 py-2" />
            </div>

            <div className="mt-4 flex gap-2 justify-end">
              <Button variant="ghost" onClick={() => setShowModal(false)}>Cancel</Button>
              <Button onClick={handleNotify}>Notify me</Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* toast */}
      {toast && (
        <div className="fixed right-4 bottom-20 z-50">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-white border rounded-xl px-4 py-2 shadow-md">
            {toast}
          </motion.div>
        </div>
      )}

    </div>
  );
}
