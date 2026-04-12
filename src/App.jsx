import AnnouncementBanner from './components/AnnouncementBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeTicker from './components/MarqueeTicker'
import PopularDishes from './components/PopularDishes'
import About from './components/About'
import Promos from './components/Promos'
import WhyChooseUs from './components/WhyChooseUs'
import StatsBar from './components/StatsBar'
import Menu from './components/Menu'
import OrderOnline from './components/OrderOnline'
import WeeklySpecials from './components/WeeklySpecials'
import Reviews from './components/Reviews'
import NewsletterSignup from './components/NewsletterSignup'
import Gallery from './components/Gallery'
import HoursLocation from './components/HoursLocation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import WhatsAppButton from './components/WhatsAppButton'
import MobileOrderBar from './components/MobileOrderBar'

export default function App() {
  return (
    <div className="font-body">
      <AnnouncementBanner />
      <Navbar />
      <main id="main-content">
        <section id="home">
          <Hero />
        </section>
        <MarqueeTicker />
        <PopularDishes />
        <section id="about">
          <About />
        </section>
        <section id="promos">
          <Promos />
        </section>
        <WhyChooseUs />
        <StatsBar />
        <SectionDivider darkTo={false} />
        <section id="menu">
          <Menu />
        </section>
        <section id="order">
          <OrderOnline />
        </section>
        <WeeklySpecials />
        <SectionDivider flip darkTo />
        <section id="reviews">
          <Reviews />
        </section>
        <NewsletterSignup />
        <section id="gallery">
          <Gallery />
        </section>
        <section id="location">
          <HoursLocation />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileOrderBar />
    </div>
  )
}
