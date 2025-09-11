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
        min-h-[100px] min-w-[90px] sm:min-h-[120px] sm:min-w-[110px] ipad-pro:min-h-[140px] ipad-pro:min-w-[130px] flex flex-col items-center justify-center
        transition-all duration-300 relative droppable-slot ipad-pro-optimized
        ${isOver ? 'ring-2 sm:ring-4 ipad-pro:ring-6 ring-primary-300 ring-opacity-50' : ''}
      `}
    >
      {/* Slot Label */}
      <div className="text-xs sm:text-sm ipad-pro:text-base font-bold text-gray-600 font-comic mb-1 sm:mb-2 ipad-pro:mb-3">
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
          <div className="text-3xl sm:text-4xl ipad-pro:text-5xl mb-1 sm:mb-1 ipad-pro:mb-2">
            {card.emoji || '🎨'}
          </div>
          <div className="text-xs sm:text-sm ipad-pro:text-base font-bold text-gray-800 font-comic">
            {card.label}
          </div>
        </motion.div>
      ) : (
        <div className="text-gray-400 text-lg sm:text-2xl ipad-pro:text-3xl">
          {type === 'person' ? '👤' : type === 'action' ? '⚡' : '📦'}
        </div>
      )}
      
      {/* Success/Error indicators */}
      {isCorrect === true && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 ipad-pro:-top-3 ipad-pro:-right-3 w-6 h-6 sm:w-8 sm:h-8 ipad-pro:w-10 ipad-pro:h-10 bg-green-500 rounded-full flex items-center justify-center"
        >
          <span className="text-white text-sm sm:text-lg ipad-pro:text-xl">✓</span>
        </motion.div>
      )}
      
      {isCorrect === false && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 ipad-pro:-top-3 ipad-pro:-right-3 w-6 h-6 sm:w-8 sm:h-8 ipad-pro:w-10 ipad-pro:h-10 bg-red-500 rounded-full flex items-center justify-center"
        >
          <span className="text-white text-sm sm:text-lg ipad-pro:text-xl">✗</span>
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
      className="w-full max-w-3xl mx-auto mb-1 sm:mb-2 ipad-pro:mb-4 ipados-optimized"
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl ipad-pro:rounded-4xl p-2 sm:p-4 ipad-pro:p-6 card-shadow ipad-pro-landscape">
        <h3 className="text-sm sm:text-lg ipad-pro:text-xl font-bold text-center text-gray-800 font-comic mb-1 sm:mb-3 ipad-pro:mb-4">
          Arrange the Sentence! 📝
        </h3>
        
        <div className="flex justify-center items-center gap-2 sm:gap-4 ipad-pro:gap-6 flex-wrap">
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
        <div className="flex justify-center items-center mt-3 sm:mt-4 ipad-pro:mt-6 gap-1 sm:gap-2 ipad-pro:gap-3">
          <span className="text-gray-400 text-sm sm:text-base ipad-pro:text-lg">→</span>
          <span className="text-gray-400 text-sm sm:text-base ipad-pro:text-lg">→</span>
        </div>
      </div>
    </motion.div>
  );
};
