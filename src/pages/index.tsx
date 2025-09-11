import React, { useState, useEffect } from 'react';
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent, DragOverlay, closestCenter } from '@dnd-kit/core';
import { motion, AnimatePresence } from 'framer-motion';
import { SceneView } from '@/components/SceneView';
import { CardComponent } from '@/components/Card';
import { AnswerBar } from '@/components/AnswerBar';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { HUD } from '@/components/HUD';
import { Confetti } from '@/components/Confetti';
import { ErrorMessage } from '@/components/ErrorMessage';
import { GameOverScreen } from '@/components/GameOverScreen';
import { LEVELS, getLevel, validateAnswer, shuffleArray, Card, AnswerSlot } from '@/data/levels';
import { audioManager } from '@/lib/audio';

interface GameState {
  currentLevel: number;
  score: number;
  lives: number;
  isMuted: boolean;
  isCompleted: boolean;
  isReviewMode: boolean;
  showWelcome: boolean;
  isBackgroundMusicMuted: boolean;
  backgroundMusicVolume: number;
}

const initialGameState: GameState = {
  currentLevel: 0,
  score: 0,
  lives: 3,
  isMuted: false, // Sound effects selalu aktif
  isCompleted: false,
  isReviewMode: false,
  showWelcome: true,
  isBackgroundMusicMuted: false,
  backgroundMusicVolume: 0.5,
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
  const [isChecking, setIsChecking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  // Audio wrapper functions
  const playAudio = async (soundName: string) => {
    try {
      await audioManager.play(soundName);
    } catch (error) {
      console.warn(`Failed to play ${soundName}:`, error);
    }
  };

  const playVoiceOver = async (voiceOverPath: string) => {
    try {
      await audioManager.playQuestionVoiceOver(voiceOverPath);
    } catch (error) {
      console.warn(`Failed to play voice over ${voiceOverPath}:`, error);
    }
  };

  const playVoiceOverByLevel = async (levelDescription: string) => {
    try {
      await audioManager.playQuestionVoiceOverByLevel(levelDescription);
    } catch (error) {
      console.warn(`Failed to play voice over for ${levelDescription}:`, error);
    }
  };

  const startMusic = async () => {
    try {
      await audioManager.startBackgroundMusic();
    } catch (error) {
      console.warn('Failed to start background music:', error);
    }
  };

  // Initialize level
  // Background music akan dimulai di handleStartGame, tidak perlu di useEffect
  useEffect(() => {
    // Cleanup: stop background music when component unmounts
    return () => {
      audioManager.stopBackgroundMusic();
    };
  }, []);

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
    console.log('Drag started:', event.active.id);
    const card = shuffledCards.find(c => c.id === event.active.id);
    setActiveCard(card || null);
    playAudio('drop');
  };

  // Handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    console.log('Drag ended:', event.active.id, 'over:', event.over?.id);
    const { active, over } = event;
    setActiveCard(null);

    if (!over) {
      console.log('No drop target');
      return;
    }

    const card = shuffledCards.find(c => c.id === active.id);
    if (!card) {
      console.log('Card not found');
      return;
    }

    // Check if dropped on a valid slot
    const slotId = over.id as string;
    console.log('Slot ID:', slotId);
    if (slotId.startsWith('slot-')) {
      const slotIndex = answerSlots.findIndex(slot => slot.id === slotId);
      console.log('Slot index:', slotIndex);
      if (slotIndex !== -1) {
        const slot = answerSlots[slotIndex];
        
        // Check if card type matches slot type
        console.log('Card type:', card.type, 'Slot type:', slot.type);
        if (card.type === slot.type) {
          // Update answer slots
          const newSlots = [...answerSlots];
          newSlots[slotIndex] = { ...slot, card };
          setAnswerSlots(newSlots);

          // Remove card from available cards
          setShuffledCards(prev => prev.filter(c => c.id !== card.id));
          
          playAudio('drop');
          
          // Check if all slots are filled
          setTimeout(() => {
            checkAnswer(newSlots);
          }, 500);
        } else {
          // Wrong type - show error feedback
          playAudio('error');
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
      
      playAudio('goodJob'); // Sound effect good job menggunakan asset custom
      
      setTimeout(() => {
        setShowConfetti(true);
        playAudio('levelComplete');
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
      
      playAudio('wrong'); // Sound effect wrong
      playAudio('wrongAnswer'); // Voice "wrong answer"
      
      // Show error message
      setShowErrorMessage(true);
      
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
        setGameState(prev => {
          const newLives = prev.lives - 1;
          // Check if game over
          if (newLives <= 0) {
            setShowGameOver(true);
          }
          return {
            ...prev,
            lives: newLives,
          };
        });
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
    console.log('Loading next level:', nextLevel);
    if (nextLevel) {
      setCurrentLevelData(nextLevel);
      
      // Play voice over for next level menggunakan method baru
      console.log('Playing voice over for next level:', nextLevel.description);
      setTimeout(() => {
        playVoiceOverByLevel(nextLevel.description);
      }, 1500); // Delay untuk memastikan confetti selesai
    }
  };

  // Handle error message completion
  const handleErrorMessageComplete = () => {
    setShowErrorMessage(false);
  };

  // Handle game over restart
  const handleGameOverRestart = () => {
    setShowGameOver(false);
    // Reset lives to 3 and restart current level
    setGameState(prev => ({
      ...prev,
      lives: 3,
    }));
    // Reset current level data
    const currentLevelData = getLevel(gameState.currentLevel);
    if (currentLevelData) {
      setCurrentLevelData(currentLevelData);
      // Shuffle cards again
      setShuffledCards(shuffleArray(currentLevelData.cards));
    }
    // Reset answer slots
    setAnswerSlots([
      { id: 'slot-person', type: 'person', card: null, isCorrect: null },
      { id: 'slot-action', type: 'action', card: null, isCorrect: null },
      { id: 'slot-object', type: 'object', card: null, isCorrect: null },
    ]);
  };

  // Handle mute toggle
  const handleToggleMute = () => {
    const newMuted = !gameState.isMuted;
    setGameState(prev => ({ ...prev, isMuted: newMuted }));
    audioManager.setMuted(newMuted);
  };

  // Audio settings functions
  const toggleBackgroundMusic = () => {
    const newMuted = !gameState.isBackgroundMusicMuted;
    setGameState(prev => ({ ...prev, isBackgroundMusicMuted: newMuted }));
    audioManager.setBackgroundMusicMuted(newMuted);
  };

  const setBackgroundMusicVolume = (volume: number) => {
    setGameState(prev => ({ ...prev, backgroundMusicVolume: volume }));
    audioManager.setBackgroundMusicVolume(volume);
  };

  // Handle start game
  const handleStartGame = async () => {
    setGameState(prev => ({ ...prev, showWelcome: false }));
    await startMusic();
    
    // Play voice over for first level menggunakan method baru
    const firstLevelData = getLevel(0);
    console.log('First level data:', firstLevelData);
    if (firstLevelData) {
      console.log('Playing voice over for first level:', firstLevelData.description);
      setTimeout(async () => {
        await playVoiceOverByLevel(firstLevelData.description);
      }, 1000); // Delay untuk memastikan welcome sound selesai
    } else {
      console.warn('No level data found for first level');
    }
  };

  // Handle next question (review mode) - DIHAPUS
  // const handleNextQuestion = () => { ... }

  // Handle previous question (review mode) - DIHAPUS  
  // const handlePreviousQuestion = () => { ... }

  // Toggle review mode
  const toggleReviewMode = () => {
    setGameState(prev => ({ 
      ...prev, 
      isReviewMode: !prev.isReviewMode,
      currentLevel: 0
    }));
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

  // Show welcome screen
  if (gameState.showWelcome) {
    return <WelcomeScreen onStartGame={handleStartGame} />;
  }

  return (
    <DndContext 
      onDragStart={handleDragStart} 
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
    >
      <div className="min-h-screen p-1 sm:p-2">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-1 sm:mb-3"
          >
            <h1 className="text-lg sm:text-3xl font-bold text-primary-600 font-comic mb-0.5 sm:mb-1">
              Who Does What? 🎯
            </h1>
            <p className="text-xs sm:text-base text-gray-600 font-comic">
              Arrange cards to make the correct sentence!
            </p>
          </motion.div>

          {/* HUD */}
          <HUD
            currentLevel={gameState.currentLevel}
            totalLevels={LEVELS.length}
            score={gameState.score}
            lives={gameState.lives}
            isBackgroundMusicMuted={gameState.isBackgroundMusicMuted}
            isReviewMode={gameState.isReviewMode}
            onToggleBackgroundMusic={toggleBackgroundMusic}
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
            className="w-full max-w-3xl mx-auto mt-2 sm:mt-4"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 card-shadow">
              <h3 className="text-base sm:text-lg font-bold text-center text-gray-800 font-comic mb-2 sm:mb-3">
                Choose Your Cards! 🃏
              </h3>
              
              <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
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
          <Confetti 
            isActive={showConfetti} 
            onComplete={handleConfettiComplete}
            currentLevel={gameState.currentLevel}
            totalLevels={LEVELS.length}
          />
          
          {/* Error Message */}
          <ErrorMessage 
            isActive={showErrorMessage} 
            onComplete={handleErrorMessageComplete}
          />
          
          {/* Game Over Screen */}
          <GameOverScreen 
            isActive={showGameOver} 
            onRestart={handleGameOverRestart}
          />
        </div>
      </div>
    </DndContext>
  );
}
