import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, className }) {
  const ref = useRef(null);

  // Motion values to track mouse position (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for buttery Apple-like physics
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  // Map mouse coordinates to rotation (-15 to 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Map mouse coordinates to a glass glare/shine effect
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "150%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "150%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the card's dimensions
    const width = rect.width;
    const height = rect.height;
    
    // Normalize to -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Snap back to center when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        position: "relative",
        overflow: "hidden", // Contain the glass glare
        perspective: "1000px",
        // Disable CSS transitions so they don't fight with Framer Motion springs
        transition: "box-shadow 0.4s ease" 
      }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 30px 60px rgba(0,0,0,0.12)" 
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {/* Dynamic Glass Glare/Shine Effect */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)",
          x: glareX,
          y: glareY,
          pointerEvents: "none",
          zIndex: 10,
          mixBlendMode: "overlay"
        }}
      />
      
      {/* 3D Pop-out content container */}
      <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
