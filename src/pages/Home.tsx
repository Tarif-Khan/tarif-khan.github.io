import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, ArrowRight, Briefcase, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const Home = () => {
  const socialLinks = [
    { href: 'https://github.com/tarif-khan', icon: Github, label: 'GitHub' },
    { href: 'https://www.instagram.com/tarifkn', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/tarif-khan-a23897229/', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I'm Tarif!
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Software Developer & AI Enthusiast
          </motion.p>
        </motion.div>

        <GlassCard className="p-8 md:p-12 mb-8" delay={0.3}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h2
                className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                About Me
              </motion.h2>
              <motion.div
                className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p>
                  I am a graduate from Northeastern University's Khoury College of Computer Sciences, 
                  with a Bachelor's degree in Computer Science with a concentration in Artificial Intelligence, having graduated in May 2025.
                </p>
                <p>
                  I currently work as an AI Software Engineer at WorldQuant!
                </p>
                <p>
                  My professional journey includes impactful roles at Wellington Management, Scotiabank, 
                  and Quantum Technologies, where I've developed trading systems, data pipelines, 
                  and AI-powered solutions that generated over $1 million in revenue.
                </p>
                <p>
                  With expertise in Python, SQL, Java, and AI frameworks like PyTorch, 
                  I'm passionate about leveraging technology to solve complex problems and drive innovation.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <Link to="/experiences">
                  <motion.div
                    className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white text-center hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Briefcase className="w-8 h-8 mx-auto mb-2" />
                    <span className="font-semibold">Experience</span>
                  </motion.div>
                </Link>
                
                <Link to="/projects">
                  <motion.div
                    className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white text-center hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="w-8 h-8 mx-auto mb-2" />
                    <span className="font-semibold">Projects</span>
                  </motion.div>
                </Link>
              </div>
              
              <Link to="/contact">
                <motion.div
                  className="w-full p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl text-white text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-semibold">Let's Connect</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </GlassCard>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {socialLinks.map(({ href, icon: Icon, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;