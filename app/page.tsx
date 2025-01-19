"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from '@/lib/themeContext'

export default function Page() {
  const [textIndex, setTextIndex] = useState(0)
  const textVariants = ['level up?', 'learn?', 'hack?', 'decrypt?']
  const { theme } = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((current) => (current + 1) % textVariants.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [textVariants.length])

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      <motion.div 
        className="flex flex-col items-center gap-10 text-center max-w-3xl mb-24"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1 
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide  ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="glitch-text glitch-reveal"
            data-text="CyberShakti"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-block' }}
          >
            CyberShakti
          </motion.span>
        </motion.h1>
        <motion.div 
          className={`text-xs sm:text-sm md:text-base lg:text-lg tracking-wide font-roboto-mono font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-700'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Empowering Security, Enabling Trust
        </motion.div>
        <motion.p
          className={`text-xs sm:text-sm max-w-2xl leading-relaxed font-roboto-mono ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          Join us in our mission to create a safer digital world through cutting-edge research, education, and innovative cybersecurity solutions.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-purple-primary hover:bg-purple-secondary text-white font-press-start-2p text-xs sm:text-sm px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 border border-purple-600 hover:border-purple-400 transform hover:-translate-y-1 hover:scale-105"
          >
            <Link href="/projects" 
                className={`flex items-center gap-3 text-[currentColor] ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
>
              Explore Our Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        className={`w-full max-w-4xl mx-auto px-4 sm:px-6 mb-12 sm:mb-24 ${
          theme === 'dark' ? 'bg-black/30' : 'bg-gray-100'
        } backdrop-blur-sm p-4 sm:p-6 rounded-lg ${
          theme === 'dark' ? 'border border-white/10' : 'border border-gray-200'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center space-x-2">
            <span className={`font-press-start-2p text-xs sm:text-sm ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>Ready to</span>
            <motion.span
              key={textIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`font-press-start-2p text-xs sm:text-sm inline-block min-w-[80px] sm:min-w-[120px] ${
                theme === 'dark' ? 'text-purple-accent' : 'text-purple-primary'
              }`}
            >
              {textVariants[textIndex]}
            </motion.span>
          </div>
          <Button 
            asChild 
            className="bg-purple-primary hover:bg-purple-secondary text-white font-press-start-2p text-[10px] sm:text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-lg hover:shadow-purple-500/20 transition-all duration-300 w-full sm:w-auto mt-4 sm:mt-0 border border-purple-600 hover:border-purple-400 transform hover:-translate-y-1 hover:scale-105"
          >
            <Link href="/learning" 
                className={`flex items-center gap-2 text-[currentColor] ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}
>
              Start Learning
              <GraduationCap className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}