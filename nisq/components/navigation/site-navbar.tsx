'use client'

import { useState } from 'react'
import Link from 'next/link'

interface SiteNavbarProps {
  onOpenThreatModal: () => void
  onOpenDemoModal: () => void
  onReplayGateway?: () => void
  currentPath?: string
}

export default function SiteNavbar({
  onOpenThreatModal,
  onOpenDemoModal,
  onReplayGateway,
  currentPath = '/',
}: SiteNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Labs', href: '/labs' },
    { label: 'Research', href: '/research' },
    { label: 'AI Co-Pilot', href: '/copilot' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-[#05070a]/80 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/90 border border-violet-500/40 group-hover:border-violet-400/80 transition-colors shadow-[0_0_15px_rgba(139,92,246,0.25)]">
            <span className="font-cinzel text-sm font-bold text-white tracking-wider">N</span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse ring-2 ring-[#05070a]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-cinzel text-base tracking-[0.2em] font-semibold text-white group-hover:text-violet-200 transition-colors">
                NISQ
              </span>
              <span className="text-[10px] text-violet-400/80 font-mono tracking-widest">/</span>
              <span className="font-sans text-xs tracking-[0.22em] uppercase font-light text-slate-300 group-hover:text-white transition-colors">
                VANGUARD
              </span>
            </div>
            <span className="text-[9px] font-mono tracking-[0.16em] text-slate-400 uppercase hidden sm:block">
              Cyber Risk Intelligence
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-[0.18em] text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-white transition-colors relative py-1 ${
                currentPath === link.href ? 'text-cyan-300 font-semibold' : ''
              }`}
            >
              {link.label}
              {currentPath === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {onReplayGateway && (
            <button
              onClick={onReplayGateway}
              title="Replay cinematic gateway video"
              className="px-3 py-1.5 rounded-full border border-slate-800 text-[10px] font-mono text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            >
              Gateway ↻
            </button>
          )}

          {/* Primary Action Button: REPORT A THREAT */}
          <button
            onClick={onOpenThreatModal}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider text-rose-200 bg-rose-950/40 border border-rose-500/50 hover:border-rose-400 hover:bg-rose-900/50 hover:text-white transition-all shadow-[0_0_15px_rgba(244,63,94,0.2)] cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            <span>Report Threat</span>
          </button>

          {/* Secondary Action: Book Demo */}
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono tracking-wider text-slate-300 bg-slate-900/80 border border-slate-700/60 hover:border-violet-400 hover:text-white transition-all cursor-pointer"
          >
            <span>Book Demo</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
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
        <div className="lg:hidden border-t border-slate-800/80 bg-[#05070a]/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 pb-3 border-b border-slate-800">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>NISQ VANGUARD PLATFORM</span>
            </span>
            {onReplayGateway && (
              <button
                onClick={() => {
                  setMobileOpen(false)
                  onReplayGateway()
                }}
                className="text-slate-400 hover:text-white"
              >
                Replay Gateway ↻
              </button>
            )}
          </div>

          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-widest text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setMobileOpen(false)
                onOpenThreatModal()
              }}
              className="py-2.5 rounded-lg bg-rose-600/90 text-white font-mono text-xs uppercase tracking-wider text-center"
            >
              Report Threat
            </button>
            <button
              onClick={() => {
                setMobileOpen(false)
                onOpenDemoModal()
              }}
              className="py-2.5 rounded-lg bg-violet-600/90 text-white font-mono text-xs uppercase tracking-wider text-center"
            >
              Book Demo
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
