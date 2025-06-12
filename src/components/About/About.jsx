// src/components/About/About.jsx
import styles from './About.module.css';
import imagemPerfil from '../../assets/perfil.png';

export default function About() {
  return (
    <section className={styles.sobre} id="about" data-aos="fade-right">
      <div className="interface">
        <div className={styles.flex}>
          <div className={styles.imgSobre}>
            <img src={imagemPerfil} alt="Foto de perfil" />
          </div>
          <div className={styles.txtSobre}>
            <h2>MUITO PRAZER, <span>SOU JOÃO VICTOR.</span></h2>
            <p>
              Desenvolvedor full stack apaixonado por tecnologia e inovação. Com
              experiência em projetos web e mobile, busco sempre aprimorar meus
              conhecimentos e entregar soluções criativas e eficientes.
            </p>
            <p>
              Atuo com tecnologias como React, Node.js, Java, Python e muito mais.
              Acredito na colaboração e na aprendizagem contínua como chave para
              o sucesso.
            </p>
            <div className={styles.btnSocial}>
              <a href="#"><button><i className="bi bi-github"></i></button></a>
              <a href="#"><button><i className="bi bi-linkedin"></i></button></a>
              <a href="#"><button><i className="bi bi-instagram"></i></button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
