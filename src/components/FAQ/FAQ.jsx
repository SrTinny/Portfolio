// src/components/FAQ/FAQ.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./FAQ.module.css";

const faqs = [
  {
    id: 1,
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer: "O prazo depende da complexidade e escopo do projeto. Uma landing page simples leva de 1-2 semanas, um sistema customizado pode levar de 4-8 semanas. Sempre acordamos prazos realistas desde o início."
  },
  {
    id: 2,
    question: "Qual é o valor para um projeto?",
    answer: "Cada projeto é único! O preço varia conforme funcionalidades, complexidade e tempo estimado. Posso trabalhar com diferentes modelos: projeto fixo, tempo e material, ou por hora. Fazemos uma avaliação gratuita inicialmente."
  },
  {
    id: 3,
    question: "Você oferece manutenção e suporte após o lançamento?",
    answer: "Sim! Ofereço pacotes de suporte e manutenção pós-lançamento. Posso acompanhar por 30 dias gratuitos incluindo correções de bugs, e ofereço planos de suporte contínuo depois."
  },
  {
    id: 4,
    question: "Posso solicitar mudanças durante o desenvolvimento?",
    answer: "Absolutamente! Trabalho em sprints e você terá acompanhamento constante. Pequenas mudanças são absorvidas no projeto, mudanças significativas são avaliadas para ajuste de prazo/valor."
  },
  {
    id: 5,
    question: "Quais tecnologias você usa?",
    answer: "Trabalho principalmente com React, Node.js, Python, SQL/NoSQL. Escolho as melhores tecnologias para cada projeto, sempre mantendo qualidade, performance e manutenibilidade em mente."
  },
  {
    id: 6,
    question: "Posso ver exemplos de trabalhos anteriores?",
    answer: "Sim! Tenho um portfólio com vários projetos já realizados. Também posso compartilhar referências e estudos de caso dos meus trabalhos."
  },
  {
    id: 7,
    question: "Como funciona o processo de contratação?",
    answer: "1) Conversa inicial (grátis) onde entendo suas necessidades; 2) Proposta com escopo, prazo e valor; 3) Início do desenvolvimento com reuniões semanais; 4) Lançamento e suporte."
  },
  {
    id: 8,
    question: "Você trabalha com empresas internacionais?",
    answer: "Sim! Trabalho com clientes em qualquer lugar do mundo. Posso me comunicar em português e inglês, e adapto horários para reuniões conforme necessário."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className={styles.faq} id="faq" data-aos="fade-up">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>PERGUNTAS <span>FREQUENTES:</span></h2>
          <p>Respostas para as dúvidas mais comuns de clientes</p>
        </motion.div>

        <motion.div
          className={styles.faqList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className={`${styles.faqItem} ${activeId === faq.id ? styles.active : ""}`}
              variants={itemVariants}
              onClick={() => toggleFAQ(faq.id)}
            >
              <button className={styles.question}>
                <span>{faq.question}</span>
                <i className={`bi ${activeId === faq.id ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
              </button>
              <motion.div
                className={styles.answer}
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeId === faq.id ? 1 : 0,
                  height: activeId === faq.id ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.bottomCTA}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>Ainda tem dúvidas?</p>
          <a href="#form" className={styles.contactLink}>
            Entre em contato comigo →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
