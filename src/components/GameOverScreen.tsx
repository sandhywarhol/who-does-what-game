import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { audioManager } from '@/lib/audio';

interface GameOverScreenProps {
  isActive: boolean;
  onRestart: () => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({ isActive, onRestart }) => {
  useEffect(() => {
    if (isActive) {
      // Play game over sound
      audioManager.play('askMommyToHelp');
      
      const timer = setTimeout(() => {
        onRestart();
      }, 5000); // Auto-restart after 5 seconds (increased from 2 seconds)
      return () => clearTimeout(timer);
    }
  }, [isActive, onRestart]);

  // Handle touch/click to dismiss
  const handleDismiss = () => {
    onRestart();
  };

  if (!isActive) return null;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, type: "spring", damping: 10, stiffness: 100 }}
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          onClick={handleDismiss}
        >
          <div className="bg-red-500 text-white rounded-3xl shadow-xl p-8 sm:p-12 text-center max-w-md mx-auto border-4 border-red-600 cursor-pointer">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3, type: "spring" }}
              className="text-6xl sm:text-7xl mb-4"
            >
              💔
            </motion.div>
            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3, type: "spring" }}
              className="text-4xl sm:text-5xl font-bold font-comic mb-2 leading-tight"
            >
              Game Over!
            </motion.h2>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3, type: "spring" }}
              className="text-lg sm:text-xl font-comic leading-relaxed"
            >
              Bara ask Mommy to help you! 🤗
            </motion.p>
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3, type: "spring" }}
              className="text-sm sm:text-base font-comic mt-2 opacity-80"
            >
              Tap anywhere to restart or wait 5 seconds...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
