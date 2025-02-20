document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const menuToggle = document.querySelector(".menu-toggle");
  const menuIcon = menuToggle.querySelector("i");
  const menu = document.querySelector(".menu-desktop.fullscreen");

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

  // 🔹 Abrir e Fechar Menu
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
    duration: 1000,
  });
});
