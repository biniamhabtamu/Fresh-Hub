import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Info, Bolt, Star, Award, Book, Mail, Clock, Users } from 'lucide-react';
import Header from '../components/Layout/Header';
import BottomBar from '../components/Layout/BottomBar';

export default function AboutUs(): JSX.Element {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About • FreshHub';
  }, []);

  const faqs = [
    {
      q: 'What is FreshHub?',
      a: 'FreshHub is a student-first learning platform that combines adaptive quizzes, AI-powered study recommendations, and real-time leaderboards to help learners study smarter and stay motivated.'
    },
    {
      q: 'How does the AI help me study?',
      a: 'The AI analyzes your quiz performance to surface weak topics, suggest practice questions, and create short, prioritized study plans so you improve faster with less time.'
    },
    {
      q: 'Is my data private?',
      a: 'Yes — user results and profiles are stored securely. You control what you share (profile, results) with peers. We do not sell personal data.'
    },
    {
      q: 'Can I share results with friends?',
      a: 'Absolutely — share profile links, export CSV snapshots, or challenge classmates using in-app sharing tools and the leaderboard system.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <motion.header initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-indigo-100 rounded-full p-3 mb-4">
            <Info className="w-6 h-6 text-indigo-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">About FreshHub</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
            A student-focused learning app with AI-powered study helpers, interactive quizzes and friendly competition to keep learning engaging.
          </p>
        </motion.header>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div whileHover={{ y: -4 }} className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-indigo-50">
                <Bolt className="text-indigo-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">AI Recommendations</h3>
                <p className="text-xs text-gray-500 mt-1">Personalized practice and study plans based on your results.</p>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-yellow-50">
                <Star className="text-yellow-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Interactive Quizzes</h3>
                <p className="text-xs text-gray-500 mt-1">Timed quizzes with instant feedback and clear explanations.</p>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-purple-50">
                <Award className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Leaderboards & Badges</h3>
                <p className="text-xs text-gray-500 mt-1">Compete with peers — earn badges and track progress over time.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* How it works */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">How FreshHub works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-md bg-indigo-50"><Book className="text-indigo-600" /></div>
                <div className="font-semibold">1. Learn</div>
              </div>
              <p className="text-sm text-gray-600">Read short topics, watch explanations, or import notes — then try a quick quiz.</p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-md bg-indigo-50"><Clock className="text-indigo-600" /></div>
                <div className="font-semibold">2. Practice</div>
              </div>
              <p className="text-sm text-gray-600">Take adaptive quizzes — questions focus on what you still need to master.</p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-md bg-indigo-50"><Users className="text-indigo-600" /></div>
                <div className="font-semibold">3. Improve & Compete</div>
              </div>
              <p className="text-sm text-gray-600">Track progress on leaderboards, compare with friends, and export snapshots to share.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/10 dark:to-cyan-900/10 rounded-2xl p-5 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Ready to study smarter?</h3>
            <p className="text-sm text-gray-600 mt-1">Start practicing with adaptive quizzes and see your progress climb.</p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => navigate('/auth')} className="px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold">Get Started</button>
            <button onClick={() => navigate('/feedback')} className="px-4 py-2 rounded-md bg-white border">Give feedback</button>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFAQ === i;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18, delay: i * 0.03 }} className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-gray-100">
                  <button
                    onClick={() => setOpenFAQ(open ? null : i)}
                    className="w-full flex items-start justify-between gap-3"
                    aria-expanded={open}
                  >
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-md bg-indigo-50"><Info className="text-indigo-600" /></div>
                        <div className="font-medium text-gray-800 dark:text-gray-100">{f.q}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{open ? 'Close' : 'Open'}</div>
                  </button>

                  {open && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.18 }} className="mt-3 text-sm text-gray-600 dark:text-gray-300 pl-12">
                      {f.a}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Footer small contact */}
        <section className="text-center py-6">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">Questions? Reach out — we love feedback.</div>
          <div className="flex items-center justify-center gap-3">
            <button onClick={() => navigate('/feedback')} className="px-4 py-2 rounded-md bg-white border">Send feedback</button>
            <a href="mailto:support@freshhub.app" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Contact support</a>
          </div>
          <div className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} FreshHub — Made for learners.</div>
        </section>
      </main>

      <BottomBar />
    </div>
  );
}
