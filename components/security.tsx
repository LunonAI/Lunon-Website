"use client"

import { motion } from "framer-motion"

const complianceAreas = [
  {
    title: "AICPA",
    subtitle: "SOC 2 Ready"
  },
  {
    title: "End to End",
    subtitle: "Encryption"
  },
  {
    title: "NIST 800 53",
    subtitle: "Aligned"
  }
]

export function Security() {
  return (
    <section id="security" className="pt-12 md:pt-16 pb-16 md:pb-20 border-b border-slate-700/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-left md:text-center mb-12 md:mb-16">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Security Built on Trust,
              <br />
              Ready for the Future
            </h2>
            <p className="text-base md:text-lg text-slate-200 max-w-4xl md:mx-auto mt-6 leading-relaxed">
              Lunon protects firm knowledge with strong security practices that keep data, models, and deliverables safe. We stay prepared for new security threats and evolve our systems to match the needs of consulting teams at scale.
            </p>
            <p className="text-base md:text-lg text-slate-200 max-w-4xl md:mx-auto mt-4 leading-relaxed">
              We are model agnostic and support multiple providers including Google Vertex, Anthropic, and private OpenAI endpoints.
            </p>
          </div>

          {/* Three Moons - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                className="relative group"
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
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Moon Circle with Embossed Effect */}
                <div className="relative aspect-square w-full max-w-[280px] mx-auto">
                  {/* Outer glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-400/20 via-slate-500/10 to-slate-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Moon surface with embossed effect */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-700/40 via-slate-800/60 to-slate-900/80 border-2 border-slate-600/40 backdrop-blur-sm shadow-2xl overflow-hidden">
                    {/* Top highlight for embossed look */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-1/3 bg-gradient-to-b from-slate-400/20 to-transparent rounded-full blur-xl" />
                    
                    {/* Bottom shadow for depth */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    
                    {/* Subtle surface texture */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-[15%] right-[20%] w-8 h-8 rounded-full bg-slate-600/30 blur-sm" />
                      <div className="absolute bottom-[25%] left-[15%] w-12 h-12 rounded-full bg-slate-700/20 blur-md" />
                      <div className="absolute top-[45%] left-[60%] w-6 h-6 rounded-full bg-slate-600/25 blur-sm" />
                    </div>
                    
                    {/* Inner glow ring */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(148,163,184,0.1)] group-hover:shadow-[inset_0_0_40px_rgba(148,163,184,0.2)] transition-shadow duration-700" />
                    
                    {/* Content - Centered Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {area.title}
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg font-medium text-slate-200 drop-shadow-md">
                        {area.subtitle}
                      </p>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-slate-400/5 to-transparent" />
                    </div>
                  </div>
                  
                  {/* Orbital glow particles */}
                  <div className="absolute top-[10%] right-[15%] w-2 h-2 rounded-full bg-slate-300 opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  <div className="absolute bottom-[20%] left-[10%] w-1.5 h-1.5 rounded-full bg-slate-400 opacity-50 group-hover:opacity-90 transition-opacity duration-700" style={{ animationDelay: '0.5s' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

