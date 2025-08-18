import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Trophy, Users, Globe, Target } from 'lucide-react';

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
      title: 'Challenge with Friend',
      description: 'Coming Soon - Compete with friends',
      onClick: () => navigate('/challenge/coming-soon'),
      color: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90',
      icon: <Users className="w-6 h-6 text-white" />,
      disabled: true
    },
    {
      title: 'Mid Challenge',
      description: 'Coming Soon - Global competition',
      onClick: () => navigate('/challenge/coming-soon'),
      color: 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:opacity-90',
      icon: <Globe className="w-6 h-6 text-white" />,
      disabled: true
    },
    {
      title: 'Final Challenge',
      description: 'Coming Soon - Ultimate test',
      onClick: () => navigate('/challenge/coming-soon'),
      color: 'bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90',
      icon: <Trophy className="w-6 h-6 text-white" />,
      disabled: true
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
          className="mb-10 inline-block px-6 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold shadow-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🌟 Current Level: Beginner
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challengeModes.map((mode, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Card className="rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <CardHeader className="flex items-center gap-3">
                  <div className={`p-3 rounded-full ${mode.color}`}>
                    {mode.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{mode.title}</CardTitle>
                    <CardDescription>{mode.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={mode.onClick}
                    className={`w-full ${mode.color} text-white py-2 text-lg rounded-xl`}
                    disabled={mode.disabled}
                  >
                    {mode.disabled ? 'Coming Soon' : 'Start Now'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeHome;
