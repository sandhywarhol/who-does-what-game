import React from 'react';
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
  return (
    <div className="w-full max-w-md mx-auto mb-4 sm:mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 card-shadow"
      >
        {/* Scene Image */}
        <div className="flex justify-center items-center h-32 sm:h-48 mb-3 sm:mb-4">
          {sceneEmoji ? (
            <motion.div
              className="text-6xl sm:text-8xl"
              animate={{ 
                scale: [1, 1.05, 1], // Kurangi animasi untuk performa lebih baik
                rotate: [0, 2, -2, 0] // Kurangi rotasi
              }}
              transition={{ 
                duration: 4, // Perpanjang durasi untuk mengurangi frekuensi update
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {sceneEmoji}
            </motion.div>
          ) : (
            <img
              src={sceneImage}
              alt={description}
              className="max-h-full max-w-full object-contain"
              onError={(e) => {
                // Fallback ke emoji jika gambar gagal load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `<div class="text-6xl sm:text-8xl">${sceneEmoji || '🎨'}</div>`;
              }}
            />
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
