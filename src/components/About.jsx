import { motion } from 'framer-motion'

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&auto=format&fit=crop'

const stats = [
  { icon: '🏮', value: '15+', label: 'Years of Heritage' },
  { icon: '👨‍🍳', value: '100%', label: 'Family Recipes' },
  { icon: '🌿', value: 'Fresh', label: 'Sourced Daily' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section
      className="relative py-24 kolam-bg"
      style={{ background: '#FDF6EC' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Decorative Image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Corner ornaments */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#C9933A] rounded-tl-lg z-10" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#C9933A] rounded-br-lg z-10" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
              <img
                src={ABOUT_IMAGE}
                alt="Colombo Steam Boat Kitchen restaurant ambiance"
                className="w-full h-[480px] object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B1A2A]/30 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-[#1A1209]/90 backdrop-blur-sm rounded-xl px-5 py-3 border border-[#C9933A]/30">
                <p className="font-accent text-[#E8871A] text-xs tracking-widest uppercase">Established</p>
                <p className="font-heading text-[#FDF6EC] text-2xl font-bold">2009</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {/* Section label */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#E8871A]" />
              <span className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase">Our Heritage</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl font-bold leading-tight"
              style={{ color: '#1A1209' }}
            >
              More Than a Meal —<br />
              <span style={{ color: '#6B1A2A' }}>A Cultural Journey</span>
            </motion.h2>

            {/* Paragraphs */}
            <motion.p variants={fadeUp} className="font-body text-[#2C1810]/80 text-base leading-relaxed">
              Born from the kitchens of Tamil Nadu and the vibrant streets of Colombo, our steamboat
              tradition stretches back generations. Chef Raj and his family have carried these ancient
              recipes across continents, preserving every spice blend, every slow-simmered broth,
              every cherished technique.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-[#2C1810]/80 text-base leading-relaxed">
              Steamboat dining is more than a meal — it is a celebration of togetherness. In Tamil
              culture, sharing a pot is an act of love. We invite you to gather around our table,
              cook at your own pace, and experience the warmth of a tradition that has nourished
              families for centuries.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-[#2C1810]/70 text-base leading-relaxed">
              Every broth is simmered fresh each morning. Every spice blend is hand-ground in-house.
              Every dish reflects the soul of Tamil Nadu — bold, aromatic, and made with pure intention.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="text-center p-4 rounded-xl border border-[#C9933A]/30"
                  style={{ background: 'rgba(201,147,58,0.06)' }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-heading text-2xl font-bold" style={{ color: '#E8871A' }}>
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-[#2C1810]/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.div variants={fadeUp} className="pt-2 border-t border-[#C9933A]/20">
              <p className="font-subheading italic text-xl" style={{ color: '#6B1A2A' }}>
                — Chef Raj &amp; The Colombo Family
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
