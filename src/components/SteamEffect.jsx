const wisps = [
  { left: '18%', bottom: '45%', height: 60, duration: '3.2s', delay: '0s' },
  { left: '28%', bottom: '50%', height: 80, duration: '4s', delay: '0.6s' },
  { left: '38%', bottom: '48%', height: 55, duration: '3.6s', delay: '1.2s' },
  { left: '50%', bottom: '52%', height: 90, duration: '4.5s', delay: '0.3s' },
  { left: '60%', bottom: '46%', height: 65, duration: '3.8s', delay: '1.8s' },
  { left: '70%', bottom: '50%', height: 75, duration: '3.4s', delay: '0.9s' },
  { left: '80%', bottom: '44%', height: 50, duration: '4.2s', delay: '1.5s' },
  { left: '45%', bottom: '53%', height: 85, duration: '3.9s', delay: '2.1s' },
]

export default function SteamEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {wisps.map((w, i) => (
        <div
          key={i}
          className="steam-wisp"
          style={{
            left: w.left,
            bottom: w.bottom,
            height: `${w.height}px`,
            '--duration': w.duration,
            '--delay': w.delay,
          }}
        />
      ))}
    </div>
  )
}
