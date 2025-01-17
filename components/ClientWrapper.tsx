'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { GameLoadingScreen } from '@/components/GameLoadingScreen'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DynamicBackground } from '@/components/DynamicBackground'

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <GameLoadingScreen isLoading={isLoading} />
      <DynamicBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mt-24 px-6 md:px-12 min-h-[calc(100vh+5rem)]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

