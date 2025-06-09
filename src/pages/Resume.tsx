import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Resume = () => {
  const pdfUrl = "/Khan Tarif Resume.pdf";

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Resume
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Download or view my professional experience
          </p>
          
          <motion.a
            href={pdfUrl}
            download="Khan_Tarif_Resume.pdf"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        <GlassCard className="p-4" delay={0.4}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg"></div>
            <iframe
              src={pdfUrl}
              title="Khan Tarif Resume"
              className="w-full h-[80vh] border-0 rounded-lg shadow-lg"
              style={{ minHeight: '600px' }}
            />
          </motion.div>
        </GlassCard>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
            <FileText className="w-4 h-4" />
            <span className="text-sm">
              Last updated: This resume was last updated: May 2025
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;