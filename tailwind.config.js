/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: 'rgb(var(--color-dark-rgb-val) / <alpha-value>)',
        light: 'rgb(var(--color-light-rgb-val) / <alpha-value>)'
      },
      fontFamily: {
        sans: [
          'var(--font-clash-grotesk)',
          ...require('tailwindcss/defaultTheme').fontFamily.sans
        ]
      }
    }
  },
  plugins: []
};
