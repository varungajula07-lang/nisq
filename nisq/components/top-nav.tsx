'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#05070a]/70 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/90 border border-violet-500/30 group-hover:border-violet-400/60 transition-colors shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <span className="font-cinzel text-sm font-bold text-white tracking-wider">N</span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse ring-2 ring-[#05070a]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-cinzel text-base tracking-[0.18em] font-semibold text-white group-hover:text-violet-200 transition-colors">
                NISQ
              </span>
              <span className="text-[10px] text-violet-400/70 font-mono tracking-widest">/</span>
              <span className="font-sans text-xs tracking-[0.22em] uppercase font-light text-slate-400 group-hover:text-slate-200 transition-colors">
                VANGUARD
              </span>
            </div>
            <span className="text-[9px] font-mono tracking-[0.16em] text-slate-400 uppercase hidden sm:block">
              Cyber Risk Intelligence
            </span>
          </div>
        </Link>

        {/* Center Telemetry Status */}
        <div className="hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-[11px] font-mono text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-slate-300">TELEMETRY:</span>
          <span className="text-cyan-300 font-medium">REAL-TIME VISIBILITY</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">DEFCON 5 ARMED</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-[0.18em] text-slate-300">
          <Link href="#platform" className="hover:text-white transition-colors">
            Platform
          </Link>
          <Link href="#intelligence" className="hover:text-white transition-colors">
            Intelligence
          </Link>
          <Link href="#threat-matrix" className="hover:text-white transition-colors">
            Threat Radar
          </Link>
          <Link href="#posture" className="hover:text-white transition-colors">
            Risk Posture
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="#explore"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider text-slate-200 bg-slate-900/80 border border-slate-700/60 hover:border-violet-500/50 hover:bg-slate-850 hover:text-white transition-all shadow-sm"
          >
            <span>Request Access</span>
            <span className="text-violet-400 group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-[#05070a]/95 backdrop-blur-xl px-6 py-6 space-y-4">
          <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 pb-3 border-b border-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>AI RISK VISIBILITY PLATFORM ACTIVE</span>
          </div>
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-widest text-slate-300">
            <Link
              href="#platform"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-cyan-300"
            >
              Platform
            </Link>
            <Link
              href="#intelligence"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-cyan-300"
            >
              Intelligence
            </Link>
            <Link
              href="#threat-matrix"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-cyan-300"
            >
              Threat Radar
            </Link>
            <Link
              href="#posture"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-cyan-300"
            >
              Risk Posture
            </Link>
          </div>
          <div className="pt-2">
            <Link
              href="#explore"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex justify-center items-center py-2.5 rounded-lg bg-gradient-to-r from-orange-600 via-purple-600 to-violet-600 text-white font-mono text-xs uppercase tracking-wider"
            >
              Request Access
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
