import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useThemeToggle from '../../hooks/useThemeToggle';

describe('useThemeToggle', () => {
  beforeEach(() => {
    // Limpar localStorage antes de cada teste
    localStorage.clear();
  });

  it('deve retornar isLightMode como false por padrão', () => {
    const { result } = renderHook(() => useThemeToggle());
    expect(result.current.isLightMode).toBe(false);
  });

  it('deve alternar o tema ao chamar toggleTheme', () => {
    const { result } = renderHook(() => useThemeToggle());

    expect(result.current.isLightMode).toBe(false);

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.isLightMode).toBe(true);
  });

  it('deve salvar o tema no localStorage', () => {
    const { result } = renderHook(() => useThemeToggle());

    act(() => {
      result.current.toggleTheme();
    });

    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('deve recuperar tema do localStorage ao montar', () => {
    localStorage.setItem('theme', 'light');
    const { result } = renderHook(() => useThemeToggle());

    expect(result.current.isLightMode).toBe(true);
  });
});
