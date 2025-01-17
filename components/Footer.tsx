import Link from 'next/link'
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/CyberShaktiCell', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/cyber-shakti/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/cybershakti', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/cybershakti', label: 'Facebook' },
]

export function Footer() {
  return (
    <footer className="bg-black/70 backdrop-blur-md text-white py-6">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2 font-roboto-mono">CyberShakti</h2>
            <p className="text-sm text-white/70 font-roboto-mono mb-4">Empowering Security, Enabling Trust</p>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors duration-300 p-2"
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-sm font-semibold mb-2 font-roboto-mono">About</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/about#about-us" className="text-xs hover:text-white/80 font-roboto-mono">
                    Our Club
                  </Link>
                </li>
                <li>
                  <Link href="/about#our-team" className="text-xs hover:text-white/80 font-roboto-mono">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 font-roboto-mono">Projects</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/projects#kali-yug" className="text-xs hover:text-white/80 font-roboto-mono">
                    Kali Yug
                  </Link>
                </li>
                <li>
                  <Link href="/projects#club-catalyst" className="text-xs hover:text-white/80 font-roboto-mono">
                    Club Catalyst
                  </Link>
                </li>
                <li>
                  <Link href="/projects#bootcamp" className="text-xs hover:text-white/80 font-roboto-mono">
                    BootCamp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-[10px] text-white/50">
          © {new Date().getFullYear()} CyberShakti. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

