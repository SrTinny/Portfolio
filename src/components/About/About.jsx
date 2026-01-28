// src/components/About/About.jsx
import { motion } from "framer-motion";
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

const differentials = [
  {
    icon: "bi bi-lightning-fill",
    title: "Versatilidade",
    description: "Consigo fazer qualquer tipo de site para qualquer nicho"
  },
  {
    icon: "bi bi-speedometer2",
    title: "Performance",
    description: "Código otimizado e sites rápidos que convertem"
  },
  {
    icon: "bi bi-shield-check",
    title: "Qualidade",
    description: "Testes, boas práticas e código escalável"
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className={styles.sobre} id="about" data-aos="fade-right">
        <div className="interface">
          <div className={styles.flex}>
            <motion.div
              className={styles.imgSobre}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={imagemPerfil} 
                alt="Foto de perfil de João Victor Duarte" 
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div
              className={styles.txtSobre}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants}>
                MUITO PRAZER, SOU<span> JOÃO VICTOR DUARTE.</span>
              </motion.h2>
              <motion.p variants={itemVariants}>
                Com mais de 8 anos de experiência em programação e 5 anos
                dedicados ao desenvolvimento web, minha paixão é construir
                soluções digitais que sejam criativas, funcionais e intuitivas.
                Sou um entusiasta de tecnologia e graduando em Engenharia da
                Computação, o que me dá uma base sólida para unir teoria e
                prática, transformando desafios complexos em produtos de alta
                qualidade.
              </motion.p>
              <motion.p variants={itemVariants}>
                Minha jornada inclui a participação em projetos de impacto na
                Universidade Federal do Ceará, como a Biblioteca COVID e o portal
                FormaMus.
              </motion.p>
              <motion.p variants={itemVariants}>
                Estou sempre em busca de novos desafios, colaborações e parcerias
                que impulsionem a evolução tecnológica. Vamos construir o futuro,
                juntos?
              </motion.p>

              <motion.div
                className={styles.socialLinksContainer}
                variants={itemVariants}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={`Visitar perfil no ${link.name}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={link.icon}></i>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className={styles.differentials} data-aos="fade-up">
        <div className="interface">
          <motion.h3
            className={styles.diffTitle}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            POR QUE <span>ME ESCOLHER</span> PARA SEU PROJETO:
          </motion.h3>

          <div className={styles.diffGrid}>
            {differentials.map((diff, index) => (
              <motion.div
                key={index}
                className={styles.diffCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.diffIcon}>
                  <i className={diff.icon}></i>
                </div>
                <h4>{diff.title}</h4>
                <p>{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}