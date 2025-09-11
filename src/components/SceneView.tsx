import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SceneViewProps {
  sceneImage: string;
  sceneEmoji?: string;
  description: string;
}

export const SceneView: React.FC<SceneViewProps> = ({ 
  sceneImage, 
  sceneEmoji, 
  description 
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto mb-1 sm:mb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white rounded-xl sm:rounded-3xl p-3 sm:p-6 card-shadow"
      >
        {/* Scene Image */}
        <div className="flex justify-center items-center h-40 sm:h-64 mb-3 sm:mb-6">
          {sceneImage && !imageError ? (
            <img
              src={sceneImage}
              alt={description}
              className="max-h-full max-w-full object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <motion.div
              className="text-5xl sm:text-8xl"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {sceneEmoji || '🎨'}
            </motion.div>
          )}
        </div>
        
        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800 font-comic">
            {description}
          </h2>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-primary-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-secondary-400 rounded-full animate-bounce-slow"></div>
      </motion.div>
    </div>
  );
};
