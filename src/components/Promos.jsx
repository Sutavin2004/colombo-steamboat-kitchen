import { motion } from 'framer-motion'
import { info } from '../data/info'

function handleNavClick(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Promos() {
  const activePromos = info.promos.filter(p => p.active)

  if (!activePromos.length) return null

  return (
    <section id="promos" className="py-16" style={{ background: '#1A1209' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#E8871A]" />
            <span className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase">Promotions</span>
            <span className="h-px w-8 bg-[#E8871A]" />
          </div>
        </div>

        <div className="space-y-6">
          {activePromos.map((promo, i) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #6B1A2A 0%, #E8871A 50%, #C9933A 100%)',
                boxShadow: '0 0 60px rgba(232,135,26,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              {/* Gold ornamental border overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: '2px solid rgba(255,215,100,0.35)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
                }}
              />

              {/* Decorative corner ornaments */}
              <div className="absolute top-4 left-4 text-[#FFD764]/40 text-2xl pointer-events-none select-none">✦</div>
              <div className="absolute top-4 right-4 text-[#FFD764]/40 text-2xl pointer-events-none select-none">✦</div>
              <div className="absolute bottom-4 left-4 text-[#FFD764]/40 text-2xl pointer-events-none select-none">✦</div>
              <div className="absolute bottom-4 right-4 text-[#FFD764]/40 text-2xl pointer-events-none select-none">✦</div>

              <div className="relative z-10 px-8 py-12 text-center">
                {/* Badge */}
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                  <span className="font-accent text-white text-xs tracking-[0.25em] uppercase">
                    {promo.badge}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {promo.headline}
                </h3>

                {/* Description */}
                <p className="font-body text-white/85 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  {promo.description}
                </p>

                {/* CTA */}
                <button
                  onClick={() => handleNavClick(promo.ctaTarget)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#6B1A2A] text-base transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #FFD764 0%, #E8C040 100%)',
                    boxShadow: '0 4px 20px rgba(255,215,100,0.4)',
                  }}
                >
                  {promo.cta} ↓
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
