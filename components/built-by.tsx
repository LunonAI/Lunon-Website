"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export function BuiltBy() {
  const router = useRouter()

  return (
    <section id="team" className="pt-12 md:pt-16 pb-20 md:pb-24 border-b border-slate-700/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-8 pt-8">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Engineered at Carnegie Mellon
              </h2>
              <p className="text-base md:text-lg text-slate-200">
                Lunon was founded by Dhruv, Connor, and Ryan, who first came together inside the world's leading AI research hub. Having worked in consulting, finance, and tech, we recognized that consultant firms were underserved by one-size-fits-all solutions. That pushed us toward a simple mission: build AI that reflects each firm's unique expertise so teams can work smarter, move faster, and deliver stronger results.
              </p>
              <div>
                <button
                  onClick={() => router.push("/about")}
                  className="glare-button bg-slate-700 text-slate-50 hover:bg-slate-600 px-8 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  style={{
                    '--gh-rgba': 'rgba(148, 163, 184, 0.3)',
                    '--gh-angle': '-45deg',
                    '--gh-size': '200%',
                    '--gh-duration': '1000ms'
                  } as React.CSSProperties}
                >
                  Meet the Team
                </button>
              </div>
            </div>

            {/* Right Column - Team Photo */}
            <div className="relative h-full min-h-[500px]">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-slate-600/40 h-full">
                <img
                  src="/TeamLunon.JPG"
                  alt="Team Lunon"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

