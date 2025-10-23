"use client"

export function HeroImage() {
  return (
    <div className="relative w-full h-full flex items-center justify-end">
      <div className="relative w-full flex justify-end">
        {/* Balanced glow layers behind the image */}
        <div className="absolute inset-0 -inset-x-6 -inset-y-6">
          <div className="absolute inset-0 bg-white/12 rounded-xl blur-[60px]" />
          <div className="absolute inset-0 bg-white/8 rounded-xl blur-[80px]" />
        </div>

        <div className="relative rounded-lg overflow-hidden border border-slate-600/40 bg-slate-900/50 backdrop-blur-sm shadow-[0_0_50px_rgba(255,255,255,0.16)] lg:rounded-r-none lg:border-r-0 w-full lg:w-auto">
          <img
            src="/LunonUI.png"
            alt="Lunon Platform Interface"
            className="w-full h-auto object-contain relative z-10"
            style={{ filter: 'brightness(0.9)' }}
          />

          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}


