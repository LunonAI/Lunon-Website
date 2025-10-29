"use client"

import { Plug } from "lucide-react"
import { useState } from "react"

const integrations = [
  {
    name: "Confluence",
    description: "Wiki & documentation",
    details: "Sync your team wiki and documentation for instant knowledge retrieval",
    color: "from-blue-500/10 to-blue-600/10",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-600",
  },
  {
    name: "Google Drive",
    description: "Cloud storage",
    details: "Access and search all your Google Drive files and folders seamlessly",
    color: "from-green-500/10 to-yellow-500/10",
    borderColor: "border-green-500/20",
    textColor: "text-green-600",
  },
  {
    name: "Google Sheets",
    description: "Spreadsheets",
    details: "Query and analyze data from your spreadsheets with natural language",
    color: "from-green-500/10 to-green-600/10",
    borderColor: "border-green-500/20",
    textColor: "text-green-600",
  },
  {
    name: "Dropbox",
    description: "File sharing",
    details: "Connect your Dropbox to search and retrieve files instantly",
    color: "from-blue-500/10 to-blue-700/10",
    borderColor: "border-blue-600/20",
    textColor: "text-blue-700",
  },
  {
    name: "OneDrive",
    description: "Microsoft cloud",
    details: "Integrate with Microsoft's cloud for seamless file access",
    color: "from-blue-400/10 to-blue-500/10",
    borderColor: "border-blue-400/20",
    textColor: "text-blue-500",
  },
  {
    name: "Oracle NetSuite",
    description: "ERP platform",
    details: "Pull business data and insights from your ERP system",
    color: "from-red-500/10 to-red-600/10",
    borderColor: "border-red-500/20",
    textColor: "text-red-600",
  },
  {
    name: "Salesforce",
    description: "CRM platform",
    details: "Access customer data and CRM insights in real-time",
    color: "from-cyan-500/10 to-blue-500/10",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-600",
  },
  {
    name: "Workday",
    description: "HR & finance",
    details: "Connect HR and financial data for comprehensive insights",
    color: "from-orange-500/10 to-orange-600/10",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-600",
  },
]

export function Integrations() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="integrations" className="pt-12 md:pt-16 pb-20 md:pb-24 border-b border-slate-700/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-left md:text-center mb-12 md:mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Integrations for Enhanced Functionality
            </h2>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl md:mx-auto">
              Connect Lunon with the tools you already use. Our platform seamlessly integrates with leading enterprise software to streamline your workflow.
            </p>
          </div>

          {/* Mobile: Expandable Cards */}
          <div className="md:hidden space-y-3">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">
                        {integration.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {integration.name}
                      </h3>
                      <p className="text-xs text-slate-300">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                  <svg 
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${expandedIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-4 pb-4 pl-[3.75rem] text-sm text-slate-200 leading-relaxed">
                    {integration.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 md:gap-6">
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
          <div className="mt-12 text-left md:text-center">
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

// Backwards-compatible export for the renamed section
export const HowFirmsUse = Integrations

