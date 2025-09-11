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
  voiceOver?: string; // path untuk voice over audio file
}

export interface GameState {
  currentLevel: number;
  score: number;
  lives: number;
  isMuted: boolean;
  isBackgroundMusicMuted: boolean;
  backgroundMusicVolume: number;
  isCompleted: boolean;
}

export interface AnswerSlot {
  id: string;
  type: CardType;
  card: Card | null;
  isCorrect: boolean | null;
}

// Data level untuk game berdasarkan analisis soal ilustrasi
export const LEVELS: Level[] = [
  // Level 1 - Aktivitas Sederhana
  {
    id: 'lvl1',
    sceneImage: '/assets/upload/questions/Boy eats apple.png',
    sceneEmoji: '👦🍎',
    correct: ['boy', 'eats', 'apple'],
    description: 'Boy eats apple',
    voiceOver: '/assets/sfx/Soal/boy eats apple.mp3',
    cards: [
      { id: 'boy', type: 'person', label: 'Boy', image: '', emoji: '👦' },
      { id: 'baby', type: 'person', label: 'Baby', image: '', emoji: '👶' },
      { id: 'eats', type: 'action', label: 'Eats', image: '', emoji: '🍽️' },
      { id: 'drinks', type: 'action', label: 'Drinks', image: '', emoji: '🥛' },
      { id: 'apple', type: 'object', label: 'Apple', image: '', emoji: '🍎' },
      { id: 'milk', type: 'object', label: 'Milk', image: '/assets/upload/icons/objects/milk.png', emoji: '🧃' }
    ]
  },
  {
    id: 'lvl2',
    sceneImage: '/assets/upload/questions/baby drinks milk.png',
    sceneEmoji: '👶🥛',
    correct: ['baby', 'drinks', 'milk'],
    description: 'Baby drinks milk',
    voiceOver: '/assets/sfx/Soal/baby drinks milk.mp3',
    cards: [
      { id: 'boy', type: 'person', label: 'Boy', image: '', emoji: '👦' },
      { id: 'baby', type: 'person', label: 'Baby', image: '', emoji: '👶' },
      { id: 'eats', type: 'action', label: 'Eats', image: '', emoji: '🍽️' },
      { id: 'drinks', type: 'action', label: 'Drinks', image: '', emoji: '🥛' },
      { id: 'apple', type: 'object', label: 'Apple', image: '', emoji: '🍎' },
      { id: 'milk', type: 'object', label: 'Milk', image: '/assets/upload/icons/objects/milk.png', emoji: '🧃' }
    ]
  },
  {
    id: 'lvl3',
    sceneImage: '/assets/upload/questions/baby claps hands.png',
    sceneEmoji: '👶👏',
    correct: ['baby', 'claps', 'hands'],
    description: 'Baby claps hands',
    voiceOver: '/assets/sfx/Soal/baby claps hand.mp3',
    cards: [
      { id: 'baby', type: 'person', label: 'Baby', image: '', emoji: '👶' },
      { id: 'boy', type: 'person', label: 'Boy', image: '', emoji: '👦' },
      { id: 'claps', type: 'action', label: 'Claps', image: '', emoji: '👏' },
      { id: 'brushes', type: 'action', label: 'Brushes', image: '', emoji: '🪥' },
      { id: 'hands', type: 'object', label: 'Hands', image: '/assets/upload/icons/objects/hands.png', emoji: '🖐️' },
      { id: 'teeth', type: 'object', label: 'Teeth', image: '', emoji: '🦷' }
    ]
  },
  {
    id: 'lvl4',
    sceneImage: '/assets/upload/questions/boy brushes teeth.png',
    sceneEmoji: '👦🦷',
    correct: ['boy', 'brushes', 'teeth'],
    description: 'Boy brushes teeth',
    voiceOver: '/assets/sfx/Soal/boy brushes teeth.mp3',
    cards: [
      { id: 'boy', type: 'person', label: 'Boy', image: '', emoji: '👦' },
      { id: 'baby', type: 'person', label: 'Baby', image: '', emoji: '👶' },
      { id: 'brushes', type: 'action', label: 'Brushes', image: '', emoji: '🪥' },
      { id: 'claps', type: 'action', label: 'Claps', image: '', emoji: '👏' },
      { id: 'teeth', type: 'object', label: 'Teeth', image: '', emoji: '🦷' },
      { id: 'hands', type: 'object', label: 'Hands', image: '/assets/upload/icons/objects/hands.png', emoji: '👏' }
    ]
  },
  // Level 2 - Aktivitas Bermain
  {
    id: 'lvl5',
    sceneImage: '/assets/upload/questions/boy kicks ball.png',
    sceneEmoji: '👦⚽',
    correct: ['boy', 'kicks', 'ball'],
    description: 'Boy kicks ball',
    voiceOver: '/assets/sfx/Soal/boy kicks ball.mp3',
    cards: [
      { id: 'boy', type: 'person', label: 'Boy', image: '', emoji: '👦' },
      { id: 'girl', type: 'person', label: 'Girl', image: '', emoji: '👧' },
      { id: 'kicks', type: 'action', label: 'Kicks', image: '', emoji: '🦵' },
      { id: 'plays', type: 'action', label: 'Plays', image: '', emoji: '🎲' },
      { id: 'ball', type: 'object', label: 'Ball', image: '', emoji: '⚽' },
      { id: 'balloon', type: 'object', label: 'Balloon', image: '', emoji: '🎈' }
    ]
  },
  {
    id: 'lvl6',
    sceneImage: '/assets/upload/questions/Girl Plays Baloon.png',
    sceneEmoji: '👧🎈',
    correct: ['girl', 'plays', 'balloon'],
    description: 'Girl plays balloon',
    voiceOver: '/assets/sfx/Soal/girl plays baloon.mp3',
    cards: [
      { id: 'girl', type: 'person', label: 'Girl', image: '', emoji: '👧' },
      { id: 'boy', type: 'person', label: 'Boy', image: '', emoji: '👦' },
      { id: 'plays', type: 'action', label: 'Plays', image: '', emoji: '🎲' },
      { id: 'draws', type: 'action', label: 'Draws', image: '', emoji: '✏️' },
      { id: 'balloon', type: 'object', label: 'Balloon', image: '', emoji: '🎈' },
      { id: 'house', type: 'object', label: 'House', image: '', emoji: '🏠' }
    ]
  },
  {
    id: 'lvl7',
    sceneImage: '/assets/upload/questions/girl draws a house.png',
    sceneEmoji: '👧🏠',
    correct: ['girl', 'draws', 'house'],
    description: 'Girl draws a house',
    voiceOver: '/assets/sfx/Soal/girl draw a house.mp3',
    cards: [
      { id: 'girl', type: 'person', label: 'Girl', image: '', emoji: '👧' },
      { id: 'boy', type: 'person', label: 'Boy', image: '', emoji: '👦' },
      { id: 'draws', type: 'action', label: 'Draws', image: '', emoji: '✏️' },
      { id: 'sings', type: 'action', label: 'Sings', image: '', emoji: '🎤' },
      { id: 'house', type: 'object', label: 'House', image: '', emoji: '🏠' },
      { id: 'song', type: 'object', label: 'Song', image: '', emoji: '🎵' }
    ]
  },
  {
    id: 'lvl8',
    sceneImage: '/assets/upload/questions/girl sings a song.png',
    sceneEmoji: '👧🎵',
    correct: ['girl', 'sings', 'song'],
    description: 'Girl sings a song',
    voiceOver: '/assets/sfx/Soal/girl sings a song.mp3',
    cards: [
      { id: 'girl', type: 'person', label: 'Girl', image: '', emoji: '👧' },
      { id: 'boy', type: 'person', label: 'Boy', image: '', emoji: '👦' },
      { id: 'sings', type: 'action', label: 'Sings', image: '', emoji: '🎤' },
      { id: 'draws', type: 'action', label: 'Draws', image: '', emoji: '✏️' },
      { id: 'song', type: 'object', label: 'Song', image: '', emoji: '🎵' },
      { id: 'house', type: 'object', label: 'House', image: '', emoji: '🏠' }
    ]
  },
  // Level 3 - Aktivitas Hewan
  {
    id: 'lvl9',
    sceneImage: '/assets/upload/questions/cat plays with yarn.png',
    sceneEmoji: '🐱🧶',
    correct: ['cat', 'plays', 'yarn'],
    description: 'Cat plays with yarn',
    voiceOver: '/assets/sfx/Soal/cat plays with yarn.mp3',
    cards: [
      { id: 'cat', type: 'person', label: 'Cat', image: '', emoji: '🐱' },
      { id: 'dog', type: 'person', label: 'Dog', image: '', emoji: '🐶' },
      { id: 'plays', type: 'action', label: 'Plays', image: '', emoji: '🎲' },
      { id: 'sleeps', type: 'action', label: 'Sleeps', image: '', emoji: '💤' },
      { id: 'yarn', type: 'object', label: 'Yarn', image: '', emoji: '🧶' },
      { id: 'chair', type: 'object', label: 'Chair', image: '', emoji: '🪑' }
    ]
  },
  {
    id: 'lvl10',
    sceneImage: '/assets/upload/questions/cat sleeps on chair.png',
    sceneEmoji: '🐱🪑',
    correct: ['cat', 'sleeps', 'chair'],
    description: 'Cat sleeps on chair',
    voiceOver: '/assets/sfx/Soal/cat sleeps on chair.mp3',
    cards: [
      { id: 'cat', type: 'person', label: 'Cat', image: '', emoji: '🐱' },
      { id: 'dog', type: 'person', label: 'Dog', image: '', emoji: '🐶' },
      { id: 'sleeps', type: 'action', label: 'Sleeps', image: '', emoji: '💤' },
      { id: 'eats', type: 'action', label: 'Eats', image: '', emoji: '🍽️' },
      { id: 'chair', type: 'object', label: 'Chair', image: '', emoji: '🪑' },
      { id: 'bone', type: 'object', label: 'Bone', image: '', emoji: '🦴' }
    ]
  },
  {
    id: 'lvl11',
    sceneImage: '/assets/upload/questions/dog eats bone.png',
    sceneEmoji: '🐶🦴',
    correct: ['dog', 'eats', 'bone'],
    description: 'Dog eats bone',
    voiceOver: '/assets/sfx/Soal/dog eats bone.mp3',
    cards: [
      { id: 'dog', type: 'person', label: 'Dog', image: '', emoji: '🐶' },
      { id: 'cat', type: 'person', label: 'Cat', image: '', emoji: '🐱' },
      { id: 'eats', type: 'action', label: 'Eats', image: '', emoji: '🍽️' },
      { id: 'runs', type: 'action', label: 'Runs', image: '', emoji: '🏃‍♂️' },
      { id: 'bone', type: 'object', label: 'Bone', image: '', emoji: '🦴' },
      { id: 'park', type: 'object', label: 'Park', image: '/assets/upload/icons/objects/park.png', emoji: '🏞️' }
    ]
  },
  {
    id: 'lvl12',
    sceneImage: '/assets/upload/questions/dog runs in a park.png',
    sceneEmoji: '🐶🏞️',
    correct: ['dog', 'runs', 'park'],
    description: 'Dog runs in a park',
    voiceOver: '/assets/sfx/Soal/dog run in park.mp3',
    cards: [
      { id: 'dog', type: 'person', label: 'Dog', image: '', emoji: '🐶' },
      { id: 'cat', type: 'person', label: 'Cat', image: '', emoji: '🐱' },
      { id: 'runs', type: 'action', label: 'Runs', image: '', emoji: '🏃‍♂️' },
      { id: 'eats', type: 'action', label: 'Eats', image: '', emoji: '🍽️' },
      { id: 'park', type: 'object', label: 'Park', image: '/assets/upload/icons/objects/park.png', emoji: '🏞️' },
      { id: 'bone', type: 'object', label: 'Bone', image: '', emoji: '🦴' }
    ]
  },
  // Level 4 - Aktivitas Dewasa
  {
    id: 'lvl13',
    sceneImage: '/assets/upload/questions/aunty waters flowers.png',
    sceneEmoji: '👩🌺',
    correct: ['aunty', 'waters', 'flowers'],
    description: 'Aunty waters flowers',
    voiceOver: '/assets/sfx/Soal/aunt waters flowers.mp3',
    cards: [
      { id: 'aunty', type: 'person', label: 'Aunty', image: '', emoji: '👧' },
      { id: 'mommy', type: 'person', label: 'Mommy', image: '', emoji: '👩' },
      { id: 'waters', type: 'action', label: 'Waters', image: '', emoji: '🚿' },
      { id: 'cleans', type: 'action', label: 'Cleans', image: '', emoji: '✨' },
      { id: 'flowers', type: 'object', label: 'Flowers', image: '', emoji: '🌺' },
      { id: 'desk', type: 'object', label: 'Desk', image: '', emoji: '🪑' }
    ]
  },
  {
    id: 'lvl14',
    sceneImage: '/assets/upload/questions/mommy cleans the desk.png',
    sceneEmoji: '👩‍👧🧽',
    correct: ['mommy', 'cleans', 'desk'],
    description: 'Mommy cleans the desk',
    voiceOver: '/assets/sfx/Soal/mommy clean laptop.mp3',
    cards: [
      { id: 'mommy', type: 'person', label: 'Mommy', image: '', emoji: '👩' },
      { id: 'aunty', type: 'person', label: 'Aunty', image: '', emoji: '👧' },
      { id: 'cleans', type: 'action', label: 'Cleans', image: '', emoji: '✨' },
      { id: 'cooks', type: 'action', label: 'Cooks', image: '', emoji: '🍳' },
      { id: 'desk', type: 'object', label: 'Desk', image: '', emoji: '💻' },
      { id: 'rice', type: 'object', label: 'Rice', image: '', emoji: '🍚' }
    ]
  },
  {
    id: 'lvl15',
    sceneImage: '/assets/upload/questions/mommy cooks rice.png',
    sceneEmoji: '👩‍👧🍚',
    correct: ['mommy', 'cooks', 'rice'],
    description: 'Mommy cooks rice',
    voiceOver: '/assets/sfx/Soal/momy cook rice.mp3',
    cards: [
      { id: 'mommy', type: 'person', label: 'Mommy', image: '', emoji: '👩' },
      { id: 'papa', type: 'person', label: 'Papa', image: '', emoji: '👨' },
      { id: 'cooks', type: 'action', label: 'Cooks', image: '', emoji: '🍳' },
      { id: 'drives', type: 'action', label: 'Drives', image: '/assets/upload/icons/actions/drives.png', emoji: '🛣️' },
      { id: 'rice', type: 'object', label: 'Rice', image: '', emoji: '🍚' },
      { id: 'car', type: 'object', label: 'Car', image: '', emoji: '🚗' }
    ]
  },
  {
    id: 'lvl16',
    sceneImage: '/assets/upload/questions/papa drives car.png',
    sceneEmoji: '👨🚗',
    correct: ['papa', 'drives', 'car'],
    description: 'Papa drives car',
    voiceOver: '/assets/sfx/Soal/papa drives car.mp3',
    cards: [
      { id: 'papa', type: 'person', label: 'Papa', image: '', emoji: '👨' },
      { id: 'mommy', type: 'person', label: 'Mommy', image: '', emoji: '👩' },
      { id: 'drives', type: 'action', label: 'Drives', image: '/assets/upload/icons/actions/drives.png', emoji: '🛣️' },
      { id: 'reads', type: 'action', label: 'Reads', image: '', emoji: '👁️' },
      { id: 'car', type: 'object', label: 'Car', image: '', emoji: '🚗' },
      { id: 'newspaper', type: 'object', label: 'Newspaper', image: '', emoji: '📰' }
    ]
  },
  // Level 5 - Aktivitas Kakek
  {
    id: 'lvl17',
    sceneImage: '/assets/upload/questions/grandpa dances on the floor.png',
    sceneEmoji: '👴💃',
    correct: ['grandpa', 'dances', 'floor'],
    description: 'Grandpa dances on the floor',
    voiceOver: '/assets/sfx/Soal/grandpa dances on the floor.mp3',
    cards: [
      { id: 'grandpa', type: 'person', label: 'Grandpa', image: '', emoji: '👴' },
      { id: 'papa', type: 'person', label: 'Papa', image: '', emoji: '👨' },
      { id: 'dances', type: 'action', label: 'Dances', image: '', emoji: '💃🏻' },
      { id: 'rides', type: 'action', label: 'Rides', image: '/assets/upload/icons/actions/rides.png', emoji: '🚵‍♂️' },
      { id: 'floor', type: 'object', label: 'Floor', image: '/assets/upload/icons/objects/floor.png', emoji: '🏠' },
      { id: 'bicycle', type: 'object', label: 'Bicycle', image: '', emoji: '🚴' }
    ]
  },
  {
    id: 'lvl18',
    sceneImage: '/assets/upload/questions/grandpa rides bicycle.png',
    sceneEmoji: '👴🚴',
    correct: ['grandpa', 'rides', 'bicycle'],
    description: 'Grandpa rides bicycle',
    voiceOver: '/assets/sfx/Soal/grandpa rides bicycle.mp3',
    cards: [
      { id: 'grandpa', type: 'person', label: 'Grandpa', image: '', emoji: '👴' },
      { id: 'papa', type: 'person', label: 'Papa', image: '', emoji: '👨' },
      { id: 'rides', type: 'action', label: 'Rides', image: '/assets/upload/icons/actions/rides.png', emoji: '🚵‍♂️' },
      { id: 'watches', type: 'action', label: 'Watches', image: '/assets/upload/icons/objects/remote.png', emoji: '📱' },
      { id: 'bicycle', type: 'object', label: 'Bicycle', image: '', emoji: '🚲' },
      { id: 'movie', type: 'object', label: 'Movie', image: '', emoji: '🎬' }
    ]
  },
  {
    id: 'lvl19',
    sceneImage: '/assets/upload/questions/grandpa watches movie.png',
    sceneEmoji: '👴🎬',
    correct: ['grandpa', 'watches', 'movie'],
    description: 'Grandpa watches movie',
    voiceOver: '/assets/sfx/Soal/papa watches movie.mp3',
    cards: [
      { id: 'grandpa', type: 'person', label: 'Grandpa', image: '', emoji: '👴' },
      { id: 'papa', type: 'person', label: 'Papa', image: '', emoji: '👨' },
      { id: 'watches', type: 'action', label: 'Watches', image: '/assets/upload/icons/objects/remote.png', emoji: '📱' },
      { id: 'reads', type: 'action', label: 'Reads', image: '', emoji: '👁️' },
      { id: 'movie', type: 'object', label: 'Movie', image: '', emoji: '🎬' },
      { id: 'newspaper', type: 'object', label: 'Newspaper', image: '', emoji: '📰' }
    ]
  },
  {
    id: 'lvl20',
    sceneImage: '/assets/upload/questions/papa reads newspapper.png',
    sceneEmoji: '👨📰',
    correct: ['papa', 'reads', 'newspaper'],
    description: 'Papa reads newspaper',
    voiceOver: '/assets/sfx/Soal/papa reads newspapper.mp3',
    cards: [
      { id: 'papa', type: 'person', label: 'Papa', image: '', emoji: '👨' },
      { id: 'grandpa', type: 'person', label: 'Grandpa', image: '', emoji: '👴' },
      { id: 'reads', type: 'action', label: 'Reads', image: '', emoji: '👁️' },
      { id: 'watches', type: 'action', label: 'Watches', image: '/assets/upload/icons/objects/remote.png', emoji: '📱' },
      { id: 'newspaper', type: 'object', label: 'Newspaper', image: '', emoji: '📰' },
      { id: 'movie', type: 'object', label: 'Movie', image: '', emoji: '🎬' }
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
