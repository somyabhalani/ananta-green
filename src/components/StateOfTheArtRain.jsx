import React, { useEffect, useRef } from 'react';

export default function StateOfTheArtRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];
    let animationFrameId;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const initParticles = () => {
      particles = [];
      // Drastically reduced particle count to fix all lag
      const numParticles = width > 768 ? 100 : 50;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          length: Math.random() * 20 + 10,
          speed: Math.random() * 15 + 10,
          opacity: Math.random() * 0.3 + 0.1,
          width: Math.random() * 1.5 + 0.5,
          angle: 0.08 // Wind angle
        });
      }
    };

    const draw = () => {
      // Clear canvas with a very slight fade for motion blur
      ctx.fillStyle = 'rgba(12, 30, 28, 0.3)'; // Premium deep teal motion blur
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.length * Math.sin(p.angle), p.y + p.length * Math.cos(p.angle));
        ctx.strokeStyle = `rgba(180, 220, 210, ${p.opacity})`; // Soft minty rain
        ctx.lineWidth = p.width;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Update position
        p.x += p.speed * Math.sin(p.angle);
        p.y += p.speed * Math.cos(p.angle);

        // Reset if off screen
        if (p.y > height) {
          p.y = -p.length;
          p.x = Math.random() * width;
        }
        if (p.x > width) {
          p.x = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    resize();
    initParticles();
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      {/* 
        The gradient is now a static CSS background behind the canvas! 
        This completely eliminates the extreme GPU lag of drawing a gradient 60 times a second.
        The colors are a beautiful, premium, deep oceanic teal to match Ananta Green.
      */}
      <div style={{ 
        position: 'absolute', 
        top: 0, left: 0, width: '100%', height: '100%', 
        background: 'linear-gradient(to bottom, #163832, #071512)',
        zIndex: -1 
      }}></div>
      
      <canvas 
        ref={canvasRef} 
        style={{ 
          display: 'block',
          width: '100%', 
          height: '100%', 
          pointerEvents: 'none'
        }} 
      />
      
      {/* Static gradient overlay for the atmospheric fog effect (Zero lag) */}
      <div style={{ 
        position: 'absolute', 
        top: 0, left: 0, width: '100%', height: '100%', 
        background: 'linear-gradient(to bottom, rgba(7, 21, 18, 0), rgba(7, 21, 18, 0.95))',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>
    </div>
  );
}
