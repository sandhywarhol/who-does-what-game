import React, { useState } from 'react';
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
  const [imageError, setImageError] = useState(false);
  
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
        relative bg-white rounded-xl sm:rounded-2xl ipad-pro:rounded-3xl p-2 sm:p-3 ipad-pro:p-4 card-shadow card-hover cursor-grab active:cursor-grabbing draggable-card ipad-pro-optimized
        ${isDragging ? 'z-50 cursor-grabbing' : 'z-10'}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
        min-w-[80px] min-h-[100px] sm:min-w-[100px] sm:min-h-[120px] ipad-pro:min-w-[120px] ipad-pro:min-h-[140px] flex flex-col items-center justify-center
        select-none
      `}
    >
      {/* Card Image/Emoji */}
      <div className="text-4xl sm:text-5xl ipad-pro:text-6xl mb-1 sm:mb-2 ipad-pro:mb-3 flex items-center justify-center">
        {card.image && !imageError ? (
          <img 
            src={card.image} 
            alt={card.label}
            className="w-12 h-12 sm:w-16 sm:h-16 ipad-pro:w-20 ipad-pro:h-20 object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          card.emoji || '🎨'
        )}
      </div>
      
      {/* Card Type Indicator */}
      <div className={`
        absolute -top-1 -right-1 sm:-top-2 sm:-right-2 ipad-pro:-top-3 ipad-pro:-right-3 w-4 h-4 sm:w-6 sm:h-6 ipad-pro:w-8 ipad-pro:h-8 rounded-full flex items-center justify-center text-xs ipad-pro:text-sm font-bold
        ${card.type === 'person' ? 'bg-blue-400 text-white' : ''}
        ${card.type === 'action' ? 'bg-green-400 text-white' : ''}
        ${card.type === 'object' ? 'bg-orange-400 text-white' : ''}
      `}>
        {card.type === 'person' ? '👤' : card.type === 'action' ? '⚡' : '📦'}
      </div>
      
      {/* Drag indicator */}
      {!isDisabled && (
        <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 ipad-pro:bottom-2 ipad-pro:right-2 text-gray-400 text-xs ipad-pro:text-sm">
          👆
        </div>
      )}
    </motion.div>
  );
};
