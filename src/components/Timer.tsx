import { useEffect, useState } from 'react';

interface TimerProps {
  initialTime: number;
  onTimeout: () => void;
  isActive: boolean;
}

export const Timer = ({ initialTime, onTimeout, isActive }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onTimeout]);

  return (
    <div className="text-2xl font-bold">
      Time Left: <span className={timeLeft <= 5 ? 'text-red-500' : 'text-green-500'}>{timeLeft}s</span>
    </div>
  );
};