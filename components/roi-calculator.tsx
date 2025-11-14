"use client"

import { useState } from "react"

export function ROICalculator() {
  const [totalEmployees, setTotalEmployees] = useState(100)
  const [adoptionRate, setAdoptionRate] = useState(80)
  const [hourlyRate, setHourlyRate] = useState(60)
  const [queriesPerDay, setQueriesPerDay] = useState<number | ''>(4)
  const [minutesSavedPerQuery, setMinutesSavedPerQuery] = useState<number | ''>(10)
  const [searchesPerDay, setSearchesPerDay] = useState<number | ''>(2)
  const [minutesSavedPerSearch, setMinutesSavedPerSearch] = useState<number | ''>(5)

  // Calculations
  const activeUsers = Math.round(totalEmployees * (adoptionRate / 100))
  const dailyTimeSavings = 
    ((Number(queriesPerDay) || 0) * (Number(minutesSavedPerQuery) || 0) + (Number(searchesPerDay) || 0) * (Number(minutesSavedPerSearch) || 0)) / 60
  
  const workDaysPerYear = 250
  const annualSavings = 
    activeUsers * dailyTimeSavings * hourlyRate * workDaysPerYear

  return (
    <section className="py-16 md:py-24 border-b border-slate-700/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-left mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-green-400">Start saving today</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Calculate Your ROI
            </h2>
            <p className="text-slate-400 text-lg">See how much your team could save with Lunon</p>
          </div>

          {/* Calculator Container */}
          <div className="grid lg:grid-cols-[1fr_auto_380px] grid-rows-[1fr_auto] rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto border border-slate-700/50 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl">
            {/* Left Panel - Sliders */}
            <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-10">
              {/* Total Employees */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Total Employees</label>
                  <span className="text-sm text-slate-900 font-medium">{totalEmployees}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="5"
                  value={totalEmployees}
                  onChange={(e) => setTotalEmployees(Number(e.target.value))}
                  className="w-full appearance-none cursor-pointer slider"
                  style={{ '--slider-progress': `${((totalEmployees - 10) / (1000 - 10)) * 100}%` } as React.CSSProperties}
                />
              </div>

              {/* Adoption Rate */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Adoption Rate</label>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-slate-900 font-medium">{adoptionRate}</span>
                    <span className="text-sm text-slate-600">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={adoptionRate}
                  onChange={(e) => setAdoptionRate(Number(e.target.value))}
                  className="w-full appearance-none cursor-pointer slider"
                  style={{ '--slider-progress': `${(adoptionRate / 100) * 100}%` } as React.CSSProperties}
                />
              </div>

              {/* Hourly Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Hourly Rate</label>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-slate-600">$</span>
                    <span className="text-sm text-slate-900 font-medium">{hourlyRate}</span>
                    <span className="text-sm text-slate-600">/hr</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="20"
                  max="300"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full appearance-none cursor-pointer slider"
                  style={{ '--slider-progress': `${((hourlyRate - 20) / (300 - 20)) * 100}%` } as React.CSSProperties}
                />
              </div>
            </div>

            {/* Middle Panel - Metrics */}
            <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-10 border-l border-slate-200/50">
              {/* Answer Generation */}
              <div className="mb-6">
                <div className="grid grid-cols-[140px_auto_1fr] gap-x-4 gap-y-2 items-start">
                  <h3 className="text-sm font-semibold text-slate-900 row-span-2 pt-1.5">Answer Generation</h3>
                  <input
                    type="number"
                    value={queriesPerDay === '' ? '' : queriesPerDay}
                    onChange={(e) => setQueriesPerDay(e.target.value === '' ? '' : Number(e.target.value))}
                    onFocus={(e) => e.target.select()}
                    onBlur={(e) => { if (e.target.value === '') setQueriesPerDay(0) }}
                    placeholder="0"
                    className="w-8 text-center border-0 border-b-2 border-slate-300 bg-transparent px-1 py-1 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-600 placeholder:text-slate-900"
                  />
                  <span className="text-xs text-slate-600 pt-2">queries per day</span>
                  <input
                    type="number"
                    value={minutesSavedPerQuery === '' ? '' : minutesSavedPerQuery}
                    onChange={(e) => setMinutesSavedPerQuery(e.target.value === '' ? '' : Number(e.target.value))}
                    onFocus={(e) => e.target.select()}
                    onBlur={(e) => { if (e.target.value === '') setMinutesSavedPerQuery(0) }}
                    placeholder="0"
                    className="w-8 text-center border-0 border-b-2 border-slate-300 bg-transparent px-1 py-1 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-600 placeholder:text-slate-900 col-start-2"
                  />
                  <span className="text-xs text-slate-600 pt-2">minutes saved per query</span>
                </div>
              </div>

              {/* Knowledge Retrieval */}
              <div className="mb-6">
                <div className="grid grid-cols-[140px_auto_1fr] gap-x-4 gap-y-2 items-start">
                  <h3 className="text-sm font-semibold text-slate-900 row-span-2 pt-1.5">Knowledge Retrieval</h3>
                  <input
                    type="number"
                    value={searchesPerDay === '' ? '' : searchesPerDay}
                    onChange={(e) => setSearchesPerDay(e.target.value === '' ? '' : Number(e.target.value))}
                    onFocus={(e) => e.target.select()}
                    onBlur={(e) => { if (e.target.value === '') setSearchesPerDay(0) }}
                    placeholder="0"
                    className="w-8 text-center border-0 border-b-2 border-slate-300 bg-transparent px-1 py-1 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-600 placeholder:text-slate-900"
                  />
                  <span className="text-xs text-slate-600 pt-2">searches per day</span>
                  <input
                    type="number"
                    value={minutesSavedPerSearch === '' ? '' : minutesSavedPerSearch}
                    onChange={(e) => setMinutesSavedPerSearch(e.target.value === '' ? '' : Number(e.target.value))}
                    onFocus={(e) => e.target.select()}
                    onBlur={(e) => { if (e.target.value === '') setMinutesSavedPerSearch(0) }}
                    placeholder="0"
                    className="w-8 text-center border-0 border-b-2 border-slate-300 bg-transparent px-1 py-1 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-600 placeholder:text-slate-900 col-start-2"
                  />
                  <span className="text-xs text-slate-600 pt-2">minutes saved per search</span>
                </div>
              </div>

              {/* Daily Time Savings */}
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Daily Time Savings</h3>
                    <p className="text-sm text-slate-900">per User</p>
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-900 font-bold text-base">{dailyTimeSavings.toFixed(1)}</span>
                    <span className="text-slate-600 ml-1">hours per working day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Results (spans all rows) */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 lg:p-10 flex flex-col justify-between row-span-2 relative overflow-hidden">
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
              
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white via-green-50 to-green-100 bg-clip-text text-transparent mb-3">
                  ${annualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-slate-300 text-lg font-medium mb-1">saved per year</div>
              </div>
              
              <div className="text-slate-400 text-xs leading-relaxed relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Based on estimated pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>For {activeUsers} users</span>
                </div>
              </div>
            </div>

            {/* Bottom row - CTA section spanning left two columns */}
            <div className="bg-gradient-to-r from-white/95 to-slate-50/95 backdrop-blur-sm border-t border-slate-200/50 p-6 lg:col-span-2 flex items-center justify-between">
              <p className="text-slate-700 text-sm font-medium">
                Unlock Generative AI and productivity for your team
              </p>
              <button 
                onClick={() => window.location.href = "/demo"}
                className="glare-button bg-slate-50 text-slate-900 px-8 py-3 text-base font-semibold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:bg-slate-200 border border-slate-200 hover:border-slate-400 cursor-pointer"
                style={{
                  '--gh-rgba': 'rgba(30, 41, 59, 0.4)',
                  '--gh-angle': '-45deg',
                  '--gh-size': '200%',
                  '--gh-duration': '1000ms'
                } as React.CSSProperties}
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

