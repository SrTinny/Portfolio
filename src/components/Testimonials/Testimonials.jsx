// src/components/Testimonials/Testimonials.jsx
import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Aguardando depoimentos de clientes",
    role: "Seus clientes satisfeitos",
    image: "bi bi-star-fill",
    text: "Estou coletando depoimentos de clientes satisfeitos para compartilhar aqui. Seu feedback é muito importante!",
    rating: 5
  },
  {
    id: 2,
    name: "Seu próximo cliente feliz",
    role: "Próximo projeto de sucesso",
    image: "bi bi-heart-fill",
    text: "Sou confiável, entrego no prazo e faço projetos de qualidade. Vamos conversar sobre sua ideia?",
    rating: 5
  },
  {
    id: 3,
    name: "Mais depoimentos em breve",
    role: "Trabalhe comigo e vire case",
    image: "bi bi-hand-thumbs-up-fill",
    text: "Se você trabalhar comigo e gostar dos resultados, estarei feliz em incluir seu depoimento aqui.",
    rating: 5
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials" data-aos="fade-up">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>O QUE CLIENTES <span>DIZEM:</span></h2>
          <p>Feedback de quem confiou em mim para transformar suas ideias</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>
              
              <p className={styles.text}>{testimonial.text}</p>
              
              <div className={styles.author}>
                <div className={styles.avatarPlaceholder}>
                  <i className={testimonial.image}></i>
                </div>
                <div className={styles.info}>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.callout}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.badge}>Pronto para o próximo cliente?</div>
          <h3>Seja o próximo cliente feliz e ganhe um depoimento aqui</h3>
          <p>Trabalho com qualidade, profissionalismo e resultados comprovados.</p>
          <a href="#form" className={styles.ctaButton}>
            Iniciar projeto agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
