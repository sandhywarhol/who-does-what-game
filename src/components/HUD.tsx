import React from 'react';
import { motion } from 'framer-motion';

interface HUDProps {
  currentLevel: number;
  totalLevels: number;
  score: number;
  lives: number;
  isMuted: boolean;
  onToggleMute: () => void;
  onRestart: () => void;
}

export const HUD: React.FC<HUDProps> = ({
  currentLevel,
  totalLevels,
  score,
  lives,
  isMuted,
  onToggleMute,
  onRestart
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto mb-6"
    >
      <div className="bg-white rounded-3xl p-4 card-shadow">
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Left side - Progress */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-sm font-bold text-gray-600 font-comic">Level</div>
              <div className="text-2xl font-bold text-primary-600 font-comic">
                {currentLevel + 1}/{totalLevels}
              </div>
            </div>
            
            <div className="w-32 bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-primary-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentLevel + 1) / totalLevels) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          
          {/* Center - Score */}
          <div className="text-center">
            <div className="text-sm font-bold text-gray-600 font-comic">Score</div>
            <div className="text-2xl font-bold text-secondary-600 font-comic">
              {score} ⭐
            </div>
          </div>
          
          {/* Right side - Lives & Controls */}
          <div className="flex items-center gap-4">
            {/* Lives */}
            <div className="text-center">
              <div className="text-sm font-bold text-gray-600 font-comic">Lives</div>
              <div className="text-2xl font-bold text-red-500 font-comic">
                {'❤️'.repeat(lives)}
              </div>
            </div>
            
            {/* Control buttons */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onToggleMute}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-xl
                  transition-all duration-300
                  ${isMuted ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}
                `}
              >
                {isMuted ? '🔇' : '🔊'}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onRestart}
                className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl hover:bg-primary-600 transition-all duration-300"
              >
                🔄
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
