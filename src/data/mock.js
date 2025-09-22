// Mock data for sci-fi portfolio website

export const domains = [
  {
    id: 'app-development',
    name: 'App Development',
    description: 'Mobile & Web Applications',
    icon: '📱',
    color: '#00FFFF', // Cyan
    glowColor: 'rgba(0, 255, 255, 0.3)',
    projects: [
      {
        id: 'neural-chat',
        title: 'Neural Chat',
        description: 'AI-powered chat application with real-time messaging',
        detailedDescription: 'A sophisticated chat application built with React Native and Node.js, featuring AI-powered responses, real-time messaging, and advanced encryption for secure communications.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop',
        techStack: ['React Native', 'Node.js', 'WebSocket', 'OpenAI', 'MongoDB'],
        links: {
          github: 'https://github.com/example/neural-chat',
          demo: 'https://neural-chat.demo.com',
          caseStudy: 'https://case-study.com/neural-chat'
        },
        category: 'Mobile App'
      },
      {
        id: 'quantum-finance',
        title: 'Quantum Finance',
        description: 'Cryptocurrency portfolio tracker with advanced analytics',
        detailedDescription: 'A comprehensive cryptocurrency portfolio management application featuring real-time price tracking, advanced analytics, and AI-powered investment insights.',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=600&fit=crop',
        techStack: ['React', 'TypeScript', 'D3.js', 'REST API', 'PostgreSQL'],
        links: {
          github: 'https://github.com/example/quantum-finance',
          demo: 'https://quantum-finance.demo.com'
        },
        category: 'Web App'
      },
      {
        id: 'nexus-dashboard',
        title: 'Nexus Dashboard',
        description: 'Enterprise management system with real-time analytics',
        detailedDescription: 'A powerful enterprise dashboard providing real-time analytics, team management, and performance monitoring with an intuitive interface.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop',
        techStack: ['Vue.js', 'Python', 'FastAPI', 'Redis', 'Docker'],
        links: {
          github: 'https://github.com/example/nexus-dashboard',
          demo: 'https://nexus-dashboard.demo.com'
        },
        category: 'Enterprise'
      }
    ]
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    description: 'AI & Data Science Projects',
    icon: '🧠',
    color: '#FF00FF', // Magenta
    glowColor: 'rgba(255, 0, 255, 0.3)',
    projects: [
      {
        id: 'vision-ai',
        title: 'Vision AI',
        description: 'Computer vision model for object detection and classification',
        detailedDescription: 'Advanced computer vision system using deep learning for real-time object detection, classification, and tracking with 95% accuracy.',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=600&fit=crop',
        techStack: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'Docker'],
        links: {
          github: 'https://github.com/example/vision-ai',
          demo: 'https://vision-ai.demo.com',
          paper: 'https://arxiv.org/example'
        },
        category: 'Computer Vision'
      },
      {
        id: 'predictive-analytics',
        title: 'Predictive Analytics',
        description: 'Machine learning models for business forecasting',
        detailedDescription: 'Comprehensive predictive analytics platform using ensemble methods and time series analysis for accurate business forecasting.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop',
        techStack: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'AWS'],
        links: {
          github: 'https://github.com/example/predictive-analytics',
          demo: 'https://predictive.demo.com'
        },
        category: 'Data Science'
      },
      {
        id: 'nlp-sentiment',
        title: 'NLP Sentiment Engine',
        description: 'Natural language processing for sentiment analysis',
        detailedDescription: 'Advanced NLP system for real-time sentiment analysis of social media content, supporting multiple languages and custom domain adaptation.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=600&fit=crop',
        techStack: ['Python', 'NLTK', 'spaCy', 'Transformers', 'PostgreSQL'],
        links: {
          github: 'https://github.com/example/nlp-sentiment',
          demo: 'https://sentiment.demo.com'
        },
        category: 'NLP'
      }
    ]
  },
  {
    id: 'web-design',
    name: 'Web Design',
    description: 'UI/UX & Frontend Projects',
    icon: '🎨',
    color: '#8B00FF', // Purple
    glowColor: 'rgba(139, 0, 255, 0.3)',
    projects: [
      {
        id: 'cosmic-ui',
        title: 'Cosmic UI',
        description: 'Modern component library with space-themed design system',
        detailedDescription: 'A comprehensive React component library featuring a space-themed design system with dark mode support, accessibility features, and extensive customization options.',
        image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=600&fit=crop',
        techStack: ['React', 'Storybook', 'Sass', 'TypeScript', 'Jest'],
        links: {
          github: 'https://github.com/example/cosmic-ui',
          demo: 'https://cosmic-ui.demo.com',
          documentation: 'https://docs.cosmic-ui.com'
        },
        category: 'Design System'
      },
      {
        id: 'stellar-landing',
        title: 'Stellar Landing',
        description: 'Interactive landing page with 3D animations',
        detailedDescription: 'Award-winning landing page featuring interactive 3D animations, smooth scrolling, and optimized performance for maximum user engagement.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=600&fit=crop',
        techStack: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind', 'Vercel'],
        links: {
          github: 'https://github.com/example/stellar-landing',
          demo: 'https://stellar-landing.demo.com'
        },
        category: 'Landing Page'
      },
      {
        id: 'nebula-portfolio',
        title: 'Nebula Portfolio',
        description: 'Creative portfolio template with dynamic interactions',
        detailedDescription: 'A stunning portfolio template featuring dynamic particle effects, smooth transitions, and responsive design optimized for creative professionals.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
        techStack: ['React', 'CSS3', 'GSAP', 'WebGL', 'Netlify'],
        links: {
          github: 'https://github.com/example/nebula-portfolio',
          demo: 'https://nebula-portfolio.demo.com'
        },
        category: 'Portfolio'
      }
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    description: 'Decentralized Applications',
    icon: '⛓️',
    color: '#008080', // Teal
    glowColor: 'rgba(0, 128, 128, 0.3)',
    projects: [
      {
        id: 'defi-protocol',
        title: 'DeFi Protocol',
        description: 'Decentralized finance protocol for yield farming',
        detailedDescription: 'A comprehensive DeFi protocol offering yield farming, liquidity mining, and governance features with advanced security measures and gas optimization.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=600&fit=crop',
        techStack: ['Solidity', 'Web3.js', 'React', 'Hardhat', 'IPFS'],
        links: {
          github: 'https://github.com/example/defi-protocol',
          demo: 'https://defi-protocol.demo.com',
          whitepaper: 'https://whitepaper.defi-protocol.com'
        },
        category: 'DeFi'
      },
      {
        id: 'nft-marketplace',
        title: 'NFT Marketplace',
        description: 'Decentralized marketplace for digital collectibles',
        detailedDescription: 'A user-friendly NFT marketplace with minting capabilities, auction features, and royalty management for artists and collectors.',
        image: 'https://images.unsplash.com/photo-1617957718614-8638ebab7c4b?w=400&h=600&fit=crop',
        techStack: ['Solidity', 'Next.js', 'Metamask', 'Pinata', 'Polygon'],
        links: {
          github: 'https://github.com/example/nft-marketplace',
          demo: 'https://nft-marketplace.demo.com'
        },
        category: 'NFT'
      }
    ]
  }
];

export const personalInfo = {
  name: 'Deepak Zamnani',
  title: 'Full-Stack Developer & AI Engineer',
  bio: 'Passionate about creating innovative solutions at the intersection of technology and human experience.',
  contact: {
    email: 'deepak.zamnani@example.com',
    linkedin: 'https://linkedin.com/in/deepakzamnani',
    github: 'https://github.com/deepakzamnani',
    twitter: 'https://twitter.com/deepak_zamnani'
  },
  skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'Web3', 'UI/UX Design']
};