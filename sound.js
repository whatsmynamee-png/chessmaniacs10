// ─── SES MOTORU ───────────────────────────────────────────────────────────────
class SoundEngine {
  constructor() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  }

  playTone(freq, dur, type = 'sine') {
    if (!soundEnabled) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.connect(g);
    g.connect(this.ctx.destination);
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.3, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + dur);
    o.start(this.ctx.currentTime);
    o.stop(this.ctx.currentTime + dur);
  }

  playMove()          { this.playTone(523.25, 0.1, 'square'); }
  playCollapse()      { this.playTone(196, 0.15, 'sawtooth'); }
  playBorderCollapse(){ this.playTone(330, 0.2, 'triangle'); }

  playGameOver() {
    setTimeout(() => this.playTone(392,    0.2, 'triangle'),   0);
    setTimeout(() => this.playTone(349.23, 0.2, 'triangle'), 100);
    setTimeout(() => this.playTone(293.66, 0.4, 'triangle'), 200);
  }

  playSuccess() {
    setTimeout(() => this.playTone(523.25, 0.1, 'sine'),   0);
    setTimeout(() => this.playTone(659.25, 0.1, 'sine'), 100);
    setTimeout(() => this.playTone(783.99, 0.2, 'sine'), 200);
  }

  playPuzzleComplete() {
    setTimeout(() => this.playTone(523.25,  0.15, 'sine'),   0);
    setTimeout(() => this.playTone(659.25,  0.15, 'sine'), 150);
    setTimeout(() => this.playTone(783.99,  0.15, 'sine'), 300);
    setTimeout(() => this.playTone(1046.50, 0.3,  'sine'), 450);
  }

  playAchievement() {
    setTimeout(() => this.playTone(659.25,  0.1,  'sine'),   0);
    setTimeout(() => this.playTone(783.99,  0.1,  'sine'),  50);
    setTimeout(() => this.playTone(1046.50, 0.15, 'sine'), 100);
  }
}

const sound = new SoundEngine();
