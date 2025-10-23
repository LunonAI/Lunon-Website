"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Product", href: "#product" },
  { name: "Integrations", href: "#integrations" },
  { name: "Team", href: "#team" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Lunar-themed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-slate-800/60">
        {/* Subtle lunar glow at top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent" />
        
        <div className="mx-auto max-w-full px-6 lg:px-12">
          <div className="flex h-16 items-center justify-between">
            {/* Logo - Far Left with Moon as "o" */}
            <a
              href="/"
              className="flex items-center group"
            >
              <span className="text-3xl font-semibold text-slate-50 transition-colors group-hover:text-white flex items-center">
                {/* "Lun" */}
                <span>Lun</span>
                
                {/* Crescent Moon as "o" */}
                <span className="relative inline-flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-12"
                  >
                    <path
                      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                      fill="#F1F5F9"
                      className="group-hover:fill-white transition-colors"
                    />
                    {/* Small orbital dot */}
                    <circle cx="19" cy="8" r="1.5" fill="#CBD5E1" className="animate-pulse" />
                  </svg>
                </span>
                
                {/* "n" */}
                <span>n</span>
              </span>
            </a>

            {/* Center Navigation - Desktop Only */}
            <nav className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative h-full flex items-center px-5 text-lg font-medium text-slate-300 transition-all hover:text-slate-50 group"
                >
                  {item.name}
                  {/* Lunar box border on hover */}
                  <span className="absolute inset-0 border border-slate-700/0 rounded-md transition-all duration-300 group-hover:border-slate-700/60 group-hover:bg-slate-800/20" />
                </a>
              ))}
            </nav>

            {/* CTA Button - Far Right */}
            <div className="hidden md:block">
              <a
                href="/demo"
                className="glare-button relative inline-flex items-center justify-center rounded-lg bg-slate-50 px-6 py-2.5 text-sm font-semibold text-slate-900 overflow-hidden transition-all duration-200 hover:bg-slate-200 border border-slate-200 hover:border-slate-400"
                style={{
                  '--gh-rgba': 'rgba(30, 41, 59, 0.4)',
                  '--gh-angle': '-45deg',
                  '--gh-size': '200%',
                  '--gh-duration': '1000ms'
                } as React.CSSProperties}
              >
                <span className="relative">Request Demo</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-50 transition-colors hover:text-slate-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom lunar glow */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent" />
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex min-h-screen flex-col items-center justify-center px-6">
            {/* Mobile moon decoration */}
            <div className="absolute top-20 right-10 opacity-10">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#F1F5F9" />
              </svg>
            </div>

            <nav className="flex flex-col items-center gap-8 relative z-10">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-slate-50 transition-colors hover:text-white"
                  style={{
                    animation: `fadeInUp 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-slate-50 px-8 py-3 text-base font-semibold text-slate-900"
                style={{
                  animation: "fadeInUp 0.3s ease-out 0.4s both",
                }}
              >
                Request Demo
              </a>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}


