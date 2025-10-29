"use client"

import { Navbar } from "@/components/navbar"
import { TypewriterText } from "@/components/typewriter-text"
import { HeroImage } from "@/components/hero-image"
import { PartnershipSection } from "@/components/partnership-section"
import { Product } from "@/components/product"
import { BuiltBy } from "@/components/built-by"
import { HowFirmsUse } from "@/components/how-firms-use"
import { Footer } from "@/components/footer"
import { Starfield } from "@/components/starfield"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-black overflow-hidden">
        {/* Dynamic Starfield Background */}
        <Starfield />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
          <div className="w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8 text-left max-w-2xl px-6 lg:pl-12 lg:pr-0">
                {/* Eyebrow - Creative Badge */}
                <div className="inline-flex items-center gap-3 group">
                  <div className="relative inline-flex items-center gap-3 rounded-full border border-slate-600/40 bg-gradient-to-r from-slate-800/80 via-slate-700/60 to-slate-800/80 backdrop-blur-xl px-5 py-2.5 shadow-2xl hover:shadow-slate-500/20 transition-all duration-300 hover:border-slate-500/60 cursor-pointer overflow-hidden">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Profile Images with Animation */}
                    <div className="relative flex -space-x-3">
                      {['/professional-woman-glasses.png', '/professional-man.jpg', '/professional-woman-diverse.png'].map((src, index) => (
                        <div 
                          key={index}
                          className="relative h-8 w-8 rounded-full border-2 border-slate-600 overflow-hidden bg-slate-700 ring-2 ring-slate-800/50 transform transition-transform duration-300 group-hover:scale-110"
                          style={{ 
                            animationDelay: `${index * 100}ms`,
                            zIndex: 3 - index 
                          }}
                        >
                          <img src={src} alt="" className="h-full w-full object-cover" />
                        </div>
                      ))}
                      {/* +Number indicator */}
                      <div className="relative h-8 w-8 rounded-full border-2 border-slate-600 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center ring-2 ring-slate-800/50 transform transition-transform duration-300 group-hover:scale-110">
                        <span className="text-[10px] font-bold text-slate-200">+50</span>
                      </div>
                    </div>
                    
                    {/* Text with gradient */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text text-transparent">
                        Built for high performers
                      </span>
                      
                      {/* Verified badge */}
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-500/20 border border-blue-400/30">
                        <svg className="h-3 w-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Arrow with animation */}
                    <ChevronRight className="h-4 w-4 text-slate-400 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                <h1 className="text-5xl/tight md:text-6xl/tight lg:text-7xl/tight font-semibold text-slate-50 tracking-tight">
                  Powering smarter <span className="text-slate-100">consulting.</span>
                </h1>

                {/* Description with Typewriter */}
                <TypewriterText />

                <div className="pt-6 space-y-3">
                  <button 
                    className="glare-button bg-slate-50 text-slate-900 px-8 py-3 text-base font-semibold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:bg-slate-200 border border-slate-200 hover:border-slate-400 cursor-pointer"
                    style={{
                      '--gh-rgba': 'rgba(30, 41, 59, 0.4)',
                      '--gh-angle': '-45deg',
                      '--gh-size': '200%',
                      '--gh-duration': '1000ms'
                    } as React.CSSProperties}
                    onClick={() => window.location.href = "/demo"}
                  >
                    Redefine Performance
                  </button>
                  <p className="text-xs text-slate-400 text-left pl-[2.1rem]">
                    30-day money back guarantee
                  </p>
                </div>
              </div>

              {/* Right Column - Product Screenshot */}
              <div className="pr-0 lg:pr-0">
                <HeroImage />
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <div className="relative z-10">
          <PartnershipSection />
        </div>

        {/* Smooth Gradient Transition */}
        <div className="relative h-32">
          {/* Stronger gradient with visible color shift */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050a12] via-[30%] via-[#0a1120] via-[50%] via-[#0f172a] via-[70%] to-slate-900" />
        </div>

        {/* Other sections with consistent lighter background */}
        <div className="relative bg-slate-900">
          <Product />
          <HowFirmsUse />
          <BuiltBy />
        </div>
      </main>

      <Footer />
    </>
  )
}
