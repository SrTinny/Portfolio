// src/components/Portfolio/Portfolio.jsx
import { useRef, useState } from "react";
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
    title: "Monitoramento Ar-Condicionado IoT",
    description:
      "Sistema full-stack para controle e monitoramento de ar-condicionado via IoT com ESP32, composto por frontend em React/Vite, backend em Node.js/Express, persistência via Prisma/PostgreSQL, autenticação JWT, controle de acesso por papéis (Admin/User), agendamento automático de comandos e comunicação firmware-backend por heartbeat.",
    link: "https://sistema-de-monitoramento-de-ar-cond.vercel.app/",
  },
  {
    title: "Joao Victor Archviz",
    description:
      "Projeto desenvolvido para portfolio archviz profissional com interface limpa e conversão focada em contato direto.",
    link: "https://joao-victor-archviz.vercel.app/",
  },
  {
    title: "UX Software",
    description:
      "Loja demo full-stack construída com Next.js (frontend) e Express + Prisma (backend). Projeto focado em experiências de UI/UX, com gerenciamento de produtos, categorias livres para admin, carrinho e páginas de suporte; ideal para prototipagem e testes de integração.",
    link: "https://ux-software.vercel.app/",
  },
];

export default function Portfolio() {
  const swiperRef = useRef(null);
  const [previewLoaded, setPreviewLoaded] = useState({});

  const handlePreviewLoad = (projectTitle) => {
    setPreviewLoaded((current) => ({
      ...current,
      [projectTitle]: true,
    }));
  };

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
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectCard}
                aria-label={`Ver o projeto ${project.title}`}
              >
                <div className={styles.previewLayer}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Screenshot do projeto ${project.title}`}
                      className={styles.projectImage}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div
                      className={styles.projectImageFallback}
                      aria-hidden="true"
                    />
                  )}
                  <iframe
                    src={project.link}
                    title={`Pré-visualização ao vivo do projeto ${project.title}`}
                    className={`${styles.projectIframe} ${
                      previewLoaded[project.title] ? styles.projectIframeVisible : ""
                    }`}
                    loading="lazy"
                    onLoad={() => handlePreviewLoad(project.title)}
                    tabIndex={-1}
                  />
                </div>
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