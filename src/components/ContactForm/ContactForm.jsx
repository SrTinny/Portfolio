// src/components/ContactForm/ContactForm.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configuração EmailJS - SUBSTITUA com suas credenciais
      // 1. Crie uma conta em https://www.emailjs.com/
      // 2. Crie um serviço de email
      // 3. Crie um template com as variáveis: {{from_name}}, {{from_email}}, {{phone}}, {{message}}
      // 4. Substitua os valores abaixo
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',        // Substitua pelo seu Service ID
        'YOUR_TEMPLATE_ID',       // Substitua pelo seu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Não informado',
          message: formData.message,
          to_email: 'victor.eng.dev@gmail.com',
        },
        'YOUR_PUBLIC_KEY'         // Substitua pela sua Public Key
      );

      console.log('Email enviado com sucesso:', result);
      setSubmitStatus('success');
      
      // Limpar formulário após sucesso
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Limpar mensagem de sucesso após 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
      
      // Limpar mensagem de erro após 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.formulario} id="form" data-aos="fade-up">
      <div className="interface">
        <h2 className={styles.titulo}>
          FALA <span>COMIGO!</span>
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.visuallyHidden}>Seu nome completo:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome completo:"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
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
              disabled={isSubmitting}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.visuallyHidden}>Seu celular:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Seu celular:"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
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
              disabled={isSubmitting}
              required
            ></textarea>
          </div>

          {/* Mensagens de feedback */}
          {submitStatus === 'success' && (
            <div className={styles.successMessage}>
              ✅ Mensagem enviada com sucesso! Retornarei em breve.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>
              ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato via email.
            </div>
          )}

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
          </button>
        </form>
      </div>
    </section>
  );
}