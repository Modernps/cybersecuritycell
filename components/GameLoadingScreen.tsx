'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface GameLoadingScreenProps {
  isLoading: boolean;
}

const PixelComputer = () => (
  <Image
    src="/Screenshot_2025-01-09_145955-removebg-preview.png" // Update this to your pixel computer image filename
    alt="Pixel Computer"
    width={100}
    height={100}
    className="pixel-computer"
  />
)

export function GameLoadingScreen({ isLoading }: GameLoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      setProgress(0)
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval)
            return 100
          }
          return prevProgress + 5
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-white text-center">
        <motion.div
          className="mb-6"
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <PixelComputer />
        </motion.div>
        <p className="text-xs font-press-start-2p mb-2">Encrypting Connection</p>
        <div className="w-48 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

