import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete, isDarkMode, theme }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const sequence = [
      setTimeout(() => setStage(1), 500), // Fade in Welcome (1000 -> 500)
      setTimeout(() => setStage(2), 1700), // End Welcome after 1.2s (2200 -> 1700)
      setTimeout(() => setStage(3), 4800), // Stay on Name for 3.1s (5100 -> 4800)
    ];
    
    const finalTimer = setTimeout(() => {
      onComplete();
    }, 6000); // 6300 -> 6000 (Total 0.3s faster)

    return () => {
      sequence.forEach(clearTimeout);
      clearTimeout(finalTimer);
    };
  }, [onComplete]);

  const currentColors = isDarkMode ? theme.dark : theme.light;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 1000, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: currentColors.background,
        color: currentColors.text,
        flexDirection: 'column'
      }}
    >
      <AnimatePresence mode="wait">
        {stage === 1 && (
          <motion.h1
            key="welcome"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: '3rem', fontWeight: 300, letterSpacing: '0.2em' }}
          >
            WELCOME
          </motion.h1>
        )}
        {stage === 2 && (
          <motion.div
            key="name"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '1.2rem', letterSpacing: '0.5em', opacity: 0.7, marginBottom: '1rem' }}>
              PORTFOLIO OF
            </h2>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: currentColors.accent }}>
              SAI KUMAR
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default IntroAnimation;
