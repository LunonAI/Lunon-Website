"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Security } from "@/components/security"
import { Starfield } from "@/components/starfield"

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      
      <main className="relative min-h-screen bg-black overflow-hidden">
        {/* Dynamic Starfield Background */}
        <Starfield />
        
        {/* Security Section with padding for navbar */}
        <div className="relative pt-24 bg-gradient-to-b from-black via-slate-900/50 to-slate-900">
          <Security />
        </div>
      </main>
      
      <Footer />
    </>
  )
}

