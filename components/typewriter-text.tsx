"use client"

import { useEffect, useState } from "react"

const phrases = [
  "Workflow automation",
  "Proposal development",
  "Presentation generation",
  "Knowledge retrieval",
  "Market research"
]

type AnimationPhase = "typing" | "waiting" | "highlighting" | "deleting"

export function TypewriterText() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [phase, setPhase] = useState<AnimationPhase>("typing")
  const [highlightProgress, setHighlightProgress] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  // Smooth cursor fade
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    if (phase === "typing") {
      if (displayText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setPhase("waiting")
        }, 800)
        return () => clearTimeout(timeout)
      }
    }

    if (phase === "waiting") {
      const timeout = setTimeout(() => {
        setPhase("highlighting")
        setHighlightProgress(0)
      }, 200)
      return () => clearTimeout(timeout)
    }

    if (phase === "highlighting") {
      if (highlightProgress < displayText.length) {
        const timeout = setTimeout(() => {
          setHighlightProgress((prev) => prev + 1)
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setPhase("deleting")
        }, 100)
        return () => clearTimeout(timeout)
      }
    }

    if (phase === "deleting") {
      const timeout = setTimeout(() => {
        setDisplayText("")
        setHighlightProgress(0)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        setPhase("typing")
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [displayText.length, phase, currentPhraseIndex, highlightProgress])

  const isHighlighting = phase === "highlighting"

  return (
    <div className="flex flex-col items-center lg:items-start gap-2">
      {/* Static text line */}
      <div className="text-xl md:text-2xl lg:text-3xl text-slate-300 leading-relaxed font-normal">
        Lunon, your secure AI hub for
      </div>
      
      {/* Animated phrase line */}
      <div className="relative min-h-[2.5rem] flex items-center">
        <span className="relative text-slate-100 font-normal text-xl md:text-2xl lg:text-3xl whitespace-pre">
          {/* The actual text with individual character styling */}
          {displayText.split("").map((char, index) => (
            <span
              key={index}
              className="relative inline-block transition-all duration-100"
              style={{
                backgroundColor:
                  isHighlighting && index < highlightProgress
                    ? "rgba(241, 245, 249, 0.15)"
                    : "transparent",
              }}
            >
              {char === " " ? "\u00A0" : char}
              {/* Underline that grows with typing */}
              <span
                className="absolute bottom-0 left-0 right-0 h-px bg-slate-400/60 transition-all duration-100"
                style={{
                  transform: phase === "typing" ? "scaleX(1)" : "scaleX(1)",
                  transformOrigin: "left",
                }}
              />
            </span>
          ))}
          
          {/* Smooth fading cursor */}
          <span
            className="inline-block w-0.5 h-6 md:h-7 lg:h-8 bg-slate-300 ml-1 transition-opacity duration-300"
            style={{
              opacity: cursorVisible ? 1 : 0.2,
              verticalAlign: "-0.1em",
            }}
          />
        </span>
      </div>
    </div>
  )
}


