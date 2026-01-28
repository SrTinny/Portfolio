// src/components/About/About.jsx
import styles from "./About.module.css";
import imagemPerfil from "../../assets/perfil.png";

// Estrutura de dados para os links sociais
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/SrTinny",
    icon: "bi bi-github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joao-victor-duarte-0b0bbb240/",
    icon: "bi bi-linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/victor.arteng/",
    icon: "bi bi-instagram",
  },
];

export default function About() {
  return (
    <section className={styles.sobre} id="about" data-aos="fade-right">
      <div className="interface">
        <div className={styles.flex}>
          <div className={styles.imgSobre}>
            <img 
              src={imagemPerfil} 
              alt="Foto de perfil de João Victor Duarte" 
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className={styles.txtSobre}>
            <h2>
              MUITO PRAZER, SOU<span> JOÃO VICTOR DUARTE.</span>
            </h2>
            <p>
              Com mais de 8 anos de experiência em programação e 5 anos
              dedicados ao desenvolvimento web, minha paixão é construir
              soluções digitais que sejam criativas, funcionais e intuitivas.
              Sou um entusiasta de tecnologia e graduando em Engenharia da
              Computação, o que me dá uma base sólida para unir teoria e
              prática, transformando desafios complexos em produtos de alta
              qualidade.
            </p>
            <p>
              Minha jornada inclui a participação em projetos de impacto na
              Universidade Federal do Ceará, como a Biblioteca COVID e o portal
              FormaMus.
            </p>
            <p>
              Estou sempre em busca de novos desafios, colaborações e parcerias
              que impulsionem a evolução tecnológica. Vamos construir o futuro,
              juntos?
            </p>

            <div className={styles.socialLinksContainer}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={`Visitar perfil no ${link.name}`} // Acessibilidade
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}