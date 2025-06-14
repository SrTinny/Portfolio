import { useState, useEffect } from "react";
import styles from "./MoveisPlanejados.module.css";

const imagens = [
  "/assets/moveis1.png",
  "/assets/moveis2.png",
  "/assets/moveis3.png",
  "/assets/moveis1.png",
  "/assets/moveis2.png",
];

export default function MoveisPlanejados() {
  const [backgroundImage, setBackgroundImage] = useState(imagens[0]);

  return (
    <div className={styles.page}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className={styles.content}>
        <h2 className={styles.titulo}>MÓVEIS <span>PLANEJADOS.</span></h2>
        <a
          className={styles.whatsappButton}
          href="https://wa.me/5588998562665"
          target="_blank"
          rel="noreferrer"
        >
          Peça já o seu
        </a>
      </div>

      <div className={styles.thumbnails}>
        {imagens.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Projeto ${index + 1}`}
            onClick={() => setBackgroundImage(src)}
          />
        ))}
      </div>
    </div>
  );
}
