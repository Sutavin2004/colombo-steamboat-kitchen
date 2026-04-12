import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Promos from './components/Promos'
import Menu from './components/Menu'
import OrderOnline from './components/OrderOnline'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import HoursLocation from './components/HoursLocation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="promos">
        <Promos />
      </section>
      <SectionDivider darkTo={false} />
      <section id="menu">
        <Menu />
      </section>
      <section id="order">
        <OrderOnline />
      </section>
      <SectionDivider flip darkTo />
      <section id="reviews">
        <Reviews />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="location">
        <HoursLocation />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}
