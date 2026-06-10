import React, { useMemo } from 'react';
import './SunlightBackground.css';

export default function SunlightBackground() {
  const dustParticles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * -10, // negative delay so they are already moving
    }));
  }, []);

  return (
    <div className="sunlight-container">
      <div className="sun-beam" />
      
      {dustParticles.map((dust, i) => (
        <div 
          key={i}
          className="floating-dust"
          style={{
            left: `${dust.left}vw`,
            top: `${dust.top}vh`,
            animationDuration: `${dust.duration}s`,
            animationDelay: `${dust.delay}s`
          }}
        />
      ))}
    </div>
  );
}
