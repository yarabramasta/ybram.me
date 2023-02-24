/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
  theme: {
    extend: {
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
