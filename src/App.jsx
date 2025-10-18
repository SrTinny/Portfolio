import { useEffect } from "react";

// Importação dos componentes da página
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

// Hook customizado para o tema
import useThemeToggle from "./hooks/useThemeToggle";

// Estilos e bibliotecas globais
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

export default function App() {
  // 1. Puxa o estado do tema do seu hook customizado.
  // Isso centraliza o controle do tema no componente principal.
  const { isLightMode } = useThemeToggle();

  // Efeito para inicializar a biblioteca de animações (AOS)
  useEffect(() => {
    AOS.init({
      once: true,       // A animação acontece apenas uma vez por elemento
      duration: 800,    // Duração da animação em milissegundos
      offset: 50,       // Inicia a animação 50px antes de o elemento aparecer na tela
    });
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  // 2. Efeito para aplicar a classe do tema no corpo do documento
  // Isso garante que o tema seja aplicado globalmente.
  useEffect(() => {
    const body = document.body;
    if (isLightMode) {
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
    }
    // Este efeito roda toda vez que 'isLightMode' mudar.
  }, [isLightMode]);

  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        <About />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}