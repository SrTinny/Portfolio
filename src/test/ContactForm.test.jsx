import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../../components/ContactForm/ContactForm';

// Mock do EmailJS
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
}));

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve renderizar o formulário corretamente', () => {
    render(<ContactForm />);

    expect(screen.getByText(/FALA/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Seu nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Seu e-mail/i)).toBeInTheDocument();
  });

  it('deve mostrar erro quando email é inválido', async () => {
    render(<ContactForm />);

    const emailInput = screen.getByPlaceholderText(/Seu e-mail/i);

    fireEvent.change(emailInput, { target: { value: 'email-invalido' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByText(/Email inválido/i)).toBeInTheDocument();
    });
  });

  it('deve mostrar erro quando nome é menor que 3 caracteres', async () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText(/Seu nome/i);

    fireEvent.change(nameInput, { target: { value: 'Jo' } });
    fireEvent.blur(nameInput);

    await waitFor(() => {
      expect(
        screen.getByText(/Nome deve ter pelo menos 3 caracteres/i)
      ).toBeInTheDocument();
    });
  });

  it('deve habilitar botão quando formulário é válido', async () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText(/Seu nome/i);
    const emailInput = screen.getByPlaceholderText(/Seu e-mail/i);
    const messageInput = screen.getByPlaceholderText(/Sua mensagem/i);
    const submitButton = screen.getByRole('button', { name: /ENVIAR/i });

    fireEvent.change(nameInput, { target: { value: 'João Victor' } });
    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Esta é uma mensagem válida' },
    });

    expect(submitButton).not.toBeDisabled();
  });
});
