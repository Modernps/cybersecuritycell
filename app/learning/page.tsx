'use client'

import { motion } from 'framer-motion'

export default function LearningPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-white text-center font-press-start-2p tracking-wide"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Learning Hub
      </motion.h1>
      <motion.div 
        className="bg-purple-primary/20 rounded-lg shadow-lg p-8 mb-12 border border-purple-accent/30"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-sm sm:text-base leading-relaxed text-gray-300 text-center">
          Exciting cybersecurity content is on its way! Our team is working hard to bring you cutting-edge tutorials, in-depth articles, and engaging video content. Stay tuned for a wealth of knowledge that will empower you in the digital realm.
        </p>
        <div className="mt-8 text-center">
          <span className="inline-block px-4 py-2 bg-purple-accent/50 text-white rounded-md font-press-start-2p text-xs sm:text-sm animate-pulse">
            Coming Soon
          </span>
        </div>
      </motion.div>
    </div>
  )
}

