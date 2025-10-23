// components/header.tsx
"use client"

import { LunarButton } from "@/components/ui/LunarButton"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

// -------------------------------------------------------------------------
//  MOCK HOOK – replace with real /api/me
// -------------------------------------------------------------------------
function useMe() {
  const [me, setMe] = useState<{ firstName: string } | null>(null)
  // TODO: fetch /api/me
  return me
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const me = useMe()

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b backdrop-blur-xl" 
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(71, 85, 105, 0.3)'
      }}
    >
      <div className="container mx-auto h-16 px-4">
        <div className="relative flex h-full items-center">
          {/* LOGO */}
          <a href="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="/Lunon-Logo.png" 
              alt="Lunon" 
              className="h-8 w-auto"
            />
          </a>

          {/* DESKTOP NAV - Absolutely centered */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            <a 
              href="/#product" 
              className="relative text-sm font-medium lunar-transition hover:opacity-70 text-slate-200"
            >
              Product
            </a>
            <a 
              href="/about" 
              className="relative text-sm font-medium lunar-transition hover:opacity-70 text-slate-200"
            >
              About
            </a>
            <a 
              href="/#integrations" 
              className="relative text-sm font-medium lunar-transition hover:opacity-70 text-slate-200"
            >
              Integrations
            </a>
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="ml-auto hidden items-center gap-3 md:flex">
          {me ? (
            <>
              <LunarButton
                size="md"
                variant="secondary"
                onClick={() => router.push("/workspace")}
              >
                Switch project
              </LunarButton>
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
            </>
          ) : (
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
          )}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="ml-auto md:hidden text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU – buttons mirror desktop order */}
      {mobileMenuOpen && (
        <div 
          className="border-t md:hidden"
          style={{ 
            borderColor: 'rgba(71, 85, 105, 0.3)', 
            backgroundColor: 'rgba(0, 0, 0, 0.9)' 
          }}
        >
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <a 
              href="/#product" 
              className="text-sm font-medium lunar-transition hover:opacity-70 text-slate-200"
            >
              Product
            </a>
            <a 
              href="/about" 
              className="text-sm font-medium lunar-transition hover:opacity-70 text-slate-200"
            >
              About
            </a>
            <a 
              href="/#integrations" 
              className="text-sm font-medium lunar-transition hover:opacity-70 text-slate-200"
            >
              Integrations
            </a>
            <div className="flex flex-col gap-2 pt-4">
              {me ? (
                <>
                  <LunarButton size="md" variant="secondary" onClick={() => router.push("/workspace")}>
                    Switch project
                  </LunarButton>
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
                </>
              ) : (
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
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
