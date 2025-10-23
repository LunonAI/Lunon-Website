"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export function BuiltBy() {
  const router = useRouter()

  return (
    <section id="team" className="pt-12 md:pt-16 pb-20 md:pb-24 border-b border-slate-700/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Engineered at Carnegie Mellon
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              Lunon was founded by students from Carnegie Mellon with a clear goal: to help 
              consulting firms unlock the full value of their internal knowledge. Our AI infrastructure transforms 
              complex data and documents into insights that drive better decisions.
            </p>
          </div>

          {/* Team Photo */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-slate-600/40">
              <img
                src="/TeamLunon.JPG"
                alt="Team Lunon"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
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
      </div>
    </section>
  )
}

