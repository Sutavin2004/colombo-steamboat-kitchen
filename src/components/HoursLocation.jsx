import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiExternalLink } from 'react-icons/fi'
import { info } from '../data/info'

function getTodayName() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[new Date().getDay()]
}

export default function HoursLocation() {
  const today = getTodayName()

  return (
    <section className="py-24" style={{ background: '#2C1810' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#E8871A]" />
            <span className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase">Visit Us</span>
            <span className="h-px w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#FDF6EC]">
            Hours &amp; <span className="gold-gradient">Location</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Hours + Contact */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Hours Table */}
            <div className="rounded-2xl border border-[#C9933A]/15 overflow-hidden" style={{ background: '#1A1209' }}>
              <div className="px-6 py-4 border-b border-[#C9933A]/10">
                <h3 className="font-heading text-lg font-semibold text-[#FDF6EC]">Opening Hours</h3>
              </div>
              <div className="divide-y divide-[#C9933A]/8">
                {info.hours.map(({ day, hours }) => {
                  const isToday = info.currentDayHighlight && day === today
                  return (
                    <div
                      key={day}
                      className={`flex justify-between items-center px-6 py-3 transition-colors ${
                        isToday ? 'bg-[#E8871A]/10' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isToday && (
                          <span className="w-2 h-2 rounded-full bg-[#E8871A] animate-pulse shrink-0" />
                        )}
                        <span className={`font-body text-sm ${isToday ? 'text-[#E8871A] font-semibold' : 'text-[#F5E6CC]/70'}`}>
                          {day}
                          {isToday && <span className="ml-2 text-[10px] bg-[#E8871A]/20 text-[#E8871A] rounded-full px-2 py-0.5">Today</span>}
                        </span>
                      </div>
                      <span className={`font-body text-sm ${isToday ? 'text-[#FDF6EC] font-semibold' : hours === 'Closed' ? 'text-[#F5E6CC]/35' : 'text-[#F5E6CC]/80'}`}>
                        {hours}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href={`tel:${info.phone}`} className="flex items-center gap-4 p-4 rounded-xl border border-[#C9933A]/15 hover:border-[#C9933A]/35 transition-colors group"
                style={{ background: '#1A1209' }}>
                <div className="w-10 h-10 rounded-full bg-[#E8871A]/10 flex items-center justify-center text-[#E8871A] group-hover:bg-[#E8871A]/20 transition-colors">
                  <FiPhone size={18} />
                </div>
                <div>
                  <p className="font-body text-xs text-[#F5E6CC]/45 uppercase tracking-wide">Phone</p>
                  <p className="font-body text-[#FDF6EC] font-medium">{info.phone}</p>
                </div>
              </a>

              <a href={`mailto:${info.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-[#C9933A]/15 hover:border-[#C9933A]/35 transition-colors group"
                style={{ background: '#1A1209' }}>
                <div className="w-10 h-10 rounded-full bg-[#E8871A]/10 flex items-center justify-center text-[#E8871A] group-hover:bg-[#E8871A]/20 transition-colors">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="font-body text-xs text-[#F5E6CC]/45 uppercase tracking-wide">Email</p>
                  <p className="font-body text-[#FDF6EC] font-medium">{info.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-[#C9933A]/15"
                style={{ background: '#1A1209' }}>
                <div className="w-10 h-10 rounded-full bg-[#E8871A]/10 flex items-center justify-center text-[#E8871A]">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="font-body text-xs text-[#F5E6CC]/45 uppercase tracking-wide">Address</p>
                  <p className="font-body text-[#FDF6EC] font-medium">{info.address}</p>
                </div>
              </div>
            </div>

            {/* Floating service badges */}
            <div className="flex gap-4">
              {['🍽️ Dine In', '🥡 Takeout'].map(badge => (
                <div key={badge} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[#C9933A]/20 font-body text-[#FDF6EC] text-sm"
                  style={{ background: 'rgba(201,147,58,0.05)' }}>
                  <span className="text-[#E8871A]">✓</span> {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C9933A]/25 shadow-2xl shadow-black/30">
              {info.googleMapsEmbed ? (
                <iframe
                  src={info.googleMapsEmbed}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl w-full"
                  title="Colombo Steam Boat Kitchen Location"
                />
              ) : (
                /* Placeholder when no embed URL is set */
                <div className="w-full h-full flex flex-col items-center justify-center gap-4"
                  style={{ background: 'linear-gradient(135deg, #1A1209 0%, #2C1810 100%)' }}>
                  <FiMapPin size={48} className="text-[#E8871A] opacity-60" />
                  <div className="text-center px-6">
                    <p className="font-heading text-lg text-[#FDF6EC] mb-2">Find Us in Scarborough</p>
                    <p className="font-body text-sm text-[#F5E6CC]/55">{info.address}</p>
                    <p className="font-body text-xs text-[#F5E6CC]/35 mt-3">
                      Add your Google Maps embed URL in <code className="text-[#E8871A]">src/data/info.js</code>
                    </p>
                  </div>
                </div>
              )}
            </div>

            <a
              href={info.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Colombo Steam Boat Kitchen on Google Maps (opens in new tab)"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold font-body text-[#1A1209] text-sm hover:shadow-lg transition-all"
              style={{ background: 'linear-gradient(135deg, #E8871A 0%, #C9933A 100%)' }}
            >
              <FiExternalLink size={16} aria-hidden="true" />
              Get Directions →
            </a>

            {/* Neighbourhood Context Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🚇", title: "Transit", desc: "5 min from Kennedy Station · TTC Bus 34 stops at the door" },
                { icon: "🅿️", title: "Parking", desc: "Free street parking on Eglinton Ave E · Plaza parking available" },
                { icon: "📍", title: "Neighbourhood", desc: "Heart of Scarborough · Near Warden, Kennedy & Birchmount" },
              ].map(card => (
                <div key={card.title} className="bg-[#1A1209] border border-[#C9933A]/20 rounded-xl p-4 flex gap-3 items-start">
                  <span className="text-2xl" role="img" aria-label={card.title}>{card.icon}</span>
                  <div>
                    <p className="text-[#E8871A] font-bold text-sm font-body">{card.title}</p>
                    <p className="text-[#F5E6CC]/70 text-xs mt-0.5 font-body leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
