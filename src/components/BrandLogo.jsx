import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BrandLogo() {
  const brandName = "ananta green";
  const letters = brandName.split("");
  
  const flareColor = 'rgba(168, 230, 207, 0.8)';
  const coreColor = 'rgba(255, 255, 255, 1)';

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem 2rem' }}>
      
      {/* Left Cinematic Breathing Flare */}
      <div style={{ position: 'absolute', right: '100%', paddingRight: '1rem', top: '50%', transform: 'translateY(-50%)', width: '35vw', display: 'flex', justifyContent: 'flex-end', pointerEvents: 'none' }}>
        <motion.div
          initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
          animate={{ scaleX: 1, scaleY: [1, 3, 1], opacity: [0, 1, 0] }}
          transition={{ 
            duration: 5.0, // Substantially slower flare
            ease: [0.16, 1, 0.3, 1], 
            times: [0, 0.5, 1],
            delay: 0.5
          }}
          style={{
            height: '2px',
            width: '100%',
            background: `linear-gradient(270deg, ${coreColor} 0%, ${flareColor} 15%, transparent 100%)`,
            boxShadow: `0 0 20px 4px ${flareColor}`,
            borderRadius: '50%',
            transformOrigin: 'right',
            filter: 'blur(1px)'
          }}
        />
      </div>
      
      {/* The Premium Staggered Text Reveal */}
      <Link to="/" className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', margin: 0, padding: 0, zIndex: 10, position: 'relative', textDecoration: 'none' }}>
        {letters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ 
              duration: 2.5, 
              ease: [0.16, 1, 0.3, 1], 
              delay: index * 0.15 + 0.3 
            }}
            style={{ display: 'inline-block' }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Link>

      {/* Right Cinematic Breathing Flare */}
      <div style={{ position: 'absolute', left: '100%', paddingLeft: '1rem', top: '50%', transform: 'translateY(-50%)', width: '35vw', display: 'flex', justifyContent: 'flex-start', pointerEvents: 'none' }}>
        <motion.div
          initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
          animate={{ scaleX: 1, scaleY: [1, 3, 1], opacity: [0, 1, 0] }}
          transition={{ 
            duration: 5.0, // Substantially slower flare
            ease: [0.16, 1, 0.3, 1], 
            times: [0, 0.5, 1],
            delay: 0.5
          }}
          style={{
            height: '2px',
            width: '100%',
            background: `linear-gradient(90deg, ${coreColor} 0%, ${flareColor} 15%, transparent 100%)`,
            boxShadow: `0 0 20px 4px ${flareColor}`,
            borderRadius: '50%',
            transformOrigin: 'left',
            filter: 'blur(1px)'
          }}
        />
      </div>

    </div>
  );
}
