"use client"

import { Navbar } from "@/components/navbar"
import { TypewriterText } from "@/components/typewriter-text"
import { HeroImage } from "@/components/hero-image"
import { PartnershipSection } from "@/components/partnership-section"
import { Product } from "@/components/product"
import { BuiltBy } from "@/components/built-by"
import { Integrations } from "@/components/integrations"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-black overflow-hidden">
        {/* Starfield Background - CSS-based to avoid hydration errors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="stars-layer-1" />
          <div className="stars-layer-2" />
          <div className="stars-layer-3" />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
          <div className="w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 px-6 lg:pl-12 lg:pr-0">
                <h1 className="text-5xl/tight md:text-6xl/tight lg:text-7xl/tight font-semibold text-slate-50 tracking-tight">
                  Powering smarter <span className="text-slate-100">consulting.</span>
                </h1>

                {/* Description with Typewriter */}
                <TypewriterText />

                <div className="pt-6">
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
                    Request a Demo
                  </button>
                </div>
              </div>

              {/* Right Column - Product Screenshot */}
              <div className="px-6 lg:px-0 lg:pr-0">
                <HeroImage />
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section - with starfield continuation */}
        <div className="relative">
          {/* Continue starfield from hero */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="stars-layer-1" />
            <div className="stars-layer-2" />
            <div className="stars-layer-3" />
          </div>
          
          <PartnershipSection />
        </div>

        {/* Smooth Gradient Transition */}
        <div className="relative h-48 overflow-hidden">
          {/* Stronger gradient with visible color shift */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050a12] via-[30%] via-[#0a1120] via-[50%] via-[#0f172a] via-[70%] to-slate-900" />
        </div>

        {/* Other sections with consistent lighter background */}
        <div className="relative bg-slate-900">
          <Product />
          <BuiltBy />
          <Integrations />
        </div>
      </main>

      <Footer />
    </>
  )
}
