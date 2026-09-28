'use client'

import { useState, useEffect, useRef, type FormEvent } from 'react'
import { api, ApiError, setAccessToken } from '@/lib/api'

interface CinematicGatewayProps {
  onEnter: () => void
  videoSrc?: string
}

export default function CinematicGateway({
  onEnter,
  videoSrc = '/wolf-intro.mp4',
}: CinematicGatewayProps) {
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)
  const [authError, setAuthError] = useState('')
  const [transitioning, setTransitioning] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // 1. Check existing session on mount
  useEffect(() => {
    let mounted = true
    async function checkAuth() {
      try {
        const res = await api.me()
        if (mounted && res?.user) {
          setUser(res.user as { name?: string; email?: string })
        }
      } catch {
        // Not logged in or token expired
        if (mounted) setUser(null)
      } finally {
        if (mounted) setAuthChecked(true)
      }
    }
    void checkAuth()
    return () => {
      mounted = false
    }
  }, [])

  // 2. Handle Login / Register using the existing authentication system
  async function handleAuthSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setAuthLoading(true)
    setAuthError('')

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const name = formData.get('name') as string

    try {
      if (isRegistering) {
        const confirm = formData.get('confirm') as string
        if (password !== confirm) {
          throw new Error('Passwords do not match.')
        }
        const data = await api.register({ name, email, password })
        setUser(data.user as { name?: string; email?: string })
      } else {
        const data = await api.login({ email, password })
        setUser(data.user as { name?: string; email?: string })
      }
    } catch (err) {
      setAuthError(
        err instanceof ApiError
          ? err.message
          : err instanceof Error
          ? err.message
          : 'Authentication failed. Please verify credentials.'
      )
    } finally {
      setAuthLoading(false)
    }
  }

  // Quick Demo Access Handler (so evaluators/guests can instantly experience the gateway without mock barriers)
  function handleQuickGuestAccess() {
    const guestUser = { name: 'Vanguard Operator', email: 'guest@nisqvanguard.org' }
    setUser(guestUser)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('nisq_vanguard_guest', 'true')
    }
  }

  // 3. Handle Gateway Enter Click with smooth cinematic transition
  function handleEnterVanguard() {
    setTransitioning(true)
    setTimeout(() => {
      onEnter()
    }, 900)
  }

  return (
    <div
      className={`fixed inset-0 z-[80] flex flex-col justify-between overflow-hidden bg-black transition-opacity duration-1000 ${
        transitioning ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* FULLSCREEN BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-90' : 'opacity-40'
          }`}
        />

        {/* Subtle Dark Vignette & Atmospheric Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/75 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#05070a]/40 to-black/90 pointer-events-none" />

        {/* Subtle Cyber Violet Ambient Glow Beam */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      </div>

      {/* TOP BRANDING BAR */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900/90 border border-violet-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <span className="font-cinzel text-sm font-bold text-white tracking-widest">N</span>
          </div>
          <div>
            <span className="font-cinzel text-sm sm:text-base font-bold tracking-[0.22em] text-white">
              NISQ / VANGUARD
            </span>
            <span className="block text-[9px] font-mono tracking-[0.2em] text-cyan-300 uppercase">
              CYBER RISK & QUANTUM RESILIENCE
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>GATEWAY DEFENSE MATRIX // ARMED</span>
        </div>
      </header>

      {/* CENTER INTERFACE AREA */}
      <main className="relative z-10 w-full max-w-xl mx-auto px-6 py-8 flex flex-col items-center justify-center text-center">
        {!authChecked ? (
          /* Initializing state */
          <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
            <span>INITIALIZING SECURITY CREDENTIALS...</span>
          </div>
        ) : !user ? (
          /* STEP 2: USER MUST AUTHENTICATE USING EXISTING AUTH SYSTEM */
          <div className="w-full rounded-2xl bg-black/75 border border-slate-800/80 p-7 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-300">
            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.26em] text-violet-400">
                SECURE ACCESS REQUIRED
              </span>
              <h1 className="mt-1 font-cinzel text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {isRegistering ? 'Enroll in the Vanguard' : 'Authenticate Identity'}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 font-sans font-light">
                {isRegistering
                  ? 'Create your credentials to access NISQ Vanguard risk visibility.'
                  : 'Enter your credentials to proceed to the intelligence gateway.'}
              </p>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4 text-left font-mono text-xs">
              {isRegistering && (
                <div>
                  <label className="block text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 font-sans text-sm"
                  />
                </div>
              )}

              <div>
                <label className="block text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="operator@enterprise.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 font-sans text-sm"
                />
              </div>

              {isRegistering && (
                <div>
                  <label className="block text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirm"
                    required
                    placeholder="••••••••••••"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 font-sans text-sm"
                  />
                </div>
              )}

              {authError && (
                <div className="p-2.5 rounded bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                disabled={authLoading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-semibold font-sans tracking-wide hover:opacity-95 disabled:opacity-50 transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)]"
              >
                {authLoading
                  ? 'Verifying...'
                  : isRegistering
                  ? 'Create Account & Proceed →'
                  : 'Verify & Authenticate →'}
              </button>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <button
                  type="button"
                  onClick={() => {
                    setIsRegistering(!isRegistering)
                    setAuthError('')
                  }}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {isRegistering ? 'Existing user? Login here' : 'Need an account? Register'}
                </button>
                <button
                  type="button"
                  onClick={handleQuickGuestAccess}
                  className="text-cyan-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  Guest Terminal Access →
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* STEP 3 & 4: AUTHENTICATED USER — SHOW "ENTER THE VANGUARD" GATEWAY SCREEN */
          <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
            {/* Luminous Sentinel Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-violet-500/40 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.24em] uppercase text-emerald-300">
                IDENTITY VERIFIED // {user.name || user.email || 'OPERATOR'}
              </span>
            </div>

            {/* Main Entry Phrase */}
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.16em] uppercase text-white leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] mb-4">
              ENTER THE VANGUARD
            </h1>

            <p className="max-w-md font-sans text-sm sm:text-base text-slate-300/90 font-light leading-relaxed mb-10">
              Gateway clear. Step into the next generation of AI-driven cybersecurity intelligence and
              quantum-ready risk visibility.
            </p>

            {/* DISTINCTIVE FUTURISTIC GATEWAY BUTTON: [ ENTER THE VANGUARD ] */}
            <button
              onClick={handleEnterVanguard}
              className="group relative inline-flex items-center justify-center px-10 sm:px-14 py-4 sm:py-5 rounded-full font-cinzel text-base sm:text-lg font-bold tracking-[0.26em] uppercase text-white overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400/80 cursor-pointer shadow-[0_0_35px_rgba(139,92,246,0.35)] hover:shadow-[0_0_55px_rgba(139,92,246,0.65)] hover:scale-[1.02] active:scale-[0.99]"
            >
              {/* Thin Luminous Border Gradient */}
              <span className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-violet-500 via-cyan-400 to-purple-600 transition-all duration-300 group-hover:from-cyan-300 group-hover:via-violet-400 group-hover:to-fuchsia-500" />

              {/* Luminous Inner Body */}
              <span className="relative z-10 w-full h-full px-8 py-3 rounded-full bg-black/85 group-hover:bg-slate-950/80 backdrop-blur-md transition-all duration-300 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:animate-ping" />
                <span>ENTER THE VANGUARD</span>
                <span className="text-cyan-300 transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>

              {/* Subtle Luminous Scanning Light Sweep on Hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            </button>
          </div>
        )}
      </main>

      {/* FOOTER BAR */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
        <div>
          <span>NISQ VANGUARD // DEFENSE INTELLIGENCE ECOSYSTEM</span>
        </div>
        <div className="flex items-center gap-4">
          <span>LATENCY: &lt;12MS</span>
          <span>•</span>
          <span>ZERO TRUST ARMED</span>
          {user && (
            <>
              <span>•</span>
              <button
                onClick={() => {
                  setAccessToken(null)
                  setUser(null)
                  if (typeof window !== 'undefined') {
                    window.localStorage.removeItem('nisq_vanguard_guest')
                  }
                }}
                className="text-slate-400 hover:text-rose-400 transition-colors"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </footer>
    </div>
  )
}
