import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h2>João Victor | Dev</h2>
            <p>Fique por dentro das novidades</p>
            <form className={styles.form}>
              <input type="email" placeholder="Digite o seu email" />
              <button type="submit">Inscrever</button>
            </form>
          </div>

          <div className={styles.column}>
            <h3>Formas de contato</h3>
            <p>+55 (88) 99856-2665</p>
            <p>victor.eng.dev@gmail.com</p>

            <div className={styles.btnSocial}>
            <a
              href="https://www.instagram.com/sr.tinny/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCeMdFowre6w7T-4gqT05XDw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="bi bi-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/joao-victor-duarte-0b0bbb240/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/SrTinny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
          </div>

          <div className={styles.column}>
            <h3>Você pode estar procurando por:</h3>
            <ul>
              <li>
                <a href="#">Projetos</a>
              </li>

              <li>
                <a href="#">Contratar</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#">Modelagem</a>
              </li>

              <li>
                <a href="#">Trabalhe Comigo</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#">Impressões</a>
              </li>

              <li>
                <a href="#">Contato</a>
              </li>
            </ul>

          </div>
        </div>

        <div className={styles.copy}>
          <p>João Victor Duarte | Dev © {new Date().getFullYear()}</p>
          <p>Realizando seu projeto ❤️</p>
        </div>
      </div>
    </footer>
  );
}
