import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { info } from '../data/info'

const guestOptions = [
  '10–25 guests',
  '26–50 guests',
  '51–100 guests',
  '101–200 guests',
  '200+ guests',
]

const eventTypes = [
  'Wedding / Engagement',
  'Birthday Party',
  'Corporate Event',
  'Religious / Cultural Celebration',
  'Graduation',
  'Other',
]

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

function SelectField({ label, name, value, onChange, options, placeholder, required }) {
  return (
    <div>
      <label className="block font-body text-xs text-[#F5E6CC]/50 uppercase tracking-widest mb-2">
        {label} {required && <span className="text-[#E8871A]">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent border-b border-[#C9933A]/25 pb-2 font-body text-[#FDF6EC] text-sm focus:outline-none focus:border-[#E8871A] transition-colors duration-300"
        style={{ background: 'transparent' }}
      >
        <option value="" style={{ background: '#1A1209' }}>{placeholder}</option>
        {options.map(o => (
          <option key={o} value={o} style={{ background: '#1A1209' }}>{o}</option>
        ))}
      </select>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    date: '',
    venue: '',
    budget: '',
    details: '',
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
        body: JSON.stringify({ ...form, _subject: 'New Catering Inquiry — Colombo Steam Boat Kitchen' }),
      })
      if (res.ok) setSubmitted(true)
    } catch {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5 blur-3xl pointer-events-none"
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
            <span className="font-accent text-[#E8871A] text-xs tracking-[0.3em] uppercase">Catering</span>
            <span className="h-px w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#FDF6EC] leading-tight">
            Let us cook for your<br />
            <span className="gold-gradient">next big celebration!</span>
          </h2>
          <p className="font-body text-[#F5E6CC]/55 text-base mt-4 max-w-lg mx-auto">
            From intimate family gatherings to large weddings, we bring authentic Sri Lankan flavors to your event. Fill out the form and we'll get back to you within 1–2 business days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm font-body">
            <a href={`tel:${info.phone}`} className="text-[#E8871A] hover:text-[#C9933A] transition-colors">
              📞 {info.phone}
            </a>
            <span className="text-[#F5E6CC]/30 hidden sm:inline">|</span>
            <a href={`mailto:${info.email}`} className="text-[#F5E6CC]/60 hover:text-[#E8871A] transition-colors">
              ✉️ {info.email}
            </a>
          </div>
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
              <h3 className="font-heading text-3xl font-bold text-[#FDF6EC] mb-3">Inquiry Received!</h3>
              <p className="font-body text-[#F5E6CC]/65 text-base max-w-sm mx-auto">
                Thank you! Our catering team will review your request and reach out within 1–2 business days to discuss the details.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setForm({ name: '', email: '', phone: '', eventType: '', guestCount: '', date: '', venue: '', budget: '', details: '' })
                }}
                className="mt-8 font-body text-[#E8871A] text-sm underline hover:text-[#C9933A] transition-colors"
              >
                Submit another inquiry
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
              {/* Row 1: Name + Email */}
              <div className="grid sm:grid-cols-2 gap-8">
                <InputField label="Your Name" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Priya Krishnan" />
                <InputField label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="hello@example.com" />
              </div>

              {/* Row 2: Phone + Number of Guests */}
              <div className="grid sm:grid-cols-2 gap-8">
                <InputField label="Phone Number" type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="(647) 555-0000" />
                <SelectField
                  label="Number of Guests"
                  name="guestCount"
                  value={form.guestCount}
                  onChange={handleChange}
                  options={guestOptions}
                  placeholder="Select guest count"
                  required
                />
              </div>

              {/* Row 3: Event Type + Date */}
              <div className="grid sm:grid-cols-2 gap-8">
                <SelectField
                  label="Type of Event"
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  options={eventTypes}
                  placeholder="Select event type"
                  required
                />
                <InputField label="Event Date" type="date" name="date" value={form.date} onChange={handleChange} required />
              </div>

              {/* Row 4: Venue + Budget */}
              <div className="grid sm:grid-cols-2 gap-8">
                <InputField label="Venue / Location" name="venue" value={form.venue} onChange={handleChange} placeholder="e.g. Scarborough Convention Centre" />
                <InputField label="Estimated Budget" name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. $2,000–$5,000" />
              </div>

              {/* Details */}
              <div>
                <label className="block font-body text-xs text-[#F5E6CC]/50 uppercase tracking-widest mb-2">
                  What do you need? <span className="text-[#E8871A]">*</span>
                </label>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your event — menu preferences, dietary restrictions, service style (buffet, plated, etc.), and anything else we should know..."
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
                {loading ? 'Sending…' : 'Submit Catering Inquiry →'}
              </motion.button>

              <p className="text-center font-body text-xs text-[#F5E6CC]/30">
                We'll respond within 1–2 business days. You can also call us directly at {info.phone}.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
