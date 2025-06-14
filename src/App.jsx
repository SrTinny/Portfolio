import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import MoveisPlanejados from './components/MoveisPlanejados/MoveisPlanejados'

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        <About />
        <Portfolio />
        <MoveisPlanejados />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
