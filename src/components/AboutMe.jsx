import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Brain, Palette, Shield, Zap, Globe } from 'lucide-react';
import { personalInfo } from '../data/mock';

const AboutMe = ({ onBack }) => {
  const skills = [
    { name: 'Frontend Development', icon: Code, color: '#00FFFF', level: 95 },
    { name: 'Backend Architecture', icon: Shield, color: '#FF00FF', level: 90 },
    { name: 'Machine Learning', icon: Brain, color: '#8B00FF', level: 85 },
    { name: 'UI/UX Design', icon: Palette, color: '#008080', level: 80 },
    { name: 'DevOps & Cloud', icon: Zap, color: '#00FFFF', level: 75 },
    { name: 'Web3 & Blockchain', icon: Globe, color: '#FF00FF', level: 70 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-purple-900/10" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h1 
              className="text-4xl md:text-6xl font-bold mb-4 tracking-wider"
              style={{
                fontFamily: 'Orbitron, monospace',
                background: 'linear-gradient(45deg, #00FFFF, #FF00FF, #8B00FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              NEURAL PROFILE
            </h1>
            <p 
              className="text-xl text-gray-400 max-w-2xl"
              style={{ fontFamily: 'Exo, sans-serif' }}
            >
              Exploring the intersection of technology, creativity, and human potential
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
            <span style={{ fontFamily: 'Exo, sans-serif' }}>Return</span>
          </motion.button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Personal Info Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div 
              className="p-8 rounded-2xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm"
              style={{
                boxShadow: '0 0 50px rgba(0, 255, 255, 0.1)',
              }}
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-black text-4xl font-bold"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </motion.div>
                
                <h2 
                  className="text-3xl font-bold mb-2 tracking-wide text-cyan-400"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {personalInfo.name}
                </h2>
                
                <p 
                  className="text-lg text-gray-300 mb-4"
                  style={{ fontFamily: 'Exo, sans-serif' }}
                >
                  {personalInfo.title}
                </p>
                
                <p 
                  className="text-gray-400 leading-relaxed"
                  style={{ fontFamily: 'Exo, sans-serif' }}
                >
                  {personalInfo.bio}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-semibold text-purple-400 tracking-wide"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  CORE TECHNOLOGIES
                </h3>
                <div className="flex flex-wrap gap-3">
                  {personalInfo.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 rounded-full border border-gray-600 bg-gray-800/50 text-sm font-medium text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                      style={{ fontFamily: 'Exo, sans-serif' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm"
              style={{
                boxShadow: '0 0 30px rgba(255, 0, 255, 0.1)',
              }}
            >
              <h3 
                className="text-xl font-bold mb-4 text-magenta-500 tracking-wide"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                MISSION DIRECTIVE
              </h3>
              <p 
                className="text-gray-300 leading-relaxed"
                style={{ fontFamily: 'Exo, sans-serif' }}
              >
                To bridge the gap between cutting-edge technology and meaningful human experiences. 
                I believe in creating solutions that not only solve complex problems but also inspire 
                and empower others to push the boundaries of what's possible in the digital realm.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div 
              className="p-8 rounded-2xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm"
              style={{
                boxShadow: '0 0 50px rgba(139, 0, 255, 0.1)',
              }}
            >
              <h3 
                className="text-2xl font-bold mb-8 text-purple-400 tracking-wide"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                NEURAL CAPABILITIES
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="p-2 rounded-lg border"
                            style={{
                              borderColor: skill.color,
                              backgroundColor: `${skill.color}20`,
                            }}
                          >
                            <Icon size={20} style={{ color: skill.color }} />
                          </div>
                          <span 
                            className="font-medium"
                            style={{ 
                              fontFamily: 'Exo, sans-serif',
                              color: skill.color,
                            }}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span 
                          className="text-sm font-semibold"
                          style={{ color: skill.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: index * 0.2 + 0.5,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                        
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${skill.color}40, transparent)`,
                          }}
                          animate={{
                            x: [-100, 300],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: index * 0.2 + 1,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Achievement Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Projects Completed', value: '50+', color: '#00FFFF' },
                { label: 'Technologies Mastered', value: '25+', color: '#FF00FF' },
                { label: 'Years of Experience', value: '5+', color: '#8B00FF' },
                { label: 'Coffee Consumed', value: '∞', color: '#008080' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  className="p-4 rounded-xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-center hover:border-gray-600 transition-all duration-300"
                >
                  <div 
                    className="text-2xl font-bold mb-1"
                    style={{ 
                      fontFamily: 'Orbitron, monospace',
                      color: stat.color,
                      textShadow: `0 0 10px ${stat.color}`,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-xs text-gray-400 tracking-wide"
                    style={{ fontFamily: 'Exo, sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;