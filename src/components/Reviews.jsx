import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { reviews, averageRating, totalReviews } from '../data/reviews'
import { info } from '../data/info'

function StarRating({ rating = 5, size = 'sm' }) {
  const sz = size === 'lg' ? 'text-2xl' : 'text-sm'
  return (
    <span className={`flex gap-0.5 ${sz}`}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={i <= rating ? 'text-[#E8871A]' : 'text-gray-300'}>★</span>
      ))}
    </span>
  )
}

function ReviewCard({ review }) {
  return (
    <div
      className="snap-item w-80 sm:w-96 shrink-0 rounded-2xl p-6 border border-[#C9933A]/10 relative"
      style={{ background: '#FDF6EC' }}
    >
      {/* Google icon */}
      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center">
        <span className="text-[10px] font-bold" style={{ color: '#4285F4' }}>G</span>
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0"
          style={{ background: review.avatarBg }}
        >
          {review.avatar}
        </div>
        <div>
          <p className="font-body font-semibold text-[#1A1209] text-sm">{review.name}</p>
          <p className="font-body text-[#2C1810]/50 text-xs">{review.date}</p>
        </div>
      </div>

      <StarRating rating={review.rating} />

      <p className="font-subheading italic text-[#2C1810]/75 text-sm leading-relaxed mt-3">
        "{review.text}"
      </p>
    </div>
  )
}

export default function Reviews() {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const step = 1
    const interval = setInterval(() => {
      if (!isPaused && el) {
        el.scrollLeft += step
        // Reset to start when reached end
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 5) {
          el.scrollLeft = 0
        }
      }
    }, 20)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="py-24" style={{ background: '#FDF6EC' }}>
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
            <span className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase">What Guests Say</span>
            <span className="h-px w-8 bg-[#E8871A]" />
          </div>

          {/* Big rating */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-heading text-7xl font-bold" style={{ color: '#1A1209' }}>
              {averageRating}
            </span>
            <StarRating rating={5} size="lg" />
            <p className="font-body text-[#2C1810]/60 text-sm">
              Based on <strong>{totalReviews}</strong> verified Google Reviews
            </p>
            {/* Google branding */}
            <div className="flex items-center gap-2 mt-2">
              <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                <span className="text-[9px] font-bold" style={{ color: '#4285F4' }}>G</span>
              </div>
              <span className="text-[#2C1810]/50 text-xs font-body">Powered by Google Reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-container pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Duplicate for seamless loop */}
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href={info.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#1A1209] text-[#1A1209] font-semibold font-body text-sm hover:bg-[#1A1209] hover:text-[#FDF6EC] transition-all duration-300"
          >
            <span className="w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[9px] font-bold" style={{ color: '#4285F4' }}>G</span>
            Read All {totalReviews} Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
