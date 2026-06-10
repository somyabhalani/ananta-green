import React, { useMemo } from 'react';
import './RainBackground.css';

export default function RainBackground() {
  const rainDrops = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      left: Math.random() * 120 - 10, // Wider spread for angled rain
      duration: 0.4 + Math.random() * 0.4, // Much faster falling speed
      delay: Math.random() * 5,
      opacity: 0.2 + Math.random() * 0.5,
      height: 15 + Math.random() * 40,
    }));
  }, []);

  return (
    <div className="rain-container">
      {rainDrops.map((drop, i) => (
        <div 
          key={i}
          className="rain-drop"
          style={{
            left: `${drop.left}vw`,
            height: `${drop.height}px`,
            opacity: drop.opacity,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`
          }}
        />
      ))}
    </div>
  );
}
