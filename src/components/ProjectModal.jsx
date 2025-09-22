import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink, FileText, Monitor, Smartphone, Globe } from 'lucide-react';

const ProjectModal = ({ project, domain, onClose }) => {
  const [showDetailedDescription, setShowDetailedDescription] = useState(false);

  const getTechIcon = (tech) => {
    const techIcons = {
      'React': '⚛️',
      'Node.js': '🟢',
      'Python': '🐍',
      'TypeScript': '🔷',
      'JavaScript': '🟨',
      'MongoDB': '🍃',
      'PostgreSQL': '🐘',
      'Docker': '🐳',
      'AWS': '☁️',
      'TensorFlow': '🧠',
      'Next.js': '▲',
      'Vue.js': '💚',
      'Solidity': '⛓️',
      'Web3.js': '🌐',
      'React Native': '📱',
    };
    return techIcons[tech] || '⚡';
  };

  const getCategoryIcon = (category) => {
    const categoryIcons = {
      'Mobile App': <Smartphone size={16} />,
      'Web App': <Globe size={16} />,
      'Enterprise': <Monitor size={16} />,
      'Computer Vision': '👁️',
      'Data Science': '📊',
      'NLP': '🗣️',
      'Design System': '🎨',
      'Landing Page': '🚀',
      'Portfolio': '💼',
      'DeFi': '💰',
      'NFT': '🖼️',
    };
    return categoryIcons[category] || '⚡';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border-2 bg-gray-900/95 backdrop-blur-md"
        style={{
          borderColor: domain.color,
          boxShadow: `0 0 40px ${domain.glowColor}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div 
            className="relative px-6 py-4 border-b border-gray-700"
            style={{
              background: `linear-gradient(90deg, ${domain.color}20 0%, transparent 100%)`,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-lg border-2"
                  style={{
                    borderColor: domain.color,
                    backgroundColor: `${domain.color}20`,
                  }}
                >
                  {getCategoryIcon(project.category)}
                </div>
                <div>
                  <h2 
                    className="text-2xl font-bold tracking-wide"
                    style={{
                      fontFamily: 'Rajdhani, sans-serif',
                      color: domain.color,
                    }}
                  >
                    {project.title}
                  </h2>
                  <p 
                    className="text-gray-400"
                    style={{ fontFamily: 'Exo, sans-serif' }}
                  >
                    {project.category} • {domain.name}
                  </p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-lg border border-gray-700 hover:border-red-400 hover:text-red-400 transition-colors"
              >
                <X size={20} />
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Action Buttons */}
                <div className="absolute bottom-4 left-4 flex space-x-3">
                  {project.links.github && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-black/70 backdrop-blur-sm border border-gray-600 hover:border-cyan-400 transition-all"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                  
                  {project.links.demo && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-black/70 backdrop-blur-sm border border-gray-600 hover:border-green-400 transition-all"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                  
                  {project.links.caseStudy && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.links.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-black/70 backdrop-blur-sm border border-gray-600 hover:border-purple-400 transition-all"
                    >
                      <FileText size={16} />
                      <span className="text-sm">Case Study</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 
                    className="text-lg font-semibold mb-3 tracking-wide"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    DESCRIPTION
                  </h3>
                  <div className="space-y-3">
                    <p 
                      className="text-gray-300 leading-relaxed"
                      style={{ fontFamily: 'Exo, sans-serif' }}
                    >
                      {showDetailedDescription ? project.detailedDescription : project.description}
                    </p>
                    {project.detailedDescription && project.detailedDescription !== project.description && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowDetailedDescription(!showDetailedDescription)}
                        className="text-sm px-3 py-1 rounded-full border transition-all"
                        style={{
                          borderColor: domain.color,
                          color: domain.color,
                        }}
                      >
                        {showDetailedDescription ? 'Show Less' : 'Read More'}
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 
                    className="text-lg font-semibold mb-3 tracking-wide"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    TECH STACK
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:border-gray-600 transition-colors"
                      >
                        <span className="text-xl">{getTechIcon(tech)}</span>
                        <span 
                          className="text-sm font-medium"
                          style={{ fontFamily: 'Exo, sans-serif' }}
                        >
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Additional Links */}
                {(project.links.paper || project.links.documentation || project.links.whitepaper) && (
                  <div>
                    <h3 
                      className="text-lg font-semibold mb-3 tracking-wide"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      RESOURCES
                    </h3>
                    <div className="space-y-2">
                      {project.links.paper && (
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={project.links.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <FileText size={16} />
                          <span>Research Paper</span>
                        </motion.a>
                      )}
                      {project.links.documentation && (
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={project.links.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <FileText size={16} />
                          <span>Documentation</span>
                        </motion.a>
                      )}
                      {project.links.whitepaper && (
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={project.links.whitepaper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <FileText size={16} />
                          <span>Whitepaper</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ border: `2px solid ${domain.color}` }}
          animate={{
            boxShadow: [
              `0 0 20px ${domain.glowColor}`,
              `0 0 40px ${domain.glowColor}`,
              `0 0 20px ${domain.glowColor}`,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;