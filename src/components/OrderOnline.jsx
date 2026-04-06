import { motion } from 'framer-motion'
import { info } from '../data/info'

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const platforms = [
  {
    key: 'doordash',
    name: 'DoorDash',
    tagline: 'Fast delivery to your door',
    badge: 'DD',
    color: '#FF3008',
    shadowColor: 'rgba(255,48,8,0.4)',
    btnShadow: 'rgba(255,48,8,0.3)',
    borderColor: 'rgba(255,48,8,0.25)',
    textColor: 'text-white',
    time: '30–45 min',
    features: ['Real-time GPS tracking', 'Contactless delivery', '$0 delivery fee on first order'],
    btnLabel: 'Order on DoorDash →',
    getURL: () => info.doordashURL,
  },
  {
    key: 'ubereats',
    name: 'Uber Eats',
    tagline: 'Track your order live',
    badge: 'UE',
    color: '#06C167',
    shadowColor: 'rgba(6,193,103,0.4)',
    btnShadow: 'rgba(6,193,103,0.3)',
    borderColor: 'rgba(6,193,103,0.25)',
    textColor: 'text-[#1A1209]',
    time: '25–40 min',
    features: ['Live order tracking', 'Schedule orders in advance', 'Priority delivery available'],
    btnLabel: 'Order on Uber Eats →',
    getURL: () => info.uberEatsURL,
  },
  {
    key: 'skip',
    name: 'SkipTheDishes',
    tagline: 'Quick pickup & delivery',
    badge: 'SKIP',
    color: '#E2001A',
    shadowColor: 'rgba(226,0,26,0.4)',
    btnShadow: 'rgba(226,0,26,0.3)',
    borderColor: 'rgba(226,0,26,0.25)',
    textColor: 'text-white',
    time: '20–35 min',
    features: ['Easy pickup option', 'Points & rewards program', 'Local restaurant support'],
    btnLabel: 'Order on Skip →',
    getURL: () => info.skipTheDishesURL,
  },
]

export default function OrderOnline() {
  return (
    <section
      className="relative py-24 kolam-bg overflow-hidden"
      style={{ background: '#1A1209' }}
    >
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E8871A 0%, transparent 70%)', transform: 'translate(-50%,-50%)' }} />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6B1A2A 0%, transparent 70%)', transform: 'translate(50%,-50%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#E8871A]" />
            <span className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase">Delivery & Pickup</span>
            <span className="h-px w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#FDF6EC]">
            Order From the{' '}
            <span className="gold-gradient">Comfort of Home</span>
          </h2>
          <p className="font-body text-[#F5E6CC]/60 text-base mt-4 max-w-lg mx-auto">
            Authentic Tamil steamboat flavors, delivered fresh and hot to your door
          </p>
        </motion.div>

        {/* Cards — 3 columns desktop, 2+1 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((p, i) => (
            <motion.div
              key={p.key}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              whileHover={{ y: -8 }}
              className={`glass-card rounded-2xl overflow-hidden card-hover ${
                i === 2 ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0' : ''
              }`}
              style={{ borderColor: p.borderColor }}
            >
              <div className="h-1.5 w-full" style={{ background: p.color }} />
              <div className="p-7">
                {/* Logo area */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm shadow-lg shrink-0"
                    style={{
                      background: p.color,
                      boxShadow: `0 8px 25px ${p.shadowColor}`,
                      color: p.key === 'ubereats' ? '#1A1209' : '#fff',
                    }}
                  >
                    {p.badge}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#FDF6EC]">{p.name}</h3>
                    <p className="font-body text-sm text-[#F5E6CC]/55">{p.tagline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg" style={{ color: p.color }}>⏱</span>
                  <span className="font-body text-[#F5E6CC]/70 text-sm">
                    Estimated: <strong className="text-[#FDF6EC]">{p.time}</strong>
                  </span>
                </div>

                <ul className="space-y-2 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#F5E6CC]/70 font-body">
                      <span className="text-xs" style={{ color: p.color }}>✓</span> {f}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={p.getURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-base transition-shadow ${p.textColor}`}
                  style={{
                    background: p.color,
                    boxShadow: `0 4px 20px ${p.btnShadow}`,
                  }}
                >
                  {p.btnLabel}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#F5E6CC]/35 text-xs mt-8 font-body">
          Delivery times are estimates and may vary based on distance and demand.
        </p>
      </div>
    </section>
  )
}
