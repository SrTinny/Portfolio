// src/components/Header/Header.jsx
import styles from './Header.module.css';
import logo from '../../assets/logo.jpg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.interface}>
        <a href="#" className={styles.logo}>
          <img
            src={logo}
            alt="Logo da Tinny DEV"
            style={{ width: 60, height: 60, borderRadius: '50%' }}
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
          <button id="theme-toggle">
            <i className="bi bi-brightness-high"></i>
          </button>
        </div>

        <div className={styles.btnContato}>
          <a href="#form"><button>Contato</button></a>
        </div>

        <div className={styles.menuToggle}>
          <i className="bi bi-list"></i>
        </div>
      </div>
    </header>
  );
}
