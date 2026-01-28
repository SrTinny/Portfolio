// src/components/Portfolio/Portfolio.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
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
    description: "Plataforma focada na comunidade de desenvolvedores.",
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
        MEUS <span>PROJETOS:</span>
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
          {projects.map((project, index) => (
            <SwiperSlide key={project.title}>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectCard}
                aria-label={`Ver o projeto ${project.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <img
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title}`}
                  className={styles.projectImage}
                  loading="lazy"
                  decoding="async"
                />
                <motion.div
                  className={styles.overlay}
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={styles.projectDetails}
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </motion.div>
                </motion.div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Projeto anterior"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="bi bi-caret-left-fill" />
        </motion.button>
        <motion.button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Próximo projeto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="bi bi-caret-right-fill" />
        </motion.button>
      </div>
    </section>
  );
}