// src/components/Header/Header.jsx
import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.jpg";
import useThemeToggle from "../../hooks/useThemeToggle";

export default function Header() {
  const { isLightMode, toggleTheme } = useThemeToggle();
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const alternarMenu = () => {
    setMenuAberto((prev) => !prev);
  };

  // Fechar menu ao clicar fora
  useEffect(() => {
    function handleClickFora(event) {
      if (
        menuAberto &&
        menuRef.current &&
        toggleRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuAberto(false);
      }
    }

    document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, [menuAberto]);

  // Fechar menu ao clicar em um link
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className={styles.header}>
      <div className={styles.interface}>
        <a href="#" className={styles.logo}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 60, height: 60, borderRadius: "50%" }}
          />
        </a>

        <nav
          ref={menuRef}
          className={`${styles.menuDesktop} ${menuAberto ? styles.open : ""}`}
        >

          <ul>
            <li>
              <a href="#home" onClick={fecharMenu}>
                Início
              </a>
            </li>
            <li>
              <a href="#skills" onClick={fecharMenu}>
                Especialidades
              </a>
            </li>
            <li>
              <a href="#about" onClick={fecharMenu}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={fecharMenu}>
                Projetos
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.toggleTheme}>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            <i
              className={`bi ${isLightMode ? "bi-moon-stars" : "bi-brightness-high"
                }`}
            ></i>
          </button>
        </div>

        <div className="btn-contato">
          <a href="#form">
            <button>Contato</button>
          </a>
        </div>

        <div
          className={styles.menuToggle}
          ref={toggleRef}
          onClick={alternarMenu}
        >
          <i className={`bi ${menuAberto ? "bi-x" : "bi-list"}`}></i>
        </div>
      </div>
    </header>
  );
}
