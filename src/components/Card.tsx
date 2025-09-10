import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import { Card } from '@/data/levels';

interface CardComponentProps {
  card: Card;
  isDisabled?: boolean;
}

export const CardComponent: React.FC<CardComponentProps> = ({ 
  card, 
  isDisabled = false 
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id: card.id,
    disabled: isDisabled,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: isDragging ? 1.1 : 1,
        opacity: 1,
        rotate: isDragging ? 5 : 0
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`
        relative bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 card-shadow card-hover cursor-pointer
        ${isDragging ? 'z-50' : 'z-10'}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
        min-w-[80px] min-h-[100px] sm:min-w-[120px] sm:min-h-[140px] flex flex-col items-center justify-center
        touch-manipulation select-none
      `}
    >
      {/* Card Image/Emoji */}
      <div className="text-4xl sm:text-6xl mb-1 sm:mb-2">
        {card.emoji || '🎨'}
      </div>
      
      {/* Card Label */}
      <div className="text-sm sm:text-lg font-bold text-gray-800 font-comic text-center">
        {card.label}
      </div>
      
      {/* Card Type Indicator */}
      <div className={`
        absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold
        ${card.type === 'person' ? 'bg-blue-400 text-white' : ''}
        ${card.type === 'action' ? 'bg-green-400 text-white' : ''}
        ${card.type === 'object' ? 'bg-orange-400 text-white' : ''}
      `}>
        {card.type === 'person' ? '👤' : card.type === 'action' ? '⚡' : '📦'}
      </div>
      
      {/* Drag indicator */}
      {!isDisabled && (
        <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 text-gray-400 text-xs">
          👆
        </div>
      )}
    </motion.div>
  );
};
