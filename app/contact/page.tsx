'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-16 sm:pb-24">
      <motion.h1 
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-white text-center font-press-start-2p tracking-wide"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <motion.div 
        className="max-w-md mx-auto bg-purple-primary/20 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8 border border-purple-accent/30"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  )
}

