import React, { useState, useEffect } from 'react';
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent, DragOverlay } from '@dnd-kit/core';
import { motion, AnimatePresence } from 'framer-motion';
import { SceneView } from '@/components/SceneView';
import { CardComponent } from '@/components/Card';
import { AnswerBar } from '@/components/AnswerBar';
import { HUD } from '@/components/HUD';
import { Confetti } from '@/components/Confetti';
import { LEVELS, getLevel, validateAnswer, shuffleArray, Card, AnswerSlot } from '@/data/levels';
import { audioManager } from '@/lib/audio';

interface GameState {
  currentLevel: number;
  score: number;
  lives: number;
  isMuted: boolean;
  isCompleted: boolean;
}

const initialGameState: GameState = {
  currentLevel: 0,
  score: 0,
  lives: 3,
  isMuted: false,
  isCompleted: false,
};

export default function Game() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [currentLevelData, setCurrentLevelData] = useState(getLevel(0));
  const [shuffledCards, setShuffledCards] = useState<Card[]>([]);
  const [answerSlots, setAnswerSlots] = useState<AnswerSlot[]>([
    { id: 'slot-person', type: 'person', card: null, isCorrect: null },
    { id: 'slot-action', type: 'action', card: null, isCorrect: null },
    { id: 'slot-object', type: 'object', card: null, isCorrect: null },
  ]);
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // Initialize level
  useEffect(() => {
    if (currentLevelData) {
      setShuffledCards(shuffleArray(currentLevelData.cards));
      setAnswerSlots([
        { id: 'slot-person', type: 'person', card: null, isCorrect: null },
        { id: 'slot-action', type: 'action', card: null, isCorrect: null },
        { id: 'slot-object', type: 'object', card: null, isCorrect: null },
      ]);
    }
  }, [currentLevelData]);

  // Handle drag start
  const handleDragStart = (event: DragStartEvent) => {
    const card = shuffledCards.find(c => c.id === event.active.id);
    setActiveCard(card || null);
    audioManager.play('drop');
  };

  // Handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveCard(null);

    if (!over) return;

    const card = shuffledCards.find(c => c.id === active.id);
    if (!card) return;

    // Check if dropped on a valid slot
    const slotId = over.id as string;
    if (slotId.startsWith('slot-')) {
      const slotIndex = answerSlots.findIndex(slot => slot.id === slotId);
      if (slotIndex !== -1) {
        const slot = answerSlots[slotIndex];
        
        // Check if card type matches slot type
        if (card.type === slot.type) {
          // Update answer slots
          const newSlots = [...answerSlots];
          newSlots[slotIndex] = { ...slot, card };
          setAnswerSlots(newSlots);

          // Remove card from available cards
          setShuffledCards(prev => prev.filter(c => c.id !== card.id));
          
          audioManager.play('drop');
          
          // Check if all slots are filled
          setTimeout(() => {
            checkAnswer(newSlots);
          }, 500);
        } else {
          // Wrong type - show error feedback
          audioManager.play('error');
          showErrorFeedback(slotIndex);
        }
      }
    }
  };

  // Show error feedback
  const showErrorFeedback = (slotIndex: number) => {
    const newSlots = [...answerSlots];
    newSlots[slotIndex] = { ...newSlots[slotIndex], isCorrect: false };
    setAnswerSlots(newSlots);

    setTimeout(() => {
      const resetSlots = [...answerSlots];
      resetSlots[slotIndex] = { ...resetSlots[slotIndex], isCorrect: null };
      setAnswerSlots(resetSlots);
    }, 1000);
  };

  // Check answer
  const checkAnswer = (slots: AnswerSlot[]) => {
    if (!currentLevelData) return;

    const allFilled = slots.every(slot => slot.card !== null);
    if (!allFilled) return;

    setIsChecking(true);
    
    const isCorrect = validateAnswer(currentLevelData, slots);
    
    if (isCorrect) {
      // Correct answer
      const newSlots = slots.map(slot => ({ ...slot, isCorrect: true }));
      setAnswerSlots(newSlots);
      
      audioManager.play('success');
      audioManager.speak(currentLevelData.description);
      
      setTimeout(() => {
        setShowConfetti(true);
        audioManager.play('levelComplete');
      }, 1000);
      
      // Update score and progress
      setGameState(prev => ({
        ...prev,
        score: prev.score + 100,
        currentLevel: prev.currentLevel + 1,
      }));
      
    } else {
      // Wrong answer
      const newSlots = slots.map(slot => ({ ...slot, isCorrect: false }));
      setAnswerSlots(newSlots);
      
      audioManager.play('error');
      
      setTimeout(() => {
        // Reset slots and return cards
        setAnswerSlots([
          { id: 'slot-person', type: 'person', card: null, isCorrect: null },
          { id: 'slot-action', type: 'action', card: null, isCorrect: null },
          { id: 'slot-object', type: 'object', card: null, isCorrect: null },
        ]);
        
        // Return cards to available pool
        const returnedCards = slots.filter(slot => slot.card).map(slot => slot.card!);
        setShuffledCards(prev => [...prev, ...returnedCards]);
        
        // Lose a life
        setGameState(prev => ({
          ...prev,
          lives: prev.lives - 1,
        }));
      }, 2000);
    }
    
    setIsChecking(false);
  };

  // Handle confetti completion
  const handleConfettiComplete = () => {
    setShowConfetti(false);
    
    // Check if game is completed
    if (gameState.currentLevel >= LEVELS.length) {
      setGameState(prev => ({ ...prev, isCompleted: true }));
      return;
    }
    
    // Load next level
    const nextLevel = getLevel(gameState.currentLevel);
    if (nextLevel) {
      setCurrentLevelData(nextLevel);
    }
  };

  // Handle mute toggle
  const handleToggleMute = () => {
    const newMuted = !gameState.isMuted;
    setGameState(prev => ({ ...prev, isMuted: newMuted }));
    audioManager.setMuted(newMuted);
  };

  // Handle restart
  const handleRestart = () => {
    setGameState(initialGameState);
    setCurrentLevelData(getLevel(0));
    setShowConfetti(false);
    audioManager.stopSpeaking();
  };

  if (!currentLevelData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 font-comic mb-4">
            Loading... 🎮
          </h1>
        </div>
      </div>
    );
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-primary-600 font-comic mb-2">
              Who Does What? 🎯
            </h1>
            <p className="text-lg text-gray-600 font-comic">
              Susun kartu untuk membuat kalimat yang benar!
            </p>
          </motion.div>

          {/* HUD */}
          <HUD
            currentLevel={gameState.currentLevel}
            totalLevels={LEVELS.length}
            score={gameState.score}
            lives={gameState.lives}
            isMuted={gameState.isMuted}
            onToggleMute={handleToggleMute}
            onRestart={handleRestart}
          />

          {/* Scene View */}
          <SceneView
            sceneImage={currentLevelData.sceneImage}
            sceneEmoji={currentLevelData.sceneEmoji}
            description={currentLevelData.description}
          />

          {/* Answer Bar */}
          <AnswerBar slots={answerSlots} />

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-4xl mx-auto mt-8"
          >
            <div className="bg-white rounded-3xl p-6 card-shadow">
              <h3 className="text-xl font-bold text-center text-gray-800 font-comic mb-4">
                Pilih Kartunya! 🃏
              </h3>
              
              <div className="flex justify-center items-center gap-4 flex-wrap">
                {shuffledCards.map((card) => (
                  <CardComponent
                    key={card.id}
                    card={card}
                    isDisabled={isChecking}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Drag Overlay */}
          <DragOverlay>
            {activeCard ? (
              <CardComponent card={activeCard} />
            ) : null}
          </DragOverlay>

          {/* Confetti */}
          <Confetti isActive={showConfetti} onComplete={handleConfettiComplete} />
        </div>
      </div>
    </DndContext>
  );
}
