import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Trophy, Users, Globe, Target, Clock, UserCheck, Award } from 'lucide-react';
import BottomBar from '../../../components/Layout/BottomBar';

const ChallengeHome = () => {
  const navigate = useNavigate();

  const challengeModes = [
    {
      title: 'Challenge Yourself',
      description: 'Test your knowledge at your own pace',
      onClick: () => navigate('/challenge/self'),
      color: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90',
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      title: 'Live Challenge',
      description: 'Compete in real-time events',
      onClick: () => navigate('/challenge/live'),
      color: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90',
      icon: <Clock className="w-6 h-6 text-white" />
    },
    {
      title: 'Challenge with Friend',
      description: 'Compete with friends',
      onClick: () => navigate('/challenge/friend'),
      color: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90',
      icon: <UserCheck className="w-6 h-6 text-white" />
    },
    {
      title: 'Global Challenge',
      description: 'Compete with users worldwide',
      onClick: () => navigate('/challenge/global'),
      color: 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:opacity-90',
      icon: <Globe className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🚀 Knowledge Challenge
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Select a challenge mode and put your skills to the test!
        </motion.p>

        {/* Progress / Level Badge */}
        <motion.div 
          className="mb-10 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold shadow-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Award className="w-5 h-5" />
          <span>Current Level: Beginner</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challengeModes.map((mode, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <Card className="rounded-2xl shadow-lg overflow-hidden border-0 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4 bg-gradient-to-r from-gray-50 to-white pb-4">
                  <div className={`p-3 rounded-xl ${mode.color}`}>
                    {mode.icon}
                  </div>
                  <div className="text-left">
                    <CardTitle className="text-xl font-bold text-gray-800">{mode.title}</CardTitle>
                    <CardDescription className="text-gray-600">{mode.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <Button 
                    onClick={mode.onClick}
                    className={`w-full ${mode.color} text-white py-3 text-lg rounded-xl font-semibold transition-all duration-300 hover:shadow-lg`}
                    size="lg"
                  >
                    Start Challenge
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Information Section */}
        <motion.div 
          className="mt-16 p-6 bg-white rounded-2xl shadow-md border border-gray-100 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            How Challenges Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Self Challenge</h3>
              <p className="text-gray-600 text-sm">
                Choose difficulty level, set question amount, and test your knowledge at your own pace.
                Your results will be saved to track your progress.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Live Challenge</h3>
              <p className="text-gray-600 text-sm">
                Participate in scheduled events with countdown timers. Compete against others in real-time
                with questions controlled by admins.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Friend Challenge</h3>
              <p className="text-gray-600 text-sm">
                Select a friend from your list, choose subjects, and compete head-to-head. 
                See who scores higher in the same set of questions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Global Challenge</h3>
              <p className="text-gray-600 text-sm">
                Join the worldwide competition. Test your knowledge against users from around
                the world and climb the global leaderboard.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <BottomBar />
    </div>
  );
};

export default ChallengeHome;