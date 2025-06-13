// src/components/About/About.jsx
import styles from "./About.module.css";
import imagemPerfil from "../../assets/perfil.png";

export default function About() {
  return (
    <section className={styles.sobre} id="about" data-aos="fade-right">
      <div className="interface">
        <div className={styles.flex}>
          <div className={styles.imgSobre}>
            <img src={imagemPerfil} alt="Foto de perfil" />
          </div>
          <div className={styles.txtSobre}>
            <h2>
              MUITO PRAZER, SOU<span> JOÃO VICTOR DUARTE.</span>
            </h2>
            <p>
              Programador há mais de 8 anos e desenvolvedor web há 5, tenho uma
              trajetória marcada pela união entre criatividade, funcionalidade e
              soluções sob medida. Estou me formando em Engenharia da Computação
              com ênfase em Engenharia de Software, o que fortalece minha
              atuação prática com base acadêmica sólida.
            </p>

            <p>
              Já participei de iniciativas acadêmicas da Universidade Federal do
              Ceará, como a Biblioteca COVID e o portal FormaMus, além de ter
              atuado na área de TI de uma empresa de jogos. Atualmente, também
              trabalho com móveis planejados e estudo impressão 3D, ampliando minha
              entrega para o design de interiores e fabricação personalizada.
            </p>

            <p>
              Sou fundador da DevHub, uma startup voltada para o desenvolvimento
              de soluções inovadoras. Estou sempre em busca de novos desafios,
              ideias e parcerias que inspirem evolução.
            </p>

            <div className={styles.btnSocial}>
              <a href="#">
                <button>
                  <i className="bi bi-github"></i>
                </button>
              </a>
              <a href="#">
                <button>
                  <i className="bi bi-linkedin"></i>
                </button>
              </a>
              <a href="#">
                <button>
                  <i className="bi bi-instagram"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
