import { motion } from 'framer-motion';
import styles from './AnimatedButton.module.css';

const AnimatedButton = ({ children, onClick, disabled = false, type = 'button' }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <span className={styles.buttonText}>{children}</span>
      <motion.div
        className={styles.buttonBackground}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: disabled ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.button>
  );
};

export default AnimatedButton;
