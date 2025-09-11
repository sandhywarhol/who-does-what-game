import React from 'react';
import { motion } from 'framer-motion';
import { audioManager } from '@/lib/audio';

interface ConfettiProps {
  isActive: boolean;
  onComplete: () => void;
  currentLevel?: number;
  totalLevels?: number;
}

export const Confetti: React.FC<ConfettiProps> = ({ 
  isActive, 
  onComplete, 
  currentLevel = 0, 
  totalLevels = 20 
}) => {
  const confettiPieces = Array.from({ length: 20 }, (_, i) => i);

  // Check if this is the final level
  const isFinalLevel = currentLevel >= totalLevels - 1;

  React.useEffect(() => {
    if (isActive) {
      // Play final level sound if this is the final level
      if (isFinalLevel) {
        audioManager.play('thanksForPlaying');
      }
      
      const timer = setTimeout(() => {
        onComplete();
      }, isFinalLevel ? 5000 : 3000); // Longer duration for final level
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete, isFinalLevel]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][piece % 6],
            left: `${Math.random() * 100}%`,
            top: '-10px',
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, (Math.random() - 0.5) * 200],
            rotate: [0, 360],
            scale: [1, 0.5, 1],
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Success message */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-3xl p-8 card-shadow mx-4 max-w-md">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 0.6,
              repeat: 3,
              ease: "easeInOut"
            }}
            className="text-8xl mb-4 text-center"
          >
            {isFinalLevel ? '🏆' : '🎉'}
          </motion.div>
          
          {isFinalLevel ? (
            // Final level message
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary-600 font-comic mb-4">
                Thank you Bara for playing this game!
              </h2>
              <p className="text-lg text-gray-600 font-comic leading-relaxed">
                Ask your mother to make more assets if you want to play more games 🌟
              </p>
            </div>
          ) : (
            // Regular level message
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary-600 font-comic mb-2">
                Good Job Bara!
              </h2>
              <p className="text-lg text-gray-600 font-comic">
                🌟
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
