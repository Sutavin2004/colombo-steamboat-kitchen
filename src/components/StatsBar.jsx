import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 1, suffix: "st", label: "Year Anniversary", prefix: "" },
  { value: 200, suffix: "+", label: "Five Star Reviews", prefix: "" },
  { value: 10000, suffix: "+", label: "Happy Customers", prefix: "" },
  { value: 6, suffix: "", label: "Starting Price", prefix: "$" },
]

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatItem({ stat, started }) {
  const count = useCountUp(stat.value, 2000, started)
  return (
    <div className="flex flex-col items-center gap-1 px-8 py-6 border-b md:border-b-0 md:border-r border-[#C9933A]/20 last:border-0">
      <div className="text-4xl md:text-5xl font-heading font-bold text-[#E8871A]">
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-[#F5E6CC]/70 text-sm font-body tracking-wide uppercase text-center">{stat.label}</div>
    </div>
  )
}

export default function StatsBar() {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#2C1810] border-y border-[#C9933A]/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
