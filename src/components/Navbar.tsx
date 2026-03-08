import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          className="text-white font-bold text-xl tracking-tight"
        >
          OpenPage
        </motion.a>
        
        <div className="flex items-center gap-8">
          <motion.a
            href="#about"
            whileHover={{ y: -2 }}
            className="text-white hover:text-indigo-300 transition-colors duration-300 text-sm font-medium"
          >
            About
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ y: -2 }}
            className="text-white hover:text-indigo-300 transition-colors duration-300 text-sm font-medium"
          >
            How it works
          </motion.a>
          <motion.a
            href="#join"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-400 transition-colors duration-300"
          >
            Join
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;