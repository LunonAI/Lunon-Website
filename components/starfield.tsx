"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  scatterX: number
  scatterY: number
  delay: number
  duration: number
}

export function Starfield() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate random stars with minimum distance constraint
    const generateStars = () => {
      // Detect mobile/tablet devices for better performance
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
      const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024
      
      // Adjust star count based on device
      const starCount = isMobile ? 40 : isTablet ? 60 : 80
      const minDistance = isMobile ? 8 : 10 // Minimum distance in viewport units (vw/vh combined)
      
      const newStars: Star[] = []

      // Helper function to check if a position is far enough from existing stars
      const isFarEnough = (x: number, y: number, existingStars: Star[]): boolean => {
        for (const star of existingStars) {
          const dx = x - star.x
          const dy = (y - star.y) * 0.5 // Scale Y difference since viewport is taller
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < minDistance) {
            return false
          }
        }
        return true
      }

      // Generate stars with spacing constraint
      let attempts = 0
      const maxAttempts = starCount * 50 // Prevent infinite loop

      while (newStars.length < starCount && attempts < maxAttempts) {
        attempts++
        
        const x = Math.random() * 100 // 0-100vw
        const y = Math.random() * 200 // 0-200vh (cover entire page height)
        
        if (isFarEnough(x, y, newStars)) {
          newStars.push({
            id: newStars.length,
            x,
            y,
            size: Math.random() > 0.7 ? 4 : 3, // Small but visible stars
            opacity: 0.3 + Math.random() * 0.4, // 0.3-0.7
            scatterX: (Math.random() - 0.5) * 40, // -20vw to +20vw
            scatterY: (Math.random() - 0.5) * 40, // -20vh to +20vh
            delay: 0, // No delay - start immediately
            duration: isMobile ? 0.6 : 0.8 + Math.random() * 0.4, // Faster on mobile
          })
        }
      }

      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0" 
      style={{ 
        minHeight: '100%',
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-star-scatter"
          style={{
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            '--scatter-x': `${star.scatterX}vw`,
            '--scatter-y': `${star.scatterY}vh`,
            '--delay': `${star.delay}s`,
            '--duration': `${star.duration}s`,
            '--final-opacity': star.opacity,
          } as React.CSSProperties}
        >
          <svg
            className="star-glow"
            width={star.size * 6}
            height={star.size * 6}
            viewBox="0 0 100 100"
            style={{
              filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.9))',
            }}
          >
            {/* 16-pointed star - perfectly symmetrical */}
            <g transform="translate(50, 50)">
              {/* Generate 16 evenly spaced rays */}
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * 22.5 * Math.PI) / 180 // 360/16 = 22.5 degrees per ray
                const x1 = Math.sin(angle) * 40
                const y1 = -Math.cos(angle) * 40
                const x2 = Math.sin(angle - 0.05) * 4
                const y2 = -Math.cos(angle - 0.05) * 4
                const x3 = Math.sin(angle + 0.05) * 4
                const y3 = -Math.cos(angle + 0.05) * 4
                return (
                  <path
                    key={i}
                    d={`M ${x1},${y1} L ${x2},${y2} L 0,0 L ${x3},${y3} Z`}
                    fill="white"
                    opacity="0.9"
                  />
                )
              })}
              {/* Bright center */}
              <circle cx="0" cy="0" r="3" fill="white" />
            </g>
          </svg>
        </div>
      ))}
    </div>
  )
}

