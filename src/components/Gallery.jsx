import { motion } from 'framer-motion'
import { gallery } from '../data/gallery'
import { info } from '../data/info'
import { FiInstagram } from 'react-icons/fi'

export default function Gallery() {
  return (
    <section className="py-24" style={{ background: '#1A1209' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#E8871A]" />
            <span className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase">Visual Feast</span>
            <span className="h-px w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#FDF6EC]">
            A Feast for <span className="gold-gradient">the Eyes</span>
          </h2>
          <p className="font-body text-[#F5E6CC]/55 text-base mt-4 max-w-md mx-auto">
            Every dish is a work of art. Every table, a canvas of Tamil tradition.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {gallery.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer break-inside-avoid mb-4 ${
                img.size === 'large' ? 'row-span-2' : ''
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: img.size === 'large' ? '280px' : '180px' }}
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1209]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-body text-[#FDF6EC] text-xs font-medium">{img.alt}</p>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#C9933A]/0 group-hover:border-[#C9933A]/40 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href={info.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-[#FDF6EC] text-sm border border-[#C9933A]/30 hover:border-[#E8871A] hover:bg-[#E8871A]/10 transition-all duration-300 font-body"
          >
            <FiInstagram size={20} className="text-[#E8871A]" />
            Follow Our Journey on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
