import { motion } from 'framer-motion'
import { info } from '../data/info'

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* DoorDash Card */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl overflow-hidden card-hover"
            style={{ borderColor: 'rgba(255,48,8,0.25)' }}
          >
            <div className="h-1.5 w-full" style={{ background: '#FF3008' }} />
            <div className="p-8">
              {/* Logo area */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  style={{ background: '#FF3008', boxShadow: '0 8px 25px rgba(255,48,8,0.4)' }}>
                  DD
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#FDF6EC]">DoorDash</h3>
                  <p className="font-body text-sm text-[#F5E6CC]/55">Fast delivery to your door</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#FF3008] text-lg">⏱</span>
                <span className="font-body text-[#F5E6CC]/70 text-sm">Estimated: <strong className="text-[#FDF6EC]">30–45 min</strong></span>
              </div>

              <ul className="space-y-2 mb-8">
                {['Real-time GPS tracking', 'Contactless delivery', '$0 delivery fee on first order'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#F5E6CC]/70 font-body">
                    <span className="text-[#FF3008] text-xs">✓</span> {f}
                  </li>
                ))}
              </ul>

              <motion.a
                href={info.doordashURL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white text-base transition-shadow"
                style={{
                  background: '#FF3008',
                  boxShadow: '0 4px 20px rgba(255,48,8,0.3)',
                }}
              >
                Order on DoorDash →
              </motion.a>
            </div>
          </motion.div>

          {/* Uber Eats Card */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl overflow-hidden card-hover"
            style={{ borderColor: 'rgba(6,193,103,0.25)' }}
          >
            <div className="h-1.5 w-full" style={{ background: '#06C167' }} />
            <div className="p-8">
              {/* Logo area */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg text-[#1A1209]"
                  style={{ background: '#06C167', boxShadow: '0 8px 25px rgba(6,193,103,0.4)' }}>
                  UE
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#FDF6EC]">Uber Eats</h3>
                  <p className="font-body text-sm text-[#F5E6CC]/55">Track your order live</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#06C167] text-lg">⏱</span>
                <span className="font-body text-[#F5E6CC]/70 text-sm">Estimated: <strong className="text-[#FDF6EC]">25–40 min</strong></span>
              </div>

              <ul className="space-y-2 mb-8">
                {['Live order tracking', 'Schedule orders in advance', 'Priority delivery available'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#F5E6CC]/70 font-body">
                    <span className="text-[#06C167] text-xs">✓</span> {f}
                  </li>
                ))}
              </ul>

              <motion.a
                href={info.uberEatsURL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-[#1A1209] text-base transition-shadow"
                style={{
                  background: '#06C167',
                  boxShadow: '0 4px 20px rgba(6,193,103,0.3)',
                }}
              >
                Order on Uber Eats →
              </motion.a>
            </div>
          </motion.div>
        </div>

        <p className="text-center text-[#F5E6CC]/35 text-xs mt-8 font-body">
          Delivery times are estimates and may vary based on distance and demand.
        </p>
      </div>
    </section>
  )
}
