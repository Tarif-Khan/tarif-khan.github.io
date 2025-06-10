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
    { to: '/contact', text: 'Contact', Icon: Mail },
  ];

  return (
    <motion.nav
      className="relative z-50"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-full shadow-lg border border-white/20 dark:border-white/10 px-3 sm:px-4 py-2 space-x-1 sm:space-x-2">
        {navItems.map(({ to, text, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center space-x-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 ${
                isActive
                  ? 'text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center space-x-2">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="hidden sm:inline-block">{text}</span>
                </div>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;