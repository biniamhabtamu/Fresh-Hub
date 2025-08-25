// src/features/Pages/challenge/LiveChallenge.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-white font-semibold shadow-md transition-all active:scale-95 ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl p-6 bg-slate-800 text-white shadow-lg ${className}`}
  >
    {children}
  </div>
);

const Clock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const LiveChallenge = () => {
  const navigate = useNavigate();

  // Mock challenge
  const challenge = {
    title: "Psychology Master Challenge",
    description: "Covers chapters 1-4 of Intro to Psychology",
    date: "2023-12-15T21:00:00",
    duration: 60,
    participants: 243,
  };

  const calculateTimeRemaining = () => {
    const now = new Date();
    const total = Date.parse(challenge.date) - now.getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 630));
    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button
          onClick={() => navigate("/challenge")}
          className="bg-slate-700 flex items-center gap-2"
        >
          <ArrowLeft /> Back
        </Button>
        <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
          Rank #124
        </span>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Live Challenge Arena
        </h1>
        <p className="text-slate-400 mt-2">
          Compete in real-time events worldwide
        </p>
      </div>

      {/* Countdown */}
      <Card>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock />
          <h2 className="text-xl font-semibold">Next Challenge Starts In</h2>
        </div>
        <div className="grid grid-cols-4 gap-3 text-center">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
            const val = Object.values(timeRemaining)[i];
            return (
              <div key={i} className="bg-slate-700 p-3 rounded-lg">
                <div className="text-2xl font-bold">{val}</div>
                <div className="text-xs text-slate-400">{label}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 w-full">
            Register Now
          </Button>
        </div>
      </Card>

      {/* Challenge Info */}
      <div className="mt-6 space-y-4">
        <Card>
          <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
          <p className="text-slate-300 text-sm mb-4">{challenge.description}</p>
          <p className="text-sm text-slate-400">
            📅 {new Date(challenge.date).toLocaleString()} • ⏱{" "}
            {challenge.duration} mins • 👥 {challenge.participants} registered
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LiveChallenge;

