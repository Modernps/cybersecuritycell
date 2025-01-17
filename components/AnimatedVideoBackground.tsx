'use client'

import { useEffect, useRef } from 'react'

export function AnimatedVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // Slow down the video slightly
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
      >
        <source src="/cybersecurity-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  )
}

