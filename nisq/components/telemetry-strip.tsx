'use client'

export default function TelemetryStrip() {
  const metrics = [
    {
      label: 'Surface Visibility',
      value: '99.98%',
      sub: 'Multi-cloud & hybrid perimeter scan',
      color: 'text-cyan-300',
    },
    {
      label: 'Detection Latency',
      value: '< 12ms',
      sub: 'Predictive neural anomaly classification',
      color: 'text-violet-300',
    },
    {
      label: 'Cyber Posture',
      value: 'Continuous',
      sub: 'Real-time threat exposure index',
      color: 'text-amber-300',
    },
    {
      label: 'Autonomous Response',
      value: 'Active',
      sub: 'Adaptive isolation & containment protocol',
      color: 'text-emerald-300',
    },
  ]

  return (
    <div className="w-full border-y border-slate-800/60 bg-[#05070a]/90 backdrop-blur-md relative z-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800/60">
          {metrics.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col justify-center ${index > 0 ? 'pt-4 md:pt-0 md:pl-8' : ''}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-slate-400">
                  {item.label}
                </span>
              </div>
              <span className={`text-2xl lg:text-3xl font-bold font-syne tracking-tight ${item.color}`}>
                {item.value}
              </span>
              <span className="mt-1 text-xs text-slate-400 font-sans font-light leading-snug">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
