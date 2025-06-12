import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="interface">
        <div className={styles.lineFooter}>
          <div className={styles.flex}>
            <div className={styles.logoFooter}>
              <img
                src="/images/logo.jpg"
                alt="Logo da Tinny DEV"
                style={{ width: 70, height: 70, borderRadius: '50%' }}
              />
            </div>
            <div className={styles.btnSocial}>
              <a href="#"><button><i className="bi bi-instagram"></i></button></a>
              <a href="#"><button><i className="bi bi-youtube"></i></button></a>
              <a href="#"><button><i className="bi bi-linkedin"></i></button></a>
              <a href="#"><button><i className="bi bi-github"></i></button></a>
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
