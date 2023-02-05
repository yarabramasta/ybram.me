/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{jsx,tsx}', './ui/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: 'var(--color-black)',
        black85: 'var(--color-black85)',
        black60: 'var(--color-black60)',
        black40: 'var(--color-black40)',
        black20: 'var(--color-black20)',
        white: 'var(--color-white)',
        white85: 'var(--color-white85)',
        white60: 'var(--color-white60)',
        white40: 'var(--color-white40)',
        white20: 'var(--color-white20)',
        white04: 'var(--color-white04)',
        accent: 'var(--color-accent)',
        accent60: 'var(--color-accent60)',
        accent40: 'var(--color-accent40)',
        accent20: 'var(--color-accent20)',
        red: 'var(--color-danger)'
      }
    }
  }
};
