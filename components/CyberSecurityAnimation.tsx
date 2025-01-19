
'use client'

import React, { useEffect, useRef } from 'react'
import { useTheme } from '@/lib/themeContext'

const CyberGridNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (canvas) {
          if (this.x > canvas.width) this.x = 0
          else if (this.x < 0) this.x = canvas.width
          if (this.y > canvas.height) this.y = 0
          else if (this.y < 0) this.y = canvas.height
        }
      }

      draw(mouseX: number, mouseY: number) {
        const distance = Math.hypot(this.x - mouseX, this.y - mouseY)
        const opacity = Math.max(0, 1 - distance / 100)

        ctx!.fillStyle = this.color
        ctx!.strokeStyle = this.color
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.closePath()
        ctx!.fill()

        if (distance < 100) {
          ctx!.beginPath()
          ctx!.moveTo(this.x, this.y)
          ctx!.lineTo(mouseX, mouseY)
          ctx!.stroke()
        }
      }
    }

    const particleArray: Particle[] = []
    const numberOfParticles = 70

    for (let i = 0; i < numberOfParticles; i++) {
      particleArray.push(new Particle())
    }

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.x
      mouseY = event.y
    }

    function animate() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update()
        particleArray[i].draw(mouseX, mouseY)
      }

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('mousemove', handleMouseMove)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

export default CyberGridNetwork