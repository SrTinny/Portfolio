import styles from './ContactForm.module.css';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! ✅');
    e.target.reset();
  };

  return (
    <section className={styles.formulario} id="form" data-aos="fade-up">
      <div className="interface">
        <h2 className={styles.titulo}>
          FALA <span>COMIGO.</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome completo:"
            required
          />
          <input
            type="email"
            placeholder="Seu email:"
            required
          />
          <input
            type="text"
            placeholder="Seu celular:"
          />
          <textarea
            placeholder="Sua mensagem"
            required
          ></textarea>
          <div className={styles.btnEnviar}>
            <input type="submit" value="ENVIAR" />
          </div>
        </form>
      </div>
    </section>
  );
}
