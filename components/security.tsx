"use client"

import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import the 3D component with no SSR to avoid server-side rendering issues
const SecurityOrbital3D = dynamic(() => import('./security-orbital-3d'), {
  ssr: false,
  loading: () => (
    <div className="relative aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-slate-700/40 via-slate-800/60 to-slate-900/80 border-2 border-slate-600/50 shadow-2xl animate-pulse" />
    </div>
  )
})

const complianceAreas = [
  {
    top: "AICPA",
    bottom: "SOC 2 Ready"
  },
  {
    top: "End-to-End",
    bottom: "Encryption"
  },
  {
    top: "NIST 800 53",
    bottom: "Aligned"
  }
]

export function Security() {
  return (
    <section id="security" className="pt-16 md:pt-24 pb-8 md:pb-12 border-b border-slate-700/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Centered Section Title */}
          <div className="text-center mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
              Security
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Elevated Text Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main content container */}
              <div className="relative rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-800/40 p-8 md:p-10 lg:p-12 shadow-2xl">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" />
                
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                    Built on Trust,
                    <br />
                    Ready for the Future
                  </h3>
                  
                  <div className="space-y-4 text-base md:text-lg text-slate-300 leading-relaxed">
                    <p>
                      Lunon protects firm knowledge with strong security practices that keep data, models, and deliverables safe. We stay prepared for new security threats and evolve our systems to match the needs of consulting teams at scale.
                    </p>
                    <p>
                      We are model agnostic and support multiple providers including Google Vertex, Anthropic, and private OpenAI endpoints.
                    </p>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent" />
              </div>
            </motion.div>

            {/* Right Side - 3D Orbital Security System */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-visible"
            >
              <Suspense fallback={
                <div className="relative aspect-square max-w-[500px] mx-auto flex items-center justify-center">
                  <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-slate-700/40 via-slate-800/60 to-slate-900/80 border-2 border-slate-600/50 shadow-2xl animate-pulse" />
                </div>
              }>
                <SecurityOrbital3D />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
