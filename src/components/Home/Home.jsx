// src/components/Home/Home.jsx
import styles from "./Home.module.css";
import imagemTopo from "../../assets/logo.png";

export default function Home() {
  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.container} ${styles.flex}`}>
        <div className={styles.heroText}>
          <h1>
            TRANSFORMANDO IDEIAS EM SOLUÇÕES DIGITAIS<span>.</span>
          </h1>
          <p>
            Sou um desenvolvedor full-stack focado em transformar conceitos em
            realidade digital. Minha especialidade é construir aplicações web
            completas e sob medida, que unem design funcional, performance e uma
            ótima experiência de usuário.
          </p>
          <p>
            Desde landing pages e portfólios interativos até sistemas complexos
            e e-commerces, meu objetivo é entregar soluções eficientes e
            escaláveis, utilizando as tecnologias mais modernas do mercado.
            Vamos construir algo incrível juntos?
          </p>

          {/* Link estilizado como botão, usando classe do módulo */}
          <a href="#form" className={styles.contactButton}>
            Entre em contato
          </a>
        </div>

        <div className={styles.heroImage}>
          <img 
            src={imagemTopo} 
            alt="Logo animado de um desenvolvedor com um cérebro digital" 
          />
        </div>
      </div>
    </section>
  );
}