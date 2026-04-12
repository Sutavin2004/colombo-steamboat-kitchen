import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { info } from '../data/info'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Promos', href: '#promos' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [orderOpen, setOrderOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const orderRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (orderRef.current && !orderRef.current.contains(e.target)) {
        setOrderOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#1A1209]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center group"
            >
              <img
                src="https://colombosteamboat.ca/wp-content/uploads/2025/06/CSBK-Logo-PNG1.png"
                alt="Colombo Steam Boat Kitchen Logo"
                className="h-14 w-auto object-contain"
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#E8871A]'
                      : 'text-[#F5E6CC]/80 hover:text-[#FDF6EC]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Order Dropdown + Hamburger */}
            <div className="flex items-center gap-3">
              {/* Order Now Dropdown */}
              <div className="relative" ref={orderRef}>
                <button
                  onClick={() => setOrderOpen(!orderOpen)}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#E8871A] to-[#C9933A] text-[#1A1209] px-4 py-2 rounded-full text-sm font-semibold hover:shadow-[0_0_20px_rgba(232,135,26,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Order Now
                  <FiChevronDown className={`transition-transform duration-200 ${orderOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {orderOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-52 rounded-xl overflow-hidden shadow-2xl border border-[#C9933A]/20"
                      style={{ background: '#1A1209' }}
                    >
                      <a
                        href={info.doordashURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#FF3008]/10 transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-lg bg-[#FF3008] flex items-center justify-center text-white text-xs font-bold">DD</span>
                        <span className="text-[#FDF6EC] text-sm font-medium group-hover:text-white">DoorDash</span>
                      </a>
                      <div className="border-t border-[#C9933A]/10" />
                      <a
                        href={info.uberEatsURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#06C167]/10 transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-lg bg-[#06C167] flex items-center justify-center text-[#1A1209] text-xs font-bold">UE</span>
                        <span className="text-[#FDF6EC] text-sm font-medium group-hover:text-white">Uber Eats</span>
                      </a>
                      <div className="border-t border-[#C9933A]/10" />
                      <a
                        href={info.skipTheDishesURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#E2001A]/10 transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-lg bg-[#E2001A] flex items-center justify-center text-white text-[9px] font-bold">SKIP</span>
                        <span className="text-[#FDF6EC] text-sm font-medium group-hover:text-white">SkipTheDishes</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-[#FDF6EC] hover:text-[#E8871A] transition-colors"
              >
                {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: '#1A1209' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-heading text-3xl text-[#FDF6EC] hover:text-[#E8871A] transition-colors duration-200 py-2"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-3 mt-8 px-6"
              >
                <a
                  href={info.doordashURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF3008] text-white px-5 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
                >
                  DoorDash
                </a>
                <a
                  href={info.uberEatsURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#06C167] text-[#1A1209] px-5 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
                >
                  Uber Eats
                </a>
                <a
                  href={info.skipTheDishesURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E2001A] text-white px-5 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
                >
                  Skip
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
