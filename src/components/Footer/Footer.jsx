import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="interface">
        <div className={styles.lineFooter}>
          <div className={styles.flex}>
            <div className={styles.logoFooter}>
              <img
                src="../../assets/logo.jpg"
                alt="Logo da Tinny DEV"
                width={70}
                height={70}
                className={styles.logoImage}
              />
            </div>
            <div className={styles.btnSocial}>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <button><i className="bi bi-instagram"></i></button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <button><i className="bi bi-youtube"></i></button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <button><i className="bi bi-linkedin"></i></button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <button><i className="bi bi-github"></i></button>
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.lineFooter} ${styles.borda}`}>
          <p>
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:victor.eng.dev@gmail.com">victor.eng.dev@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
