export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--cor-primaria)',
        secondary: 'var(--cor-secundaria)',
        accent: 'var(--cor-destaque)',
        'accent-hover': 'var(--cor-destaque-hover)',
        'accent-secondary': 'var(--cor-destaque-secundaria)',
        'accent-secondary-hover': 'var(--cor-destaque-secundaria-hover)',
        links: 'var(--cor-links)',
        'blue-button': 'var(--botao-azul)',
        'blue-button-dark': 'var(--botao-azul-25ma)',
        'lrc-blue': 'var(--cor-azul-lrc)',
        'lrc-yellow': 'var(--cor-amarelo-lrc)',
        border: 'var(--border-color)',
      },
      fontFamily: {
        primary: 'var(--fonte-primaria)',
        secondary: 'var(--fonte-secundaria)',
      },
    },
  },
};