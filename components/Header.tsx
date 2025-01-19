'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTheme } from '@/lib/themeContext'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'

const navItems = [
  { href: "/about", label: "About" },
  { href: "/learning", label: "Learning" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        theme === 'dark' ? 'bg-background/80' : 'bg-white/80'
      } backdrop-blur-md border-b border-border/10`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className={`text-xl sm:text-2xl font-bold tracking-tighter relative flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              <Image 
                src="/Logo.png" // Update this to your logo filename
                alt="CyberShakti Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="font-press-start-2p">CyberShakti</span>
            </Link>
          </motion.div>

          <button
            className={`md:hidden p-2 rounded-lg ${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`${isMobileMenuOpen ? 'absolute top-full left-0 right-0 border-b border-border/10' : 'hidden'} md:relative md:block ${
            theme === 'dark' ? 'bg-background/95' : 'bg-white/95'
          } md:bg-transparent`}>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-12 space-y-4 md:space-y-0 p-4 md:p-0">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  <Link
                    href={item.href}
                    className={`text-sm font-medium ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="md:ml-4">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

