import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { info } from '../data/info'

const partySizes = ['1–2 guests', '3–4 guests', '5–6 guests', '7+ guests']

function InputField({ label, type = 'text', name, value, onChange, required, placeholder }) {
  return (
    <div className="relative group">
      <label className="block font-body text-xs text-[#F5E6CC]/50 uppercase tracking-widest mb-2">
        {label} {required && <span className="text-[#E8871A]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[#C9933A]/25 pb-2 font-body text-[#FDF6EC] text-sm placeholder-[#F5E6CC]/25 focus:outline-none focus:border-[#E8871A] transition-colors duration-300"
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    partySize: '',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(info.formspreeURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // Silently show success for demo; in production, handle error
      setSubmitted(true)
    }
    setLoading(false)
  }

  return (
    <section
      className="relative py-24 kolam-bg overflow-hidden"
      style={{ background: '#1A1209' }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E8871A 0%, transparent 70%)' }} />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase">Reserve a Table</span>
            <span className="h-px w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#FDF6EC]">
            Join Us at <span className="gold-gradient">the Table</span>
          </h2>
          <p className="font-body text-[#F5E6CC]/55 text-base mt-4">
            Reserve your spot for an unforgettable dining experience
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, #E8871A 0%, #C9933A 100%)', boxShadow: '0 0 40px rgba(232,135,26,0.4)' }}
              >
                <span className="text-3xl text-white">✓</span>
              </motion.div>
              <h3 className="font-heading text-3xl font-bold text-[#FDF6EC] mb-3">We've Got Your Table!</h3>
              <p className="font-body text-[#F5E6CC]/65 text-base max-w-sm mx-auto">
                Thank you! We'll confirm your reservation by phone or email within 24 hours.
                We can't wait to welcome you.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', partySize:'', date:'', message:'' }) }}
                className="mt-8 font-body text-[#E8871A] text-sm underline hover:text-[#C9933A] transition-colors"
              >
                Make another reservation
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-8">
                <InputField label="Your Name" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Priya Krishnan" />
                <InputField label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="hello@example.com" />
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-8">
                <InputField label="Phone Number" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(416) 555-0000" />

                {/* Party Size Select */}
                <div>
                  <label className="block font-body text-xs text-[#F5E6CC]/50 uppercase tracking-widest mb-2">
                    Party Size
                  </label>
                  <select
                    name="partySize"
                    value={form.partySize}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#C9933A]/25 pb-2 font-body text-[#FDF6EC] text-sm focus:outline-none focus:border-[#E8871A] transition-colors duration-300"
                    style={{ background: 'transparent' }}
                  >
                    <option value="" style={{ background: '#1A1209' }}>Select party size</option>
                    {partySizes.map(s => (
                      <option key={s} value={s} style={{ background: '#1A1209' }}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <InputField label="Preferred Date" type="date" name="date" value={form.date} onChange={handleChange} />

              {/* Message */}
              <div>
                <label className="block font-body text-xs text-[#F5E6CC]/50 uppercase tracking-widest mb-2">
                  Special Requests
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Dietary restrictions, anniversary celebration, high chair needed..."
                  className="w-full bg-transparent border-b border-[#C9933A]/25 pb-2 font-body text-[#FDF6EC] text-sm placeholder-[#F5E6CC]/25 focus:outline-none focus:border-[#E8871A] transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-xl font-semibold text-[#1A1209] text-base font-body transition-shadow disabled:opacity-60"
                style={{
                  background: loading
                    ? 'linear-gradient(135deg, #C9933A 0%, #E8871A 100%)'
                    : 'linear-gradient(135deg, #E8871A 0%, #C9933A 50%, #E8871A 100%)',
                  backgroundSize: '200% 100%',
                  boxShadow: '0 8px 30px rgba(232,135,26,0.35)',
                }}
              >
                {loading ? 'Sending…' : 'Reserve a Table →'}
              </motion.button>

              <p className="text-center font-body text-xs text-[#F5E6CC]/30">
                {/* Note: Replace formspreeURL in src/data/info.js with your Formspree form ID */}
                We'll confirm within 24 hours. Walk-ins are always welcome.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
