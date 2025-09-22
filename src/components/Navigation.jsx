import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Mail, Zap } from 'lucide-react';

const Navigation = ({ onNavigateHome, onNavigateContact, currentView }) => {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      onClick: onNavigateHome,
      active: currentView === 'profiles' || currentView === 'domain',
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: Mail,
      onClick: onNavigateContact,
      active: currentView === 'contact',
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-3"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
          <Zap size={20} className="text-black" />
        </div>
        <div>
          <h1 
            className="text-xl font-bold tracking-wider text-white"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            NEURAL.PORTFOLIO
          </h1>
          <p 
            className="text-xs text-gray-400 tracking-widest"
            style={{ fontFamily: 'Exo, sans-serif' }}
          >
            v2.1.0
          </p>
        </div>
      </motion.div>

      {/* Navigation Items */}
      <div className="flex items-center space-x-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={item.onClick}
              className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                item.active
                  ? 'border-cyan-400 text-cyan-400 bg-cyan-400/10'
                  : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white'
              }`}
              style={{
                backdropFilter: 'blur(10px)',
                background: item.active 
                  ? 'rgba(0, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.3)',
              }}
            >
              <Icon size={18} />
              <span 
                className="text-sm font-medium"
                style={{ fontFamily: 'Exo, sans-serif' }}
              >
                {item.label}
              </span>
              
              {/* Active indicator */}
              {item.active && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-cyan-400 rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Glow effect */}
              {item.active && (
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(0, 255, 255, 0.2)',
                      '0 0 0 8px rgba(0, 255, 255, 0)',
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Status Indicator */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span 
            className="text-xs text-green-400 tracking-wider font-medium"
            style={{ fontFamily: 'Exo, sans-serif' }}
          >
            ONLINE
          </span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;