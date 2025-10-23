"use client"

import { Plug } from "lucide-react"

const integrations = [
  {
    name: "Confluence",
    description: "Wiki & documentation",
    color: "from-blue-500/10 to-blue-600/10",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-600",
  },
  {
    name: "Google Drive",
    description: "Cloud storage",
    color: "from-green-500/10 to-yellow-500/10",
    borderColor: "border-green-500/20",
    textColor: "text-green-600",
  },
  {
    name: "Google Sheets",
    description: "Spreadsheets",
    color: "from-green-500/10 to-green-600/10",
    borderColor: "border-green-500/20",
    textColor: "text-green-600",
  },
  {
    name: "Dropbox",
    description: "File sharing",
    color: "from-blue-500/10 to-blue-700/10",
    borderColor: "border-blue-600/20",
    textColor: "text-blue-700",
  },
  {
    name: "OneDrive",
    description: "Microsoft cloud",
    color: "from-blue-400/10 to-blue-500/10",
    borderColor: "border-blue-400/20",
    textColor: "text-blue-500",
  },
  {
    name: "Oracle NetSuite",
    description: "ERP platform",
    color: "from-red-500/10 to-red-600/10",
    borderColor: "border-red-500/20",
    textColor: "text-red-600",
  },
  {
    name: "Salesforce",
    description: "CRM platform",
    color: "from-cyan-500/10 to-blue-500/10",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-600",
  },
  {
    name: "Workday",
    description: "HR & finance",
    color: "from-orange-500/10 to-orange-600/10",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-600",
  },
]

export function Integrations() {
  return (
    <section id="integrations" className="pt-12 md:pt-16 pb-20 md:pb-24 border-b border-slate-700/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Integrations for Enhanced Functionality
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              Connect Lunon with the tools you already use. Our platform seamlessly integrates with leading enterprise software to streamline your workflow.
            </p>
          </div>

          {/* Integration Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/8 hover:border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Placeholder - In production, use actual logos */}
                  <div className={`h-12 w-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-3 shadow-sm group-hover:bg-white/15 transition-all`}>
                    <span className={`text-xl font-bold text-white`}>
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-semibold text-white text-sm md:text-base mb-1">
                    {integration.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-slate-200">
                    {integration.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-200">
              Can't find what you're looking for?{" "}
              <a href="/demo" className="text-white hover:underline font-medium">
                Contact us
              </a>{" "}
              to discuss custom integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

