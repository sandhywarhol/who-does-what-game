export type CardType = 'person' | 'action' | 'object';

export interface Card {
  id: string;
  type: CardType;
  label: string;
  image: string;
  emoji?: string; // untuk placeholder jika gambar belum ada
}

export interface Level {
  id: string;
  sceneImage: string;
  sceneEmoji?: string; // untuk placeholder
  correct: [string, string, string]; // [person, action, object]
  cards: Card[];
  description: string; // untuk voice over
}

export interface GameState {
  currentLevel: number;
  score: number;
  lives: number;
  isMuted: boolean;
  isCompleted: boolean;
}

export interface AnswerSlot {
  id: string;
  type: CardType;
  card: Card | null;
  isCorrect: boolean | null;
}

// Data level untuk game
export const LEVELS: Level[] = [
  {
    id: 'lvl1',
    sceneImage: '/assets/scenes/boy_eat_apple.png',
    sceneEmoji: '👦🍎',
    correct: ['boy', 'eat', 'apple'],
    description: 'Boy eats apple',
    cards: [
      { id: 'boy', type: 'person', label: 'Boy', image: '/assets/cards/boy.png', emoji: '👦' },
      { id: 'girl', type: 'person', label: 'Girl', image: '/assets/cards/girl.png', emoji: '👧' },
      { id: 'eat', type: 'action', label: 'Eat', image: '/assets/cards/eat.png', emoji: '🍽️' },
      { id: 'read', type: 'action', label: 'Read', image: '/assets/cards/read.png', emoji: '📖' },
      { id: 'apple', type: 'object', label: 'Apple', image: '/assets/cards/apple.png', emoji: '🍎' },
      { id: 'book', type: 'object', label: 'Book', image: '/assets/cards/book.png', emoji: '📚' }
    ]
  },
  {
    id: 'lvl2',
    sceneImage: '/assets/scenes/girl_read_book.png',
    sceneEmoji: '👧📚',
    correct: ['girl', 'read', 'book'],
    description: 'Girl reads book',
    cards: [
      { id: 'boy', type: 'person', label: 'Boy', image: '/assets/cards/boy.png', emoji: '👦' },
      { id: 'girl', type: 'person', label: 'Girl', image: '/assets/cards/girl.png', emoji: '👧' },
      { id: 'eat', type: 'action', label: 'Eat', image: '/assets/cards/eat.png', emoji: '🍽️' },
      { id: 'read', type: 'action', label: 'Read', image: '/assets/cards/read.png', emoji: '📖' },
      { id: 'apple', type: 'object', label: 'Apple', image: '/assets/cards/apple.png', emoji: '🍎' },
      { id: 'book', type: 'object', label: 'Book', image: '/assets/cards/book.png', emoji: '📚' }
    ]
  },
  {
    id: 'lvl3',
    sceneImage: '/assets/scenes/cat_play_ball.png',
    sceneEmoji: '🐱⚽',
    correct: ['cat', 'play', 'ball'],
    description: 'Cat plays ball',
    cards: [
      { id: 'cat', type: 'person', label: 'Cat', image: '/assets/cards/cat.png', emoji: '🐱' },
      { id: 'dog', type: 'person', label: 'Dog', image: '/assets/cards/dog.png', emoji: '🐶' },
      { id: 'play', type: 'action', label: 'Play', image: '/assets/cards/play.png', emoji: '⚽' },
      { id: 'sleep', type: 'action', label: 'Sleep', image: '/assets/cards/sleep.png', emoji: '😴' },
      { id: 'ball', type: 'object', label: 'Ball', image: '/assets/cards/ball.png', emoji: '⚽' },
      { id: 'bed', type: 'object', label: 'Bed', image: '/assets/cards/bed.png', emoji: '🛏️' }
    ]
  },
  {
    id: 'lvl4',
    sceneImage: '/assets/scenes/dog_sleep_bed.png',
    sceneEmoji: '🐶🛏️',
    correct: ['dog', 'sleep', 'bed'],
    description: 'Dog sleeps on bed',
    cards: [
      { id: 'cat', type: 'person', label: 'Cat', image: '/assets/cards/cat.png', emoji: '🐱' },
      { id: 'dog', type: 'person', label: 'Dog', image: '/assets/cards/dog.png', emoji: '🐶' },
      { id: 'play', type: 'action', label: 'Play', image: '/assets/cards/play.png', emoji: '⚽' },
      { id: 'sleep', type: 'action', label: 'Sleep', image: '/assets/cards/sleep.png', emoji: '😴' },
      { id: 'ball', type: 'object', label: 'Ball', image: '/assets/cards/ball.png', emoji: '⚽' },
      { id: 'bed', type: 'object', label: 'Bed', image: '/assets/cards/bed.png', emoji: '🛏️' }
    ]
  }
];

// Fungsi untuk shuffle array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Fungsi untuk mendapatkan level berdasarkan index
export function getLevel(index: number): Level | null {
  return LEVELS[index] || null;
}

// Fungsi untuk memvalidasi jawaban
export function validateAnswer(level: Level, answer: AnswerSlot[]): boolean {
  if (answer.length !== 3) return false;
  
  const [personSlot, actionSlot, objectSlot] = answer;
  
  return (
    personSlot.card?.id === level.correct[0] &&
    actionSlot.card?.id === level.correct[1] &&
    objectSlot.card?.id === level.correct[2]
  );
}
