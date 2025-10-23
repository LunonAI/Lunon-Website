"use client"

const partners = [
  { name: "Microsoft for Startups", logo: "/Microsoft-for-Startups.png" },
  { name: "CMU Schwartz Center", logo: "/Schwartz-Center.png" },
  { name: "Pegasus Ignite", logo: "/Pegasus-Ignite.png" },
  { name: "Confluence", logo: "/Confluence.png" },
  { name: "InfoSys", logo: "/Infosys.png" },
]

export function PartnershipSection() {
  const getLogoSize = (name: string) => {
    if (name === "Pegasus Ignite") {
      return "h-10"; // 80px - biggest
    }
    if (name === "Microsoft for Startups") {
      return "h-20"; // 80px - bigger
    }
    if (name === "CMU Schwartz Center") {
      return "h-17"; // 64px - bigger
    }
    if (name === "Confluence") {
      return "h-7.5"; // 32px - smaller
    }
    return "h-9"; // 40px - default
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Clean partner row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`group ${partner.name === "InfoSys" ? "translate-y-1" : ""}`}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 ${getLogoSize(partner.name)}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
