'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/lib/themeContext'
import { Sun, Moon} from 'lucide-react'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-purple-primary/20 rounded-full p-1 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-accent dark:bg-purple-primary/40 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 32 : 0,
          rotate: theme === 'dark' ? 360 : 0,
        }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 text-purple-500" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  )
}

export default ThemeToggle