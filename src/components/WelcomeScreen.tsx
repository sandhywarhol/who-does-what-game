import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { audioManager } from '@/lib/audio';

interface WelcomeScreenProps {
  onStartGame: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartGame }) => {
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    // Tidak memutar audio otomatis, tunggu user interaction
    console.log('Welcome screen loaded - waiting for user to enable audio');
  }, []);

  const handleEnableAudio = async () => {
    try {
      await audioManager.enableAudio();
      setAudioEnabled(true);
      
      // Play welcome sound setelah audio diaktifkan (hanya sekali)
      setTimeout(async () => {
        await audioManager.play('welcome');
      }, 100);
    } catch (error) {
      console.warn('Failed to enable audio:', error);
    }
  };

  const handleStartGame = () => {
    // Stop welcome voice before starting game
    audioManager.stopWelcomeVoice();
    onStartGame();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-2 sm:p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="bg-white rounded-3xl p-6 sm:p-12 card-shadow max-w-md w-full text-center"
      >
        {/* Game Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-5xl font-bold text-primary-600 font-comic mb-2 sm:mb-4">
            Who Does What Game
          </h1>
          <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">🎯</div>
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800 font-comic mb-2 sm:mb-4">
            Welcome to the Who Does What Game!
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 font-comic leading-relaxed">
            This game was made by your father, <span className="font-bold text-primary-600">Papa Rangga</span>.
          </p>
        </motion.div>

        {/* Audio Enable Button */}
        {!audioEnabled && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnableAudio}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl text-lg sm:text-xl font-comic shadow-lg hover:shadow-xl transition-all duration-300 w-full"
            >
              🔊 Enable Audio
            </motion.button>
          </motion.div>
        )}

        {/* Play Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: audioEnabled ? 0.8 : 0.6, duration: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartGame}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl text-lg sm:text-xl font-comic shadow-lg hover:shadow-xl transition-all duration-300 w-full"
          >
            🎮 Play Game
          </motion.button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 text-sm text-gray-500 font-comic"
        >
          <p>Arrange cards to make correct sentences!</p>
          <p className="mt-2">🌟 Have fun learning! 🌟</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
