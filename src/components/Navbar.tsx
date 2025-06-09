import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, FileText, Briefcase, Mail, Code } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: '/', text: 'Home', Icon: Home },
    { to: '/experiences', text: 'Experiences', Icon: Briefcase },
    { to: '/resume', text: 'Resume', Icon: FileText },
    { to: '/projects', text: 'Projects', Icon: Code },
    { to: '/contact', text: 'Contact Me', Icon: Mail },
  ];

  return (
    <motion.nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 dark:border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center space-x-1">
        {navItems.map(({ to, text, Icon }, index) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                isActive
                  ? 'text-white bg-blue-500/80 shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-white/10'
              }`
            }
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2"
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{text}</span>
            </motion.div>
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;