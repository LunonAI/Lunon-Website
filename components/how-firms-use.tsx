"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const useCases = [
  {
    title: "Deliverable Generation",
    description: "Create proposals, presentations, and RFPs using your firm's own documents and data."
  },
  {
    title: "Knowledge Retrieval",
    description: "Find insights, frameworks, and client materials across thousands of files in seconds."
  },
  {
    title: "Verified Intelligence",
    description: "Every response is fact checked against your firm's documents for accuracy and reliability."
  },
  {
    title: "Collaborative Workflows",
    description: "Teams work together on projects, proposals, and deliverables in a shared knowledge environment."
  }
]

export function HowFirmsUse() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="how-firms-use" className="pt-12 md:pt-16 pb-16 md:pb-20 border-b border-slate-700/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-left md:text-center mb-12 md:mb-16">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              How Firms Use Lunon
            </h2>
            <p className="text-base md:text-lg text-slate-200 max-w-3xl md:mx-auto">
              Lunon enhances every stage of consulting work, helping teams create, refine, and deliver with clarity, speed, and confidence.
            </p>
          </div>

          {/* Mobile: Accordion */}
          <div className="md:hidden space-y-3">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="rounded-xl bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-600/30 overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-700/20"
                >
                  <h3 className="text-base font-semibold text-white pr-4">
                    {useCase.title}
                  </h3>
                  <svg 
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${expandedIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-h-40' : 'max-h-0'}`}
                >
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 2x2 Grid with Minimalist Reveal */}
          <div className="hidden md:grid md:grid-cols-2 border border-slate-600/40 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/20 via-slate-900/40 to-slate-800/20 backdrop-blur-sm shadow-2xl">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className={`
                  group relative p-8 md:p-10
                  transition-all duration-500 ease-out
                  hover:bg-gradient-to-br hover:from-slate-700/20 hover:via-slate-800/30 hover:to-slate-700/20
                  ${index === 0 ? 'border-r border-b border-slate-600/40' : ''}
                  ${index === 1 ? 'border-b border-slate-600/40' : ''}
                  ${index === 2 ? 'border-r border-slate-600/40' : ''}
                `}
                initial={{ 
                  opacity: 0,
                  y: 30
                }}
                whileInView={{ 
                  opacity: 1,
                  y: 0
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 1.2,
                  delay: index < 2 ? 0 : 0.3,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Moonlight glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-slate-400/5 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-slate-50 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {useCase.description}
                  </p>
                </div>

                {/* Subtle edge glow */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(148,163,184,0.1)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Export as Integrations for backward compatibility
export { HowFirmsUse as Integrations }
