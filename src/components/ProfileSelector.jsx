import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { domains } from '../data/mock';

const ProfileSelector = ({ onSelectDomain }) => {
  const [hoveredDomain, setHoveredDomain] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Nebula particles */}
        {[...Array(100)].map((_, i) => (
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
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-teal-900/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 tracking-wider"
          style={{
            fontFamily: 'Orbitron, monospace',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            background: 'linear-gradient(45deg, #00FFFF, #FF00FF, #8B00FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          WHO ARE YOU HERE TO MEET?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-2xl"
          style={{ fontFamily: 'Exo, sans-serif' }}
        >
          Select a domain to explore the digital realms of innovation
        </motion.p>

        {/* Domain Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full"
        >
          {domains.map((domain) => (
            <motion.div
              key={domain.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredDomain(domain.id)}
              onMouseLeave={() => setHoveredDomain(null)}
              onClick={() => onSelectDomain(domain)}
            >
              <div 
                className="relative p-8 rounded-2xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-opacity-100 min-h-[280px] flex flex-col items-center justify-center text-center"
                style={{
                  borderColor: hoveredDomain === domain.id ? domain.color : 'rgba(75, 85, 99, 0.5)',
                  boxShadow: hoveredDomain === domain.id 
                    ? `0 0 30px ${domain.glowColor}, 0 0 60px ${domain.glowColor}` 
                    : 'none',
                }}
              >
                {/* Glow Effect */}
                {hoveredDomain === domain.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    style={{
                      background: `radial-gradient(circle at center, ${domain.glowColor} 0%, transparent 70%)`,
                    }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={hoveredDomain === domain.id ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0],
                    } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {domain.icon}
                  </motion.div>

                  <h3 
                    className="text-2xl font-bold mb-3 tracking-wide"
                    style={{
                      fontFamily: 'Rajdhani, sans-serif',
                      color: hoveredDomain === domain.id ? domain.color : '#ffffff',
                      textShadow: hoveredDomain === domain.id 
                        ? `0 0 10px ${domain.color}` 
                        : 'none',
                    }}
                  >
                    {domain.name}
                  </h3>

                  <p 
                    className="text-gray-400 text-sm leading-relaxed"
                    style={{ fontFamily: 'Exo, sans-serif' }}
                  >
                    {domain.description}
                  </p>

                  <div className="mt-4 flex items-center justify-center">
                    <div 
                      className="px-4 py-2 rounded-full text-xs font-semibold border"
                      style={{
                        borderColor: domain.color,
                        color: domain.color,
                        backgroundColor: hoveredDomain === domain.id 
                          ? `${domain.color}20` 
                          : 'transparent',
                      }}
                    >
                      {domain.projects.length} PROJECTS
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 opacity-0"
                  style={{ borderColor: domain.color }}
                  animate={hoveredDomain === domain.id ? {
                    opacity: [0, 1, 0],
                    scale: [1, 1.05, 1],
                  } : { opacity: 0, scale: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <p 
            className="text-gray-500 text-sm tracking-widest"
            style={{ fontFamily: 'Exo, sans-serif' }}
          >
            NEURAL INTERFACE v2.1.0 | QUANTUM PORTFOLIO SYSTEM
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileSelector;