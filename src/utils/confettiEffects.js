import confetti from 'canvas-confetti';

/**
 * Triggers a grand golden confetti and rose petal shower
 */
export const triggerPetalShower = () => {
  // Flower petal colors: deep rose red, pink, marigold orange, golden yellow, white jasmine
  const colors = ['#e63946', '#ff758f', '#ffb703', '#fb8500', '#d4af37', '#fff3b0'];

  // Left burst
  confetti({
    particleCount: 40,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.7 },
    colors: colors,
    shapes: ['circle', 'square'],
    scalar: 1.2,
    drift: 0.2,
    ticks: 200,
  });

  // Right burst
  confetti({
    particleCount: 40,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.7 },
    colors: colors,
    shapes: ['circle', 'square'],
    scalar: 1.2,
    drift: -0.2,
    ticks: 200,
  });

  // Center golden sparkle
  confetti({
    particleCount: 60,
    spread: 100,
    origin: { x: 0.5, y: 0.5 },
    colors: ['#ffd700', '#dfb76c', '#fff1b8', '#ff4d6d'],
    scalar: 1.4,
    gravity: 0.8,
    ticks: 250,
  });
};

/**
 * Triggers sacred Akshintalu (yellow rice) blessing shower
 */
export const triggerAkshintaluShower = () => {
  const yellowRiceColors = ['#ffd60a', '#ffc300', '#ffea00', '#e9d8a6', '#f4a261'];

  // High density burst resembling sacred yellow rice grains
  confetti({
    particleCount: 100,
    spread: 120,
    origin: { x: 0.5, y: 0.3 },
    colors: yellowRiceColors,
    shapes: ['circle'],
    scalar: 0.7,
    gravity: 1.1,
    drift: 0.05,
    ticks: 220,
  });

  // Accompanying gentle rose petals
  setTimeout(() => {
    confetti({
      particleCount: 35,
      spread: 70,
      origin: { x: 0.5, y: 0.35 },
      colors: ['#e63946', '#c9184a', '#ff758f'],
      scalar: 1.3,
      gravity: 0.6,
      ticks: 260,
    });
  }, 150);
};

/**
 * Triggers envelope opening golden explosion
 */
export const triggerEnvelopeOpeningConfetti = () => {
  confetti({
    particleCount: 120,
    spread: 140,
    origin: { x: 0.5, y: 0.6 },
    colors: ['#ffd700', '#dfb76c', '#fff275', '#e63946', '#ffffff'],
    scalar: 1.3,
    gravity: 0.7,
    ticks: 300,
  });
};

