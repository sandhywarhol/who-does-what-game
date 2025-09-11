import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ErrorMessageProps {
  isActive: boolean;
  onComplete: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ isActive, onComplete }) => {
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000); // Auto close after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, type: "spring", damping: 10, stiffness: 100 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-red-500 text-white rounded-2xl p-6 sm:p-8 shadow-2xl max-w-sm mx-4 text-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-4xl sm:text-5xl mb-3"
            >
              ❌
            </motion.div>
            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-xl sm:text-2xl font-bold font-comic mb-2"
            >
              Wrong answer Bara!
            </motion.h2>
            <motion.p
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="text-sm sm:text-base opacity-90"
            >
              Try again! 🌟
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
