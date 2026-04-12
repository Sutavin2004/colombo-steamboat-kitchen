import { motion } from 'framer-motion'
import { info } from '../data/info.js'

const dishes = [
  { name: "Spicy Tamarind Broth", price: "$6.99", emoji: "🍲", tag: "Bestseller", desc: "Bold & tangy, simmered for hours", spice: 3 },
  { name: "Coconut Curry Broth", price: "$6.99", emoji: "🥥", tag: "Fan Favourite", desc: "Creamy, aromatic & rich", spice: 1 },
  { name: "Lamb Slices", price: "$8.99", emoji: "🥩", tag: "Most Ordered", desc: "Tender, marinated Sri Lankan lamb", spice: 2 },
  { name: "Ulundu Vadai", price: "$4.99", emoji: "🍩", tag: "Snack", desc: "Crispy lentil donuts, freshly fried", spice: 0 },
  { name: "Prawn Platter", price: "$10.99", emoji: "🦐", tag: "Premium", desc: "Fresh tiger prawns, steamboat ready", spice: 1 },
  { name: "Samosa (3pc)", price: "$4.99", emoji: "🔺", tag: "Snack", desc: "Flaky, golden, stuffed with spiced filling", spice: 1 },
  { name: "Bone Marrow Broth", price: "$7.99", emoji: "🦴", tag: "New", desc: "Deep, rich, slow-cooked to perfection", spice: 0 },
]

function spiceIcons(level) {
  return level > 0 ? '🌶️'.repeat(level) : '💚 Mild'
}

export default function PopularDishes() {
  return (
    <section className="bg-[#1A1209] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[#E8871A] text-xs font-bold tracking-[0.3em] uppercase font-accent">✦ Customer Favourites ✦</span>
          <h2 className="font-heading text-4xl md:text-5xl text-[#FDF6EC] mt-3">
            Most Popular <span className="text-[#E8871A]">Dishes</span>
          </h2>
          <p className="text-[#F5E6CC]/60 mt-3 font-body">The dishes our regulars can't live without</p>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide snap-container">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="snap-start shrink-0 w-56 bg-[#2C1810] border border-[#C9933A]/20 rounded-2xl p-5 flex flex-col gap-3 hover:border-[#E8871A]/60 hover:shadow-[0_0_30px_rgba(232,135,26,0.15)] transition-all duration-300 group"
            >
              <div className="text-5xl text-center" role="img" aria-label={dish.name}>{dish.emoji}</div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#E8871A] uppercase">{dish.tag}</span>
                <h3 className="font-heading text-[#FDF6EC] font-semibold text-lg leading-tight mt-0.5">{dish.name}</h3>
                <p className="text-[#F5E6CC]/50 text-xs mt-1 font-body">{dish.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#C9933A]/10">
                <span className="text-[#E8871A] font-bold text-lg">{dish.price}</span>
                <span className="text-xs" aria-label={`Spice level: ${dish.spice > 0 ? dish.spice + ' out of 3' : 'mild'}`}>
                  {spiceIcons(dish.spice)}
                </span>
              </div>
              <a
                href={info.doordashURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Order ${dish.name} on DoorDash (opens in new tab)`}
                className="w-full text-center bg-[#E8871A]/10 hover:bg-[#E8871A] text-[#E8871A] hover:text-white border border-[#E8871A]/30 hover:border-[#E8871A] text-xs font-bold py-2 rounded-xl transition-all duration-200"
              >
                Order Now →
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#F5E6CC]/30 text-xs mt-6 font-body">
          Scroll to explore · All items available on DoorDash, Uber Eats &amp; Skip
        </p>
      </div>
    </section>
  )
}
