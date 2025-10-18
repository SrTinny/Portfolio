// src/components/Portfolio/Portfolio.jsx
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Portfolio.module.css";

// Lista completa de projetos
const projects = [
  {
    title: "DevHub",
    image: "/assets/devhub.png",
    description: "Site da minha startup focado na comunidade de desenvolvedores.",
    link: "https://devhub-lake.vercel.app/",
  },
  {
    title: "HidroWatts",
    image: "/assets/hidrowatts.png",
    description: "Projeto acadêmico para monitoramento de hidrômetros.",
    link: "https://viatopic.netlify.app/",
  },
  {
    title: "Imovi",
    image: "/assets/imovi.png",
    description: "Modelo de site para aluguel e venda de imóveis.",
    link: "https://bootstrap-modelo.vercel.app/",
  },
  {
    title: "GRID conf",
    image: "/assets/gridconf.png",
    description: "Modelo de site para conferência de tecnologia.",
    link: "https://gridconf.vercel.app/",
  },
  {
    title: "LEX Partners",
    image: "/assets/lexpartners.png",
    description: "Modelo de site para escritório de advocacia.",
    link: "https://lexpartners.vercel.app/",
  },
  {
    title: "Atelier Vita",
    image: "/assets/ateliervita.png",
    description: "Modelo de site para ateliê de costura.",
    link: "https://ateliervita.vercel.app/",
  },
  {
    title: "Aura AI",
    image: "/assets/auraai.png",
    description: "Modelo de site para empresa de IA.",
    link: "https://auraai-woad.vercel.app/",
  },
];

export default function Portfolio() {
  const swiperRef = useRef(null);

  return (
    <section className={styles.portfolio} id="portfolio">
      <h2 className={styles.title}>
        MEUS <span>PROJETOS!</span>
      </h2>

      <div
        className={styles.container}
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1000}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          className={styles.carousel}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectCard}
                aria-label={`Ver o projeto ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title}`}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <div className={styles.projectDetails}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Projeto anterior"
        >
          <i className="bi bi-caret-left-fill" />
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Próximo projeto"
        >
          <i className="bi bi-caret-right-fill" />
        </button>
      </div>
    </section>
  );
}