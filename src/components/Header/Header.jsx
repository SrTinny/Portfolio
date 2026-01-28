// src/components/Header/Header.jsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";
import logo from "../../assets/logo.jpg";
import useThemeToggle from "../../hooks/useThemeToggle";

// 1. Abstrair os links para um array de objetos
const navLinks = [
  { href: "#home", text: "Início" },
  { href: "#services", text: "Serviços" },
  { href: "#skills", text: "Especialidades" },
  { href: "#portfolio", text: "Projetos" },
  { href: "#testimonials", text: "Depoimentos" },
  { href: "#faq", text: "FAQ" },
];

export default function Header() {
  const { isLightMode, toggleTheme } = useThemeToggle();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const menuVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className={styles.header}>
      <div className={styles.interface}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          <img
            src={logo}
            alt="Logo de João Victor Duarte"
            className={styles.logoImage}
          />
        </a>

        <nav
          ref={menuRef}
          className={`${styles.menuNav} ${isMenuOpen ? styles.open : ""}`}
        >
          <motion.ul
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            variants={menuVariants}
          >
            {/* 2. Mapear os links dinamicamente */}
            {navLinks.map((link) => (
              <motion.li key={link.href} variants={itemVariants}>
                <a href={link.href} onClick={closeMenu}>
                  {link.text}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          {/* 3. Botão de contato estilizado como link */}
          <motion.a
            href="#form"
            className={styles.contactButton}
            onClick={closeMenu}
            initial={{ opacity: 1 }}
            animate={isMenuOpen ? { opacity: 1 } : { opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            Contato
          </motion.a>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Ativar modo ${isLightMode ? 'escuro' : 'claro'}`} // Acessibilidade
          >
            <i className={`bi ${isLightMode ? "bi-moon-stars" : "bi-brightness-high"}`}></i>
          </button>

          {/* 4. Usar <button> para o toggle do menu */}
          <button
            className={styles.menuToggle}
            ref={toggleRef}
            onClick={toggleMenu}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen} // Acessibilidade
          >
            <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}