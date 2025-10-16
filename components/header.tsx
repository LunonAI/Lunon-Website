// components/header.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
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
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#AC9776] bg-white shadow-sm">
      <div className="container mx-auto h-16 px-4">
        <div className="relative flex h-full items-center">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="/Stratos-Labs-Logo.png" 
              alt="Stratos" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold tracking-tight">Stratos</span>
          </a>

          {/* DESKTOP NAV - Absolutely centered */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            <a href="/#how-it-works" className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#AC9776] after:transition-all hover:after:w-full">
              How It Works
            </a>
            <a href="/#features" className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#AC9776] after:transition-all hover:after:w-full">
              Features
            </a>
            <a href="/#integrations" className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#AC9776] after:transition-all hover:after:w-full">
              Integrations
            </a>
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="ml-auto hidden items-center gap-4 md:flex">
          {me ? (
            <>
              <Button
                size="sm"
                variant="outline"
                onClick={() => router.push("/workspace")}
              >
                Switch project
              </Button>
              <Button
                size="sm"
                className="bg-[#AC9776] text-white hover:bg-[#9A8565]"
                onClick={() => router.push("/demo")}
              >
                Request Demo
              </Button>
            </>
          ) : (
            <Button
              size="sm"
              className="bg-[#AC9776] text-white hover:bg-[#9A8565]"
              onClick={() => router.push("/demo")}
            >
              Request Demo
            </Button>
          )}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU – buttons mirror desktop order */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <a href="/#how-it-works" className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#AC9776] after:transition-all hover:after:w-full">
              How It Works
            </a>
            <a href="/#features" className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#AC9776] after:transition-all hover:after:w-full">
              Features
            </a>
            <a href="/#integrations" className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#AC9776] after:transition-all hover:after:w-full">
              Integrations
            </a>
            <div className="flex flex-col gap-2 pt-4">
              {me ? (
                <>
                  <Button size="sm" variant="outline" onClick={() => router.push("/workspace")}>
                    Switch project
                  </Button>
                  <Button size="sm" className="bg-[#AC9776] text-white hover:bg-[#9A8565]" onClick={() => router.push("/demo")}>
                    Request Demo
                  </Button>
                </>
              ) : (
                <Button size="sm" className="bg-[#AC9776] text-white hover:bg-[#9A8565]" onClick={() => router.push("/demo")}>
                  Request Demo
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}