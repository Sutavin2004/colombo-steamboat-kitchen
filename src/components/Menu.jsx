import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'
import { menuPages } from '../data/menu'

export default function Menu() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prev = () => setLightboxIndex(i => (i - 1 + menuPages.length) % menuPages.length)
  const next = () => setLightboxIndex(i => (i + 1) % menuPages.length)

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <section id="menu" className="py-24" style={{ background: '#2C1810' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#E8871A]" />
            <span className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase">Our Offerings</span>
            <span className="h-px w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#FDF6EC] mb-4">
            Our <span className="gold-gradient">Menu</span>
          </h2>
          <p className="font-body text-[#F5E6CC]/55 text-sm">
            Starting from $6 — Dine In &amp; Takeout Available
          </p>
        </div>

        {/* Menu Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {menuPages.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden border border-[#C9933A]/30 shadow-lg shadow-black/30 hover:border-[#C9933A]/70 transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={page.url}
                alt={page.alt}
                className="w-full h-auto object-contain block"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1A1209]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-[#FDF6EC]">
                  <FiZoomIn size={32} />
                  <span className="font-body text-sm font-medium">Click to zoom</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[#F5E6CC]/40 text-xs mt-10 font-body">
          Menu items and prices may vary. Please inform us of any allergies when ordering.
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={closeLightbox}
            >
              <FiX size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev() }}
            >
              <FiChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={menuPages[lightboxIndex].url}
              alt={menuPages[lightboxIndex].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next() }}
            >
              <FiChevronRight size={24} />
            </button>

            {/* Page counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-white/60 text-sm">
              {lightboxIndex + 1} / {menuPages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
