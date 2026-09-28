'use client'

export type ApiEnvelope<T> = {
  success: boolean
  data: T
  message: string
  errors?: string[]
}

type ListResponse<T> = { items: T[]; total: number; page: number; limit: number }

const configuredUrl = process.env.NEXT_PUBLIC_API_URL || process.env.VITE_API_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://nisqvanguard2.vercel.app')
const API_BASE = configuredUrl.replace(/\/$/, '').endsWith('/api') ? configuredUrl.replace(/\/$/, '') : `${configuredUrl.replace(/\/$/, '')}/api`

let accessToken: string | null = null

export class ApiError extends Error {
  constructor(message: string, public status: number, public details: string[] = []) {
    super(message)
    this.name = 'ApiError'
  }
}

export function setAccessToken(token: string | null) {
  accessToken = token
  if (typeof window !== 'undefined') {
    if (token) window.localStorage.setItem('nisq_vanguard_token', token)
    else window.localStorage.removeItem('nisq_vanguard_token')
  }
}

function getAccessToken() {
  if (accessToken) return accessToken
  if (typeof window !== 'undefined') accessToken = window.localStorage.getItem('nisq_vanguard_token')
  return accessToken
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers)
  headers.set('Content-Type', 'application/json')
  const token = getAccessToken()
  if (token) headers.set('Authorization', `Bearer ${token}`)

  let response: Response
  try {
    response = await fetch(`${API_BASE}${path}`, { ...init, headers, credentials: 'include' })
  } catch {
    throw new ApiError(`Unable to reach the backend at ${API_BASE}. Check that the API is deployed and NEXT_PUBLIC_API_URL is correct.`, 0)
  }
  const payload = await response.json().catch(() => null) as ApiEnvelope<T> | null
  if (!response.ok || !payload?.success) {
      const message = payload?.message || `The backend returned HTTP ${response.status}. Check the API deployment and try again.`
      throw new ApiError(message, response.status, payload?.errors || [])
  }
  return payload.data
}

export async function listResource<T>(resource: string, params: Record<string, string | number> = {}) {
  const query = new URLSearchParams(Object.entries({ page: 1, limit: 50, ...params }).map(([key, value]) => [key, String(value)]))
  return request<ListResponse<T>>(`/${resource}?${query}`)
}

export const api = {
  list: listResource,
  aiChat: (body: { message: string; conversationId?: string }) => request<{ message: string; conversationId: string; sources: Array<{ title: string; source: string }>; toolsUsed: string[] }>('/ai/chat', { method: 'POST', body: JSON.stringify(body) }),
  contact: (body: Record<string, unknown>) => request<Record<string, unknown>>('/contact', { method: 'POST', body: JSON.stringify(body) }),
  internshipApplication: (body: Record<string, unknown>) => request<Record<string, unknown>>('/internship-applications', { method: 'POST', body: JSON.stringify(body) }),
  eventRegistration: (body: Record<string, unknown>) => request<Record<string, unknown>>('/event-registrations', { method: 'POST', body: JSON.stringify(body) }),
  login: async (body: { email: string; password: string }) => {
    const data = await request<{ user: Record<string, unknown>; token: string }>('/auth/login', { method: 'POST', body: JSON.stringify(body) })
    setAccessToken(data.token)
    return data
  },
  register: async (body: { name: string; email: string; password: string }) => {
    const data = await request<{ user: Record<string, unknown>; token: string }>('/auth/register', { method: 'POST', body: JSON.stringify(body) })
    setAccessToken(data.token)
    return data
  },
  logout: async () => {
    await request<null>('/auth/logout', { method: 'POST' })
    setAccessToken(null)
  },
  me: () => request<{ user: Record<string, unknown> }>('/auth/me'),
  adminDashboard: () => request<{
    stats: Record<string, number>
    recentApplications: Array<Record<string, any>>
    recentRegistrations: Array<Record<string, any>>
  }>('/admin/dashboard'),
}

export { API_BASE }
