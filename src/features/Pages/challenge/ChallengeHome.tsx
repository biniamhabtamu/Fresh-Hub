// src/features/Pages/challenge/ChallengeHome.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// UI Components
const Button = ({ children, className = "", onClick, variant = "default", size = "default", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variants = {
    default: "bg-gradient-to-r from-purple-600 to-indigo-700 text-white hover:from-purple-700 hover:to-indigo-800 shadow-sm hover:shadow-md",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-800 shadow-sm",
    secondary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-sm",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-800",
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-xs",
    lg: "h-12 px-6 text-base",
    icon: "h-10 w-10",
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-2xl border border-slate-100 bg-white text-slate-950 shadow-sm hover:shadow-md transition-all duration-300 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-slate-600 ${className}`} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = "", ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const Progress = ({ value, className = "", ...props }) => (
  <div className={`w-full bg-slate-200 rounded-full h-2.5 ${className}`} {...props}>
    <div 
      className="bg-gradient-to-r from-fuchsia-600 to-purple-600 h-2.5 rounded-full transition-all duration-500" 
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const variants = {
    default: "bg-slate-100 text-slate-800",
    secondary: "bg-indigo-100 text-indigo-800",
    success: "bg-emerald-100 text-emerald-800",
    warning: "bg-amber-100 text-amber-800",
    purple: "bg-purple-100 text-purple-800",
    pink: "bg-pink-100 text-pink-800",
    outline: "border border-slate-300 text-slate-800",
  };
  
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

const Tabs = ({ defaultValue, children, className = "", ...props }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  return (
    <div className={className} {...props}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

const TabsList = ({ children, activeTab, setActiveTab, className = "", ...props }) => (
  <div className={`inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 p-1 text-slate-500 ${className}`} {...props}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);

const TabsTrigger = ({ value, children, activeTab, setActiveTab, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
      activeTab === value ? "bg-white text-slate-950 shadow-sm" : "hover:text-slate-900"
    } ${className}`}
    onClick={() => setActiveTab(value)}
    {...props}
  >
    {children}
  </button>
);

const TabsContent = ({ value, children, activeTab, className = "", ...props }) => (
  activeTab === value ? (
    <div className={`mt-4 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 ${className}`} {...props}>
      {children}
    </div>
  ) : null
);

const Avatar = ({ children, className = "", ...props }) => (
  <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props}>
    {children}
  </div>
);

const AvatarImage = ({ src, alt, className = "", ...props }) => (
  <img src={src} alt={alt} className={`aspect-square h-full w-full ${className}`} {...props} />
);

const AvatarFallback = ({ children, className = "", ...props }) => (
  <div className={`flex h-full w-full items-center justify-center rounded-full bg-slate-100 ${className}`} {...props}>
    {children}
  </div>
);

// Icons
const Trophy = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const Users = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Globe = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const Target = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const Clock = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const UserCheck = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);

const Award = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const Star = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Zap = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const TrendingUp = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const ChevronRight = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const BookOpen = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const Calendar = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BarChart3 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const Crown = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
  </svg>
);

const Sparkles = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

const Brain = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M17 9h.01" />
    <path d="M7 9h.01" />
  </svg>
);

const Lightbulb = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const Gem = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 3h12l4 6-10 13L2 9z" />
    <path d="M11 3 8 9l4 13 4-13-3-6" />
    <path d="M2 9h20" />
  </svg>
);

const Coins = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <path d="M7 6h1v4" />
    <path d="m16.71 13.88.7.71-2.82 2.82" />
  </svg>
);

const Bookmark = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  </svg>
);

const Bell = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const Rocket = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const ArrowLeft = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const Home = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const Search = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

