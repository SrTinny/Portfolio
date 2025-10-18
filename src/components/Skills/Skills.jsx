// src/components/Skills/Skills.jsx
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
  return (
    // 2. Classes renomeadas e modularizadas
    <section className={styles.skills} id="skills" data-aos="fade-up">
      <div className={styles.container}>
        <h2 className={styles.title}>MINHAS <span>ESPECIALIDADES.</span></h2>
        <div className={styles.skillsGrid}>
          {skills.map(({ name, icon }) => (
            <div className={styles.skillCard} key={name}>
              <img 
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`} 
                alt={`${name} logo`} 
              />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}