// src/components/ContactForm/ContactForm.jsx
import { useState } from 'react'; // 1. Importar useState
import styles from './ContactForm.module.css';

export default function ContactForm() {
  // 2. Gerenciar o estado do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Função para atualizar o estado em cada mudança nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agora você pode usar o objeto `formData` para enviar os dados
    console.log('Dados do formulário:', formData);
    alert(`Obrigado, ${formData.name}! Sua mensagem foi enviada. ✅`);
    
    // 3. Limpar o formulário resetando o estado
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section className={styles.formulario} id="form" data-aos="fade-up">
      <div className="interface">
        <h2 className={styles.titulo}>
          FALA <span>COMIGO:</span>
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* 4. Adicionar labels e conectar com os inputs */}
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.visuallyHidden}>Seu nome completo:</label>
            <input
              type="text"
              id="name"
              name="name" // Essencial para o handleChange
              placeholder="Seu nome completo:"
              value={formData.name} // Controlado pelo estado
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.visuallyHidden}>Seu e-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail:"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.visuallyHidden}>Seu celular:</label>
            <input
              type="tel" // Melhor semântica para telefone
              id="phone"
              name="phone"
              placeholder="Seu celular:"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.visuallyHidden}>Sua mensagem:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* 5. Usar <button> em vez de <input type="submit"> */}
          <button type="submit" className={styles.submitButton}>
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
}