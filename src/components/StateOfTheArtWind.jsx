import React, { useMemo } from 'react';
import './StateOfTheArtWind.css';

export default function StateOfTheArtWind() {
  // Generate random wind gusts and waves to simulate flowing air
  const elements = useMemo(() => {
    // Sharp gusts (fast moving streaks)
    const gusts = Array.from({ length: 25 }).map((_, i) => ({
      type: 'gust',
      top: 5 + Math.random() * 90,
      duration: 1.5 + Math.random() * 3,
      delay: Math.random() * 8,
      opacity: 0.3 + Math.random() * 0.6,
      width: 10 + Math.random() * 50,
    }));

    // Soft waves (large, slow moving blurry patches of air)
    const waves = Array.from({ length: 12 }).map((_, i) => ({
      type: 'wave',
      top: Math.random() * 100,
      duration: 4 + Math.random() * 5,
      delay: Math.random() * 10,
      opacity: 0.15 + Math.random() * 0.35,
      width: 40 + Math.random() * 60,
    }));

    return [...gusts, ...waves];
  }, []);

  return (
    <div className="wind-container">
      {elements.map((el, i) => (
        <div 
          key={i}
          className={el.type === 'gust' ? 'wind-gust' : 'wind-gust-wave'}
          style={{
            top: `${el.top}%`,
            width: `${el.width}vw`,
            opacity: el.opacity,
            animationDuration: `${el.duration}s`,
            animationDelay: `${el.delay}s`
          }}
        />
      ))}
    </div>
  );
}
