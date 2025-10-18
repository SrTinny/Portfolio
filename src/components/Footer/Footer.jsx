// src/components/Footer/Footer.jsx
import { useState } from 'react';
import styles from './Footer.module.css';

// Dados para os links, facilitando a manutenção
const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/sr.tinny/', icon: 'bi bi-instagram' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCeMdFowre6w7T-4gqT05XDw', icon: 'bi bi-youtube' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joao-victor-duarte-0b0bbb240/', icon: 'bi bi-linkedin' },
  { name: 'GitHub', href: 'https://github.com/SrTinny', icon: 'bi bi-github' },
];

const navLinkGroups = [
  [{ name: 'Projetos', href: '#' }, { name: 'Contratar', href: '#' }],
  [{ name: 'Modelagem', href: '#' }, { name: 'Trabalhe Comigo', href: '#' }],
  [{ name: 'Impressões', href: '#' }, { name: 'Contato', href: '#' }],
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Obrigado por se inscrever com o e-mail: ${email}`);
      setEmail(''); // Limpa o campo após o envio
    } else {
      alert('Por favor, digite um e-mail válido.');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h2>João Victor | Dev</h2>
            <p>Fique por dentro das novidades</p>
            <form onSubmit={handleSubscribe} className={styles.form}>
              {/* Adicionando label para acessibilidade */}
              <label htmlFor="newsletter-email" className={styles.visuallyHidden}>
                Digite o seu email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Digite o seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Inscrever</button>
            </form>
          </div>

          <div className={styles.column}>
            <h3>Formas de contato</h3>
            <p>+55 (88) 99856-2665</p>
            <p>victor.eng.dev@gmail.com</p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3>Você pode estar procurando por:</h3>
            {navLinkGroups.map((group, index) => (
              <ul key={index}>
                {group.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className={styles.copy}>
          <p>João Victor Duarte | Dev © {new Date().getFullYear()}</p>
          <p>Realizando seu projeto ❤️</p>
        </div>
      </div>
    </footer>
  );
}