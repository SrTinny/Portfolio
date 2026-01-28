import React from 'react';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o estado para que a próxima renderização exiba a UI de fallback
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Registra o erro no console durante o desenvolvimento
    console.error('ErrorBoundary capturou um erro:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // Aqui você pode enviar o erro para um serviço de logging
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className={styles.errorContainer}>
          <div className={styles.errorContent}>
            <h2 className={styles.errorTitle}>⚠️ Algo deu errado</h2>
            <p className={styles.errorDescription}>
              Desculpe, encontramos um erro inesperado. Por favor, tente recarregar a página.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className={styles.errorDetails}>
                <summary>Detalhes do erro (apenas desenvolvimento)</summary>
                <pre className={styles.errorStack}>
                  {this.state.error.toString()}
                  {'\n\n'}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className={styles.errorActions}>
              <button
                className={styles.resetButton}
                onClick={this.handleReset}
              >
                🔄 Tentar novamente
              </button>
              <button
                className={styles.homeButton}
                onClick={() => window.location.href = '/'}
              >
                🏠 Ir para início
              </button>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
