// src/hooks/useThemeToggle.js
import { useEffect, useState } from 'react'

export default function useThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light'
  })

  useEffect(() => {
    const body = document.body

    if (isLightMode) {
      body.classList.add('light-mode')
    } else {
      body.classList.remove('light-mode')
    }

    localStorage.setItem('theme', isLightMode ? 'light' : 'dark')
  }, [isLightMode])

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev)
  }

  return { isLightMode, toggleTheme }
}
