"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Manifesto() {
  return (
    <>
      <Navbar />
      
      <main className="relative min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Hero Section */}
          <section className="pt-32 pb-16">
            <h1 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight">
              Work Smarter Together
            </h1>

            {/* THE PROBLEM */}
            <div className="mb-8">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-slate-400 inline-block border-b-2 border-slate-700 pb-1 mb-6">
                The Problem
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-tight mb-6">
                It's 2025. Why are consulting firms still starting from scratch?
              </h3>

              <div className="space-y-6">
                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  When your firm solves a problem, that knowledge should compound. It should build. It should make the next project faster and sharper.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  Yet every time a new engagement begins, teams recreate decks, hunt for old research, and rediscover insights that someone else already found six months ago.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  Look around. AI writes code. Models predict market shifts. Systems automate entire supply chains.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  But when it's time to deliver client work, consultants are still digging through drives, rewriting slides, and hoping nothing slips through the cracks.
                </p>
              </div>
            </div>

            {/* THE TRUTH */}
            <div className="mb-8">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-slate-400 inline-block border-b-2 border-slate-700 pb-1 mb-6">
                The Truth
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-tight mb-6">
                Generic AI was never the answer
              </h3>

              <div className="space-y-6">
                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  It was a promise, a glimpse of what could be.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  But consulting doesn't work in general terms.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  It works in client contexts. Project boundaries. Firm methodologies.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  AI models have reached a tipping point in the last year.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  State-of-the-art systems understand nuance, synthesize complex data, and generate output that looks finished.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  It's like stepping into the future—until you try to use it for real client work.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  ChatGPT Enterprise exists. Perplexity has research tools. Every SaaS company bolted on an AI chat feature.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  Yet they're still generic, disconnected from your firm's workflow, and filled with gaps that send you back to doing it manually.
                </p>
              </div>
            </div>

            {/* THE SOLUTION */}
            <div className="mb-8">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-slate-400 inline-block border-b-2 border-slate-700 pb-1 mb-6">
                The Solution
              </h2>

              <div className="space-y-6">
                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  That's why we built Lunon.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  Lunon understands your clients, learns your methodology, and delivers work that meets your standards.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  Turn decades of expertise into client deliverables. Query your firm's knowledge. Generate research summaries. Produce decks without starting from zero.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  Consulting firms are shifting from the speed of manual labor to the speed of insight.
                </p>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  Lunon is the knowledge layer that makes it possible.
                </p>

                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-semibold italic border-l-4 border-slate-700 pl-6">
                  Welcome to Lunon. Your firm's knowledge, amplified.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

