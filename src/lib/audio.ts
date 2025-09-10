import { Howl } from 'howler';

class AudioManager {
  private sounds: Map<string, Howl> = new Map();
  private isMuted: boolean = false;

  constructor() {
    this.initializeSounds();
  }

  private initializeSounds() {
    // Skip loading audio files untuk performa lebih baik
    // Semua suara akan menggunakan fallback sound
    console.log('Audio files not loaded, using fallback sounds for better performance');
  }

  play(soundName: string) {
    if (this.isMuted) return;
    
    const sound = this.sounds.get(soundName);
    if (sound) {
      sound.play();
    } else {
      // Fallback: create a simple beep sound
      this.playFallbackSound(soundName);
    }
  }

  private playFallbackSound(soundName: string) {
    if (this.isMuted) return;
    
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Different frequencies for different sounds
    const frequencies: Record<string, number> = {
      'success': 800,
      'error': 300,
      'drop': 600,
      'levelComplete': 1000
    };
    
    oscillator.frequency.setValueAtTime(frequencies[soundName] || 440, audioContext.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  }

  setMuted(muted: boolean) {
    this.isMuted = muted;
    Howler.mute(muted);
  }

  isMutedState(): boolean {
    return this.isMuted;
  }

  // Text-to-Speech untuk voice over
  speak(text: string) {
    if (this.isMuted) return;
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID'; // Bahasa Indonesia
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      utterance.volume = 0.7;
      
      speechSynthesis.speak(utterance);
    }
  }

  stopSpeaking() {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  }
}

// Singleton instance
export const audioManager = new AudioManager();
