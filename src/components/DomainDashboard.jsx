import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, FileText, X } from 'lucide-react';
import ProjectModal from './ProjectModal';

const DomainDashboard = ({ domain, onBack }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

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
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
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
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Domain-specific particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{ backgroundColor: domain.color }}
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
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at 20% 80%, ${domain.color} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${domain.color} 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <ArrowLeft size={20} />
            <span style={{ fontFamily: 'Exo, sans-serif' }}>Back to Domains</span>
          </motion.button>
        </div>

        <div className="flex items-center space-x-6">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div 
              className="text-3xl"
              style={{
                filter: `drop-shadow(0 0 10px ${domain.color})`,
              }}
            >
              {domain.icon}
            </div>
            <div>
              <h1 
                className="text-2xl font-bold tracking-wide"
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  color: domain.color,
                  textShadow: `0 0 10px ${domain.color}`,
                }}
              >
                {domain.name}
              </h1>
              <p 
                className="text-gray-400 text-sm"
                style={{ fontFamily: 'Exo, sans-serif' }}
              >
                {domain.description}
              </p>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 
            className="text-4xl font-bold mb-4 tracking-wider"
            style={{
              fontFamily: 'Orbitron, monospace',
              background: `linear-gradient(45deg, ${domain.color}, #ffffff)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            PROJECT ARCHIVE
          </h2>
          <p 
            className="text-gray-400 text-lg max-w-3xl"
            style={{ fontFamily: 'Exo, sans-serif' }}
          >
            Explore the digital artifacts and innovations within the {domain.name.toLowerCase()} realm. 
            Each project represents a unique journey through the intersection of creativity and technology.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {domain.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5,
              }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div 
                className="relative rounded-xl overflow-hidden border-2 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:border-opacity-100"
                style={{
                  borderColor: hoveredProject === project.id ? domain.color : 'rgba(75, 85, 99, 0.5)',
                  height: '400px',
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Category Badge */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border"
                    style={{
                      backgroundColor: `${domain.color}20`,
                      borderColor: domain.color,
                      color: domain.color,
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col justify-between h-52">
                  <div>
                    <h3 
                      className="text-xl font-bold mb-2 tracking-wide group-hover:text-white transition-colors duration-300"
                      style={{
                        fontFamily: 'Rajdhani, sans-serif',
                        color: hoveredProject === project.id ? domain.color : '#ffffff',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-gray-400 text-sm leading-relaxed mb-4"
                      style={{ fontFamily: 'Exo, sans-serif' }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded border border-gray-600 text-gray-300 bg-gray-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded border border-gray-600 text-gray-400">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {project.links.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </motion.a>
                    )}
                    {project.links.demo && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-gray-700 hover:border-green-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Glow Effect */}
                {hoveredProject === project.id && (
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    style={{
                      boxShadow: `0 0 30px ${domain.glowColor}, inset 0 0 30px ${domain.glowColor}`,
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            domain={domain}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DomainDashboard;