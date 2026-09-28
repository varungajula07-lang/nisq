'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TelemetryNode {
  id: string
  label: string
  sub: string
  status: string
  x: string // percentage
  y: string // percentage
}

const TELEMETRY_NODES: TelemetryNode[] = [
  {
    id: 'node-1',
    label: 'Perimeter Sentinel',
    sub: 'Continuous Ingestion & Surface Mapping',
    status: 'OPTIMAL (0.02ms)',
    x: '38%',
    y: '28%',
  },
  {
    id: 'node-2',
    label: 'Neural Anomaly Engine',
    sub: 'Predictive Threat Pattern Recognition',
    status: 'ARMED // 99.98%',
    x: '64%',
    y: '42%',
  },
  {
    id: 'node-3',
    label: 'Quantum-Safe Posture',
    sub: 'Cryptographic Resilience Index',
    status: 'EVALUATED // SECURE',
    x: '52%',
    y: '72%',
  },
]

export default function CinematicHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [activeNode, setActiveNode] = useState<TelemetryNode | null>(null)
  const [radarDrawerOpen, setRadarDrawerOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  // Gentle mouse parallax on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x, y })
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#05070a] overflow-hidden flex flex-col justify-between pt-24 pb-8 sm:pb-12"
      aria-label="NISQ Vanguard Hero Section"
    >
      {/* 1. ATMOSPHERIC BACKGROUND LAYERS */}

      {/* Deep forest tone gradients */}
      <div className="absolute inset-0 bg-radial from-[#0a0f1d] via-[#05070a] to-[#020305] opacity-90 pointer-events-none" />

      {/* Atmospheric Violet / Purple futuristic glow behind wolf */}
      <div
        className="absolute top-1/4 right-0 lg:right-1/6 w-[35rem] h-[35rem] md:w-[50rem] md:h-[50rem] rounded-full bg-violet-600/15 blur-[130px] pointer-events-none animate-violet-breath"
        style={{
          transform: `translate3d(${mousePos.x * 25}px, ${mousePos.y * 25}px, 0)`,
        }}
      />

      {/* Warm Golden / Orange Sunlight volumetric ray reflection matching the wolf fur rim lighting */}
      <div
        className="absolute -top-20 right-10 md:right-1/4 w-[28rem] h-[45rem] bg-gradient-to-b from-amber-400/10 via-orange-500/5 to-transparent blur-[80px] pointer-events-none animate-ray-shift"
        style={{
          transform: `rotate(-20deg) translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0)`,
        }}
      />

      {/* Deep Cybernetic Violet ambient cone */}
      <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-indigo-900/20 blur-[140px] pointer-events-none" />

      {/* Subtle Film Grain Texture */}
      <div className="absolute inset-0 grain-overlay pointer-events-none z-10" />

      {/* Fine Coordinate Grid & Technical Hairlines */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
        <div className="absolute top-28 left-8 sm:left-14 flex items-center gap-3 text-[10px] font-mono text-slate-400 uppercase tracking-[0.25em]">
          <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
          <span>SYS.LAT // 09°04&apos;N</span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="hidden sm:inline">SECTOR: CYBER DEFENSE // LIVE</span>
        </div>
        <div className="absolute top-28 right-8 sm:right-14 text-right text-[10px] font-mono text-slate-400 uppercase tracking-[0.25em]">
          <span>POSTURE VIGILANCE: ARMED</span>
        </div>
        {/* Subtle decorative grid lines */}
        <div className="absolute left-8 sm:left-14 top-36 bottom-20 w-px bg-gradient-to-b from-slate-800/40 via-slate-800/15 to-transparent hidden lg:block" />
        <div className="absolute right-8 sm:right-14 top-36 bottom-20 w-px bg-gradient-to-b from-slate-800/40 via-slate-800/15 to-transparent hidden lg:block" />
      </div>

      {/* 2. OVERSIZED EDITORIAL BRAND TYPOGRAPHY (Layered with Depth) */}
      {/* Inspired by the oversized "Dominic" style in the reference: Massive, Editorial, Integrated with the image */}
      <div
        className="absolute inset-x-0 top-24 sm:top-28 lg:top-20 z-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{
          transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * -12}px, 0)`,
        }}
      >
        <div className="w-full text-center px-4">
          <span className="block font-cinzel text-[13vw] sm:text-[14vw] lg:text-[13.5vw] font-bold tracking-[0.16em] sm:tracking-[0.22em] leading-none uppercase monumental-text drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] opacity-90">
            NISQ
          </span>
          <span className="block font-cinzel text-[8.5vw] sm:text-[9.5vw] lg:text-[9vw] font-semibold tracking-[0.24em] sm:tracking-[0.28em] leading-[0.8] uppercase monumental-text -mt-2 sm:-mt-6 lg:-mt-10 opacity-75">
            VANGUARD
          </span>
        </div>
      </div>

      {/* 3. HERO WOLF VISUAL SUBJECT (Artistically blended, central visual anchor) */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-4 sm:mt-8 lg:mt-0"
      >
        {/* Left Column: Bold Editorial Narrative Hierarchy */}
        <div className="w-full lg:w-[54%] max-w-2xl relative z-20 pt-6 sm:pt-10 lg:pt-0">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-violet-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(139,92,246,0.15)] group hover:border-violet-400/60 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-mono font-medium tracking-[0.2em] uppercase text-cyan-300">
              AI-POWERED CYBER RISK INTELLIGENCE
            </span>
          </div>

          {/* Short, Powerful Headline */}
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-6">
            See the Threats{' '}
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-violet-200 to-amber-200/90 font-cinzel">
              Before They Become Risks.
            </span>
          </h1>

          {/* Concise, authoritative supporting paragraph */}
          <p className="font-sans text-base sm:text-lg text-slate-300/90 leading-relaxed font-light mb-8 sm:mb-10 max-w-xl">
            NISQ Vanguard provides organizations with intelligent visibility into their cyber risk,
            threats, and security posture. Powered by autonomous predictive modeling, we transform
            opaque vulnerabilities into real-time defensive awareness.
          </p>

          {/* Call to Action Group (Refined Orange-to-Purple accent treatment) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            {/* Primary CTA with refined Orange-to-Purple accent border & subtle glow */}
            <Link
              href="#explore"
              className="group relative inline-flex items-center justify-center p-[1.5px] rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-violet-400/50 shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_40px_rgba(217,70,239,0.35)] transition-all duration-300"
            >
              {/* Refined Orange-to-Purple accent border gradient */}
              <span className="absolute inset-0 cta-shimmer-border rounded-xl" />

              {/* Obsidian Glass Interior */}
              <span className="relative w-full sm:w-auto px-7 py-3.5 rounded-[11px] bg-[#070a11] hover:bg-[#0a0f1b] transition-all duration-300 flex items-center justify-center gap-3">
                <span className="font-sans text-sm font-semibold tracking-wide text-white group-hover:text-amber-100 transition-colors">
                  Explore NISQ Vanguard
                </span>
                <span className="text-amber-400 group-hover:translate-x-1 group-hover:text-orange-300 transition-all duration-300 text-base">
                  →
                </span>
              </span>
            </Link>

            {/* Optional Secondary Text Link */}
            <button
              onClick={() => setRadarDrawerOpen(true)}
              className="group inline-flex items-center justify-center gap-2 px-3 py-3 text-sm font-mono tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span className="relative">
                Explore the Platform
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-gradient-to-r from-orange-400 to-violet-400 group-hover:w-full transition-all duration-300" />
              </span>
              <span className="text-violet-400 group-hover:translate-x-1.5 transition-transform duration-300">
                →
              </span>
            </button>
          </div>

          {/* Quick Real-Time Posture Metric Indicators */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-800/60 grid grid-cols-3 gap-4 text-left">
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400 mb-1">
                Risk Posture
              </span>
              <span className="font-mono text-sm sm:text-base font-semibold text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Vigilant
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400 mb-1">
                Detection Speed
              </span>
              <span className="font-mono text-sm sm:text-base font-semibold text-cyan-300">
                &lt; 12ms
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400 mb-1">
                Threat Surface
              </span>
              <span className="font-mono text-sm sm:text-base font-semibold text-violet-300">
                Continuous
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Large Cinematic Wolf Subject Visual */}
        {/* The wolf symbolizes vigilance, intelligence, awareness, and protection */}
        <div className="w-full lg:w-[46%] relative flex items-center justify-center mt-4 lg:mt-0">
          {/* Subtle Ambient Violet Halo behind the wolf body */}
          <div className="absolute inset-0 m-auto w-4/5 h-4/5 rounded-full bg-violet-600/20 blur-[90px] pointer-events-none" />

          {/* Golden Amber Rim Ray highlight matching the forest sunlight */}
          <div className="absolute top-0 right-4 w-72 h-72 rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

          {/* Cinematic Image Container with Masked Vignette & Micro Breathing Animation */}
          <div
            className="relative w-full max-w-[560px] aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/11] rounded-2xl overflow-hidden group select-none shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-slate-800/40"
            style={{
              transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 10}px, 0)`,
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* The primary uploaded wolf image with 2K crisp resolution */}
            <div className="relative w-full h-full animate-wolf-breathe">
              <Image
                src="/wolf-hero-2k.webp"
                alt="NISQ Vanguard Sentinel Wolf — Symbol of Cyber Vigilance and AI Threat Intelligence"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center filter contrast-[1.08] brightness-[0.98]"
              />

              {/* Seamless atmospheric vignettes: fades into dark charcoal edges naturally */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/70 via-transparent to-[#05070a]/40" />
              <div className="absolute inset-0 bg-radial from-transparent via-[#05070a]/20 to-[#05070a]/80" />

              {/* Subtle Cyber Violet Ambient Lighting Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/25 via-transparent to-amber-500/15 mix-blend-screen pointer-events-none" />
            </div>

            {/* Interactive Telemetry Radar Nodes pinned over the visual */}
            {TELEMETRY_NODES.map((node) => (
              <div
                key={node.id}
                className="absolute z-30"
                style={{ top: node.y, left: node.x }}
              >
                <button
                  onClick={() => setActiveNode(activeNode?.id === node.id ? null : node)}
                  className="group relative flex items-center justify-center w-6 h-6 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  aria-label={`Inspect ${node.label}`}
                >
                  <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-violet-400 opacity-60" />
                  <span className="relative flex items-center justify-center w-3 h-3 rounded-full bg-slate-900 border border-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]">
                    <span className="w-1 h-1 rounded-full bg-cyan-300" />
                  </span>
                </button>

                {/* Node Tooltip */}
                {activeNode?.id === node.id && (
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-52 p-3 rounded-lg bg-slate-950/95 border border-violet-500/40 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between text-[9px] font-mono text-cyan-300 pb-1 mb-1 border-b border-slate-800">
                      <span>{node.status}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveNode(null)
                        }}
                        className="text-slate-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs font-semibold text-white">{node.label}</p>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{node.sub}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Bottom Visual Caption & Sentinel Badge */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between px-3.5 py-2 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800/80 text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-slate-200 font-medium">SENTINEL MODE // ACTIVE</span>
              </div>
              <span className="text-[10px] text-violet-400/90 tracking-widest hidden sm:inline">
                NEURAL RISK RADAR
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM EDITORIAL METRICS BAR */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 mt-10 lg:mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 px-6 rounded-2xl bg-slate-950/70 border border-slate-800/60 backdrop-blur-md shadow-lg">
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400">
              Perimeter Visibility
            </span>
            <p className="mt-1 text-xl sm:text-2xl font-bold font-syne text-white">99.98%</p>
            <p className="text-[11px] text-slate-400">Continuous surface scan</p>
          </div>
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400">
              Anomaly Detection
            </span>
            <p className="mt-1 text-xl sm:text-2xl font-bold font-syne text-cyan-300">&lt; 12ms</p>
            <p className="text-[11px] text-slate-400">Predictive neural classification</p>
          </div>
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400">
              Risk Surface
            </span>
            <p className="mt-1 text-xl sm:text-2xl font-bold font-syne text-violet-300">Zero Blindspot</p>
            <p className="text-[11px] text-slate-400">Multi-cloud & hybrid perimeter</p>
          </div>
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400">
              Autonomous Defense
            </span>
            <p className="mt-1 text-xl sm:text-2xl font-bold font-syne text-emerald-400">24 / 7 / 365</p>
            <p className="text-[11px] text-slate-400">Real-time threat containment</p>
          </div>
        </div>
      </div>

      {/* 5. INTERACTIVE THREAT RADAR OVERLAY MODAL */}
      {radarDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#090d16] border border-violet-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                <h3 className="font-cinzel text-lg font-bold text-white tracking-wider">
                  NISQ VANGUARD // THREAT INTELLIGENCE RADAR
                </h3>
              </div>
              <button
                onClick={() => setRadarDrawerOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4 font-mono text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-cyan-300 font-semibold mb-2">
                  <span>LIVE THREAT RADAR STATUS</span>
                  <span className="text-emerald-400">SYS.ONLINE</span>
                </div>
                <p className="font-sans text-slate-300 text-sm leading-relaxed">
                  The NISQ Vanguard engine performs autonomous threat telemetry across cloud clusters,
                  identity endpoints, and cryptographic assets.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400 text-[10px] uppercase">Attack Vector Exposure</span>
                  <p className="text-base font-bold text-emerald-400 mt-1">0.03% (Low)</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Isolated via neural boundary</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400 text-[10px] uppercase">Vigilance Index</span>
                  <p className="text-base font-bold text-cyan-300 mt-1">98.4 / 100</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Top-quartile posture readiness</p>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  onClick={() => setRadarDrawerOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  Close Radar
                </button>
                <Link
                  href="#explore"
                  onClick={() => setRadarDrawerOpen(false)}
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-orange-600 via-purple-600 to-violet-600 text-white font-semibold transition-all hover:opacity-95"
                >
                  Deploy Vanguard
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
