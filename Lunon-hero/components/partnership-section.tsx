"use client"

const partners = [
  { name: "Microsoft for Startups", logo: "" },
  { name: "Pegasus", logo: "" },
  { name: "CMU Schwartz Center", logo: "" },
  { name: "Mar Ventures", logo: "" },
  { name: "InfoSys", logo: "" },
]

export function PartnershipSection() {
  return (
    <section className="relative py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-20 opacity-80">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
              >
                {/* Use img if you have SVGs, otherwise fallback to text */}
                {partner.logo.endsWith(".svg") ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                ) : (
                  <span className="text-sm md:text-base font-medium text-neutral-400 hover:text-white transition-all duration-200">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft lunar glow behind logos */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-48 w-48 md:h-72 md:w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] blur-3xl" />
      </div>
    </section>
  )
}