// BottomBar component
const BottomBar = ({ activeTab, setActiveTab }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 flex justify-around items-center md:hidden z-50 shadow-lg">
    <button 
      className={`flex flex-col items-center ${activeTab === 'home' ? 'text-purple-600' : 'text-slate-500'}`}
      onClick={() => setActiveTab('home')}
    >
      <Home className="w-5 h-5" />
      <span className="text-xs mt-1">Home</span>
    </button>
    <button 
      className={`flex flex-col items-center ${activeTab === 'challenges' ? 'text-purple-600' : 'text-slate-500'}`}
      onClick={() => setActiveTab('challenges')}
    >
      <Target className="w-5 h-5" />
      <span className="text-xs mt-1">Challenges</span>
    </button>
    <button 
      className={`flex flex-col items-center ${activeTab === 'search' ? 'text-purple-600' : 'text-slate-500'}`}
      onClick={() => setActiveTab('search')}
    >
      <Search className="w-5 h-5" />
      <span className="text-xs mt-1">Search</span>
    </button>
    <button 
      className={`flex flex-col items-center ${activeTab === 'leaderboard' ? 'text-purple-600' : 'text-slate-500'}`}
      onClick={() => setActiveTab('leaderboard')}
    >
      <BarChart3 className="w-5 h-5" />
      <span className="text-xs mt-1">Ranking</span>
    </button>
    <button 
      className={`flex flex-col items-center ${activeTab === 'profile' ? 'text-purple-600' : 'text-slate-500'}`}
      onClick={() => setActiveTab('profile')}
    >
      <UserCheck className="w-5 h-5" />
      <span className="text-xs mt-1">Profile</span>
    </button>
  </div>
);

