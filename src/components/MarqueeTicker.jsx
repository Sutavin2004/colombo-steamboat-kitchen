const items = [
  "🍲 Authentic Sri Lankan Steamboat",
  "🌶️ Bold Spices · Rich Broths",
  "💰 Meals From $6",
  "🚗 Order on DoorDash",
  "🛵 Order on Uber Eats",
  "⚡ Order on Skip The Dishes",
  "📍 Scarborough · Eglinton Ave E",
  "🎉 Celebrating Our 1st Anniversary",
  "🥥 Coconut · Tamarind · Bone Marrow Broths",
  "🍢 Rolls · Rotty · Vadai · Samosa",
]

export default function MarqueeTicker() {
  const doubled = [...items, ...items]
  return (
    <div className="bg-[#E8871A] text-[#1A1209] py-2.5 overflow-hidden whitespace-nowrap select-none" aria-hidden="true">
      <div className="flex animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-6 text-sm font-bold font-body tracking-wide shrink-0">
            {item}
            <span className="text-[#6B1A2A] mx-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
