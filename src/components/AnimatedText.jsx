import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedText({ 
  children, 
  as: Component = 'div', 
  className = '', 
  delay = 0,
  animateOnLoad = false,
  ...rest
}) {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1.0], // Unhurried, smooth ease
        delay: delay,
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={animateOnLoad ? undefined : "visible"}
      animate={animateOnLoad ? "visible" : undefined}
      viewport={{ once: true, amount: 0.1 }}
      variants={textVariants}
      className={className}
    >
      <Component {...rest}>{children}</Component>
    </motion.div>
  );
}
