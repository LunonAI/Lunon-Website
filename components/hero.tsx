// components/hero.tsx
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, UploadCloud } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import * as d3 from "d3"

// ---------------------------------------------------------------------------
// 1.  MOCK HOOK – replace with your real /api/me call
// ---------------------------------------------------------------------------
function useMe() {
  const [me, setMe] = useState<{ firstName: string; lastProjectId: string } | null>(null)
  useEffect(() => {
    // TODO: fetch /api/me (cookie-based)
    // for now:  null = anon,  object = signed in
    setMe(null)
  }, [])
  return me
}

export function Hero() {
  const svgRef = useRef<SVGSVGElement>(null)
  const router = useRouter()
  const me = useMe()

  useEffect(() => {
    if (!svgRef.current) return
    const width = window.innerWidth
    const height = window.innerHeight

    d3.select(svgRef.current).selectAll("*").remove()

    const N = 120
    const nodes = Array.from({ length: N }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
    }))
    const links = Array.from({ length: N * 1.6 }, () => ({
      source: Math.floor(Math.random() * N),
      target: Math.floor(Math.random() * N),
    }))

    const sim = d3
      .forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(90))
      .force("charge", d3.forceManyBody().strength(-180))
      .force("x", d3.forceX(width / 2).strength(0.002))
      .force("y", d3.forceY(height / 2).strength(0.02))
      .alphaDecay(0.035)
      .alpha(0.7)

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("position", "absolute")
      .style("top", 0)
      .style("left", 0)
      .style("z-index", 0)

    const defs = svg.append("defs")
    const grad = defs
      .append("radialGradient")
      .attr("id", "nodeGlow")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "50%")
    grad.append("stop").attr("offset", "0%").attr("stop-color", "#AC9776").attr("stop-opacity", 0.9)
    grad.append("stop").attr("offset", "100%").attr("stop-color", "#AC9776").attr("stop-opacity", 0)

    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#AC9776")
      .attr("stroke-opacity", 0.2)
      .attr("stroke-width", 1.3)

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 3.8)
      .attr("fill", "url(#nodeGlow)")
      .attr("filter", "blur(0.7px)")

    sim.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y)
      node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y)
    })

    const onResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      svg.attr("width", w).attr("height", h)
      sim.force("x", d3.forceX(w / 2).strength(0.002))
      sim.force("y", d3.forceY(h / 2).strength(0.02))
      sim.alpha(0.4).restart()
    }
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
      sim.stop()
    }
  }, [])

  // -------------------------------------------------------------------------
  // 2.  CENTRE BUTTONS  (order & copy now Fortune-500 aligned)
  // -------------------------------------------------------------------------
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 bg-white/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
          Empower Your Consulting Firm with&nbsp;AI Intelligence
        </h1>
        <p className="mt-6 text-pretty text-lg md:text-xl text-muted-foreground lg:max-w-3xl mx-auto">
          Transform documents into actionable insights. Stratos combines semantic search,
          RAG-powered chat, and enterprise-grade security to unlock the full potential of your data.
        </p>

        {/* 2-A  EXISTING USER  */}
        {me && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <div className="w-full max-w-md rounded-2xl border border-amber-200 bg-amber-50/60 p-6 text-center">
              <p className="text-sm text-amber-700">Welcome back, {me.firstName}</p>
              <p className="mt-1 text-xs text-neutral-500">Last active just now</p>
              <div className="mt-4 flex flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full bg-[#AC9776] text-white hover:bg-[#9A8565] px-8 shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => window.location.href = `/workspace/${me.lastProjectId}`}
                >
                  Open workspace
                </Button>
                <button
                  onClick={() => window.location.href = "/workspace"}
                  className="text-sm text-neutral-600 hover:text-amber-600 underline"
                >
                  Switch project →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2-B  NEW USER  */}
        {!me && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#AC9776] text-white hover:bg-[#9A8565] px-8 shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => window.location.href = "/demo"} // your demo/booking route
            >
              Request demo
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}