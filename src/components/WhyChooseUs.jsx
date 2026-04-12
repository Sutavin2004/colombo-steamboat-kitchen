import { motion } from 'framer-motion'

const reasons = [
  {
    icon: "🌶️",
    title: "100% Authentic Recipes",
    desc: "Every broth, every spice blend, every dish is rooted in generations of Sri Lankan culinary tradition.",
  },
  {
    icon: "🫕",
    title: "Broths Simmered for Hours",
    desc: "Our signature broths are slow-cooked daily from scratch — you can taste the difference in every sip.",
  },
  {
    icon: "🚗",
    title: "3 Ways to Order",
    desc: "Get your favourite dishes delivered via DoorDash, Uber Eats, or Skip The Dishes — fast and fresh.",
  },
  {
    icon: "💰",
    title: "Meals from Just $6",
    desc: "Incredible Sri Lankan flavour doesn't have to break the bank. Real food, real value, every day.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FDF6EC] py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B1A2A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#E8871A] text-xs font-bold tracking-[0.3em] uppercase font-accent">✦ Why CSBK ✦</span>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1A1209] mt-3">
            The <span className="text-[#6B1A2A]">CSBK</span> Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[#E8871A]/10 hover:shadow-xl hover:border-[#E8871A]/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300" role="img" aria-label={r.title}>
                {r.icon}
              </div>
              <h3 className="font-heading text-xl text-[#1A1209] font-bold mb-3">{r.title}</h3>
              <p className="text-[#2C1810]/60 text-sm leading-relaxed font-body">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
