'use client'

import { FormEvent, useState } from 'react'
import { api, ApiError } from '@/lib/api'
import { Card, PageFrame, PageHero, Pill } from '@/components/site-shell'

type Source = { title: string; source: string }
type Message = { role: 'user' | 'assistant'; content: string; sources?: Source[] }

const suggestions = [
  'What courses are available?',
  'What internships are available?',
  'What cybersecurity labs are available?',
  'What projects are available?',
  'Tell me about NISQ Vanguard research.',
  'What services are available?',
]

function AssistantMessage({ message }: { message: Message }) {
  return <div className="max-w-[92%]">
    <div className="rounded-xl rounded-bl-sm border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm leading-6 text-slate-200">
      <p className="whitespace-pre-wrap">{message.content}</p>
    </div>
    {message.sources && message.sources.length > 0 && <div className="mt-3 flex flex-wrap gap-2">
      {message.sources.map((source) => <a key={`${source.source}-${source.title}`} href={source.source.startsWith('/') ? source.source : '#'} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-cyan-300 hover:border-cyan-400">Source: {source.title}</a>)}
    </div>}
  </div>
}

export default function AiCopilot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [conversationId, setConversationId] = useState('')
  const [input, setInput] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const [lastQuestion, setLastQuestion] = useState('')

  async function ask(question: string) {
    const trimmed = question.trim()
    if (!trimmed || pending) return
    setMessages((current) => [...current, { role: 'user', content: trimmed }])
    setInput('')
    setError('')
    setLastQuestion(trimmed)
    setPending(true)
    try {
      const result = await api.aiChat({ message: trimmed, conversationId: conversationId || undefined })
      setConversationId(result.conversationId)
      setMessages((current) => [...current, { role: 'assistant', content: result.message, sources: result.sources }])
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : 'The Co-Pilot could not respond right now.')
    } finally {
      setPending(false)
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void ask(input)
  }

  function clearConversation() {
    setMessages([])
    setConversationId('')
    setError('')
    setLastQuestion('')
  }

  return <PageFrame>
    <main>
      <PageHero eyebrow="NISQ / Intelligence" title="Ask the Vanguard." description="A grounded guide to NISQ Vanguard's research, services, learning programs, projects, events, and labs." />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[.72fr_1.28fr] lg:px-8">
        <aside className="space-y-5">
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-300">Suggested questions</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">Start with a focused question. The Co-Pilot will show where its answer came from.</p>
              </div>
              <Pill>Beta</Pill>
            </div>
            <div className="mt-6 grid gap-2">
              {suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => void ask(suggestion)} className="rounded-md border border-slate-700 px-3 py-3 text-left text-sm text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-200">{suggestion}</button>)}
            </div>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-300">Conversation</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">Your current conversation stays available while this page is open.</p>
            <button type="button" onClick={clearConversation} className="mt-5 inline-flex items-center justify-center rounded-md border border-slate-600 bg-slate-800/60 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400/60">Clear conversation</button>
          </Card>
        </aside>
        <Card className="flex min-h-[620px] flex-col p-0">
          <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">
            <div>
              <p className="text-sm font-semibold text-white">Vanguard Co-Pilot</p>
              <p className="mt-1 text-xs text-slate-500">Grounded in public NISQ Vanguard information</p>
            </div>
            <span className="flex items-center gap-2 text-xs text-cyan-300"><span className="h-2 w-2 rounded-full bg-cyan-300" />Ready</span>
          </div>
          <div className="flex-1 space-y-5 overflow-y-auto p-6">
            {messages.length === 0 && <div className="grid min-h-[360px] place-items-center text-center">
              <div>
                <p className="text-4xl text-cyan-300">N</p>
                <h2 className="mt-5 text-2xl font-semibold text-white">What are you exploring?</h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">Ask about a program, capability, project, or research direction. Answers are based on retrieved NISQ Vanguard content.</p>
              </div>
            </div>}
            {messages.map((message, index) => message.role === 'assistant'
              ? <AssistantMessage key={`${message.role}-${index}`} message={message} />
              : <div key={`${message.role}-${index}`} className="ml-auto max-w-[85%]"><div className="rounded-xl rounded-br-sm bg-cyan-400 px-4 py-3 text-sm leading-6 text-slate-950"><p className="whitespace-pre-wrap">{message.content}</p></div></div>)}
            {pending && <div className="max-w-[92%] rounded-xl rounded-bl-sm border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-400" role="status">Co-Pilot is thinking<span className="ml-1 animate-pulse">...</span></div>}
            {error && <div className="rounded-md border border-red-400/30 bg-red-400/5 p-4" role="alert"><p className="text-sm text-red-200">{error}</p>{lastQuestion && <button type="button" onClick={() => void ask(lastQuestion)} className="mt-3 text-sm font-semibold text-cyan-300 hover:text-white">Retry response</button>}</div>}
          </div>
          <form onSubmit={submit} className="border-t border-slate-700 p-4">
            <div className="flex gap-3">
              <textarea value={input} onChange={(event) => setInput(event.target.value)} disabled={pending} rows={2} maxLength={2000} placeholder="Ask the Vanguard anything..." aria-label="Ask the AI Co-Pilot" className="min-w-0 flex-1 resize-none rounded-md border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400" />
              <button type="submit" disabled={pending || !input.trim()} className="self-end rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50">Send ↗</button>
            </div>
            <p className="mt-2 text-right text-xs text-slate-600">{input.length}/2000</p>
          </form>
        </Card>
      </section>
    </main>
  </PageFrame>
}
