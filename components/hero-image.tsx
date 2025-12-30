"use client"

export function HeroImage() {
  return (
    <div className="relative w-full h-full flex items-center">
      <div className="relative w-full lg:w-[108%] xl:w-[112%]">
        {/* Subtle ambient glow behind image */}
        <div className="absolute inset-0 -inset-x-8 -inset-y-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/6 via-slate-400/4 to-transparent rounded-full blur-[80px]" />
        </div>

        {/* Main container */}
        <div className="relative w-full">
          {/* Image container with clean styling */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900/80 shadow-[0_25px_80px_-10px_rgba(0,0,0,0.6)] border border-slate-600/20">
            <img
              src="/Lunon-Demo.png"
              alt="Lunon Demo Interface"
              className="w-full h-auto block"
            />
          </div>

          {/* Minimal floating accents */}
          <div className="absolute -top-4 left-1/4 w-2 h-2 rounded-full bg-blue-400/60 animate-float" />
          <div className="absolute top-1/3 -left-3 w-1.5 h-1.5 rounded-full bg-slate-300/40 animate-float-delayed" />
        </div>
      </div>
    </div>
  )
}
