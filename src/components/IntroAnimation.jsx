import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/mock';

const IntroAnimation = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowGlitch(true), 800);
    const timer2 = setTimeout(() => setCurrentPhase(1), 2000);
    const timer3 = setTimeout(() => setCurrentPhase(2), 3500);
    const timer4 = setTimeout(() => setCurrentPhase(3), 5000);
    const timer5 = setTimeout(() => onComplete(), 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 text-center max-w-4xl px-8">
          
          {/* Phase 0: Welcome */}
          {currentPhase === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 
                  className={`text-5xl md:text-7xl font-bold text-white tracking-widest mb-4 ${
                    showGlitch ? 'animate-pulse' : ''
                  }`}
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    textShadow: showGlitch 
                      ? '0 0 20px #00FFFF, 0 0 40px #00FFFF' 
                      : '0 0 10px rgba(255, 255, 255, 0.5)',
                  }}
                >
                  NEURAL INTERFACE
                </h1>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-cyan-400 text-xl tracking-wide"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  INITIALIZING QUANTUM PORTFOLIO SYSTEM...
                </motion.div>
              </motion.div>

              {showGlitch && (
                <motion.div
                  className="absolute inset-0 text-5xl md:text-7xl font-bold tracking-widest text-magenta-500 pointer-events-none"
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    clipPath: 'inset(60% 0 40% 0)',
                  }}
                  animate={{
                    x: [-3, 3, -3],
                    clipPath: ['inset(60% 0 40% 0)', 'inset(40% 0 60% 0)', 'inset(60% 0 40% 0)'],
                  }}
                  transition={{
                    duration: 0.15,
                    repeat: 3,
                  }}
                >
                  NEURAL INTERFACE
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Phase 1: Loading */}
          {currentPhase === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center space-x-6">
                <motion.div
                  className="w-3 h-3 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0,
                  }}
                />
                <motion.div
                  className="w-3 h-3 bg-magenta-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0.3,
                  }}
                />
                <motion.div
                  className="w-3 h-3 bg-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0.6,
                  }}
                />
              </div>
              
              <div className="space-y-4">
                <p 
                  className="text-2xl text-cyan-400 tracking-wider font-medium"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  LOADING NEURAL NETWORKS
                </p>
                <motion.div
                  className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Phase 2: Identity */}
          {currentPhase === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div 
                  className="text-lg text-gray-400 mb-2 tracking-widest"
                  style={{ fontFamily: 'Exo, sans-serif' }}
                >
                  NEURAL IDENTITY AUTHENTICATED
                </div>
                <h2 
                  className="text-4xl md:text-5xl font-bold tracking-wider mb-4"
                  style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    background: 'linear-gradient(45deg, #00FFFF, #FF00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {personalInfo.name.toUpperCase()}
                </h2>
                <p 
                  className="text-xl text-gray-300 tracking-wide"
                  style={{ fontFamily: 'Exo, sans-serif' }}
                >
                  {personalInfo.title}
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Phase 3: Access Granted */}
          {currentPhase === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
              }}
              className="relative space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-24 h-24 mx-auto rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center mb-6"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-2 border-green-400 border-t-transparent rounded-full"
                />
              </motion.div>
              
              <div>
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-green-400 mb-4 tracking-widest"
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    textShadow: '0 0 20px #00FF00, 0 0 40px #00FF00',
                  }}
                  animate={{
                    textShadow: [
                      '0 0 20px #00FF00, 0 0 40px #00FF00',
                      '0 0 30px #00FF00, 0 0 60px #00FF00',
                      '0 0 20px #00FF00, 0 0 40px #00FF00',
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  ACCESS GRANTED
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-400 tracking-wide"
                  style={{ fontFamily: 'Exo, sans-serif' }}
                >
                  Welcome to the Neural Portfolio System
                </motion.p>
              </div>

              {/* Scanning lines effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-transparent via-green-400 to-transparent w-full"
                    style={{ top: `${20 + i * 15}%` }}
                    animate={{
                      x: ['100%', '-100%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: 2,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-400 opacity-50" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-400 opacity-50" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-400 opacity-50" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-400 opacity-50" />

        {/* Version info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 tracking-widest"
          style={{ fontFamily: 'Exo, sans-serif' }}
        >
          NEURAL INTERFACE v2.1.0 | QUANTUM PORTFOLIO SYSTEM
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;