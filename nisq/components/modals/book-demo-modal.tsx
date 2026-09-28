'use client'

import { useState, type FormEvent } from 'react'
import { api, ApiError } from '@/lib/api'

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  if (!isOpen) return null

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setErrorMessage('')
    setSuccessMessage('')

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const org = formData.get('organization') as string
    const focus = formData.get('focus') as string
    const timeline = formData.get('timeline') as string
    const notes = (formData.get('notes') as string) || 'No additional notes provided.'

    const payload = {
      name,
      email,
      phone: '',
      subject: `[DEMO BOOKING] ${org} — ${focus}`,
      message: `[EXECUTIVE DEMONSTRATION INQUIRY]\nOrganization: ${org}\nPrimary Focus: ${focus}\nTarget Timeline: ${timeline}\n\nArchitecture & Specific Requirements:\n${notes}`,
    }

    try {
      await api.contact(payload)
      setSuccessMessage('Demo briefing request received. The Vanguard engineering team will reach out with calendar access.')
      event.currentTarget.reset()
      setTimeout(() => {
        setSuccessMessage('')
        onClose()
      }, 2500)
    } catch (err) {
      setErrorMessage(
        err instanceof ApiError ? err.message : 'Unable to schedule demo. Please try again or email hello@nisqvanguard.org.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#090d16] border border-violet-500/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(139,92,246,0.25)] overflow-hidden">
        {/* Subtle Ambient Violet/Amber Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-400" />
            </span>
            <div>
              <h2 className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white">
                SCHEDULE AN EXECUTIVE BRIEFING
              </h2>
              <p className="text-[11px] font-mono text-cyan-300/90 tracking-widest uppercase">
                EXPERIENCE THE NISQ VANGUARD CYBER RISK PLATFORM
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-mono text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 text-[11px] uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Dr. / Jane Doe"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 font-sans text-sm"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-[11px] uppercase tracking-wider mb-1.5">
                Work Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="jane@enterprise.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 font-sans text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 text-[11px] uppercase tracking-wider mb-1.5">
                Organization / Company
              </label>
              <input
                type="text"
                name="organization"
                required
                placeholder="Acme Global Security"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 font-sans text-sm"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-[11px] uppercase tracking-wider mb-1.5">
                Desired Timeline
              </label>
              <select
                name="timeline"
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 font-sans text-sm"
              >
                <option value="Immediate — Within 48 hours">Immediate — Within 48 hours</option>
                <option value="This Week">This Week</option>
                <option value="Next 2 Weeks">Next 2 Weeks</option>
                <option value="General Exploration">General Exploration</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-400 text-[11px] uppercase tracking-wider mb-1.5">
              Primary Capability Focus
            </label>
            <select
              name="focus"
              required
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 font-sans text-sm"
            >
              <option value="AI-Powered Threat Telemetry & Risk Visibility">
                AI-Powered Threat Telemetry & Risk Visibility
              </option>
              <option value="Sentinel Nexus Incident Response Engine">
                Sentinel Nexus Incident Response Engine
              </option>
              <option value="Post-Quantum Cryptographic Readiness">
                Post-Quantum Cryptographic Readiness
              </option>
              <option value="Autonomous Zero-Trust Perimeter Defense">
                Autonomous Zero-Trust Perimeter Defense
              </option>
              <option value="Interactive Defense Labs & Team Training">
                Interactive Defense Labs & Team Training
              </option>
            </select>
          </div>

          <div>
            <label className="block text-slate-400 text-[11px] uppercase tracking-wider mb-1.5">
              Infrastructure Scope & Specific Objectives (Optional)
            </label>
            <textarea
              name="notes"
              rows={3}
              placeholder="Tell us about your current hybrid cloud scale, attack surface challenges, or specific security compliance priorities..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 font-sans text-sm"
            />
          </div>

          {/* Feedback states */}
          {successMessage && (
            <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 font-mono text-xs flex items-center gap-2">
              <span>✓</span>
              <span>{successMessage}</span>
            </div>
          )}
          {errorMessage && (
            <div className="p-3 rounded-lg bg-rose-950/80 border border-rose-500/50 text-rose-300 font-mono text-xs flex items-center gap-2">
              <span>✕</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Footer Controls */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800">
            <span className="text-[10px] text-slate-400 font-mono">
              DIRECT INQUIRIES: hello@nisqvanguard.org
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-orange-600 to-purple-600 text-white font-semibold tracking-wider hover:opacity-95 disabled:opacity-50 transition-all shadow-[0_0_20px_rgba(249,115,22,0.35)] flex items-center justify-center gap-2"
              >
                {loading ? 'Confirming...' : 'Request Briefing →'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
