/**
 * Wedding Audio Player
 * Plays the user's custom wedding BGM MP3 at a smooth, gentle, non-intrusive volume.
 */

class WeddingAudioManager {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.targetVolume = 0.32; // Smooth, gentle, soothing low volume
    this.fadeInterval = null;
    this.audioCtx = null;
  }

  init() {
    if (!this.audio) {
      this.audio = new Audio('/assets/wedding_bgm.mp3');
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = 0;
    }
  }

  start() {
    this.init();
    if (!this.audio) return;

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    this.audio.play().then(() => {
      this.isPlaying = true;
      // Smooth fade-in to gentle volume
      let vol = 0;
      this.audio.volume = vol;
      this.fadeInterval = setInterval(() => {
        if (!this.audio) {
          clearInterval(this.fadeInterval);
          return;
        }
        vol += 0.03;
        if (vol >= this.targetVolume) {
          this.audio.volume = this.targetVolume;
          clearInterval(this.fadeInterval);
          this.fadeInterval = null;
        } else {
          this.audio.volume = Math.min(this.targetVolume, vol);
        }
      }, 70);
    }).catch((err) => {
      console.warn('Audio play prevented or awaiting user interaction:', err);
    });
  }

  stop() {
    if (!this.audio || !this.isPlaying) return;

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    // Smooth fade-out before pause
    let vol = this.audio.volume;
    this.fadeInterval = setInterval(() => {
      vol -= 0.04;
      if (vol <= 0.02) {
        if (this.audio) {
          this.audio.volume = 0;
          this.audio.pause();
        }
        this.isPlaying = false;
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
      } else {
        if (this.audio) this.audio.volume = vol;
      }
    }, 50);
  }

  setVolume(vol) {
    this.targetVolume = Math.max(0, Math.min(1, vol));
    if (this.audio) {
      this.audio.volume = this.targetVolume;
    }
  }

  /**
   * Auspicious soft chime on blessing shower
   */
  playTempleBell() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1174.66, now); // D6 auspicious bell harmonic
      gain.gain.setValueAtTime(0.08, now); // Very soft chime
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } catch (e) {
      // Ignore if AudioContext blocked
    }
  }
}

export const weddingSynth = new WeddingAudioManager();
