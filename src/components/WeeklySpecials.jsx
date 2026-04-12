import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const specials = [
  { day: "Tuesday", title: "Tamil Combo Deal", desc: "Any broth + 2 proteins + noodles for one special price. Dine in only.", badge: "Dine In Special", color: "#6B1A2A", emoji: "🍲" },
  { day: "Wednesday", title: "Vegetarian Wednesday", desc: "All vegetarian items 10% off. Fresh, flavourful, 100% plant-based Sri Lankan goodness.", badge: "Weekly Deal", color: "#2C6B1A", emoji: "🌿" },
  { day: "Friday", title: "Family Steamboat Friday", desc: "Tables of 4+ get a complimentary side dish. Perfect for family nights out in Scarborough.", badge: "Family Deal", color: "#1A4A6B", emoji: "👨‍👩‍👧‍👦" },
  { day: "Weekend", title: "Weekend Snack Platter", desc: "Order any broth and get a mixed snack platter (Vadai, Samosa, Rolls) at a special price.", badge: "Sat & Sun Only", color: "#6B4A1A", emoji: "🍢" },
]

export default function WeeklySpecials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setActive(p => (p + 1) % specials.length), 4000)
    return () => clearInterval(interval)
  }, [])

  const special = specials[active]

  return (
    <section className="bg-[#0D0906] py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#E8871A] text-xs font-bold tracking-[0.3em] uppercase font-accent">✦ Weekly Deals ✦</span>
          <h2 className="font-heading text-4xl md:text-5xl text-[#FDF6EC] mt-3">
            Specials <span className="text-[#E8871A]">This Week</span>
          </h2>
        </div>

        <div className="flex gap-3 justify-center mb-8 flex-wrap" role="tablist" aria-label="Weekly specials">
          {specials.map((s, i) => (
            <button
              key={s.day}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-bold font-body border transition-all duration-200 ${
                active === i
                  ? 'bg-[#E8871A] border-[#E8871A] text-[#1A1209]'
                  : 'border-[#C9933A]/30 text-[#F5E6CC]/70 hover:border-[#E8871A]/60 hover:text-[#F5E6CC]'
              }`}
            >
              {s.day}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-[#2C1810] border border-[#C9933A]/20 rounded-3xl p-10 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at 50% 0%, ${special.color}, transparent 70%)` }} aria-hidden="true" />
            <div className="relative z-10">
              <div className="text-7xl mb-5" role="img" aria-label={special.title}>{special.emoji}</div>
              <span className="inline-block bg-[#E8871A]/10 border border-[#E8871A]/30 text-[#E8871A] text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
                {special.badge}
              </span>
              <h3 className="font-heading text-3xl md:text-4xl text-[#FDF6EC] font-bold mb-4">{special.title}</h3>
              <p className="text-[#F5E6CC]/70 text-lg font-body max-w-xl mx-auto leading-relaxed">{special.desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-[#F5E6CC]/30 text-xs mt-6 font-body">
          Specials subject to change · Call +1 (647) 286-9344 for details
        </p>
      </div>
    </section>
  )
}
