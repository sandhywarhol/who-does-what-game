import React from 'react';
import { motion } from 'framer-motion';

interface HUDProps {
  currentLevel: number;
  totalLevels: number;
  score: number;
  lives: number;
  isBackgroundMusicMuted: boolean;
  isReviewMode: boolean;
  onToggleBackgroundMusic: () => void;
}

export const HUD: React.FC<HUDProps> = ({
  currentLevel,
  totalLevels,
  score,
  lives,
  isBackgroundMusicMuted,
  isReviewMode,
  onToggleBackgroundMusic
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto mb-1 sm:mb-3 ipad-pro:mb-6 ipados-optimized"
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl ipad-pro:rounded-4xl p-2 sm:p-4 ipad-pro:p-6 card-shadow ipad-pro-landscape">
        <div className="flex justify-between items-center flex-wrap gap-1 sm:gap-4 ipad-pro:gap-6">
          {/* Left side - Progress */}
          <div className="flex items-center gap-1 sm:gap-4 ipad-pro:gap-6">
            <div className="text-center">
              <div className="text-xs sm:text-sm ipad-pro:text-base font-bold text-gray-600 font-comic">Level</div>
              <div className="text-sm sm:text-2xl ipad-pro:text-3xl font-bold text-primary-600 font-comic">
                {currentLevel + 1}/{totalLevels}
              </div>
            </div>
            
            <div className="w-12 sm:w-32 ipad-pro:w-40 bg-gray-200 rounded-full h-1.5 sm:h-3 ipad-pro:h-4">
              <motion.div
                className="bg-primary-500 h-1.5 sm:h-3 ipad-pro:h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentLevel + 1) / totalLevels) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          
          {/* Center - Score */}
          <div className="text-center">
            <div className="text-xs sm:text-sm ipad-pro:text-base font-bold text-gray-600 font-comic">Score</div>
            <div className="text-sm sm:text-2xl ipad-pro:text-3xl font-bold text-secondary-600 font-comic">
              {score} ⭐
            </div>
          </div>
          
          {/* Right side - Lives & Controls */}
          <div className="flex items-center gap-1 sm:gap-4 ipad-pro:gap-6">
            {/* Lives */}
            <div className="text-center">
              <div className="text-xs sm:text-sm ipad-pro:text-base font-bold text-gray-600 font-comic">Lives</div>
              <div className="text-sm sm:text-2xl ipad-pro:text-3xl font-bold text-red-500 font-comic">
                {'❤️'.repeat(lives)}
              </div>
            </div>
            
            {/* Control buttons */}
            <div className="flex gap-1 sm:gap-2 ipad-pro:gap-3">
              {/* Background Music Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onToggleBackgroundMusic}
                className={`
                  w-10 h-10 sm:w-12 sm:h-12 ipad-pro:w-16 ipad-pro:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl ipad-pro:text-2xl
                  transition-all duration-300 touch-manipulation relative
                  ${isBackgroundMusicMuted ? 'bg-orange-500 text-white' : 'bg-purple-500 text-white'}
                `}
                title={isBackgroundMusicMuted ? 'Enable Background Music' : 'Disable Background Music'}
              >
                {isBackgroundMusicMuted ? (
                  <div className="relative">
                    <span className="text-white">🎶</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-white transform rotate-45"></div>
                    </div>
                  </div>
                ) : (
                  <span className="text-white">🎶</span>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
