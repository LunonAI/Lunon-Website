"use client"

import { Button } from "@/components/ui/button"
import { TypewriterText } from "@/components/typewriter-text"
import { HeroImage } from "@/components/hero-image"
import { PartnershipSection } from "@/components/partnership-section"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#0a0d12]">
        {/* Subtle ambient lighting - professional and minimal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/[0.015] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-300/[0.01] rounded-full blur-[100px]" />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 px-6 lg:pl-12 lg:pr-0">
                <h1 className="text-5xl/tight md:text-6xl/tight lg:text-7xl/tight font-semibold text-slate-50 tracking-tight">
                  Powering smarter <span className="text-slate-100">consulting.</span>
                </h1>

                {/* Description with Typewriter */}
                <TypewriterText />

                <div className="pt-6">
                  <Button
                    size="lg"
                    className="bg-slate-50 hover:bg-white text-slate-900 px-10 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Request a Demo
                  </Button>
                </div>
              </div>

              {/* Right Column - Product Screenshot */}
              <div className="px-6 lg:px-0 lg:pr-0">
                <HeroImage />
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <PartnershipSection />
      </main>
    </>
  )
}
