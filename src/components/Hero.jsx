import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import SteamEffect from './SteamEffect'
import { info } from '../data/info'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=1920&auto=format&fit=crop'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: '600px' }}>
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgRef}
          src={HERO_IMAGE}
          alt="Colombo Steam Boat Kitchen hot pot spread"
          className="w-full object-cover"
          style={{
            height: '130%',
            top: '-15%',
            willChange: 'transform',
          }}
        />
        {/* Layered gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,18,9,0.35) 0%, rgba(107,26,42,0.45) 40%, rgba(26,18,9,0.92) 100%)',
          }}
        />
      </div>

      {/* Steam Effect */}
      <SteamEffect />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Decorative label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-8 bg-[#E8871A]/60" />
          <span
            className="font-accent text-xs sm:text-sm text-[#E8871A] tracking-[0.3em] uppercase"
          >
            ✦ Authentic Tamil Cuisine ✦
          </span>
          <span className="h-px w-8 bg-[#E8871A]/60" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FDF6EC] font-bold leading-tight mb-4 max-w-5xl"
        >
          Where Every Meal<br />
          Tells a{' '}
          <span className="gold-gradient">Tamil Story</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="font-body text-base sm:text-lg text-[#F5E6CC]/80 max-w-xl mb-8 leading-relaxed"
        >
          Experience the ancient art of steamboat dining, reimagined with the bold,
          aromatic spices of Tamil Nadu
        </motion.p>

        {/* Ornamental divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex items-center gap-4 mb-10"
        >
          <span className="h-px w-12 bg-[#C9933A]/50" />
          <span className="text-[#C9933A] text-lg">◆</span>
          <span className="h-px w-12 bg-[#C9933A]/50" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.a
            href={info.doordashURL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-base shadow-lg transition-shadow hover:shadow-[0_0_30px_rgba(255,48,8,0.5)]"
            style={{ background: '#FF3008' }}
          >
            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">DD</span>
            Order on DoorDash
          </motion.a>
          <motion.a
            href={info.uberEatsURL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-[#1A1209] text-base shadow-lg transition-shadow hover:shadow-[0_0_30px_rgba(6,193,103,0.5)]"
            style={{ background: '#06C167' }}
          >
            <span className="w-6 h-6 bg-black/10 rounded-full flex items-center justify-center text-xs font-bold">UE</span>
            Order on Uber Eats
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C9933A]/60 animate-bounce-slow"
      >
        <span className="font-accent text-xs tracking-widest uppercase">Scroll</span>
        <FiChevronDown size={20} />
      </motion.div>
    </section>
  )
}
