// src/components/Header/Header.jsx
import styles from "./Header.module.css"
import logo from "../../assets/logo.jpg"
import useThemeToggle from "../../hooks/useThemeToggle"

export default function Header() {
  const { isLightMode, toggleTheme } = useThemeToggle()

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

        <nav className={`${styles.menuDesktop} fullscreen`}>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#skills">Especialidades</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#portfolio">Projetos</a></li>
          </ul>
        </nav>

        <div className={styles.toggleTheme}>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            <i className={`bi ${isLightMode ? "bi-moon-stars" : "bi-brightness-high"}`}></i>
          </button>
        </div>

        <div className="btn-contato">
          <a href="#form">
            <button>Contato</button>
          </a>
        </div>

        <div className={styles.menuToggle}>
          <i className="bi bi-list"></i>
        </div>
      </div>
    </header>
  )
}
