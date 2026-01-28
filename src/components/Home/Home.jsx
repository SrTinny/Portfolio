// src/components/Home/Home.jsx
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import imagemTopo from "../../assets/logo.png";

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
            Sou um desenvolvedor full-stack focado em transformar conceitos em
            realidade digital. Minha especialidade é construir aplicações web
            completas e sob medida, que unem design funcional, performance e uma
            ótima experiência de usuário.
          </motion.p>
          <motion.p variants={textVariants}>
            Desde landing pages e portfólios interativos até sistemas complexos
            e e-commerces, meu objetivo é entregar soluções eficientes e
            escaláveis, utilizando as tecnologias mais modernas do mercado.
            Vamos construir algo incrível juntos?
          </motion.p>

          {/* Link estilizado como botão, usando classe do módulo */}
          <motion.a
            href="#form"
            className={styles.contactButton}
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em contato
          </motion.a>
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