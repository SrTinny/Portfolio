// src/components/Services/Services.jsx
import { motion } from "framer-motion";
import styles from "./Services.module.css";

const services = [
  {
    id: 1,
    icon: "bi bi-globe",
    title: "Páginas Web",
    description: "Sites corporativos, portfolios e landing pages otimizadas para conversão. Design responsivo que funciona em qualquer dispositivo.",
    features: [
      "Design moderno e responsivo",
      "Otimizado para SEO",
      "Performance rápida",
      "Integração com APIs"
    ]
  },
  {
    id: 2,
    icon: "bi bi-gear",
    title: "Sistemas Web",
    description: "Aplicações web completas e escaláveis. Desde dashboards administrativos até plataformas complexas com múltiplos usuários.",
    features: [
      "Arquitetura escalável",
      "Banco de dados robusto",
      "Autenticação segura",
      "Painel administrativo"
    ]
  },
  {
    id: 3,
    icon: "bi bi-shop",
    title: "Landing Pages & E-commerce",
    description: "Páginas de conversão otimizadas e lojas online prontas para vender. Integração com pagamentos e gestão de produtos.",
    features: [
      "Checkout otimizado",
      "Carrinho de compras",
      "Gateway de pagamento",
      "Análise de vendas"
    ]
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

export default function Services() {
  return (
    <section className={styles.services} id="services" data-aos="fade-up">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>O QUE <span>OFEREÇO:</span></h2>
          <p>Qualquer tipo de site, para qualquer tipo de nicho. Principais serviços:</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
              }}
            >
              <div className={styles.iconWrapper}>
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <i className="bi bi-check-circle-fill"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p>Não vê seu nicho? Sem problema!</p>
          <h3>Consigo adaptar para qualquer tipo de projeto.</h3>
          <a href="#form" className={styles.ctaButton}>
            Vamos conversar sobre seu projeto
          </a>
        </motion.div>
      </div>
    </section>
  );
}
