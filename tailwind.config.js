/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: 'rgb(var(--color-dark-rgb-val) / <alpha-value>)',
        light: 'rgb(var(--color-light-rgb-val) / <alpha-value>)',
        'pink-accent': 'rgb(var(--color-pink-accent-rgb-val) / <alpha-value>)',
        'purple-accent':
          'rgb(var(--color-purple-accent-rgb-val) / <alpha-value>)'
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
