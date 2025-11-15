"use client"

import { useState } from "react"
import { Linkedin, Mail, Check } from "lucide-react"

export function Footer() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@lunon.ai")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <footer className="relative z-10 bg-black text-white border-t border-slate-800/60">
      {/* Subtle lunar glow at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent" />
      
      <div className="mx-auto max-w-full px-6 lg:px-12 py-8">
        {/* Row 1: Logo, Nav Links, Privacy */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6">
          {/* Logo - Far Left */}
          <a href="/" className="flex items-center group w-fit">
            <span className="text-3xl font-semibold text-slate-50 transition-colors group-hover:text-white">
              <span>Lun</span>
              <span className="relative inline-block translate-y-[3.5px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:rotate-12 block"
                >
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    fill="#F1F5F9"
                    className="group-hover:fill-white transition-colors"
                  />
                  {/* Small orbital dot */}
                  <circle cx="19" cy="8" r="1.5" fill="#CBD5E1" className="animate-pulse" />
                </svg>
              </span>
              <span>n</span>
            </span>
          </a>

          {/* Center Nav Links */}
          <nav className="flex flex-wrap items-center gap-8">
            <a href="/" className="text-slate-300 text-base font-medium transition-colors hover:text-slate-50">
              Home
            </a>
            <a href="/manifesto" className="text-slate-300 text-base font-medium transition-colors hover:text-slate-50">
              Manifesto
            </a>
            <a href="/#how-firms-use" className="text-slate-300 text-base font-medium transition-colors hover:text-slate-50">
              Use Cases
            </a>
            <a href="#careers" className="text-slate-300 text-base font-medium transition-colors hover:text-slate-50">
              Careers
            </a>
          </nav>

          {/* Privacy Policy - Far Right */}
          <a href="#privacy" className="text-slate-300 text-base font-medium transition-colors hover:text-slate-50 w-fit">
            Privacy Policy
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/60" />

        {/* Row 2: Copyright, Social Icons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6">
          {/* Copyright - Left */}
          <p className="text-base text-slate-500">
            &copy; Lunon, Inc. 2025. All rights reserved.
          </p>

          {/* Social Icons - Far Right */}
          <div className="flex items-center gap-3">
            <button 
              onClick={copyEmail}
              className={`flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-200 border ${
                emailCopied
                  ? 'bg-green-600 border-green-600 text-white'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700 hover:text-slate-50 border-slate-700/60 hover:border-slate-600'
              }`}
              aria-label={emailCopied ? "Email Copied!" : "Copy Email"}
            >
              {emailCopied ? <Check className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
            </button>
            <a 
              href="https://www.linkedin.com/company/lunon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-800/60 text-slate-300 transition-all duration-200 hover:bg-slate-700 hover:text-slate-50 border border-slate-700/60 hover:border-slate-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom lunar glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent" />
    </footer>
  )
}
