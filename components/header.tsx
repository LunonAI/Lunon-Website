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
      className="sticky top-0 z-50 w-full border-b backdrop-blur-sm" 
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: 'var(--lunar-border)'
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
              className="relative text-sm font-medium lunar-transition hover:opacity-70"
              style={{ color: 'var(--lunar-text)' }}
            >
              Product
            </a>
            <a 
              href="/about" 
              className="relative text-sm font-medium lunar-transition hover:opacity-70"
              style={{ color: 'var(--lunar-text)' }}
            >
              About
            </a>
            <a 
              href="/#integrations" 
              className="relative text-sm font-medium lunar-transition hover:opacity-70"
              style={{ color: 'var(--lunar-text)' }}
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
              <LunarButton
                size="md"
                variant="primary"
                onClick={() => router.push("/demo")}
              >
                Request Demo
              </LunarButton>
            </>
          ) : (
            <LunarButton
              size="md"
              variant="primary"
              onClick={() => router.push("/demo")}
            >
              Request Demo
            </LunarButton>
          )}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="ml-auto md:hidden"
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
            borderColor: 'var(--lunar-border)', 
            backgroundColor: 'var(--lunar-surface)' 
          }}
        >
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <a 
              href="/#product" 
              className="text-sm font-medium lunar-transition hover:opacity-70"
              style={{ color: 'var(--lunar-text)' }}
            >
              Product
            </a>
            <a 
              href="/about" 
              className="text-sm font-medium lunar-transition hover:opacity-70"
              style={{ color: 'var(--lunar-text)' }}
            >
              About
            </a>
            <a 
              href="/#integrations" 
              className="text-sm font-medium lunar-transition hover:opacity-70"
              style={{ color: 'var(--lunar-text)' }}
            >
              Integrations
            </a>
            <div className="flex flex-col gap-2 pt-4">
              {me ? (
                <>
                  <LunarButton size="md" variant="secondary" onClick={() => router.push("/workspace")}>
                    Switch project
                  </LunarButton>
                  <LunarButton size="md" variant="primary" onClick={() => router.push("/demo")}>
                    Request Demo
                  </LunarButton>
                </>
              ) : (
                <LunarButton size="md" variant="primary" onClick={() => router.push("/demo")}>
                  Request Demo
                </LunarButton>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
