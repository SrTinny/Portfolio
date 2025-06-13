import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h2>tinny.dev</h2>
            <p>Fique por dentro das novidades</p>
            <form className={styles.form}>
              <input type="email" placeholder="Digite o seu email" />
              <button type="submit">Inscrever</button>
            </form>
          </div>

          <div className={styles.column}>
            <h3>Formas de contato</h3>
            <p>(88) 99999-999</p>
            <p>victor.eng.dev@gmail.com</p>
          </div>

          <div className={styles.column}>
            <h3>Você pode estar procurando por:</h3>
            <ul>
              <li><a href="#">Projetos</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>

          <div className={styles.btnSocial}>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div className={styles.copy}>
          <p>tinny.dev © {new Date().getFullYear()}</p>
          <p>Feito com ❤️</p>
        </div>
      </div>
    </footer>
  );
}
  