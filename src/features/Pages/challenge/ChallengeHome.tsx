import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Trophy, Users, Globe, Target, Star, Zap, Award, ChevronRight, BarChart3, Clock, Calendar } from 'lucide-react';
import BottomBar from '../../../components/Layout/BottomBar';
import { useState, useEffect } from 'react';

const ChallengeHome = () => {
  const navigate = useNavigate();
  const [activeNotification, setActiveNotification] = useState(true);
  const [currentLevel, setCurrentLevel] = useState("Beginner");
  const [points, setPoints] = useState(350);
  const [streak, setStreak] = useState(5);

  // Mock upcoming events data
  const upcomingEvents = [
    { id: 1, name: "Weekly Quiz", time: "Today, 7:00 PM", participants: 245 },
    { id: 2, name: "Science Trivia", time: "Tomorrow, 6:30 PM", participants: 178 },
    { id: 3, name: "History Challenge", time: "Aug 25, 8:00 PM", participants: 312 }
  ];

  const challengeModes = [
    {
      title: 'Challenge Yourself',
      description: 'Test your knowledge at your own pace',
      onClick: () => navigate('/challenge/self'),
      color: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      hoverColor: 'hover:from-blue-600 hover:to-indigo-700',
      icon: <Target className="w-6 h-6 text-white" />,
      features: ['Customizable difficulty', 'Progress tracking', 'Instant feedback'],
      disabled: false
    },
    {
      title: 'Challenge with Friend',
      description: 'Compete with friends in real-time',
      onClick: () => navigate('/challenge/friend'),
      color: 'bg-gradient-to-r from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-600 hover:to-emerald-700',
      icon: <Users className="w-6 h-6 text-white" />,
      features: ['Invite friends', 'Live scoring', 'Chat during game'],
      disabled: false
    },
    {
      title: 'Group Challenge',
      description: 'Join or create team competitions',
      onClick: () => navigate('/challenge/group'),
      color: 'bg-gradient-to-r from-purple-500 to-pink-600',
      hoverColor: 'hover:from-purple-600 hover:to-pink-700',
      icon: <Globe className="w-6 h-6 text-white" />,
      features: ['Team play', 'Collaborative scoring', 'Group rankings'],
      disabled: false
    },
    {
      title: 'Tournament',
      description: 'Compete in scheduled events',
      onClick: () => navigate('/challenge/tournament'),
      color: 'bg-gradient-to-r from-yellow-500 to-orange-600',
      hoverColor: 'hover:from-yellow-600 hover:to-orange-700',
      icon: <Trophy className="w-6 h-6 text-white" />,
      features: ['Scheduled events', 'Leaderboards', 'Exclusive rewards'],
      disabled: false
    }
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Hide notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveNotification(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 pb-20 pt-4 px-4">
      {/* Notification Banner */}
      {activeNotification && (
        <motion.div 
          className="mx-auto max-w-5xl mb-6 bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-3 rounded-lg shadow-md flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            <p className="text-sm">Daily challenge available! Earn double points today.</p>
          </div>
          <button 
            onClick={() => setActiveNotification(false)}
            className="text-white hover:text-gray-200"
          >
            ✕
          </button>
        </motion.div>
      )}

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            🚀 Knowledge Challenge
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Select a challenge mode and put your skills to the test! Compete, learn, and climb the leaderboards.
          </p>
        </motion.div>

        {/* User Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="p-2 bg-indigo-100 rounded-full mb-2">
              <Award className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="text-xs text-gray-500">Level</span>
            <span className="font-bold text-indigo-700">{currentLevel}</span>
          </motion.div>

          <motion.div 
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="p-2 bg-blue-100 rounded-full mb-2">
              <Star className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs text-gray-500">Points</span>
            <span className="font-bold text-blue-700">{points}</span>
          </motion.div>

          <motion.div 
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="p-2 bg-green-100 rounded-full mb-2">
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-xs text-gray-500">Rank</span>
            <span className="font-bold text-green-700">Top 15%</span>
          </motion.div>

          <motion.div 
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="p-2 bg-orange-100 rounded-full mb-2">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-xs text-gray-500">Streak</span>
            <span className="font-bold text-orange-700">{streak} days</span>
          </motion.div>
        </motion.div>

        {/* Upcoming Events Section */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
              Upcoming Events
            </h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
              View all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            {upcomingEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                className={`flex items-center justify-between py-3 ${index !== upcomingEvents.length - 1 ? 'border-b border-gray-100' : ''}`}
                whileHover={{ backgroundColor: '#f9fafb' }}
              >
                <div>
                  <h3 className="font-medium text-gray-800">{event.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {event.time} • {event.participants} participants
                  </p>
                </div>
                <Button size="sm" className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                  Join
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenge Modes Section */}
        <motion.h2 
          className="text-xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Challenge Modes
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {challengeModes.map((mode, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="rounded-2xl shadow-sm overflow-hidden border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${mode.color}`}>
                      {mode.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-800">{mode.title}</CardTitle>
                      <CardDescription className="mt-1">{mode.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <ul className="text-sm text-gray-600 space-y-1">
                      {mode.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    onClick={mode.onClick}
                    className={`w-full ${mode.color} ${mode.hoverColor} text-white py-2 text-base rounded-xl transition-all duration-300 transform hover:scale-[1.02]`}
                    disabled={mode.disabled}
                    size="lg"
                  >
                    Start Challenge
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <BottomBar />
    </div>
  );
};

export default ChallengeHome;