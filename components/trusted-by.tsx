export function TrustedBy() {
  // Placeholder company names
  const companies = [
    "Acme Consulting",
    "Global Advisors",
    "Strategic Partners",
    "Insight Group",
    "Apex Solutions",
    "Vertex Consulting",
  ]

  return (
    <section id="clients" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Trusted by Leading Firms
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the consulting firms transforming their intelligence operations with Lunon
          </p>
        </div>

        {/* Placeholder logo grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex h-20 w-full items-center justify-center rounded-lg border border-border bg-secondary/20 px-4 transition-all hover:border-[#522396]/30"
            >
              <span className="text-sm font-semibold text-muted-foreground grayscale">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
