import React from 'react';
import { motion } from 'framer-motion';

export default function AirWavingText({ 
  children, 
  as: Component = 'div', 
  className = '', 
  delay = 0,
}) {
  // If children is not a string, fallback to standard animation
  if (typeof children !== 'string') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
        className={className}
      >
        <Component>{children}</Component>
      </motion.div>
    );
  }

  // Split text into words for wave effect
  const words = children.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (customDelay) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: customDelay,
      }
    })
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateZ: -8,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 70,
        mass: 1.2
      }
    }
  };

  return (
    <Component className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        custom={delay}
        style={{ display: 'inline-block' }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            style={{ display: 'inline-block', marginRight: '0.25em', whiteSpace: 'nowrap' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Component>
  );
}
