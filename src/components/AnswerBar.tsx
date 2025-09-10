import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import { Card as CardType, CardType as CardTypeEnum } from '@/data/levels';

interface AnswerSlotProps {
  id: string;
  type: CardTypeEnum;
  card: CardType | null;
  isCorrect: boolean | null;
  index: number;
}

export const AnswerSlot: React.FC<AnswerSlotProps> = ({ 
  id, 
  type, 
  card, 
  isCorrect, 
  index 
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const getSlotClass = () => {
    if (isCorrect === true) return 'slot-correct';
    if (isCorrect === false) return 'slot-incorrect';
    if (card) return 'slot-filled';
    return 'slot-empty';
  };

  const getSlotLabel = () => {
    const labels = ['Who?', 'Does What?', 'With What?'];
    return labels[index] || '';
  };

  return (
    <motion.div
      ref={setNodeRef}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ 
        scale: isOver ? 1.05 : 1,
        opacity: 1
      }}
      transition={{ duration: 0.2 }}
      className={`
        ${getSlotClass()}
        min-h-[80px] min-w-[70px] sm:min-h-[120px] sm:min-w-[100px] flex flex-col items-center justify-center
        transition-all duration-300 relative touch-manipulation
        ${isOver ? 'ring-2 sm:ring-4 ring-primary-300 ring-opacity-50' : ''}
      `}
    >
      {/* Slot Label */}
      <div className="text-xs sm:text-sm font-bold text-gray-600 font-comic mb-1 sm:mb-2">
        {getSlotLabel()}
      </div>
      
      {/* Card Content */}
      {card ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="flex flex-col items-center"
        >
          <div className="text-2xl sm:text-4xl mb-0.5 sm:mb-1">
            {card.emoji || '🎨'}
          </div>
          <div className="text-xs sm:text-sm font-bold text-gray-800 font-comic">
            {card.label}
          </div>
        </motion.div>
      ) : (
        <div className="text-gray-400 text-lg sm:text-2xl">
          {type === 'person' ? '👤' : type === 'action' ? '⚡' : '📦'}
        </div>
      )}
      
      {/* Success/Error indicators */}
      {isCorrect === true && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center"
        >
          <span className="text-white text-sm sm:text-lg">✓</span>
        </motion.div>
      )}
      
      {isCorrect === false && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center"
        >
          <span className="text-white text-sm sm:text-lg">✗</span>
        </motion.div>
      )}
    </motion.div>
  );
};

interface AnswerBarProps {
  slots: Array<{
    id: string;
    type: CardTypeEnum;
    card: CardType | null;
    isCorrect: boolean | null;
  }>;
}

export const AnswerBar: React.FC<AnswerBarProps> = ({ slots }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 card-shadow">
        <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 font-comic mb-3 sm:mb-4">
          Susun Kalimatnya! 📝
        </h3>
        
        <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
          {slots.map((slot, index) => (
            <AnswerSlot
              key={slot.id}
              id={slot.id}
              type={slot.type}
              card={slot.card}
              isCorrect={slot.isCorrect}
              index={index}
            />
          ))}
        </div>
        
        {/* Arrow indicators */}
        <div className="flex justify-center items-center mt-3 sm:mt-4 gap-1 sm:gap-2">
          <span className="text-gray-400 text-sm sm:text-base">→</span>
          <span className="text-gray-400 text-sm sm:text-base">→</span>
        </div>
      </div>
    </motion.div>
  );
};
