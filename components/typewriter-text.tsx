"use client"

import { useEffect, useState } from "react"

const phrases = [
  "Workflow automation",
  "Proposal development",
  "Presentation generation",
  "Knowledge retrieval",
  "Market research"
]

type AnimationPhase = "typing" | "waiting" | "highlighting" | "deleting" | "retracting"

export function TypewriterText() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [phase, setPhase] = useState<AnimationPhase>("typing")
  const [highlightProgress, setHighlightProgress] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [retractPosition, setRetractPosition] = useState(0)
  const [originalLength, setOriginalLength] = useState(0)
  const [originalText, setOriginalText] = useState("")

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
        const len = displayText.length
        setOriginalLength(len)
        setOriginalText(displayText)
        setRetractPosition(len)
        setDisplayText("")
        setHighlightProgress(0)
        setPhase("retracting")
      }, 300)
      return () => clearTimeout(timeout)
    }

    if (phase === "retracting") {
      if (retractPosition > 0) {
        // Smooth bell curve speed - gentle throughout
        const progress = retractPosition / originalLength
        const normalizedProgress = progress - 0.5 // -0.5 to 0.5
        
        // Gentler bell curve using cubic function for smoother transitions
        const bellCurveMultiplier = 1 - Math.pow(Math.abs(normalizedProgress * 2), 1.5) // Smoother curve
        
        // Extra slowdown at the very end (last 20%)
        let endSlowdownMultiplier = 1
        if (progress < 0.2) {
          endSlowdownMultiplier = 1 + (0.2 - progress) * 3 // Progressively slower at end
        }
        
        const minDelay = 35 // Slower middle speed
        const maxDelay = 90 // Slower edges
        const delay = (maxDelay - (bellCurveMultiplier * (maxDelay - minDelay))) * endSlowdownMultiplier
        
        const timeout = setTimeout(() => {
          setRetractPosition((prev) => prev - 1)
        }, delay)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          setPhase("typing")
        }, 200)
        return () => clearTimeout(timeout)
      }
    }
  }, [displayText.length, phase, currentPhraseIndex, highlightProgress, retractPosition, originalLength, originalText])

  const isHighlighting = phase === "highlighting"
  const isRetracting = phase === "retracting"

  return (
    <div className="flex flex-col items-start gap-2">
      {/* Static text line */}
      <div className="text-xl md:text-2xl lg:text-3xl text-slate-300 leading-relaxed font-normal">
        Lunon, your secure AI hub for
      </div>
      
      {/* Animated phrase line */}
      <div className="relative min-h-[2.5rem] flex items-center">
        <span className="relative text-slate-100 font-normal text-xl md:text-2xl lg:text-3xl whitespace-pre inline-block">
          {/* Container for text - maintains width during retraction */}
          <span className="relative inline-block" style={{ paddingBottom: '4px' }}>
            {/* The actual text with individual character styling */}
            {!isRetracting && (
              <span className="inline-block">
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
                  </span>
                ))}
              </span>
            )}
            
            {/* Invisible spacer to maintain width during retraction - uses exact original text */}
            {isRetracting && (
              <span className="inline-block opacity-0" aria-hidden="true">
                {originalText.split("").map((char, i) => (
                  <span key={i}>{char === " " ? "\u00A0" : char}</span>
                ))}
              </span>
            )}
            
            {/* Single continuous underline - always at same fixed position */}
            <span
              className="absolute left-0 h-[2px] bg-slate-400/60"
              style={{
                bottom: '2px',
                width: isRetracting ? `${(retractPosition / originalLength) * 100}%` : '100%',
                transition: isRetracting ? 'width 30ms linear' : 'width 100ms ease-out',
              }}
            />
          </span>
          
          {/* Smooth fading cursor */}
          <span
            className="w-0.5 h-6 md:h-7 lg:h-8 bg-slate-300"
            style={{
              opacity: cursorVisible ? 1 : 0.2,
              verticalAlign: "-0.15em",
              display: 'inline-block',
              marginLeft: isRetracting ? `calc(${(retractPosition / originalLength) * 100}% + 0.25rem)` : '0.25rem',
              position: isRetracting ? 'absolute' : 'relative',
              left: isRetracting ? '0' : 'auto',
              transition: isRetracting ? 'margin-left 30ms linear, opacity 300ms' : 'opacity 300ms',
            }}
          />
        </span>
      </div>
    </div>
  )
}


