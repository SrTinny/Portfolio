// src/components/Skills/Skills.jsx
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

// 1. Lista de habilidades expandida
const skills = [
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
  { name: 'React', icon: 'react/react-original.svg' },
  { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
  { name: 'Java', icon: 'java/java-original.svg' },
  { name: 'Spring', icon: 'spring/spring-original.svg' },
  { name: 'Python', icon: 'python/python-original.svg' },
  { name: 'Flutter', icon: 'flutter/flutter-original.svg' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original-wordmark.svg' },
  { name: 'Prisma', icon: 'prisma/prisma-original.svg' },
  { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original.svg' },
  { name: 'Sass', icon: 'sass/sass-original.svg' },
  { name: 'Docker', icon: 'docker/docker-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
  { name: 'Firebase', icon: 'firebase/firebase-plain.svg' },
  { name: 'NPM', icon: 'npm/npm-original-wordmark.svg' },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    // 2. Classes renomeadas e modularizadas
    <section className={styles.skills} id="skills" data-aos="fade-up">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          MINHAS <span>ESPECIALIDADES.</span>
        </motion.h2>
        <motion.div
          className={styles.skillsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {skills.map(({ name, icon }, index) => (
            <motion.div
              className={styles.skillCard}
              key={name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 102, 255, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`}
                alt={`${name} logo`}
                loading="lazy"
                decoding="async"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <motion.h3
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {name}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}