import { FiInstagram, FiFacebook } from 'react-icons/fi'
import { info } from '../data/info'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const hoursSummary = [
  { day: 'Mon', hours: 'Closed' },
  { day: 'Tue–Thu', hours: '11am–10pm' },
  { day: 'Fri', hours: '11am–11pm' },
  { day: 'Sat', hours: '10am–11pm' },
  { day: 'Sun', hours: '10am–9pm' },
]

function handleNavClick(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer style={{ background: '#0D0906' }}>
      {/* Tamil geometric border top */}
      <div className="tamil-border-top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Logo */}
        <div className="text-center mb-14">
          <div className="inline-flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: 'linear-gradient(135deg, #E8871A 0%, #C9933A 100%)', boxShadow: '0 0 30px rgba(232,135,26,0.3)' }}>
              <span className="font-heading text-base font-bold text-[#1A1209]">CSK</span>
            </div>
            <p className="font-heading text-2xl font-bold text-[#FDF6EC]">{info.restaurantName}</p>
            <p className="font-subheading italic text-[#C9933A] text-sm">{info.tagline}</p>
          </div>
        </div>

        {/* Three Columns */}
        <div className="grid sm:grid-cols-3 gap-12 mb-14">
          {/* Quick Links */}
          <div>
            <h4 className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNavClick(l.href)}
                    className="font-body text-[#F5E6CC]/60 text-sm hover:text-[#E8871A] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Summary */}
          <div>
            <h4 className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase mb-5">Hours</h4>
            <ul className="space-y-2">
              {hoursSummary.map(h => (
                <li key={h.day} className="flex justify-between font-body text-sm">
                  <span className="text-[#F5E6CC]/60">{h.day}</span>
                  <span className={h.hours === 'Closed' ? 'text-[#F5E6CC]/30' : 'text-[#F5E6CC]/80'}>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase mb-5">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href={info.instagram} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C9933A]/25 flex items-center justify-center text-[#F5E6CC]/60 hover:text-[#E8871A] hover:border-[#E8871A] transition-all">
                <FiInstagram size={18} />
              </a>
              <a href={info.facebook} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C9933A]/25 flex items-center justify-center text-[#F5E6CC]/60 hover:text-[#E8871A] hover:border-[#E8871A] transition-all">
                <FiFacebook size={18} />
              </a>
            </div>

            {/* Order buttons */}
            <div className="space-y-3">
              <a href={info.doordashURL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg font-body text-white text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: '#FF3008' }}>
                <span className="w-5 h-5 bg-white/15 rounded text-[9px] font-bold flex items-center justify-center">DD</span>
                Order on DoorDash
              </a>
              <a href={info.uberEatsURL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg font-body text-[#1A1209] text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: '#06C167' }}>
                <span className="w-5 h-5 bg-black/10 rounded text-[9px] font-bold flex items-center justify-center">UE</span>
                Order on Uber Eats
              </a>
              <a href={info.skipTheDishesURL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg font-body text-white text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: '#E2001A' }}>
                <span className="w-5 h-5 bg-white/15 rounded text-[8px] font-bold flex items-center justify-center">SKIP</span>
                Order on Skip
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C9933A]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-[#F5E6CC]/30">
            © {new Date().getFullYear()} Colombo Steam Boat Kitchen. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#F5E6CC]/30">
            Made with ❤️ for Toronto's Tamil Community
          </p>
        </div>
      </div>
    </footer>
  )
}
