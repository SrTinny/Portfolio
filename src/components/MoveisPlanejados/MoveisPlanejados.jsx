import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./MoveisPlanejados.module.css";

const imagens = [
  "/assets/moveis1.png",
  "/assets/moveis2.png",
  "/assets/moveis3.png",
  "/assets/moveis4.png",
  "/assets/moveis5.png",
  "/assets/moveis6.png",
  "/assets/moveis1.png",
  "/assets/moveis2.png",
  "/assets/moveis3.png",
  "/assets/moveis4.png",
  "/assets/moveis5.png",
  "/assets/moveis6.png",
];

export default function MoveisPlanejados() {
  const [backgroundImage, setBackgroundImage] = useState(imagens[0]);

  return (
    <section id="moveis" className={styles.page}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className={styles.content}>
        <h2 className={styles.titulo}>
          MÓVEIS <span>PLANEJADOS.</span>
        </h2>
        <a
          className={styles.whatsappButton}
          href="https://wa.me/5588998562665"
          target="_blank"
          rel="noreferrer"
        >
          Peça já o seu
        </a>
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 10,
            },
          }}
          className={styles.carousel}
        >
          {imagens.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Projeto ${index + 1}`}
                onClick={() => setBackgroundImage(src)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
