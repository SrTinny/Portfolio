// src/hooks/useUIEffects.js
import { useEffect } from 'react'
import AOS from 'aos'

export default function useUIEffects() {
  useEffect(() => {
    const body = document.body
    const themeToggle = document.getElementById('theme-toggle')
    const menuToggle = document.querySelector('.menu-toggle')
    const menuIcon = menuToggle?.querySelector('i')
    const menu = document.querySelector('.menu-desktop.fullscreen')
    const form = document.querySelector('form')
    const carousel = document.querySelector('.carousel .flex')
    const slides = document.querySelectorAll('.img-port')

    // 🔹 Tema
    if (localStorage.getItem('theme') === 'light') {
      body.classList.add('light-mode')
      themeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>'
    }

    themeToggle?.addEventListener('click', () => {
      body.classList.toggle('light-mode')
      if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light')
        themeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>'
      } else {
        localStorage.setItem('theme', 'dark')
        themeToggle.innerHTML = '<i class="bi bi-brightness-high"></i>'
      }
    })

    // 🔹 Menu Responsivo
    const toggleMenu = () => {
      menu?.classList.toggle('open')
      menuToggle?.classList.toggle('open')
      const isOpen = menu?.classList.contains('open')
      menuIcon?.classList.toggle('bi-list', !isOpen)
      menuIcon?.classList.toggle('bi-x', isOpen)
    }

    menuToggle?.addEventListener('click', toggleMenu)

    document.addEventListener('click', (e) => {
      if (!menu?.contains(e.target) && !menuToggle?.contains(e.target)) {
        menu?.classList.remove('open')
        menuToggle?.classList.remove('open')
        menuIcon?.classList.add('bi-list')
        menuIcon?.classList.remove('bi-x')
      }
    })

    document.querySelectorAll('.menu-desktop a').forEach((link) =>
      link.addEventListener('click', () => {
        menu?.classList.remove('open')
        menuToggle?.classList.remove('open')
        menuIcon?.classList.add('bi-list')
        menuIcon?.classList.remove('bi-x')
      })
    )

    // 🔹 Animações AOS
    AOS.init({ duration: 3000 })

    // 🔹 Formulário
    form?.addEventListener('submit', (e) => {
      e.preventDefault()
      alert('Mensagem enviada com sucesso! ✅')
      form.reset()
    })

    // 🔹 Carrossel
    let currentIndex = 0
    let autoScroll
    let itemsPerView = getItemsPerView()

    function getItemsPerView() {
      if (window.innerWidth < 768) return 1
      if (window.innerWidth < 1024) return 2
      return 3
    }

    function updateCarousel() {
      const slideWidth = slides[0]?.offsetWidth + 10 || 0
      carousel.style.transition = 'transform 0.8s ease-in-out'
      carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }

    function nextSlide() {
      currentIndex = (currentIndex >= slides.length - itemsPerView) ? 0 : currentIndex + 1
      updateCarousel()
    }

    function prevSlide() {
      currentIndex = (currentIndex === 0) ? slides.length - itemsPerView : currentIndex - 1
      updateCarousel()
    }

    function startAutoScroll() {
      autoScroll = setInterval(nextSlide, 2000)
    }

    function stopAutoScroll() {
      clearInterval(autoScroll)
      startAutoScroll()
    }

    startAutoScroll()
    updateCarousel()

    window.addEventListener('resize', () => {
      itemsPerView = getItemsPerView()
      if (currentIndex > slides.length - itemsPerView) {
        currentIndex = slides.length - itemsPerView
      }
      updateCarousel()
    })

    document.querySelector('.arrow-left')?.addEventListener('click', () => {
      prevSlide()
      stopAutoScroll()
    })

    document.querySelector('.arrow-right')?.addEventListener('click', () => {
      nextSlide()
      stopAutoScroll()
    })

    // Touch support
    let startX = 0
    let endX = 0

    carousel?.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX
    })

    carousel?.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX
      if (startX > endX + 50) {
        nextSlide()
        stopAutoScroll()
      } else if (startX < endX - 50) {
        prevSlide()
        stopAutoScroll()
      }
    })
  }, [])
}
