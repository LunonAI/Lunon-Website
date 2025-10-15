"use client"

import { Brain, Code, Users } from "lucide-react"

export function BuiltBy() {
  return (
    <section id="team" className="bg-gradient-to-b from-white to-neutral-50 py-16 md:py-20 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Engineered at Carnegie Mellon
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Born out of CMU’s culture of innovation, Stratos creates technology that amplifies human insight, not replaces it. Our tools support collaboration, combining data, context, and human understanding to solve complex problems with clarity and purpose.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-5 rounded-xl border border-border bg-white hover:border-[#AC9776]/30 transition-colors">
              <div className="flex justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-[#AC9776]/10 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-[#AC9776]" />
                </div>
              </div>
              <div className="text-xl font-bold text-foreground mb-1">#1</div>
              <div className="text-sm text-muted-foreground">AI & Machine Learning</div>
            </div>

            <div className="text-center p-5 rounded-xl border border-border bg-white hover:border-[#AC9776]/30 transition-colors">
              <div className="flex justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-[#AC9776]/10 flex items-center justify-center">
                  <Code className="h-5 w-5 text-[#AC9776]" />
                </div>
              </div>
              <div className="text-xl font-bold text-foreground mb-1">#1</div>
              <div className="text-sm text-muted-foreground">Software Engineering</div>
            </div>

            <div className="text-center p-5 rounded-xl border border-border bg-white hover:border-[#AC9776]/30 transition-colors">
              <div className="flex justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-[#AC9776]/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#AC9776]" />
                </div>
              </div>
              <div className="text-xl font-bold text-foreground mb-1">#1</div>
              <div className="text-sm text-muted-foreground">Information Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

