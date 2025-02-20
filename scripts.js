document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = carousel.querySelectorAll(".img-port");
  const prevButton = document.querySelector(".arrow-left");
  const nextButton = document.querySelector(".arrow-right");
  let currentSlide = 0;

  console.log("Número de slides:", slides.length);

  // Função para mostrar o slide atual
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
      if (i === index) {
        slide.classList.add("currentItem");
      } else {
        slide.classList.remove("currentItem");
      }
    });
    console.log("Slide atual:", index);
  }

  function nextSlide() {
    console.log("Clicou em próximo slide");
    if (currentSlide === slides.length - 1) {
      // Se for o último slide, mover o primeiro slide para o final
      carousel.appendChild(slides[0]);
    } else {
      currentSlide++;
    }
    showSlide(currentSlide);
    console.log("Slide atual após nextSlide:", currentSlide);
  }

  function prevSlide() {
    console.log("Clicou em slide anterior");
    if (currentSlide === 0) {
      // Se for o primeiro slide, mover o último slide para o início
      carousel.insertBefore(slides[slides.length - 1], slides[0]);
    } else {
      currentSlide--;
    }
    showSlide(currentSlide);
    console.log("Slide atual após prevSlide:", currentSlide);
  }

  // Adiciona os ouvintes de eventos aos botões de seta
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Mostra o primeiro slide ao carregar a página
  showSlide(currentSlide);
});

function toggleMenu() {
  const menu = document.querySelector(".menu-desktop"); // Seleciona o menu
  if (menu) {
    menu.classList.toggle("fullscreen"); // Alterna a exibição em tela cheia
    menu.classList.toggle("open"); // Alterna o estado de abertura
  }
}

// Fechar o menu ao clicar em um link
const menuLinks = document.querySelectorAll(".menu-desktop a"); // Seleciona todos os links do menu

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".menu-desktop");
    if (menu.classList.contains("open")) {
      menu.classList.remove("fullscreen"); // Remove a classe de tela cheia
      menu.classList.remove("open"); // Fecha o menu
    }
  });
});

AOS.init({
  duration: 1000, // Duração da animação em ms
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o envio padrão
  alert("Mensagem enviada com sucesso!");
  form.reset(); // Limpa os campos do formulário
});

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Verifica o tema salvo no localStorage
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
});

