// src/components/Portfolio/Portfolio.jsx
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// 1. Importe o Navigation junto com o Autoplay
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
// 2. (Opcional, mas recomendado) Importe o CSS da navegação
import "swiper/css/navigation";
import styles from "./Portfolio.module.css";

const projetos = [
  {
    titulo: "DevHub",
    imagem: "/assets/devhub.png",
    descricao: "Site da minha startup.",
    link: "https://devhub-lake.vercel.app/",
  },
  {
    titulo: "HidroWatts",
    imagem: "/assets/hidrowatts.png",
    descricao: "Projeto desenvolvido.",
    link: "https://viatopic.netlify.app/",
  },
  {
    titulo: "Imovi",
    imagem: "/assets/imovi.png",
    descricao: "Site de aluguel e venda de imóveis.",
    link: "https://bootstrap-modelo.vercel.app/",
  },
    {
    titulo: "GRID conf",
    imagem: "/assets/gridconf.png",
    descricao: "Modelo de site para conferência de tecnologia.",
    link: "https://gridconf.vercel.app/",
  },
    {
    titulo: "LEX Partners",
    imagem: "/assets/lexpartners.png",
    descricao: "Modelo de site para escritório de advocacia.",
    link: "https://lexpartners.vercel.app/",
  },
    {
    titulo: "Atelier Vita",
    imagem: "/assets/ateliervita.png",
    descricao: "Modelo de site para ateliê de costura.",
    link: "https://ateliervita.vercel.app/",
  },
    {
    titulo: "Aura AI",
    imagem: "/assets/auraai.png",
    descricao: "Modelo de site para empresa de IA.",
    link: "https://auraai-woad.vercel.app/",
  },

 
];

export default function CarrosselProjetos() {
  const swiperRef = useRef(null);

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <h2 className={styles.titulo}>
        MEUS <span>SITES.</span>
      </h2>

      <div
        className={styles.interface}
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <button
          className={styles.arrowLeft}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <i className="bi bi-caret-left" />
        </button>
        <button
          className={styles.arrowRight}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <i className="bi bi-caret-right" />
        </button>

        <Swiper
          // 3. Registre o módulo Navigation aqui
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 5000 }}
          speed={1000}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 4 },
          }}
          className={styles.carousel}
        >
          {projetos.map((projeto, idx) => (
            <SwiperSlide key={idx}>
              <a href={projeto.link} target="_blank" rel="noreferrer">
                <div
                  className={styles.imgPort}
                  style={{ backgroundImage: `url(${projeto.imagem})` }}
                >
                  <div className={styles.overlay}>
                    <div className={styles.projectDetails}>
                      <h2>{projeto.titulo}</h2>
                      <p>{projeto.descricao}</p>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}