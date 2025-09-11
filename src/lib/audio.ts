import { Howl } from 'howler';

class AudioManager {
  private sounds: Map<string, Howl> = new Map();
  private backgroundMusic: Howl | null = null;
  private isMuted: boolean = false;
  private isBackgroundMusicMuted: boolean = false;
  private isBackgroundMusicPlaying: boolean = false;
  private backgroundMusicVolume: number = 0.3;
  private audioContextResumed: boolean = false;

  constructor() {
    this.initializeSounds();
    this.initializeBackgroundMusic();
  }

  // Method untuk resume AudioContext setelah user interaction
  async resumeAudioContext() {
    if (this.audioContextResumed) return;
    
    try {
      // Resume Howler.js context terlebih dahulu
      if (typeof window !== 'undefined' && (window as any).Howl) {
        const ctx = (window as any).Howl.ctx;
        if (ctx && ctx.state === 'suspended') {
          await ctx.resume();
          console.log('Howler AudioContext resumed successfully');
        }
      }
      
      // Resume AudioContext jika ada
      if (typeof window !== 'undefined' && window.AudioContext) {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        if (audioContext.state === 'suspended') {
          await audioContext.resume();
          console.log('AudioContext resumed successfully');
        }
      }
      
      this.audioContextResumed = true;
    } catch (error) {
      console.warn('Failed to resume AudioContext:', error);
    }
  }

  // Method untuk mengaktifkan audio dengan user interaction
  async enableAudio() {
    try {
      // Buat AudioContext baru untuk memicu user interaction
      if (typeof window !== 'undefined') {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Buat silent sound untuk mengaktifkan audio (tidak terdengar)
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Silent sound untuk mengaktifkan audio context
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.type = 'sine';
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        
        // Resume context
        if (audioContext.state === 'suspended') {
          await audioContext.resume();
        }
        
        // Set Howler volume ke maksimal menggunakan Howler global
        if (typeof window !== 'undefined' && (window as any).Howler) {
          (window as any).Howler.volume(1.0);
        }
        
        console.log('Audio enabled successfully with volume 1.0');
        this.audioContextResumed = true;
      }
    } catch (error) {
      console.warn('Failed to enable audio:', error);
    }
  }


  private initializeSounds() {
    // Load semua custom audio files yang tersedia
    const soundFiles = {
      // Sound Effects
      'success': '/assets/sfx/success.mp3',
      'error': '/assets/sfx/error.mp3',
      'wrong': '/assets/sfx/wrong.mp3',
      'wrongAnswer': '/assets/sfx/wrong answer.mp3',
      'drop': '/assets/sfx/drop.mp3',
      'levelComplete': '/assets/sfx/level-complete.mp3',
      'goodJob': '/assets/sfx/good job.mp3',
      
      // Voice Messages
      'askMommyToHelp': '/assets/sfx/ask mommy to help.mp3',
      'lookWhoIsThis': '/assets/sfx/look who is this what are they doing.mp3',
      'thanksForPlaying': '/assets/sfx/Thanks for playing this game.mp3',
      'welcome': '/assets/sfx/welcome.mp3',
      
      // Voice Over untuk setiap soal (20 soal)
      'voiceOver_boy_eats_apple': '/assets/sfx/Soal/boy eats apple.mp3',
      'voiceOver_baby_drinks_milk': '/assets/sfx/Soal/baby drinks milk.mp3',
      'voiceOver_baby_claps_hand': '/assets/sfx/Soal/baby claps hand.mp3',
      'voiceOver_boy_brushes_teeth': '/assets/sfx/Soal/boy brushes teeth.mp3',
      'voiceOver_boy_kicks_ball': '/assets/sfx/Soal/boy kicks ball.mp3',
      'voiceOver_girl_plays_baloon': '/assets/sfx/Soal/girl plays baloon.mp3',
      'voiceOver_girl_draw_a_house': '/assets/sfx/Soal/girl draw a house.mp3',
      'voiceOver_girl_sings_a_song': '/assets/sfx/Soal/girl sings a song.mp3',
      'voiceOver_cat_plays_with_yarn': '/assets/sfx/Soal/cat plays with yarn.mp3',
      'voiceOver_cat_sleeps_on_chair': '/assets/sfx/Soal/cat sleeps on chair.mp3',
      'voiceOver_dog_eats_bone': '/assets/sfx/Soal/dog eats bone.mp3',
      'voiceOver_dog_run_in_park': '/assets/sfx/Soal/dog run in park.mp3',
      'voiceOver_aunt_waters_flowers': '/assets/sfx/Soal/aunt waters flowers.mp3',
      'voiceOver_mommy_clean_laptop': '/assets/sfx/Soal/mommy clean laptop.mp3',
      'voiceOver_momy_cook_rice': '/assets/sfx/Soal/momy cook rice.mp3',
      'voiceOver_papa_drives_car': '/assets/sfx/Soal/papa drives car.mp3',
      'voiceOver_grandpa_dances_on_the_floor': '/assets/sfx/Soal/grandpa dances on the floor.mp3',
      'voiceOver_grandpa_rides_bicycle': '/assets/sfx/Soal/grandpa rides bicycle.mp3',
      'voiceOver_papa_watches_movie': '/assets/sfx/Soal/papa watches movie.mp3',
      'voiceOver_papa_reads_newspapper': '/assets/sfx/Soal/papa reads newspapper.mp3'
    };

    Object.entries(soundFiles).forEach(([name, src]) => {
      const sound = new Howl({
        src: [src],
        volume: 1.0, // Volume maksimal untuk semua sound effects
        preload: true, // Preload semua audio files
        onloaderror: (id, error) => {
          console.warn(`Failed to load sound ${name}:`, error);
        },
        onload: () => {
          console.log(`Successfully loaded sound: ${name}`);
        }
      });
      this.sounds.set(name, sound);
    });

    console.log('Custom audio files loaded successfully');
  }

