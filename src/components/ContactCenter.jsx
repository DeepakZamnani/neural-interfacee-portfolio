import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, Mail, Github, Linkedin, Twitter, MapPin, Phone, Zap, Shield, Signal } from 'lucide-react';
import { personalInfo } from '../data/mock';

const ContactCenter = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      id: 'email',
      label: 'Email',
      value: personalInfo.contact.email,
      icon: Mail,
      href: `mailto:${personalInfo.contact.email}`,
      color: '#00FFFF',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: '@DeepakZamnani',
      icon: Github,
      href: personalInfo.contact.github,
      color: '#FF00FF',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: '/in/deepak-zamnani',
      icon: Linkedin,
      href: personalInfo.contact.linkedin,
      color: '#8B00FF',
    },
    {
      id: 'twitter',
      label: 'Twitter',
      value: '@DeepakZamnani',
      icon: Twitter,
      href: personalInfo.contact.twitter,
      color: '#008080',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
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
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
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
              CONTROL CENTER
            </h1>
            <p 
              className="text-xl text-gray-400 max-w-2xl"
              style={{ fontFamily: 'Exo, sans-serif' }}
            >
              Initialize direct communication protocols with the neural network
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
            <span style={{ fontFamily: 'Exo, sans-serif' }}>Return to Hub</span>
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div 
              className="relative p-8 rounded-2xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm"
              style={{
                boxShadow: '0 0 50px rgba(0, 255, 255, 0.1)',
              }}
            >
              <div className="mb-6">
                <h2 
                  className="text-2xl font-bold mb-2 tracking-wide text-cyan-400"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  TRANSMISSION INTERFACE
                </h2>
                <p 
                  className="text-gray-400"
                  style={{ fontFamily: 'Exo, sans-serif' }}
                >
                  Secure encrypted communication channel
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Identity Code"
                          className="w-full px-4 py-3 rounded-lg bg-black/70 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                          style={{ fontFamily: 'Exo, sans-serif' }}
                        />
                        <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/20 to-purple-400/20" />
                      </div>
                      
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Communication Channel"
                          className="w-full px-4 py-3 rounded-lg bg-black/70 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                          style={{ fontFamily: 'Exo, sans-serif' }}
                        />
                        <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/20 to-purple-400/20" />
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Mission Objective"
                        className="w-full px-4 py-3 rounded-lg bg-black/70 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                        style={{ fontFamily: 'Exo, sans-serif' }}
                      />
                      <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/20 to-purple-400/20" />
                    </div>

                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        placeholder="Detailed transmission data..."
                        className="w-full px-4 py-3 rounded-lg bg-black/70 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none"
                        style={{ fontFamily: 'Exo, sans-serif' }}
                      />
                      <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/20 to-purple-400/20" />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-semibold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center space-x-2"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Zap size={20} />
                            </motion.div>
                            <span>TRANSMITTING...</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="send"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center space-x-2"
                          >
                            <Send size={20} />
                            <span>INITIATE TRANSMISSION</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center"
                    >
                      <Shield size={40} className="text-green-400" />
                    </motion.div>
                    <h3 
                      className="text-2xl font-bold text-green-400 mb-4"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      TRANSMISSION SUCCESSFUL
                    </h3>
                    <p 
                      className="text-gray-400"
                      style={{ fontFamily: 'Exo, sans-serif' }}
                    >
                      Your message has been encrypted and transmitted through the neural network. 
                      Expect a response within 24-48 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Status Panel */}
            <div 
              className="p-6 rounded-2xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm"
              style={{
                boxShadow: '0 0 30px rgba(255, 0, 255, 0.1)',
              }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Signal size={24} className="text-green-400" />
                <h3 
                  className="text-lg font-bold text-green-400"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  SYSTEM STATUS
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Neural Network</span>
                  <span className="text-green-400 text-sm font-semibold">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Response Time</span>
                  <span className="text-cyan-400 text-sm font-semibold">~24H</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Encryption</span>
                  <span className="text-purple-400 text-sm font-semibold">256-BIT</span>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div 
              className="p-6 rounded-2xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm"
              style={{
                boxShadow: '0 0 30px rgba(139, 0, 255, 0.1)',
              }}
            >
              <h3 
                className="text-lg font-bold mb-4 text-purple-400"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                DIRECT CHANNELS
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.id}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 bg-black/30"
                    >
                      <div 
                        className="flex items-center justify-center w-10 h-10 rounded-lg"
                        style={{
                          backgroundColor: `${method.color}20`,
                          border: `1px solid ${method.color}`,
                        }}
                      >
                        <Icon size={18} style={{ color: method.color }} />
                      </div>
                      <div className="flex-1">
                        <div 
                          className="text-sm font-semibold"
                          style={{ color: method.color }}
                        >
                          {method.label}
                        </div>
                        <div 
                          className="text-xs text-gray-400"
                          style={{ fontFamily: 'Exo, sans-serif' }}
                        >
                          {method.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactCenter;