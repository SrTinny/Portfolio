// src/components/Home/Home.jsx
import styles from "./Home.module.css";
import imagemTopo from "../../assets/logo.png";

export default function Home() {
  return (
    <section className={styles.topoDoSite} id="home">
      <div className={`interface ${styles.flex}`}>
        <div className={styles.txtTopoDoSite}>
          <h1>
            TRANSFORMANDO IDEIAS EM SOLUÇÕES DIGITAIS<span>.</span>
          </h1>
          <p>
            Sou um desenvolvedor full-stack focado em transformar conceitos em
            realidade digital. Minha especialidade é construir aplicações web
            completas e sob medida, que unem design funcional, performance e uma
            ótima experiência de usuário.
            <br />
            <br />
            Desde landing pages e portfólios interativos até sistemas complexos
            e e-commerces, meu objetivo é entregar soluções eficientes e
            escaláveis, utilizando as tecnologias mais modernas do mercado.
            Vamos construir algo incrível juntos?
          </p>

          <div className="btn-contato">
            <a href="#form">

              <button>Entre em contato</button>
            </a>
          </div>
        </div>

        <div className={styles.imgTopoSite}>
          <img src={imagemTopo} alt="Foto perfil" />
        </div>
      </div>
    </section>
  );
}