// Main ChallengeHome component
const ChallengeHome = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("challenges");
  const [bottomNav, setBottomNav] = useState("challenges");
  const [dailyStreak, setDailyStreak] = useState(3);
  const [userPoints, setUserPoints] = useState(1240);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const challengeModes = [
    {
      title: "Challenge Yourself",
      description: "Test your knowledge at your own pace",
      onClick: () => navigate("/challenge/ChallengeYourself"),
      color: "from-blue-500 to-cyan-600",
      hoverColor: "hover:from-blue-600 hover:to-cyan-700",
      icon: <Target className="w-6 h-6 text-white" />,
      badge: "Personalized",
      points: 25,
      badgeColor: "blue"
    },
    {
      title: "Live Challenge",
      description: "Compete in real-time events",
      onClick: () => navigate("/challenge/livechallenge"),
      color: "from-purple-500 to-fuchsia-600",
      hoverColor: "hover:from-purple-600 hover:to-fuchsia-700",
      icon: <Clock className="w-6 h-6 text-white" />,
      badge: "Live",
      points: 50,
      badgeColor: "purple"
    },
    {
      title: "Challenge with Friend",
      description: "Compete with friends",
      onClick: () => navigate("/challenge/challengefriend"),
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-600 hover:to-emerald-700",
      icon: <UserCheck className="w-6 h-6 text-white" />,
      badge: "Social",
      points: 40,
      badgeColor: "green"
    },
    {
      title: "Global Challenge",
      description: "Compete with users worldwide",
      onClick: () => navigate("/challenge/globalchallenge"),
      color: "from-amber-500 to-orange-600",
      hoverColor: "hover:from-amber-600 hover:to-orange-700",
      icon: <Globe className="w-6 h-6 text-white" />,
      badge: "Competitive",
      points: 75,
      badgeColor: "orange"
    }
  ];

  const stats = [
    { value: "2.5K+", label: "Active Users", icon: <Users className="w-4 h-4" />, change: "+12%", color: "from-blue-400 to-cyan-500" },
    { value: "10K+", label: "Questions", icon: <BookOpen className="w-4 h-4" />, change: "+5%", color: "from-purple-400 to-fuchsia-500" },
    { value: "500+", label: "Daily Challenges", icon: <Calendar className="w-4 h-4" />, change: "+8%", color: "from-amber-400 to-orange-500" },
    { value: "95%", label: "Satisfaction", icon: <Star className="w-4 h-4" />, change: "+2%", color: "from-green-400 to-emerald-500" }
  ];

  const upcomingEvents = [
    { 
      title: "Math Championship", 
      time: "Today, 7:00 PM", 
      participants: 243, 
      difficulty: "Hard",
      prize: "500 points",
      category: "Mathematics",
      color: "from-blue-400 to-cyan-500"
    },
    { 
      title: "Science Quiz", 
      time: "Tomorrow, 6:30 PM", 
      participants: 187, 
      difficulty: "Medium",
      prize: "300 points",
      category: "Science",
      color: "from-purple-400 to-fuchsia-500"
    },
    { 
      title: "History Trivia", 
      time: "Dec 15, 8:00 PM", 
      participants: 156, 
      difficulty: "Easy",
      prize: "200 points",
      category: "History",
      color: "from-amber-400 to-orange-500"
    }
  ];

  const leaderboard = [
    { name: "Melaku", score: 1240, avatar: "/avatars/melaku.jpg", change: "up" },
    { name: "Almaz", score: 1165, avatar: "/avatars/almaz.jpg", change: "down" },
    { name: "Dawit", score: 1120, avatar: "/avatars/dawit.jpg", change: "up" },
    { name: "Saba", score: 1085, avatar: "/avatars/saba.jpg", change: "same" },
    { name: "You", score: 980, avatar: "/avatars/user.jpg", change: "up", isCurrentUser: true }
  ];

  const categories = [
    { name: "Mathematics", icon: <BookOpen className="w-4 h-4" />, questions: 2450, color: "from-blue-400 to-cyan-500" },
    { name: "Science", icon: <Lightbulb className="w-4 h-4" />, questions: 1980, color: "from-purple-400 to-fuchsia-500" },
    { name: "History", icon: <Bookmark className="w-4 h-4" />, questions: 1670, color: "from-amber-400 to-orange-500" },
    { name: "Geography", icon: <Globe className="w-4 h-4" />, questions: 1420, color: "from-green-400 to-emerald-500" }
  ];

  const achievements = [
    { name: "First Quiz", earned: true, icon: <Award className="w-5 h-5" />, color: "from-blue-400 to-cyan-500" },
    { name: "5 Day Streak", earned: dailyStreak >= 5, icon: <Zap className="w-5 h-5" />, color: "from-purple-400 to-fuchsia-500" },
    { name: "Top 10 Rank", earned: false, icon: <Trophy className="w-5 h-5" />, color: "from-amber-400 to-orange-500" },
    { name: "1000 Points", earned: userPoints >= 1000, icon: <Coins className="w-5 h-5" />, color: "from-green-400 to-emerald-500" }
  ];

  const userLevel = {
    current: 5,
    next: 6,
    progress: 65,
    pointsToNext: 350
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/10">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
          <p className="text-slate-600">Loading challenges...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/10 pb-28 md:pb-0">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 -z-10"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-500/30 animate-pulse"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 5}s`
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 pt-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
              <Rocket className="w-7 h-7 text-purple-600" />
              QuizWiz
            </h1>
            <p className="text-slate-600">Expand your knowledge</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Online</span>
            </div>
            <Button 
              onClick={() => navigate("/profile")}
              variant="outline"
              className="rounded-full hidden md:flex"
              size="sm"
            >
              Profile
            </Button>
            <Button 
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 hidden md:flex"
              size="sm"
            >
              <Coins className="w-4 h-4 mr-1" />
              {userPoints}
            </Button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search challenges..." 
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
            <Zap className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-800">New features available!</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Challenge Your Mind
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Test your knowledge, compete with friends, and climb the global leaderboard with our engaging quiz platform.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-100 transition-transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                  <div className={`bg-gradient-to-r ${stat.color} p-2 rounded-lg`}>
                    {React.cloneElement(stat.icon, { className: "w-4 h-4 text-white" })}
                  </div>
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
                <div className="text-xs text-green-500 mt-1">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>

        {/* User Progress */}
        <div className="mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {userLevel.current}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-amber-500 rounded-full p-1">
                  <Crown className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Level {userLevel.current} Explorer</h3>
                <p className="text-sm text-slate-600">{userPoints} points</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < dailyStreak ? 'text-amber-500' : 'text-slate-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-slate-600">{dailyStreak} day streak</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 max-w-md w-full">
              <div className="flex justify-between text-sm mb-2">
                <span>Level {userLevel.current}</span>
                <span>{userLevel.progress}% to Level {userLevel.next}</span>
              </div>
              <Progress value={userLevel.progress} className="h-2" />
              <div className="text-xs text-slate-500 mt-2">
                {userLevel.pointsToNext} points needed for next level
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              <Zap className="w-4 h-4 mr-2" />
              Boost
            </Button>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="challenges" className="mb-12">
          <TabsList className="grid grid-cols-3 mb-8 bg-gradient-to-r from-slate-100 to-slate-50 p-1 rounded-xl">
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="challenges">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-purple-600" />
              Challenge Modes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {challengeModes.map((mode, index) => (
                <div
                  key={index}
                  className="transition-transform hover:-translate-y-1"
                >
                  <Card className="rounded-2xl overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${mode.color}`}>
                          {mode.icon}
                        </div>
                        <Badge variant={mode.badgeColor} className="text-xs">
                          {mode.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800">{mode.title}</CardTitle>
                      <CardDescription className="text-slate-600">{mode.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-amber-500">
                          <Coins className="w-4 h-4" />
                          <span className="text-sm font-medium">{mode.points} points</span>
                        </div>
                        <div className="text-xs text-slate-500">per challenge</div>
                      </div>
                      <Button 
                        onClick={mode.onClick}
                        className={`w-full bg-gradient-to-r ${mode.color} hover:${mode.hoverColor} text-white py-3 text-base rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
                        size="lg"
                      >
                        Start Now
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="leaderboard">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-purple-600" />
              Global Leaderboard
            </h2>
            
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Top Players</CardTitle>
                <CardDescription>This week's highest scorers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((player, index) => (
                    <div 
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-xl ${player.isCurrentUser ? 'bg-purple-50 border border-purple-200' : 'bg-slate-50'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-slate-200">{player.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">{player.name}</div>
                          <div className="text-sm text-slate-600">{player.score} points</div>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-slate-700">
                        {player.change === 'up' && <TrendingUp className="w-4 h-4 text-green-500 inline mr-1" />}
                        {player.change === 'down' && <TrendingUp className="w-4 h-4 text-red-500 inline mr-1 transform rotate-180" />}
                        #{index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => navigate('/leaderboard')}>
                  View Full Leaderboard
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="categories">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-purple-600" />
              Question Categories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="transition-transform hover:scale-102"
                >
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-all"
                    onClick={() => navigate(`/challenge/challengeself?category=${category.name.toLowerCase()}`)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white`}>
                          {category.icon}
                        </div>
                        <div>
                          <div className="font-semibold">{category.name}</div>
                          <div className="text-sm text-slate-600">{category.questions} questions</div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-purple-600" />
            Upcoming Events
          </h2>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-slate-100">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-xl transition-colors duration-200 hover:bg-slate-50"
              >
                <div className="flex items-start gap-4 mb-3 sm:mb-0">
                  <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{event.title}</h3>
                    <p className="text-sm text-slate-600">{event.time}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {event.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                        <Coins className="w-3 h-3 mr-1" />
                        {event.prize}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 self-stretch sm:self-auto">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                  <Button size="sm" className="rounded-lg whitespace-nowrap bg-gradient-to-r from-purple-600 to-indigo-700">
                    <Bell className="w-4 h-4 mr-2" />
                    Remind Me
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-purple-600" />
            Your Achievements
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="transition-transform hover:-translate-y-1"
              >
                <div className={`p-4 rounded-xl text-center border ${achievement.earned ? 'bg-white shadow-md border-purple-200' : 'bg-slate-100 border-slate-200 opacity-60'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${achievement.earned ? `bg-gradient-to-r ${achievement.color} text-white` : 'bg-slate-200 text-slate-400'}`}>
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm">{achievement.name}</h3>
                  <div className={`text-xs mt-1 ${achievement.earned ? 'text-green-600' : 'text-slate-500'}`}>
                    {achievement.earned ? 'Earned' : 'Locked'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl shadow-lg text-white mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-300" />
            How Challenges Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Self Challenge
              </h3>
              <p className="text-purple-100 text-sm">
                Choose difficulty level, set question amount, and test your knowledge at your own pace.
                Your results will be saved to track your progress.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Live Challenge
              </h3>
              <p className="text-purple-100 text-sm">
                Participate in scheduled events with countdown timers. Compete against others in real-time
                with questions controlled by admins.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Friend Challenge
              </h3>
              <p className="text-purple-100 text-sm">
                Select a friend from your list, choose subjects, and compete head-to-head. 
                See who scores higher in the same set of questions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Global Challenge
              </h3>
              <p className="text-purple-100 text-sm">
                Join the worldwide competition. Test your knowledge against users from around
                the world and climb the global leaderboard.
              </p>
            </div>
          </div>
        </div>

        {/* Achievement Callout */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-800">Your knowledge is growing!</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Keep challenging yourself</h3>
          <p className="text-slate-600 max-w-xl mx-auto">
            Regular practice improves knowledge retention by up to 70%. Try to complete at least one challenge per day!
          </p>
        </div>
      </div>

      {/* Floating Action Button for mobile */}
      <div className="fixed bottom-20 right-5 md:hidden z-40">
        <button
          aria-label="Start quick challenge"
          onClick={() => navigate("/challenge/challengeself")}
          className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        >
          <Zap className="w-6 h-6" />
        </button>
      </div>

      <BottomBar activeTab={bottomNav} setActiveTab={setBottomNav} />
    </div>
  );
};

export default ChallengeHome;