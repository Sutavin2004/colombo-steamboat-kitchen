import { motion } from 'framer-motion'
import { FiFacebook } from 'react-icons/fi'
import { info } from '../data/info'

const ARTWORK_1 = 'https://colombosteamboat.ca/wp-content/uploads/2025/06/CSBK_artwork_02.jpg'
const ARTWORK_2 = 'https://colombosteamboat.ca/wp-content/uploads/2025/06/CSBK_artwork_03.jpg'

const badges = [
  { icon: '💰', label: 'Meals from $6' },
  { icon: '🎉', label: '1st Anniversary' },
  { icon: '🌿', label: 'Fresh Daily' },
  { icon: '🍽️', label: 'Dine In & Takeout' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 kolam-bg"
      style={{ background: '#FDF6EC' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Two artwork images side by side */}
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

            <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
              <img
                src={ARTWORK_1}
                alt="Colombo Steam Boat Kitchen artwork"
                className="w-full h-[480px] object-cover"
              />
              <img
                src={ARTWORK_2}
                alt="Colombo Steam Boat Kitchen artwork"
                className="w-full h-[480px] object-cover"
              />
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
              <span className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase">About Us</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl font-bold leading-tight"
              style={{ color: '#1A1209' }}
            >
              Meals Starting<br />
              <span style={{ color: '#6B1A2A' }}>From $6</span>
            </motion.h2>

            {/* Body text */}
            <motion.p variants={fadeUp} className="font-body text-[#2C1810]/80 text-base leading-relaxed">
              Colombo Steam Boat Kitchen is proudly celebrating our 1st year anniversary! We bring
              authentic Sri Lankan steamboat flavors to the heart of Scarborough, Toronto. From our
              bubbling broths to our hand-crafted snacks, every dish is made with love and tradition.
              We have snack items such as Rolls, Rotty, Ulundu Vadai, Samosa and more.
            </motion.p>

            {/* Highlight badges */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 pt-4">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[#C9933A]/30"
                  style={{ background: 'rgba(201,147,58,0.06)' }}
                >
                  <div className="text-2xl">{badge.icon}</div>
                  <div className="font-body text-sm font-semibold" style={{ color: '#2C1810' }}>
                    {badge.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Facebook CTA */}
            <motion.div variants={fadeUp} className="pt-2">
              <a
                href={info.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:scale-105"
                style={{ background: '#1877F2', boxShadow: '0 4px 20px rgba(24,119,242,0.35)' }}
              >
                <FiFacebook size={18} />
                Get Connected on Facebook
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
