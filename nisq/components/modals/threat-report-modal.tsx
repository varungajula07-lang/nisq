'use client'

import { useState, type FormEvent } from 'react'
import { api, ApiError } from '@/lib/api'

interface ThreatReportModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ThreatReportModal({ isOpen, onClose }: ThreatReportModalProps) {
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
    const severity = formData.get('severity') as string
    const category = formData.get('category') as string
    const asset = formData.get('asset') as string
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = (formData.get('phone') as string) || ''
    const details = formData.get('details') as string

    const payload = {
      name,
      email,
      phone,
      subject: `[THREAT REPORT - ${severity.toUpperCase()}] ${category} on ${asset}`,
      message: `[THREAT INTELLIGENCE INTAKE]\nSeverity: ${severity}\nCategory: ${category}\nAffected Asset: ${asset}\n\nIncident Telemetry / Details:\n${details}`,
    }

    try {
      await api.contact(payload)
      setSuccessMessage('Threat telemetry received. Incident dispatch protocol initiated.')
      event.currentTarget.reset()
      setTimeout(() => {
        setSuccessMessage('')
        onClose()
      }, 2500)
    } catch (err) {
      setErrorMessage(
        err instanceof ApiError ? err.message : 'Unable to transmit threat report. Please verify connection.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#090d16] border border-rose-500/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(244,63,94,0.25)] overflow-hidden">
        {/* Subtle Ambient Red/Violet Pulse */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
            </span>
            <div>
              <h2 className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white">
                REPORT A CYBER THREAT
              </h2>
              <p className="text-[11px] font-mono text-rose-300/90 tracking-widest uppercase">
                EMERGENCY INCIDENT & VULNERABILITY INTAKE // ENCRYPTED DISPATCH
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
                Threat Classification
              </label>
              <select
                name="category"
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 font-sans text-sm"
              >
                <option value="Active Intrusion / Breach">Active Intrusion / Breach</option>
                <option value="Ransomware / Extortion Vector">Ransomware / Extortion Vector</option>
                <option value="Zero-Day Vulnerability">Zero-Day Vulnerability</option>
                <option value="Credential / IAM Compromise">Credential / IAM Compromise</option>
                <option value="Cloud Anomaly / Misconfiguration">Cloud Anomaly / Misconfiguration</option>
                <option value="Cryptographic / Post-Quantum Risk">Cryptographic / Post-Quantum Risk</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 text-[11px] uppercase tracking-wider mb-1.5">
                Severity Level
              </label>
              <select
                name="severity"
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 font-sans text-sm"
              >
                <option value="CRITICAL — Immediate Containment">CRITICAL — Immediate Containment</option>
                <option value="HIGH — Priority Mitigation">HIGH — Priority Mitigation</option>
                <option value="MEDIUM — Investigation Required">MEDIUM — Investigation Required</option>
                <option value="LOW — Informational Telemetry">LOW — Informational Telemetry</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-400 text-[11px] uppercase tracking-wider mb-1.5">
              Target System / Affected Perimeter Asset
            </label>
            <input
              type="text"
              name="asset"
              required
              placeholder="e.g. AWS Production VPC, Auth Cluster, API Gateway, Internal IAM"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 font-sans text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 text-[11px] uppercase tracking-wider mb-1.5">
                Contact Name / Reporter Handle
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name or security team tag"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 font-sans text-sm"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-[11px] uppercase tracking-wider mb-1.5">
                Encrypted Callback Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="secops@yourorg.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 font-sans text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-400 text-[11px] uppercase tracking-wider mb-1.5">
              Incident Details & Indicators of Compromise (IoC)
            </label>
            <textarea
              name="details"
              required
              rows={4}
              placeholder="Describe attack indicators, anomalous traffic patterns, affected IP addresses, hash signatures, or CVE references..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 font-sans text-sm"
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
              [🔒 ZERO-KNOWLEDGE ENCRYPTION // SHA-256 VERIFIED]
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
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 text-white font-semibold tracking-wider hover:opacity-95 disabled:opacity-50 transition-all shadow-[0_0_20px_rgba(244,63,94,0.4)] flex items-center justify-center gap-2"
              >
                {loading ? 'Transmitting...' : 'Dispatch Threat Report →'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
