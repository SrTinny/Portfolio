// src/components/Home/Home.jsx
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import imagemTopo from "../../assets/logo.png";

const stats = [
  { label: "Anos de experiência", value: "8+" },
  { label: "Projetos entregues", value: "50+" },
  { label: "Clientes satisfeitos", value: "30+" },
];

export default function Home() {
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

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.container} ${styles.flex}`}>
        <motion.div
          className={styles.heroText}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={textVariants}>
            TRANSFORMANDO IDEIAS EM SOLUÇÕES DIGITAIS<span>.</span>
          </motion.h1>
          <motion.p variants={textVariants}>
            Desenvolvedor full-stack com <strong>mais de 8 anos de experiência</strong>. 
            Especialista em construir qualquer tipo de site para qualquer tipo de nicho: 
            páginas web, sistemas complexos, landing pages e e-commerces.
          </motion.p>
          <motion.p variants={textVariants}>
            Entrega de soluções eficientes, escaláveis e orientadas a resultados. 
            Se você tem uma ideia ou precisa resolver um problema digital, 
            transformamos em realidade com qualidade e profissionalismo.
          </motion.p>

          <motion.div className={styles.ctaButtons} variants={textVariants}>
            <a href="#services" className={styles.primaryButton}>
              Ver meus serviços
            </a>
            <a href="#form" className={styles.secondaryButton}>
              Solicitar orçamento grátis
            </a>
          </motion.div>

          <motion.div className={styles.stats} variants={textVariants}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img 
            src={imagemTopo} 
            alt="Logo animado de um desenvolvedor com um cérebro digital" 
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}