import React, { useEffect, useRef } from 'react';

export default function PetalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Falling Petals array
    const petalCount = Math.min(30, Math.floor(width / 35));
    const petals = [];
    const petalColors = [
      { r: 217, g: 38, b: 64, a: 0.75 }, // Rose crimson
      { r: 238, g: 75, b: 106, a: 0.7 }, // Pink petal
      { r: 247, g: 147, b: 30, a: 0.75 }, // Marigold orange
      { r: 255, g: 215, b: 0, a: 0.75 }, // Gold petal
      { r: 255, g: 248, b: 220, a: 0.65 } // Jasmine cream
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: Math.random() * 1.2 + 0.8,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.03,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        oscillation: Math.random() * Math.PI * 2,
        oscillationSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // Upward drifting golden dust particles
    const dustCount = Math.min(40, Math.floor(width / 25));
    const goldenDust = [];
    for (let i = 0; i < dustCount; i++) {
      goldenDust.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        speedY: -(Math.random() * 0.5 + 0.3),
        speedX: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseVal: Math.random() * Math.PI,
      });
    }

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Golden Fireflies / Stardust
      for (let i = 0; i < goldenDust.length; i++) {
        const d = goldenDust[i];
        d.y += d.speedY;
        d.x += d.speedX;
        d.pulseVal += d.pulseSpeed;

        if (d.y < -10) {
          d.y = height + 10;
          d.x = Math.random() * width;
        }

        const currentAlpha = d.alpha * (0.6 + 0.4 * Math.sin(d.pulseVal));

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.radius * 2.5);
        gradient.addColorStop(0, `rgba(255, 235, 140, ${currentAlpha})`);
        gradient.addColorStop(0.5, `rgba(223, 183, 108, ${currentAlpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(223, 183, 108, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(d.x, d.y, d.radius * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Falling Petals
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.oscillation += p.oscillationSpeed;
        p.x += p.speedX + Math.sin(p.oscillation) * 0.8;
        p.y += p.speedY;
        p.angle += p.angleSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.scale(Math.cos(p.oscillation), 1);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        // Realistic petal curve
        ctx.bezierCurveTo(-p.size, -p.size * 1.5, -p.size * 1.2, p.size, 0, p.size * 1.8);
        ctx.bezierCurveTo(p.size * 1.2, p.size, p.size, -p.size * 1.5, 0, 0);

        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.color.a})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
}

