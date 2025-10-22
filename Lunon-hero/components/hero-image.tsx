"use client"

export function HeroImage() {
  return (
    <div className="relative w-full h-full flex items-center">
      {/* Subtle ambient glow - professional and minimal */}
      <div className="absolute -inset-4 lg:-inset-y-4 lg:inset-x-0 bg-slate-400/[0.03] rounded-xl blur-[80px]" />

      <div className="relative w-full">
        <div className="relative rounded-lg overflow-hidden border border-slate-700/30 bg-slate-900/50 backdrop-blur-sm shadow-2xl lg:rounded-r-none lg:border-r-0">
          <div className="aspect-video">
            <img
              src="/modern-ai-consulting-dashboard-interface-with-dark.jpg"
              alt="Lunon Platform Interface"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
