import { useState, useEffect } from 'react'
import { info } from '../data/info.js'

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('banner-dismissed')
    if (dismissed) setVisible(false)
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem('banner-dismissed', 'true')
  }

  if (!info.announcement.active || !visible) return null

  return (
    <div className="relative z-[60] w-full bg-gradient-to-r from-[#6B1A2A] via-[#E8871A] to-[#6B1A2A] text-white text-center py-2.5 px-10 text-sm font-medium tracking-wide">
      <span className="mr-2">{info.announcement.emoji}</span>
      {info.announcement.text}
      {info.announcement.link && (
        <a
          href={info.announcement.link}
          className="ml-2 underline font-bold hover:text-yellow-200 transition-colors"
        >
          {info.announcement.linkText}
        </a>
      )}
      <button
        onClick={dismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-lg font-bold leading-none"
        aria-label="Dismiss announcement"
      >
        ×
      </button>
    </div>
  )
}
