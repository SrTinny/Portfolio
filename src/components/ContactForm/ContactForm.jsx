// src/components/ContactForm/ContactForm.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import AnimatedButton from '../AnimatedButton';
import styles from './ContactForm.module.css';

// Funções de validação
const validators = {
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },
  phone: (value) => {
    // Validação para telefone brasileiro: (XX) 9XXXX-XXXX ou XX 9XXXX-XXXX
    const phoneRegex = /^(\(?[1-9]{2}\)?\s?)?9[0-9]{4}-?[0-9]{4}$/;
    return value === '' || phoneRegex.test(value.replace(/\D/g, ''));
  },
  name: (value) => {
    return value.trim().length >= 3;
  },
  message: (value) => {
    return value.trim().length >= 10;
  },
};

const errorMessages = {
  name: 'Nome deve ter pelo menos 3 caracteres',
  email: 'Email inválido',
  phone: 'Telefone deve estar no formato: (XX) 9XXXX-XXXX',
  message: 'Mensagem deve ter pelo menos 10 caracteres',
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateField = (name, value) => {
    if (validators[name]) {
      return validators[name](value);
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validação em tempo real apenas se o campo foi tocado
    if (touched[name]) {
      const isValid = validateField(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: !isValid ? errorMessages[name] : '',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    const isValid = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !isValid ? errorMessages[name] : '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    Object.keys(formData).forEach((field) => {
      if (field !== 'phone') { // phone é opcional
        const isValid = validateField(field, formData[field]);
        if (!isValid) {
          newErrors[field] = errorMessages[field];
        }
      } else if (formData[field]) { // valida apenas se preenchido
        const isValid = validateField(field, formData[field]);
        if (!isValid) {
          newErrors[field] = errorMessages[field];
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

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
      
      // Mostrar notificação de sucesso
      toast.success('✅ Mensagem enviada com sucesso! Retornarei em breve.');
      
      // Limpar formulário após sucesso
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setTouched({});
      setSubmitStatus('success');

      // Limpar mensagem de sucesso após 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      
      // Mostrar notificação de erro
      toast.error('❌ Erro ao enviar mensagem. Tente novamente ou entre em contato via email.');
      
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
        <motion.h2
          className={styles.titulo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          FALA <span>COMIGO!</span>
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className={styles.form}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.visuallyHidden}>Seu nome completo:</label>
            <motion.input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome completo:"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={errors.name && touched.name ? styles.inputError : ''}
              required
              whileFocus={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            {errors.name && touched.name && (
              <motion.span
                className={styles.errorText}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.name}
              </motion.span>
            )}
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.visuallyHidden}>Seu e-mail:</label>
            <motion.input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail:"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={errors.email && touched.email ? styles.inputError : ''}
              required
              whileFocus={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            {errors.email && touched.email && (
              <motion.span
                className={styles.errorText}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.email}
              </motion.span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.visuallyHidden}>Seu celular:</label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Seu celular:"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={errors.phone && touched.phone ? styles.inputError : ''}
              whileFocus={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            {errors.phone && touched.phone && (
              <motion.span
                className={styles.errorText}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.phone}
              </motion.span>
            )}
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.visuallyHidden}>Sua mensagem:</label>
            <motion.textarea
              id="message"
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={errors.message && touched.message ? styles.inputError : ''}
              required
              whileFocus={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            ></motion.textarea>
            {errors.message && touched.message && (
              <motion.span
                className={styles.errorText}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.message}
              </motion.span>
            )}
          </div>

          {/* Mensagens de feedback */}
          {submitStatus === 'success' && (
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              ✅ Mensagem enviada com sucesso! Retornarei em breve.
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div
              className={styles.errorMessage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato via email.
            </motion.div>
          )}

          <AnimatedButton
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
          </AnimatedButton>
        </motion.form>
      </div>
    </section>
  );
}