  private initializeBackgroundMusic() {
    this.backgroundMusic = new Howl({
      src: ['/assets/sfx/bgm.mp3'],
      volume: 0.5, // Volume lebih tinggi untuk background music
      loop: true,
      preload: true, // Preload background music
      onloaderror: (id, error) => {
        console.warn('Failed to load background music:', error);
      },
      onload: () => {
        console.log('Successfully loaded background music');
      }
    });
  }

  async play(soundName: string) {
    if (this.isMuted) return;
    
    // Resume AudioContext sebelum memutar suara
    await this.resumeAudioContext();
    
    const sound = this.sounds.get(soundName);
    if (sound) {
      try {
        // Pastikan volume maksimal
        sound.volume(1.0);
        sound.play();
        console.log(`Playing sound: ${soundName} at volume 1.0`);
      } catch (error) {
        console.warn(`Failed to play sound ${soundName}:`, error);
        // Fallback: create a simple beep sound
        this.playFallbackSound(soundName);
      }
    } else {
      console.warn(`Sound ${soundName} not found`);
      // Fallback: create a simple beep sound
      this.playFallbackSound(soundName);
    }
  }

  // Method untuk memutar voice over soal berdasarkan level
  async playQuestionVoiceOverByLevel(levelDescription: string) {
    if (this.isMuted) return;
    
    // Resume AudioContext sebelum memutar suara
    await this.resumeAudioContext();
    
    // Mapping dari description ke voice over key
    const voiceOverMapping: Record<string, string> = {
      'Boy eats apple': 'voiceOver_boy_eats_apple',
      'Baby drinks milk': 'voiceOver_baby_drinks_milk',
      'Baby claps hands': 'voiceOver_baby_claps_hand',
      'Boy brushes teeth': 'voiceOver_boy_brushes_teeth',
      'Boy kicks ball': 'voiceOver_boy_kicks_ball',
      'Girl plays balloon': 'voiceOver_girl_plays_baloon',
      'Girl draws a house': 'voiceOver_girl_draw_a_house',
      'Girl sings a song': 'voiceOver_girl_sings_a_song',
      'Cat plays with yarn': 'voiceOver_cat_plays_with_yarn',
      'Cat sleeps on chair': 'voiceOver_cat_sleeps_on_chair',
      'Dog eats bone': 'voiceOver_dog_eats_bone',
      'Dog runs in a park': 'voiceOver_dog_run_in_park',
      'Aunty waters flowers': 'voiceOver_aunt_waters_flowers',
      'Mommy cleans the desk': 'voiceOver_mommy_clean_laptop',
      'Mommy cooks rice': 'voiceOver_momy_cook_rice',
      'Papa drives car': 'voiceOver_papa_drives_car',
      'Grandpa dances on the floor': 'voiceOver_grandpa_dances_on_the_floor',
      'Grandpa rides bicycle': 'voiceOver_grandpa_rides_bicycle',
      'Grandpa watches movie': 'voiceOver_papa_watches_movie',
      'Papa reads newspaper': 'voiceOver_papa_reads_newspapper'
    };
    
    const voiceOverKey = voiceOverMapping[levelDescription];
    
    if (voiceOverKey) {
      console.log(`Playing voice over for: ${levelDescription}`);
      await this.play(voiceOverKey);
    } else {
      console.warn(`No voice over found for: ${levelDescription}`);
      // Fallback ke text-to-speech
      this.speak(levelDescription);
    }
  }

