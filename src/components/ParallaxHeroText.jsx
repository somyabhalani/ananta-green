import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ParallaxHeroText({ children, className }) {
  const containerRef = useRef(null);
  
  // Track scroll progress within the bounds of this text element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"]
  });
  
  // Use a spring to make the physics buttery smooth
  const smoothProgress = useSpring(scrollYProgress, { damping: 50, stiffness: 400 });

  // A very clean, subtle parallax effect: fades out and moves up slightly
  const y = useTransform(smoothProgress, [0, 1], [0, 50]);
  const opacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 0.2, 0]);

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative' }}>
      <motion.h1 
        style={{ 
          margin: 0,
          fontSize: 'inherit',
          fontWeight: 'inherit',
          lineHeight: 'inherit',
          color: 'inherit',
          letterSpacing: 'inherit',
          y, 
          opacity,
          willChange: 'transform, opacity'
        }}
      >
        {children}
      </motion.h1>
    </div>
  );
}
