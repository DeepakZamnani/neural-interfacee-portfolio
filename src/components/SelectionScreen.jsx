import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Briefcase, MessageSquare, Star, Zap } from 'lucide-react';
import { personalInfo } from '../data/mock';

const SelectionScreen = ({ onSelectOption }) => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const options = [
    {
      id: 'portfolio',
      title: 'Explore Portfolio',
      subtitle: 'Discover My Work',
      description: 'Browse through my projects organized by technology domains',
      icon: Briefcase,
      color: '#00FFFF',
      glowColor: 'rgba(0, 255, 255, 0.3)',
      action: () => onSelectOption('portfolio'),
    },
    {
      id: 'about',
      title: 'About Me',
      subtitle: 'Personal Profile',
      description: 'Learn about my journey, skills, and professional background',
      icon: User,
      color: '#FF00FF',
      glowColor: 'rgba(255, 0, 255, 0.3)',
      action: () => onSelectOption('about'),
    },
    {
      id: 'contact',
      title: 'Get in Touch',
      subtitle: 'Connect & Collaborate',
      description: 'Reach out for opportunities, projects, or just to say hello',
      icon: MessageSquare,
      color: '#8B00FF',
      glowColor: 'rgba(139, 0, 255, 0.3)',
      action: () => onSelectOption('contact'),
    },
  ];

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
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              backgroundColor: i % 3 === 0 ? '#00FFFF' : i % 3 === 1 ? '#FF00FF' : '#8B00FF',
            }}
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
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Dynamic gradient overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(139, 0, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16 max-w-6xl"
        >
          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-wider leading-tight"
            style={{
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(45deg, #00FFFF, #FF00FF, #8B00FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            WELCOME TO MY UNIVERSE
          </motion.h1>
          
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-3 md:space-y-4"
          >
            {/* Name with enhanced styling */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden sm:block"
              >
                <Star size={24} className="text-cyan-400" />
              </motion.div>
              
              <h2 
                className="text-xl sm:text-2xl md:text-4xl font-bold tracking-wide text-white"
                style={{ 
                  fontFamily: 'Rajdhani, sans-serif',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                }}
              >
                {personalInfo.name}
              </h2>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden sm:block"
              >
                <Zap size={24} className="text-purple-400" />
              </motion.div>
            </div>
            
            <p 
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
              style={{ fontFamily: 'Exo, sans-serif' }}
            >
              {personalInfo.title} • {personalInfo.bio}
            </p>
          </motion.div>
        </motion.div>

        {/* Options Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {options.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredOption(option.id)}
                  onMouseLeave={() => setHoveredOption(null)}
                  onClick={option.action}
                >
                  <div 
                    className="relative p-6 md:p-8 rounded-2xl border-2 bg-gray-900/60 backdrop-blur-md transition-all duration-300 hover:border-opacity-100 min-h-[300px] md:min-h-[350px] flex flex-col justify-between"
                    style={{
                      borderColor: hoveredOption === option.id ? option.color : 'rgba(75, 85, 99, 0.4)',
                      boxShadow: hoveredOption === option.id 
                        ? `0 0 40px ${option.glowColor}, 0 0 80px ${option.glowColor}` 
                        : '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {/* Glow Effect */}
                    {hoveredOption === option.id && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        style={{
                          background: `radial-gradient(circle at center, ${option.glowColor} 0%, transparent 70%)`,
                        }}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10 text-center flex-1 flex flex-col justify-center">
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-2xl flex items-center justify-center border-2"
                        style={{
                          borderColor: option.color,
                          backgroundColor: `${option.color}15`,
                        }}
                        animate={hoveredOption === option.id ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0],
                        } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon 
                          size={32} 
                          style={{ color: option.color }}
                        />
                      </motion.div>

                      {/* Title */}
                      <h3 
                        className="text-xl md:text-2xl font-bold mb-2 tracking-wide"
                        style={{
                          fontFamily: 'Rajdhani, sans-serif',
                          color: hoveredOption === option.id ? option.color : '#ffffff',
                          textShadow: hoveredOption === option.id 
                            ? `0 0 15px ${option.color}` 
                            : 'none',
                        }}
                      >
                        {option.title}
                      </h3>

                      {/* Subtitle */}
                      <p 
                        className="text-sm font-medium mb-3 md:mb-4 tracking-wider opacity-90"
                        style={{
                          fontFamily: 'Exo, sans-serif',
                          color: option.color,
                        }}
                      >
                        {option.subtitle}
                      </p>

                      {/* Description */}
                      <p 
                        className="text-gray-400 text-sm leading-relaxed mb-6 px-2"
                        style={{ fontFamily: 'Exo, sans-serif' }}
                      >
                        {option.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="relative z-10 text-center">
                      <motion.div
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300"
                        style={{
                          borderColor: option.color,
                          color: option.color,
                          backgroundColor: hoveredOption === option.id 
                            ? `${option.color}25` 
                            : 'transparent',
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span 
                          className="text-sm font-semibold tracking-wide"
                          style={{ fontFamily: 'Rajdhani, sans-serif' }}
                        >
                          ENTER
                        </span>
                        <ArrowRight size={16} />
                      </motion.div>
                    </div>

                    {/* Animated border pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 opacity-0 pointer-events-none"
                      style={{ borderColor: option.color }}
                      animate={hoveredOption === option.id ? {
                        opacity: [0, 0.4, 0],
                        scale: [1, 1.02, 1],
                      } : { opacity: 0, scale: 1 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-8 md:mt-16"
        >
          <p 
            className="text-gray-500 text-xs md:text-sm tracking-widest"
            style={{ fontFamily: 'Exo, sans-serif' }}
          >
            NEURAL INTERFACE v2.1.0 | SELECT YOUR PATH
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SelectionScreen;