  // Method untuk memutar voice over soal (legacy method)
  async playQuestionVoiceOver(voiceOverPath: string) {
    if (this.isMuted) return;
    
    // Resume AudioContext sebelum memutar suara
    await this.resumeAudioContext();
    
    console.log(`Playing question voice over: ${voiceOverPath}`);
    
    const sound = new Howl({
      src: [voiceOverPath],
      volume: 0.8,
      preload: false,
      onloaderror: (id, error) => {
        console.warn(`Failed to load question voice over ${voiceOverPath}:`, error);
        // Fallback ke text-to-speech jika file audio gagal
        this.speakQuestionFallback(voiceOverPath);
      }
    });
    
    try {
      sound.play();
    } catch (error) {
      console.warn(`Error playing question voice over ${voiceOverPath}:`, error);
      // Fallback ke text-to-speech
      this.speakQuestionFallback(voiceOverPath);
    }
  }

  // Fallback method untuk text-to-speech jika audio file gagal
  private speakQuestionFallback(voiceOverPath: string) {
    // Extract question text from filename
    const filename = voiceOverPath.split('/').pop()?.replace('.mp3', '') || '';
    
    // Convert filename to readable text
    let questionText = filename
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
    
    // Handle specific cases
    const textMappings: Record<string, string> = {
      'boy eats apple': 'Boy eats apple',
      'baby drinks milk': 'Baby drinks milk',
      'baby claps hand': 'Baby claps hands',
      'boy brushes teeth': 'Boy brushes teeth',
      'boy kicks ball': 'Boy kicks ball',
      'girl plays baloon': 'Girl plays balloon',
      'girl draw a house': 'Girl draws a house',
      'girl sings a song': 'Girl sings a song',
      'cat plays with yarn': 'Cat plays with yarn',
      'cat sleeps on chair': 'Cat sleeps on chair',
      'dog eats bone': 'Dog eats bone',
      'dog run in park': 'Dog runs in a park',
      'aunt waters flowers': 'Aunty waters flowers',
      'mommy clean laptop': 'Mommy cleans the desk',
      'momy cook rice': 'Mommy cooks rice',
      'papa drives car': 'Papa drives car',
      'grandpa dances on the floor': 'Grandpa dances on the floor',
      'grandpa rides bicycle': 'Grandpa rides bicycle',
      'papa watches movie': 'Grandpa watches movie',
      'papa reads newspapper': 'Papa reads newspaper'
    };
    
    const finalText = textMappings[filename] || questionText;
    
    console.log(`Using text-to-speech fallback for: ${finalText}`);
    this.speak(finalText);
  }

  // Background music methods
  async startBackgroundMusic() {
    if (this.isBackgroundMusicMuted || !this.backgroundMusic) return;
    
    // Jangan start jika sudah playing
    if (this.isBackgroundMusicPlaying) {
      console.log('Background music already playing, skipping start');
      return;
    }
    
    // Resume AudioContext sebelum memutar musik
    await this.resumeAudioContext();
    
    try {
      // Pastikan volume maksimal untuk background music
      this.backgroundMusic.volume(0.5);
      this.backgroundMusic.play();
      this.isBackgroundMusicPlaying = true;
      console.log('Background music started at volume 0.5');
    } catch (error) {
      console.warn('Failed to start background music:', error);
    }
  }

  stopBackgroundMusic() {
    if (!this.isBackgroundMusicPlaying || !this.backgroundMusic) return;
    
    this.backgroundMusic.stop();
    this.isBackgroundMusicPlaying = false;
    console.log('Background music stopped');
  }

  pauseBackgroundMusic() {
    if (!this.isBackgroundMusicPlaying || !this.backgroundMusic) return;
    
    this.backgroundMusic.pause();
    this.isBackgroundMusicPlaying = false;
    console.log('Background music paused');
  }

  resumeBackgroundMusic() {
    if (this.isBackgroundMusicMuted || !this.backgroundMusic) return;
    
    // Hanya resume jika tidak sedang playing
    if (!this.isBackgroundMusicPlaying) {
      this.backgroundMusic.play();
      this.isBackgroundMusicPlaying = true;
      console.log('Background music resumed');
    }
  }

  setBackgroundMusicVolume(volume: number) {
    this.backgroundMusicVolume = Math.max(0, Math.min(1, volume));
    if (this.backgroundMusic) {
      this.backgroundMusic.volume(this.backgroundMusicVolume);
    }
  }

  setBackgroundMusicMuted(muted: boolean) {
    this.isBackgroundMusicMuted = muted;
    
    if (muted) {
      this.pauseBackgroundMusic();
    } else {
      this.resumeBackgroundMusic();
    }
  }

  isBackgroundMusicMutedState(): boolean {
    return this.isBackgroundMusicMuted;
  }

  getBackgroundMusicVolume(): number {
    return this.backgroundMusicVolume;
  }

  private playFallbackSound(soundName: string) {
    if (this.isMuted) return;
    
    // Special handling for clapping sound
    if (soundName === 'clapping') {
      this.playClappingSound();
      return;
    }
    
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Different frequencies for different sounds
    const frequencies: Record<string, number> = {
      'success': 800,
      'error': 300,
      'wrong': 250,
      'wrongAnswer': 200,
      'drop': 600,
      'levelComplete': 1000,
      'goodJob': 900,
      'askMommyToHelp': 400,
      'lookWhoIsThis': 500,
      'thanksForPlaying': 700,
      'welcome': 600
    };
    
    oscillator.frequency.setValueAtTime(frequencies[soundName] || 440, audioContext.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  }

  private playClappingSound() {
    if (this.isMuted) return;
    
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create multiple clapping sounds for realistic effect
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // White noise for clapping sound
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200 + Math.random() * 100, audioContext.currentTime);
        
        // Filter to make it sound more like clapping
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1000 + Math.random() * 500, audioContext.currentTime);
        filter.Q.setValueAtTime(1, audioContext.currentTime);
        
        // Envelope for clapping
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
      }, i * 50); // Stagger the claps
    }
  }

  setMuted(muted: boolean) {
    this.isMuted = muted;
    Howler.mute(muted);
    
    // Note: Background music is controlled separately
    // Use setBackgroundMusicMuted() to control background music
  }

  isMutedState(): boolean {
    return this.isMuted;
  }

  // Text-to-Speech untuk voice over
  speak(text: string) {
    if (this.isMuted) return;
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // Bahasa Inggris
      utterance.rate = 0.6; // Lebih lambat dari sebelumnya (0.8)
      utterance.pitch = 1.0; // Pitch normal untuk suara wanita
      utterance.volume = 0.8; // Volume sedikit lebih keras
      
      // Fungsi untuk memilih suara wanita
      const selectFemaleVoice = () => {
        const voices = speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => 
          voice.lang.startsWith('en') && 
          (voice.name.includes('Female') || 
           voice.name.includes('Woman') || 
           voice.name.includes('Samantha') ||
           voice.name.includes('Karen') ||
           voice.name.includes('Victoria') ||
           voice.name.includes('Susan') ||
           voice.name.includes('Zira') ||
           voice.name.includes('Hazel'))
        );
        
        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }
        
        speechSynthesis.speak(utterance);
      };
      
      // Pastikan voices sudah dimuat
      if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener('voiceschanged', selectFemaleVoice, { once: true });
      } else {
        selectFemaleVoice();
      }
    }
  }

  stopSpeaking() {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  }

  // Method untuk menghentikan welcome voice secara spesifik
  stopWelcomeVoice() {
    const welcomeSound = this.sounds.get('welcome');
    if (welcomeSound && welcomeSound.playing()) {
      welcomeSound.stop();
      console.log('Welcome voice stopped');
    }
  }

  // Method untuk menghentikan semua suara yang sedang diputar
  stopAllSounds() {
    // Stop all Howl sounds
    this.sounds.forEach(sound => {
      if (sound.playing()) {
        sound.stop();
      }
    });
    
    // Stop background music
    if (this.backgroundMusic && this.backgroundMusic.playing()) {
      this.backgroundMusic.stop();
    }
    
    // Stop text-to-speech
    this.stopSpeaking();
    
    console.log('All sounds stopped');
  }

  // Method untuk test audio (dihapus untuk menghindari suara double)
  // async testAudio() {
  //   console.log('Testing audio system...');
  //   
  //   // Test 1: Play welcome sound
  //   console.log('Test 1: Playing welcome sound');
  //   await this.play('welcome');
  //   
  //   // Test 2: Play success sound
  //   setTimeout(() => {
  //     console.log('Test 2: Playing success sound');
  //     this.play('success');
  //   }, 1000);
  //   
  //   // Test 3: Play background music
  //   setTimeout(() => {
  //     console.log('Test 3: Starting background music');
  //     this.startBackgroundMusic();
  //   }, 2000);
  //   
  //   console.log('Audio test completed');
  // }
}

// Singleton instance
export const audioManager = new AudioManager();
