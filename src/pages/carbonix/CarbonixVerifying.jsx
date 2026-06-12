import React from 'react';
import { motion } from 'framer-motion';

export default function CarbonixVerifying() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ color: 'white', padding: '4rem', zIndex: 10, position: 'relative' }}
    >
      <h1>Carbonix: Step 3 - Verifying...</h1>
    </motion.div>
  );
}
