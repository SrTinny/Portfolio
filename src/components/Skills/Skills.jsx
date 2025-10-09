// src/components/Skills/Skills.jsx
import styles from './Skills.module.css';

const skills = [
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
  { name: 'React', icon: 'react/react-original.svg' },
  { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'python/python-original.svg' },
  { name: 'Flutter', icon: 'flutter/flutter-original.svg' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
  { name: 'Prisma', icon: 'prisma/prisma-original.svg' },
  { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original.svg' },
  { name: 'Docker', icon: 'docker/docker-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
];

export default function Skills() {
  return (
    <section className={styles.especialidades} id="skills" data-aos="fade-up">
      <div className="interface">
        <h2 className="titulo">MINHAS <span>ESPECIALIDADES.</span></h2>
        <div className={styles.flex}>
          {skills.map(({ name, icon }) => (
            <div className={styles.especialidadesBox} key={name}>
              <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`} alt={name} />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}