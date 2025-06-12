// src/components/Skills/Skills.jsx
import styles from './Skills.module.css';

const skills = [
  { name: 'Java', icon: 'java/java-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
  { name: 'React', icon: 'react/react-original.svg' },
  { name: 'PHP', icon: 'php/php-original.svg' },
  { name: 'SQL', icon: 'azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'Node', icon: 'nodejs/nodejs-original.svg' },
  { name: 'Bootstrap', icon: 'bootstrap/bootstrap-original.svg' },
  { name: 'JavaScript', icon: 'javascript/javascript-plain.svg' },
  { name: 'C', icon: 'c/c-original.svg' },
  { name: 'Python', icon: 'python/python-original.svg' },
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
