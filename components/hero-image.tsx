"use client"

import { useState, useEffect, useRef } from "react"

export function HeroImage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if we're on desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    
    const handleMouseMove = (e: MouseEvent) => {
      // Only enable rotation on desktop
      if (window.innerWidth < 1024) return
      
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePos({ x: x * 15, y: y * -10 }) // Subtle rotation
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkDesktop)
    }
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-end pr-6 lg:pr-8">
      <div 
        ref={containerRef}
        className="relative w-full flex justify-end perspective-[2000px]"
        style={{ perspective: '2000px' }}
      >
        {/* Lunar ambient glow */}
        <div className="absolute inset-0 -inset-x-16 -inset-y-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/8 via-slate-400/5 to-transparent rounded-full blur-[100px] animate-pulse" />
        </div>

        {/* Selenographic sphere container */}
        <div 
          className="relative w-full transition-transform duration-300 ease-out"
          style={{
            transform: isDesktop ? `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)` : 'none',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Main sphere surface */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90 backdrop-blur-sm shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] border border-slate-600/30">
            
            {/* Demo image with subtle 3D depth */}
            <div className="relative" style={{ transform: 'translateZ(10px)' }}>
              <img
                src="/Lunon-Demo.png"
                alt="Lunon Demo Interface"
                className="w-full h-auto relative z-10"
                style={{ mixBlendMode: 'normal' }}
              />
            </div>

            {/* Lunar surface texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-700/[0.03] to-slate-900/20 pointer-events-none z-10" />
            
            {/* Spherical shading for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/40 pointer-events-none z-10" />
          </div>

          {/* Orbital markers floating around */}
          <div className="absolute -top-3 left-1/4 w-1.5 h-1.5 rounded-full bg-blue-400/70 blur-[1px] animate-float z-40" />
          <div className="absolute top-1/3 -left-2 w-1 h-1 rounded-full bg-slate-300/50 blur-[1px] animate-float-delayed z-40" />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-purple-400/60 blur-[1px] animate-float-slow z-40" />
        </div>
      </div>
    </div>
  )
}


