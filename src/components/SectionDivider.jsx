export default function SectionDivider({ flip = false, darkTo = false }) {
  return (
    <div className="relative w-full overflow-hidden leading-none" style={{ height: '60px' }}>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={darkTo ? '#1A1209' : '#2C1810'}
        />
      </svg>
      <div className="tamil-border-top absolute top-0 left-0 w-full" />
    </div>
  )
}
