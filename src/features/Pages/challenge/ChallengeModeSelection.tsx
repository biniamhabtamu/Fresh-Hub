import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Sliders, Play, Info } from 'lucide-react';

// A lightweight, reusable ChallengeCard component (you can move this to components/ChallengeCard later)
const ChallengeCard = ({ title, description, onClick, color = 'bg-blue-500', compact = false }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ translateY: -6 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full text-left rounded-2xl shadow-lg p-5 flex items-center gap-4 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-colors ${color}`}
      aria-label={`Select ${title}`}
    >
      <div className="flex-shrink-0 p-3 rounded-lg bg-white/20">
        {title.includes('Quick') ? <Play className="w-6 h-6 text-white" /> : <Sliders className="w-6 h-6 text-white" />}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-sm text-white/90">{compact ? 'Fast' : 'Custom'}</span>
        </div>
        <p className="mt-1 text-sm text-white/90">{description}</p>

        {!compact && (
          <div className="mt-3 flex items-center gap-2 text-xs text-white/80">
            <Clock className="w-4 h-4" />
            <span>Estimated time: {title.includes('Quick') ? '10 minutes' : 'Choose your own'}</span>
          </div>
        )}
      </div>
    </motion.button>
  );
};

// Enhanced Challenge Mode Selection page
const ChallengeModeSelection = () => {
  const navigate = useNavigate();

  const modes = [
    {
      title: 'Quick Challenge',
      description: '10 questions, 1 minute each — rapid-fire review to warm up',
      onClick: () => navigate('/challenge/self?questions=10'),
      color: 'bg-gradient-to-r from-blue-500 to-indigo-600'
    },
    {
      title: 'Custom Challenge',
      description: 'Set your own number of questions and time — build your ideal practice',
      onClick: () => navigate('/challenge/self/custom'),
      color: 'bg-gradient-to-r from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <motion.header initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2">Challenge Yourself</h1>
          <p className="text-center text-gray-600 mb-6">Pick a mode below to start a focused practice session. Track progress and level up as you improve.</p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm">
              <div className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 font-semibold">Level 1</div>
              <div className="text-sm text-gray-500">Points: 120</div>
            </div>

            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white font-medium shadow hover:opacity-95"
              onClick={() => navigate('/challenge/stats')}
            >
              <Info className="w-4 h-4" />
              My Stats
            </button>
          </div>
        </motion.header>

        {/* Mode cards */}
        <div className="space-y-4">
          {modes.map((mode, idx) => (
            <ChallengeCard
              key={idx}
              title={mode.title}
              description={mode.description}
              onClick={mode.onClick}
              color={mode.color}
            />
          ))}
        </div>

        {/* Extra features area */}
        <motion.section className="mt-8 p-4 rounded-2xl bg-white shadow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-lg font-semibold mb-2">Customize your run</h2>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center">
            <label className="flex-1">
              <div className="text-sm text-gray-600 mb-1">Number of questions</div>
              <input type="range" min="5" max="50" defaultValue={10} className="w-full" />
            </label>

            <label className="flex-1">
              <div className="text-sm text-gray-600 mb-1">Time per question</div>
              <select defaultValue="1" className="w-full rounded-md border px-3 py-2">
                <option value="1">1 minute</option>
                <option value="0.5">30 seconds</option>
                <option value="2">2 minutes</option>
                <option value="0">No timer</option>
              </select>
            </label>

            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white" onClick={() => navigate('/challenge/self?questions=10')}>Start Quick</button>
          </div>

          <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Tip: If you're studying for an exam, use the custom mode to match your real test conditions.
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.footer className="mt-6 text-center text-sm text-gray-600">
          <div>Want a multiplayer mode? <button onClick={() => navigate('/feedback')} className="text-indigo-600 underline">Send feedback</button></div>
        </motion.footer>
      </div>
    </div>
  );
};

export default ChallengeModeSelection;
