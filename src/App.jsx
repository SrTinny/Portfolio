import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import ReactGA from "react-ga4";

// Importação dos componentes da página
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

// Hook customizado para o tema
import useThemeToggle from "./hooks/useThemeToggle";

// Estilos e bibliotecas globais
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

// Inicializar Google Analytics
// Substitua 'YOUR_GA_ID' pelo seu ID do Google Analytics 4
const GA_ID = import.meta.env.VITE_GA_ID || null;
if (GA_ID) {
  ReactGA.initialize(GA_ID);
}

export default function App() {
  const { isLightMode } = useThemeToggle();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isLightMode) {
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
    }
  }, [isLightMode]);

  return (
    <ErrorBoundary>
      <Header />
      <main>
        <Home />
        <Skills />
        <About />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Toaster para notificações */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--color-surface)',
            color: 'var(--color-text-primary)',
            border: '1px solid var(--color-border)',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            padding: '1rem',
          },
          success: {
            style: {
              background: '#d4edda',
              color: '#155724',
              border: '1px solid #c3e6cb',
            },
            icon: '✅',
          },
          error: {
            style: {
              background: '#f8d7da',
              color: '#721c24',
              border: '1px solid #f5c6cb',
            },
            icon: '❌',
          },
        }}
      />
    </ErrorBoundary>
  );
}