import { useEffect, useState } from 'react'
import { info } from '../data/info.js'

export default function MobileOrderBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-[#1A1209]/98 backdrop-blur-md border-t border-[#C9933A]/30 px-2 py-3 flex gap-2">
        <a
          href={info.doordashURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on DoorDash (opens in new tab)"
          className="flex-1 bg-[#FF3008] text-white text-xs font-bold py-3 rounded-xl flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-transform"
        >
          <span className="text-base">🚗</span>
          <span>DoorDash</span>
        </a>
        <a
          href={info.uberEatsURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on Uber Eats (opens in new tab)"
          className="flex-1 bg-[#06C167] text-white text-xs font-bold py-3 rounded-xl flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-transform"
        >
          <span className="text-base">🛵</span>
          <span>Uber Eats</span>
        </a>
        <a
          href={info.skipTheDishesURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on Skip The Dishes (opens in new tab)"
          className="flex-1 bg-[#E2001A] text-white text-xs font-bold py-3 rounded-xl flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-transform"
        >
          <span className="text-base">⚡</span>
          <span>Skip</span>
        </a>
      </div>
    </div>
  )
}
