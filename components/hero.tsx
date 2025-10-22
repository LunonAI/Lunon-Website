// components/hero.tsx
"use client"

import { useEffect, useState } from "react"
import { HeroEyebrow } from "@/components/HeroEyebrow"
import LunarBackground from "@/components/LunarBackground"
import { LunarButton } from "@/components/ui/LunarButton"
import { ArrowRight } from "lucide-react"

// ---------------------------------------------------------------------------
// 1.  MOCK HOOK – replace with your real /api/me call
// ---------------------------------------------------------------------------
function useMe() {
  const [me, setMe] = useState<{ firstName: string; lastProjectId: string } | null>(null)
  useEffect(() => {
    // TODO: fetch /api/me (cookie-based)
    // for now:  null = anon,  object = signed in
    setMe(null)
  }, [])
  return me
}

export function Hero() {
  const me = useMe()

  return (
    <section className="relative isolate">
      <LunarBackground />
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-14 text-center relative z-10">
        <HeroEyebrow>AI That Connects Your Firm's Knowledge and Projects</HeroEyebrow>
        <h1 
          className="mt-5 text-5xl/tight sm:text-6xl/tight font-semibold"
          style={{ color: 'var(--lunar-text)' }}
        >
          The intelligence layer for consulting firms.
        </h1>
        <p 
          className="mt-5 text-lg"
          style={{ color: 'rgb(82, 82, 91)' }}
        >
          Create insights fast. Share knowledge effortlessly. Refine, collaborate, and repeat. Then watch your entire firm move faster together.
        </p>

        {/* User CTAs */}
        {me ? (
          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <div 
              className="w-full max-w-md rounded-2xl border p-6 text-center shadow-lunar-sm"
              style={{ 
                borderColor: 'var(--lunar-border)', 
                backgroundColor: 'var(--lunar-surface)' 
              }}
            >
              <p className="text-sm font-medium" style={{ color: 'var(--lunar-text)' }}>
                Welcome back, {me.firstName}
              </p>
              <p className="mt-1 text-xs" style={{ color: 'var(--lunar-muted)' }}>
                Last active just now
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <LunarButton
                  size="lg"
                  variant="primary"
                  onClick={() => window.location.href = `/workspace/${me.lastProjectId}`}
                  className="w-full"
                >
                  Open workspace
                </LunarButton>
                <button
                  onClick={() => window.location.href = "/workspace"}
                  className="text-sm underline lunar-transition"
                  style={{ color: 'var(--lunar-text)' }}
                >
                  Switch project →
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 flex items-center justify-center gap-3">
            <LunarButton 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = "/demo"}
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </LunarButton>
            <LunarButton 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = "/#product"}
            >
              See How It Works
            </LunarButton>
          </div>
        )}
      </div>
    </section>
  )
}