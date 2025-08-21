// src/features/Pages/challenge/LiveChallenge.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// UI Components (self-contained to avoid import issues)
const Button = ({ children, className = "", onClick, variant = "default", size = "default", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95",
    outline: "border border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500 active:scale-95",
    secondary: "bg-slate-700 text-slate-300 hover:bg-slate-600 active:scale-95",
  };
  const sizes = {
    default: "h-10 py-2 px-6",
    sm: "h-9 px-4 rounded-full",
    lg: "h-12 px-8 rounded-full text-lg",
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
  <div className={`rounded-3xl border border-slate-700 bg-slate-800 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-2 p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-2xl font-bold leading-tight tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-slate-400 ${className}`} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = "", ...props }) => (
  <div className={`flex items-center p-6 pt-4 ${className}`} {...props}>
    {children}
  </div>
);

const Progress = ({ value, className = "", ...props }) => (
  <div className={`w-full bg-slate-700 rounded-full h-2 ${className}`} {...props}>
    <div 
      className="bg-indigo-500 h-2 rounded-full transition-all duration-500" 
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

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
  <div className={`inline-flex h-12 items-center justify-center rounded-full bg-slate-800 p-2 text-slate-500 shadow-inner ${className}`} {...props}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);

const TabsTrigger = ({ value, children, activeTab, setActiveTab, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
      activeTab === value ? "bg-slate-900 text-white shadow-sm" : "hover:text-white"
    } ${className}`}
    onClick={() => setActiveTab(value)}
    {...props}
  >
    {children}
  </button>
);

const TabsContent = ({ value, children, activeTab, className = "", ...props }) => (
  activeTab === value ? (
    <div className={`mt-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 ${className}`} {...props}>
      {children}
    </div>
  ) : null
);

// Icons (using Lucide React equivalents as JSX)
const Clock = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
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

const Calendar = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BookOpen = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const Bell = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const ArrowLeft = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const Award = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
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

// Main LiveChallenge component
const LiveChallenge = () => {
  const navigate = useNavigate();

  // Mock data for challenges
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: 'Psychology Master Challenge',
      description: 'Comprehensive test covering chapters 1-4 of Introduction to Psychology',
      date: '2023-12-15T21:00:00',
      duration: 60,
      subjects: ['Psychology'],
      chapters: 'Chapters 1-4',
      participants: 243,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Logical Reasoning Championship',
      description: 'Advanced logical reasoning questions from all chapters',
      date: '2023-12-10T20:30:00',
      duration: 45,
      subjects: ['Logic', 'Critical Thinking'],
      chapters: 'All chapters',
      participants: 187,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Mathematics Challenge',
      description: 'Algebra and Geometry questions for intermediate level',
      date: '2023-11-28T19:00:00',
      duration: 75,
      subjects: ['Mathematics'],
      chapters: 'Algebra, Geometry',
      participants: 156,
      status: 'completed'
    }
  ]);

  // Calculate time remaining until the next challenge
  const calculateTimeRemaining = (challengesList) => {
    const now = new Date();
    const nextChallenge = challengesList.find(c => c.status === 'upcoming' && new Date(c.date) > now);
    if (!nextChallenge) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const total = Date.parse(nextChallenge.date) - Date.parse(now);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(() => calculateTimeRemaining(challenges));
  const [isLive, setIsLive] = useState(false); // You'd need logic to determine this from your backend
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    if (timeRemaining.days <= 0 && timeRemaining.hours <= 0 &&
        timeRemaining.minutes <= 0 && timeRemaining.seconds <= 0) {
      setIsLive(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeRemaining(calculateTimeRemaining(challenges));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining, challenges]);

  const upcomingChallenges = challenges.filter(c => c.status === 'upcoming');
  const completedChallenges = challenges.filter(c => c.status === 'completed');

  return (
    <div className="min-h-screen bg-[#0A122A] text-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            onClick={() => navigate('/challenge')}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full text-sm">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>Your Rank: #124</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Live Challenge Arena
            </h1>
            <p className="text-slate-300 text-lg md:text-xl">
              Compete in real-time events against participants worldwide
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <Card className="bg-slate-900 border-slate-800 p-6 sm:p-8">
              <CardHeader className="p-0 pb-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <CardTitle className="text-2xl sm:text-3xl flex items-center gap-2 text-white">
                    <Clock className="w-7 h-7 text-blue-400" />
                    Next Challenge Starts In
                  </CardTitle>
                  {isLive ? (
                    <div className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full animate-pulse">
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      <span className="text-sm font-semibold">LIVE NOW</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full">
                      <Bell className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 text-sm font-semibold">UPCOMING</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-0 pt-4">
                {isLive ? (
                  <div className="text-center py-8">
                    <div className="text-3xl font-bold mb-4">Challenge is Live!</div>
                    <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all duration-300">
                      Join Now
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
                    <div className="text-center p-4 bg-slate-800 rounded-xl">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{timeRemaining.days}</div>
                      <div className="text-slate-400 text-sm mt-1">Days</div>
                    </div>
                    <div className="text-center p-4 bg-slate-800 rounded-xl">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{timeRemaining.hours}</div>
                      <div className="text-slate-400 text-sm mt-1">Hours</div>
                    </div>
                    <div className="text-center p-4 bg-slate-800 rounded-xl">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{timeRemaining.minutes}</div>
                      <div className="text-slate-400 text-sm mt-1">Minutes</div>
                    </div>
                    <div className="text-center p-4 bg-slate-800 rounded-xl">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{timeRemaining.seconds}</div>
                      <div className="text-slate-400 text-sm mt-1">Seconds</div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="bg-slate-800/50 py-3 rounded-b-3xl">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>Next challenge: {upcomingChallenges[0]?.date ? new Date(upcomingChallenges[0].date).toLocaleString() : 'TBA'}</span>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Challenges Tabs */}
          <div>
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8 mx-auto w-full md:w-3/4">
                <TabsTrigger value="upcoming">
                  Upcoming
                </TabsTrigger>
                <TabsTrigger value="completed">
                  Completed
                </TabsTrigger>
              </TabsList>

              {/* Upcoming */}
              <TabsContent value="upcoming">
                <div className="space-y-6">
                  {upcomingChallenges.map((challenge) => (
                    <div key={challenge.id}>
                      <Card className="p-6">
                        <CardHeader className="p-0 pb-4">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <CardTitle className="text-xl">{challenge.title}</CardTitle>
                            <div className="flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full">
                              <Clock className="w-4 h-4 text-blue-400" />
                              <span className="text-blue-400 text-sm font-semibold">{challenge.duration} mins</span>
                            </div>
                          </div>
                          <CardDescription className="mt-2">{challenge.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 pt-4">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-slate-300 mb-2">Subjects & Chapters</h4>
                              <div className="flex flex-wrap gap-2">
                                {challenge.subjects.map((subject, i) => (
                                  <span key={i} className="bg-slate-700 px-3 py-1 rounded-full text-sm flex items-center gap-1 text-slate-300">
                                    <BookOpen className="w-3 h-3 text-slate-400" />{subject}
                                  </span>
                                ))}
                              </div>
                              <p className="text-slate-400 text-sm mt-2">Covering: {challenge.chapters}</p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-4 h-4 text-slate-400" />
                                <span className="text-slate-400">{new Date(challenge.date).toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Users className="w-4 h-4 text-slate-400" />
                                <span className="text-slate-400">{challenge.participants} participants registered</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-slate-900/50">
                          <Button variant="outline" className="w-full sm:w-auto">Set Reminder</Button>
                          <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">Register Now</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Completed */}
              <TabsContent value="completed">
                <div className="space-y-6">
                  {completedChallenges.map((challenge) => (
                    <div key={challenge.id}>
                      <Card className="p-6">
                        <CardHeader className="p-0 pb-4">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <CardTitle className="text-xl">{challenge.title}</CardTitle>
                            <div className="flex items-center gap-2 bg-purple-500/20 px-3 py-1 rounded-full">
                              <Award className="w-4 h-4 text-purple-400" />
                              <span className="text-purple-400 text-sm font-semibold">COMPLETED</span>
                            </div>
                          </div>
                          <CardDescription className="mt-2">{challenge.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 pt-4">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-slate-300 mb-2">Your Performance</h4>
                              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="text-center p-3 bg-slate-700 rounded-xl w-full sm:w-1/3">
                                  <div className="text-2xl font-bold">78%</div>
                                  <div className="text-slate-400 text-sm">Score</div>
                                </div>
                                <div className="text-center p-3 bg-slate-700 rounded-xl w-full sm:w-1/3">
                                  <div className="text-2xl font-bold">#42</div>
                                  <div className="text-slate-400 text-sm">Rank</div>
                                </div>
                                <div className="text-center p-3 bg-slate-700 rounded-xl w-full sm:w-1/3">
                                  <div className="text-2xl font-bold">92</div>
                                  <div className="text-slate-400 text-sm">Participants</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-300 mb-2">Subject Performance</h4>
                              <div className="space-y-2">
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>Psychology</span>
                                    <span>85%</span>
                                  </div>
                                  <Progress value={85} className="h-2 bg-slate-700" />
                                </div>
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>Logical Reasoning</span>
                                    <span>72%</span>
                                  </div>
                                  <Progress value={72} className="h-2 bg-slate-700" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-slate-900/50">
                          <Button variant="outline" className="w-full sm:w-auto">Review Answers</Button>
                          <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" /> View Leaderboard
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChallenge;