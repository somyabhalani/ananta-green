import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AuroraBackground from './AuroraBackground';
import RainBackground from './RainBackground';
import SunlightBackground from './SunlightBackground';

export default function DynamicEnvironment() {
  const { scrollYProgress } = useScroll();

  // Fade OUT Aurora as you scroll down
  const auroraOpacity = useTransform(scrollYProgress, [0, 0.4], [0.8, 0]);
  
  // Fade IN Rain in the middle
  const rainOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  // Fade IN Sun at the end
  const sunOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none', backgroundColor: '#eef2ee', overflow: 'hidden' }}>
      
      {/* The Beautiful 3D Aurora */}
      <motion.div style={{ position: 'absolute', inset: 0, opacity: auroraOpacity }}>
        <AuroraBackground />
      </motion.div>

      {/* Rain Effect */}
      <motion.div style={{ position: 'absolute', inset: 0, opacity: rainOpacity }}>
        <RainBackground />
      </motion.div>

      {/* Sunlight Effect */}
      <motion.div style={{ position: 'absolute', inset: 0, opacity: sunOpacity }}>
        <SunlightBackground />
      </motion.div>

      {/* Organic Glowing Orbs (Sarvam Ambient Lighting) */}
      
      {/* Orb 1: Deep Forest Green */}
      <motion.div
        animate={{
          x: ['-10%', '10%', '-5%', '-10%'],
          y: ['-10%', '5%', '15%', '-10%'],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '70vw',
          height: '70vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(17,34,17,0.15) 0%, rgba(17,34,17,0.05) 40%, rgba(17,34,17,0) 70%)',
          willChange: 'transform',
          transform: 'translate3d(0,0,0)'
        }}
      />

      {/* Orb 2: Warm Sun Gold */}
      <motion.div
        animate={{
          x: ['10%', '-15%', '5%', '10%'],
          y: ['10%', '-5%', '-15%', '10%'],
          scale: [0.9, 1.2, 1, 0.9]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,162,92,0.18) 0%, rgba(200,162,92,0.05) 40%, rgba(200,162,92,0) 70%)',
          willChange: 'transform',
          transform: 'translate3d(0,0,0)'
        }}
      />

      {/* Tactile Grain / Film Noise Overlay */}
      <div className="noise-overlay" />
      
    </div>
  );
}
