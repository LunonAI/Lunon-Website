"use client"

import { useState } from "react"

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
          <div className="hidden md:grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="relative group">
                <div
                  className="relative rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-800/40 p-8 md:p-10 shadow-2xl group-hover:border-white/30 transition-all duration-300"
                  style={{boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)'}}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 15px 0px rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Export as Integrations for backward compatibility
export { HowFirmsUse as Integrations }
