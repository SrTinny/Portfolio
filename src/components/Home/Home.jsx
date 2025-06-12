// src/components/Home/Home.jsx
import styles from './Home.module.css';
import imagemTopo from '../../assets/logo.jpg';

export default function Home() {
  return (
    <section className={styles.topoDoSite} id="home">
      <div className={`interface ${styles.flex}`}>
        <div className={styles.txtTopoDoSite}>
          <h1>
            CRIATIVIDADE EM EXPERIÊNCIAS DIGITAIS<span>.</span>
          </h1>
          <p>
            "Seja bem-vindo à inovação digital do futuro! Aqui, na nossa plataforma, reunimos os talentos mais criativos e os especialistas mais experientes em desenvolvimento, tecnologia e tudo o que envolve o universo digital. Estamos prontos para transformar suas ideias em realidade, oferecendo soluções personalizadas e inovadoras para impulsionar o seu negócio. Junte-se a nós e embarque nessa jornada de descoberta, aprendizado e crescimento no mundo fascinante da tecnologia!"
          </p>
          <div className="btn-contato">
            <a href="#"><button>Entre em contato</button></a>
          </div>
        </div>

        <div className={styles.imgTopoSite}>
          <img src={imagemTopo} alt="Foto perfil" />
        </div>
      </div>
    </section>
  );
}
