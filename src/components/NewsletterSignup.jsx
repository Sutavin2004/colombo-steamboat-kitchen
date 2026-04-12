import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1000))
    setStatus('success')
  }

  return (
    <section className="bg-gradient-to-r from-[#6B1A2A] via-[#2C1810] to-[#6B1A2A] py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E8871A' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-4" role="img" aria-label="Chilli pepper">🌶️</div>
          <h2 className="font-heading text-3xl md:text-4xl text-[#FDF6EC] font-bold mb-3">
            Get Exclusive CSBK Deals
          </h2>
          <p className="text-[#F5E6CC]/70 font-body mb-8 text-lg">
            Be the first to hear about new menu items, anniversary specials, Tamil New Year feasts, and members-only promotions.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#E8871A]/20 border border-[#E8871A]/40 rounded-2xl px-8 py-6 text-[#FDF6EC]"
            >
              <div className="text-4xl mb-2">🎉</div>
              <p className="font-heading text-xl font-semibold">You're on the list!</p>
              <p className="text-[#F5E6CC]/70 text-sm mt-1 font-body">Welcome to the CSBK family. Expect something special in your inbox soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-white/10 backdrop-blur border border-white/20 text-[#FDF6EC] placeholder-[#F5E6CC]/40 rounded-xl px-5 py-3.5 font-body focus:outline-none focus:border-[#E8871A] transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#E8871A] hover:bg-[#C9933A] text-[#1A1209] font-bold px-6 py-3.5 rounded-xl font-body transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining...' : 'Join the Family →'}
              </button>
            </form>
          )}
          <p className="text-[#F5E6CC]/30 text-xs mt-4 font-body">No spam. Unsubscribe anytime. We respect your inbox.</p>
        </motion.div>
      </div>
    </section>
  )
}
