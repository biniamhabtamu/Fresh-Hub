import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-white font-semibold shadow-md transition-all active:scale-95 hover:shadow-lg ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-md text-white shadow-lg border border-slate-700/30 ${className}`}
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

// New Skeleton Components
const SkeletonCountdown = () => (
    <Card className="animate-pulse">
        <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-slate-700" />
            <div className="h-5 bg-slate-700 rounded w-1/2" />
        </div>
        <div className="grid grid-cols-4 gap-3 text-center mb-6">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-slate-800/50 p-4 rounded-xl backdrop-blur-md border border-slate-700/30">
                    <div className="h-8 w-10 mx-auto bg-slate-700 rounded mb-1" />
                    <div className="h-3 bg-slate-700 rounded w-2/3 mx-auto" />
                </div>
            ))}
        </div>
        <div className="h-12 bg-slate-700 rounded-full w-full" />
    </Card>
);

const SkeletonChallengeInfo = () => (
    <Card className="animate-pulse">
        <div className="h-6 bg-slate-700 rounded w-3/4 mb-4" />
        <div className="h-4 bg-slate-700 rounded w-full mb-6" />
        <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="h-4 bg-slate-700 rounded w-24" />
            <div className="h-4 bg-slate-700 rounded w-20" />
            <div className="h-4 bg-slate-700 rounded w-28" />
        </div>
    </Card>
);

const SkeletonInfoCard = () => (
    <Card className="flex flex-col items-center text-center animate-pulse">
        <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-3" />
        <div className="h-5 bg-slate-700 rounded w-2/3 mb-1" />
        <div className="h-4 bg-slate-700 rounded w-full" />
    </Card>
);

const LiveChallenge = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

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
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return { days, hours, minutes, seconds };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        // Simulate data loading
        const loadTimer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);
        
        return () => {
            clearTimeout(loadTimer);
            clearInterval(timer);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <div className="min-h-screen text-white p-6 relative overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full opacity-20 animate-pulse"
                            style={{
                                width: Math.random() * 300 + 50,
                                height: Math.random() * 300 + 50,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(99, 102, 241, 0.5)' : i % 3 === 1 ? 'rgba(139, 92, 246, 0.5)' : 'rgba(59, 130, 246, 0.5)'})`,
                                animationDuration: `${15 + Math.random() * 10}s`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <Button
                    onClick={() => navigate("/challenge")}
                    className="bg-slate-800/70 backdrop-blur-md flex items-center gap-2 border border-slate-700/30"
                >
                    <ArrowLeft /> Back
                </Button>
                <span className="bg-amber-400/90 text-black px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-md">
                    Rank #124
                </span>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Live Challenge Arena
                </h1>
                <p className="text-slate-300 mt-2 text-lg">
                    Compete in real-time events worldwide
                </p>
            </div>

            {/* Main Content Area */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="w-full mx-auto max-w-lg"
            >
                <AnimatePresence>
                    {loading ? (
                        <div key="loading">
                            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
                                <SkeletonCountdown />
                            </motion.div>
                            <motion.div 
                                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                                className="mt-6"
                            >
                                <SkeletonChallengeInfo />
                            </motion.div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
                                    <SkeletonInfoCard />
                                </motion.div>
                                <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
                                    <SkeletonInfoCard />
                                </motion.div>
                            </div>
                        </div>
                    ) : (
                        <div key="loaded">
                            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
                                {/* Countdown */}
                                <Card className="mb-6">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <Clock />
                                        <h2 className="text-xl font-semibold">Next Challenge Starts In</h2>
                                    </div>
                                    <div className="grid grid-cols-4 gap-3 text-center mb-6">
                                        {Object.entries(timeRemaining).map(([label, value], i) => (
                                            <div key={i} className="bg-slate-800/50 p-4 rounded-xl backdrop-blur-md border border-slate-700/30">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                    {value}
                                                </div>
                                                <div className="text-xs text-slate-300 mt-1 uppercase">{label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full py-3">
                                            Register Now
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>

                            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
                                {/* Challenge Info */}
                                <Card>
                                    <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                                    <p className="text-slate-300 text-sm mb-4">{challenge.description}</p>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                                        <span className="flex items-center gap-1">
                                            📅 {new Date(challenge.date).toLocaleString()}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            ⏱ {challenge.duration} mins
                                        </span>
                                        <span className="flex items-center gap-1">
                                            👥 {challenge.participants} registered
                                        </span>
                                    </div>
                                </Card>
                            </motion.div>
                            
                            <motion.div 
                                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
                            >
                                <Card className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                                        <span className="text-2xl">🏆</span>
                                    </div>
                                    <h3 className="font-semibold mb-1">Prize Pool</h3>
                                    <p className="text-slate-300 text-sm">$5,000 in rewards</p>
                                </Card>
                                
                                <Card className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                                        <span className="text-2xl">⭐</span>
                                    </div>
                                    <h3 className="font-semibold mb-1">Difficulty</h3>
                                    <p className="text-slate-300 text-sm">Intermediate</p>
                                </Card>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Live Status Indicator */}
            <div className="fixed bottom-6 right-6 bg-red-500/90 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-semibold">LIVE NOW</span>
            </div>
        </div>
    );
};

export default LiveChallenge;