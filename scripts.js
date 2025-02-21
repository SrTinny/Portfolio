document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const menuToggle = document.querySelector(".menu-toggle");
  const menuIcon = menuToggle.querySelector("i");
  const menu = document.querySelector(".menu-desktop.fullscreen");
  const form = document.querySelector("form");

  // 🔹 Alternar Tema (Dark/Light)
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>';
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      themeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>';
    } else {
      localStorage.setItem("theme", "dark");
      themeToggle.innerHTML = '<i class="bi bi-brightness-high"></i>';
    }
  });

  // 🔹 Abrir e Fechar Menu Responsivo
  function toggleMenu() {
    menu.classList.toggle("open");
    menuToggle.classList.toggle("open");
    if (menu.classList.contains("open")) {
      menuIcon.classList.remove("bi-list");
      menuIcon.classList.add("bi-x");
    } else {
      menuIcon.classList.remove("bi-x");
      menuIcon.classList.add("bi-list");
    }
  }

  menuToggle.addEventListener("click", toggleMenu);

  // 🔹 Fechar Menu ao Clicar Fora
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove("open");
      menuToggle.classList.remove("open");
      menuIcon.classList.remove("bi-x");
      menuIcon.classList.add("bi-list");
    }
  });

  // 🔹 Fechar Menu ao Clicar em um Link
  document.querySelectorAll(".menu-desktop a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuToggle.classList.remove("open");
      menuIcon.classList.remove("bi-x");
      menuIcon.classList.add("bi-list");
    });
  });

  // 🔹 Ativar Animações de Scroll (AOS)
  AOS.init({
    duration: 3000,
  });

  // 🔹 Formulário (Feedback ao Enviar)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! ✅");
    form.reset();
  });

  // 🔹 CARROSSEL RESPONSIVO COM AUTO-SCROLL 🔹
  const carousel = document.querySelector(".carousel .flex");
  const slides = document.querySelectorAll(".img-port");
  let currentIndex = 0;
  let autoScroll;
  let itemsPerView = getItemsPerView();

  // Detecta quantos itens devem ser mostrados (Responsivo)
  function getItemsPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth + 10;
    carousel.style.transition = "transform 0.8s ease-in-out";
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    if (currentIndex >= slides.length - itemsPerView) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
  }

  function prevSlide() {
    if (currentIndex === 0) {
      currentIndex = slides.length - itemsPerView;
    } else {
      currentIndex--;
    }
    updateCarousel();
  }

  // 🔥 Auto-scroll automático (2 segundos)
  function startAutoScroll() {
    autoScroll = setInterval(nextSlide, 2000);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
    startAutoScroll();
  }

  startAutoScroll();

  // Atualiza o número de itens ao redimensionar a tela
  window.addEventListener("resize", () => {
    itemsPerView = getItemsPerView();
    if (currentIndex > slides.length - itemsPerView) {
      currentIndex = slides.length - itemsPerView;
    }
    updateCarousel();
  });

  // Eventos dos botões do carrossel com reinício do auto-scroll
  document.querySelector(".arrow-left").addEventListener("click", () => {
    prevSlide();
    stopAutoScroll();
  });
  document.querySelector(".arrow-right").addEventListener("click", () => {
    nextSlide();
    stopAutoScroll();
  });

  // 🔹 CARROSSEL TOUCH (MOBILE) 🔹
  let startX = 0;
  let endX = 0;

  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
      nextSlide();
      stopAutoScroll();
    } else if (startX < endX - 50) {
      prevSlide();
      stopAutoScroll();
    }
  });

  // Inicia o carrossel corretamente ao carregar
  updateCarousel();
});
