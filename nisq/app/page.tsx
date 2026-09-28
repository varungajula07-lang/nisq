import TopNav from '@/components/top-nav'
import CinematicHero from '@/components/cinematic-hero'
import TelemetryStrip from '@/components/telemetry-strip'
import Link from 'next/link'

export default function Home() {
  const capabilities = [
    {
      code: 'CAP-01',
      title: 'Autonomous Threat Visibility',
      description:
        'Continuous AI-driven discovery across cloud infrastructure, endpoints, and identity vectors to eliminate blindspots before adversaries exploit them.',
      badge: 'Neural Telemetry',
    },
    {
      code: 'CAP-02',
      title: 'Predictive Cyber Risk Modeling',
      description:
        'Quantifies organizational exposure in real-time, prioritizing remediation paths based on threat actor velocity and business impact.',
      badge: 'Dynamic Scoring',
    },
    {
      code: 'CAP-03',
      title: 'Real-Time Posture Awareness',
      description:
        'Consolidates fragmented telemetry into a unified command surface with sub-15ms anomaly detection and autonomous containment protocols.',
      badge: 'Zero Trust Guard',
    },
    {
      code: 'CAP-04',
      title: 'Quantum-Safe Defense Readiness',
      description:
        'Audits cryptographic posture across high-value data paths to ensure immediate resilience against emerging quantum decryption vectors.',
      badge: 'Post-Quantum Prep',
    },
  ]

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 flex flex-col selection:bg-violet-600/40 selection:text-white">
      {/* 1. Sleek Editorial Navigation */}
      <TopNav />

      <main className="flex-1 flex flex-col">
        {/* 2. Master Cinematic Hero with Wolf Visual & Oversized Typography */}
        <CinematicHero />

        {/* 3. Real-time Telemetry Strip */}
        <TelemetryStrip />

        {/* 4. Strategic Cyber Intelligence Architecture Section */}
        <section id="platform" className="relative py-28 px-5 sm:px-8 border-b border-slate-800/60 overflow-hidden">
          {/* Subtle Ambient Violet Backdrop Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[30rem] bg-violet-900/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Eyebrow & Editorial Title */}
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono tracking-[0.2em] uppercase text-cyan-300 mb-4">
                <span>// CAPABILITIES MATRIX</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Vigilance Engineered for the Unseen.
              </h2>
              <p className="mt-4 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
                Traditional cybersecurity reacts to breaches after damage is underway. NISQ Vanguard
                operates as a predictive intelligence layer, continuously modeling attack paths and
                providing decision-makers with uncompromised clarity.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap) => (
                <div
                  key={cap.code}
                  className="group relative p-7 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 p-6 font-mono text-[10px] text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {cap.code}
                  </div>

                  <div>
                    <span className="inline-block px-2.5 py-1 rounded text-[10px] font-mono tracking-wider text-violet-300 bg-violet-950/40 border border-violet-800/40 mb-5">
                      {cap.badge}
                    </span>
                    <h3 className="font-cinzel text-lg font-semibold text-white group-hover:text-violet-200 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-850 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                    <span>Explore Protocol</span>
                    <span className="text-violet-400 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Autonomous Security Posture Console Banner */}
        <section id="intelligence" className="relative py-24 px-5 sm:px-8 bg-slate-950/50 border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>INTELLIGENCE IN MOTION</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white leading-tight">
                From Raw Telemetry to Decisive Defense.
              </h2>
              <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                Modern enterprise perimeters are borderless and hyper-distributed. NISQ Vanguard
                ingests signals across hybrid cloud, API layers, and identity graphs, producing an
                adversary-centric visibility map updated with each micro-second.
              </p>
              <div className="space-y-3 font-mono text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  <span>Autonomous anomaly correlation across heterogeneous clouds</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  <span>Pre-exploit risk vector quantification and remediation blueprints</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  <span>Zero-day posture resilience with self-adapting defensive barriers</span>
                </div>
              </div>
            </div>

            {/* Tactical Telemetry Mock Terminal */}
            <div className="lg:col-span-7 rounded-2xl bg-[#090d16] border border-slate-800 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-300 font-semibold">VANGUARD_TELEMETRY_ENGINE.SH</span>
                </div>
                <span className="text-cyan-400 text-[11px] animate-pulse">● LIVE_FEED</span>
              </div>

              <div className="mt-5 space-y-3 font-mono text-xs text-slate-300">
                <div className="p-3 rounded bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">[0.002s] INGESTING GLOBAL THREAT VECTORS</span>
                  <span className="text-emerald-400">OK // 42,910 TPS</span>
                </div>
                <div className="p-3 rounded bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">[0.007s] POSTURE RESILIENCE EVALUATION</span>
                  <span className="text-cyan-300">SCORE: 98.4 // SECURE</span>
                </div>
                <div className="p-3 rounded bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">[0.011s] UNKNOWN BEACON DETECTED ON PORT 8443</span>
                  <span className="text-amber-400">ISOLATED BY SENTINEL</span>
                </div>
                <div className="p-3 rounded bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">[0.014s] POST-QUANTUM KEY ROTATION STATUS</span>
                  <span className="text-violet-400">COMPLIANT (CRYSTALS-Kyber)</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">THREAT DEFENSE MATRIX: ARMED</span>
                <span className="text-cyan-300 font-semibold">LATENCY: 11.8ms</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Closing Editorial Call to Action */}
        <section id="explore" className="relative py-28 px-5 sm:px-8 overflow-hidden text-center">
          {/* Subtle Orange-Violet Glow Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[25rem] bg-gradient-to-r from-orange-500/10 via-purple-600/15 to-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs font-mono tracking-[0.24em] text-orange-400 uppercase">
              VIGILANCE AT ENTERPRISE SCALE
            </span>
            <h2 className="mt-4 font-cinzel text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to See Beyond Your Perimeter?
            </h2>
            <p className="mt-5 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
              Equip your security leadership with continuous threat intelligence and predictive
              visibility. Request an executive briefing with the NISQ Vanguard engineering team.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="mailto:hello@nisqvanguard.org"
                className="group relative inline-flex items-center justify-center p-[1.5px] rounded-xl overflow-hidden focus:outline-none shadow-[0_0_35px_rgba(249,115,22,0.3)] hover:shadow-[0_0_45px_rgba(217,70,239,0.4)] transition-all"
              >
                <span className="absolute inset-0 cta-shimmer-border rounded-xl" />
                <span className="relative px-8 py-4 rounded-[11px] bg-[#070a11] hover:bg-[#0a0f1b] transition-all flex items-center gap-3">
                  <span className="font-sans text-sm font-semibold tracking-wide text-white">
                    Schedule Executive Briefing
                  </span>
                  <span className="text-amber-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>

              <Link
                href="mailto:hello@nisqvanguard.org"
                className="text-xs font-mono tracking-wider text-slate-400 hover:text-white transition-colors"
              >
                Inquiries: hello@nisqvanguard.org
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Minimalist Editorial Footer */}
      <footer className="border-t border-slate-800/60 bg-[#030508] py-12 px-5 sm:px-8 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-cinzel text-sm font-bold tracking-widest text-white">
              NISQ / VANGUARD
            </span>
            <span className="text-slate-600 font-mono text-xs">|</span>
            <span className="text-slate-400 font-mono text-xs">
              AI-Powered Cyber Risk Visibility
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <span>DEFCON GREEN</span>
            <span>SYSTEM MONITOR: NOMINAL</span>
            <span>© {new Date().getFullYear()} NISQ Vanguard</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
