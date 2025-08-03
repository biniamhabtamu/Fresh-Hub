import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-blue-600 h-2.5 rounded-full" 
        style={{ width: `${progress}%` }}
      ></div>
      <div className="text-xs text-gray-500 mt-1 text-right">
        {Math.round(progress)}% uploaded
      </div>
    </div>
  );
};

export default ProgressBar;