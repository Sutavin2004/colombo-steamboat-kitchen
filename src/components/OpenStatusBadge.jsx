import { useState, useEffect } from 'react'
import { info } from '../data/info.js'

function getOpenStatus() {
  const now = new Date()
  const day = now.toLocaleDateString('en-US', { weekday: 'long' })
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const currentTime = hours * 60 + minutes

  const todayEntry = info.hours.find(h => h.day === day)
  if (!todayEntry || todayEntry.hours === 'Closed') {
    const nextOpen = info.hours.find(h => h.hours !== 'Closed')
    return { open: false, label: `Closed · Opens ${nextOpen?.day || 'Soon'}` }
  }

  // Hours format: "11:00 AM – 10:00 PM" (em dash)
  const parts = todayEntry.hours.split('–').map(s => s.trim())
  if (parts.length < 2) return { open: false, label: 'Hours unavailable' }
  const [openStr, closeStr] = parts

  function parseTime(str) {
    const trimmed = str.trim()
    const match = trimmed.match(/(\d+)(?::(\d+))?\s*(AM|PM)/i)
    if (!match) return 0
    let h = parseInt(match[1], 10)
    const m = match[2] ? parseInt(match[2], 10) : 0
    const period = match[3].toUpperCase()
    if (period === 'PM' && h !== 12) h += 12
    if (period === 'AM' && h === 12) h = 0
    return h * 60 + m
  }

  const openTime = parseTime(openStr)
  const closeTime = parseTime(closeStr)

  if (currentTime >= openTime && currentTime < closeTime) {
    const minsLeft = closeTime - currentTime
    const hoursLeft = Math.floor(minsLeft / 60)
    const label = hoursLeft < 1
      ? `Open · Closes in ${minsLeft}m`
      : `Open Now · Until ${closeStr}`
    return { open: true, label }
  }

  return { open: false, label: `Closed · Opens ${openStr}` }
}

export default function OpenStatusBadge() {
  const [status, setStatus] = useState(getOpenStatus())

  useEffect(() => {
    const interval = setInterval(() => setStatus(getOpenStatus()), 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`hidden lg:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${
      status.open
        ? 'border-green-500/40 bg-green-500/10 text-green-400'
        : 'border-red-500/40 bg-red-500/10 text-red-400'
    }`}>
      <span className={`w-2 h-2 rounded-full ${status.open ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
      {status.label}
    </div>
  )
}
