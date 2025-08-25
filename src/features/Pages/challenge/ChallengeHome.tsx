import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomBar from "../../../components/Layout/BottomBar";
import Header from "../../../components/Layout/Header";

const Card = ({ title, description, icon, color, onClick, popularity, isPopular }) => (
  <div
    onClick={onClick}
    className={`relative w-full max-w-md p-6 rounded-2xl shadow-xl cursor-pointer text-white bg-gradient-to-br ${color} transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group`}
  >
    {isPopular && (
      <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full z-10">
        POPULAR
      </div>
    )}
    
    <div className="flex items-center space-x-5">
      <div className="bg-white/20 p-4 rounded-xl group-hover:bg-white/30 transition-all duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm opacity-90 mb-3">{description}</p>
        
        {popularity && (
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${popularity}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-300"></div>
  </div>
);

const Target = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const Users = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Trophy = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const ChallengeHome = () => {
  const navigate = useNavigate();
  const [activePlayers, setActivePlayers] = useState(42);

  useEffect(() => {
    // Simulate changing player count
    const interval = setInterval(() => {
      setActivePlayers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const challenges = [
    {
      title: "Question Challenge",
      description: "Test your knowledge with fun questions",
      icon: <Target className="text-white" />,
      color: "from-purple-600 via-indigo-600 to-blue-500",
      popularity: 78,
      onClick: () => navigate("/challenge/ChallengeYourself"),
    },
    {
      title: "Live Challenge",
      description: "Compete with others in real-time",
      icon: <Users className="text-white" />,
      color: "from-rose-600 via-pink-600 to-red-500",
      popularity: 92,
      isPopular: true,
      onClick: () => navigate("/challenge/LiveChallenge"),
    },
    {
      title: "Daily Tournament",
      description: "Win rewards in special events",
      icon: <Trophy className="text-white" />,
      color: "from-amber-600 via-orange-600 to-yellow-500",
      popularity: 65,
      onClick: () => navigate("/challenge/DailyTournament"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
    
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <Header />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float${i % 3} ${15 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="text-center mb-8 z-10">
        <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-md">
          Challenge Arena
        </h1>
        <p className="text-white/90 max-w-md mx-auto text-lg">
          Choose your challenge and test your skills against players worldwide
        </p>
      </div>
      
      <div className="w-full max-w-md space-y-6 z-10">
        {challenges.map((c, i) => (
          <Card key={i} {...c} />
        ))}
      </div>
      
      <div className="mt-10 text-center z-10">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center mr-3 shadow-md">
              <span className="text-white font-bold">{activePlayers}</span>
            </div>
            <span className="text-white text-sm font-medium">
              Active players right now
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float0 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -15px) rotate(5deg); }
        }
      `}</style>
      <BottomBar />
    </div>
  );
};

export default ChallengeHome;