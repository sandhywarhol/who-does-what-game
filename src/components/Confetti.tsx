import React from 'react';
import { motion } from 'framer-motion';

interface ConfettiProps {
  isActive: boolean;
  onComplete: () => void;
}

export const Confetti: React.FC<ConfettiProps> = ({ isActive, onComplete }) => {
  const confettiPieces = Array.from({ length: 20 }, (_, i) => i); // Kurangi dari 50 ke 20 untuk performa lebih baik

  React.useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <div className="bg-white rounded-3xl p-8 card-shadow">
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
            className="text-8xl mb-4"
          >
            🎉
          </motion.div>
          <h2 className="text-3xl font-bold text-primary-600 font-comic mb-2">
            Bagus Sekali!
          </h2>
          <p className="text-lg text-gray-600 font-comic">
            Kamu pintar! 🌟
          </p>
        </div>
      </motion.div>
    </div>
  );
};
