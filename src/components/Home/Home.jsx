// src/components/Home/Home.jsx
import styles from "./Home.module.css";
import imagemTopo from "../../assets/logo.jpg";

export default function Home() {
  return (
    <section className={styles.topoDoSite} id="home">
      <div className={`interface ${styles.flex}`}>
        <div className={styles.txtTopoDoSite}>
          <h1>
            CRIATIVIDADE EM EXPERIÊNCIAS DIGITAIS<span>.</span>
          </h1>
          <p>
            Seja bem-vindo. Este espaço foi criado para oferecer soluções
            profissionais e versáteis nas áreas de desenvolvimento web, design
            de interiores e mobiliário planejado. Aqui você encontra serviços
            completos de criação de sites — como landing pages, portfólios,
            e-commerces e sistemas personalizados — desenvolvidos com foco em
            performance, estética e funcionalidade. Também atuo com projetos de
            interiores e fabricação de móveis sob medida, integrando tecnologia
            e design para transformar ambientes. Também trabalho com novas
            possibilidades na área da impressão 3D, expandindo ainda mais nossa
            capacidade de materializar ideias. Explore as possibilidades e
            descubra como podemos construir algo único para você.
          </p>

          <div className="btn-contato">
            <a href="#">
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
