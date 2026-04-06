import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuItems, menuCategories } from '../data/menu'

function SpicyDots({ level }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3].map(i => (
        <span key={i} className={`text-xs ${i <= level ? 'opacity-100' : 'opacity-20'}`}>🌶️</span>
      ))}
    </span>
  )
}

function MenuCard({ item, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="relative rounded-xl border border-[#C9933A]/10 hover:border-[#C9933A]/40 card-hover overflow-hidden"
      style={{ background: '#1A1209' }}
    >
      {/* Popular badge */}
      {item.popular && (
        <div className="absolute top-3 right-3 bg-[#6B1A2A] text-[#F5E6CC] text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
          Popular
        </div>
      )}

      {/* New badge */}
      {item.newItem && !item.popular && (
        <div className="absolute top-3 right-3 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#E8871A] animate-pulse" />
          <span className="text-[#E8871A] text-[10px] font-semibold uppercase tracking-wide">New</span>
        </div>
      )}

      <div className="p-5">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-heading text-base font-semibold text-[#FDF6EC] leading-snug pr-10">
            {item.name}
          </h3>
          <span className="font-body text-[#E8871A] font-bold text-base shrink-0">{item.price}</span>
        </div>

        <p className="font-body text-[#F5E6CC]/55 text-sm leading-relaxed mb-4">{item.description}</p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 items-center">
          {item.veg && (
            <span className="text-xs text-emerald-400 border border-emerald-400/30 rounded-full px-2 py-0.5">🌿 Veg</span>
          )}
          {item.glutenFree && (
            <span className="text-xs text-amber-300 border border-amber-300/30 rounded-full px-2 py-0.5">🌾 GF</span>
          )}
          {item.spicy > 0 && <SpicyDots level={item.spicy} />}
        </div>
      </div>
    </motion.div>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Broths')

  const filtered = menuItems.filter(item => item.category === activeCategory)

  return (
    <section className="py-24" style={{ background: '#2C1810' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#E8871A]" />
            <span className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase">Our Offerings</span>
            <span className="h-px w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#FDF6EC] mb-4">
            The <span className="gold-gradient">Menu</span>
          </h2>

          {/* Build Your Own Banner */}
          <div
            className="max-w-3xl mx-auto rounded-xl p-5 mb-10 border border-[#C9933A]/25 text-left"
            style={{ background: 'rgba(232,135,26,0.07)' }}
          >
            <div className="flex gap-4 items-start">
              <span className="text-3xl">🍲</span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#FDF6EC] mb-1">Build Your Own Steamboat</h3>
                <p className="font-body text-[#F5E6CC]/65 text-sm leading-relaxed">
                  Choose your broth, load your pot with proteins, vegetables, and noodles of your choice.
                  Cook at your own pace, dip in our signature sauces, and savor every moment.
                  Every combination is a new adventure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 snap-container">
          {menuCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`snap-item shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-250 ${
                activeCategory === cat
                  ? 'bg-[#E8871A] text-[#1A1209] font-semibold shadow-lg'
                  : 'text-[#F5E6CC]/70 border border-[#C9933A]/20 hover:border-[#C9933A]/50 hover:text-[#FDF6EC]'
              }`}
              style={activeCategory === cat ? { boxShadow: '0 4px 20px rgba(232,135,26,0.4)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="wait">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <p className="text-center text-[#F5E6CC]/40 text-xs mt-10 font-body">
          Menu items and prices may vary. Please inform us of any allergies when ordering.
        </p>
      </div>
    </section>
  )
}
