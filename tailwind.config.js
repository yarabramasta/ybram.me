/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.75rem', '120%'],
        sm: ['0.875rem', '120%'],
        base: ['1rem', '170%'],
        lg: ['1.5rem', '130%'],
        xl: ['2rem', '130%']
      },
      fontFamily: {
        sans: [
          'var(--font-switzer)',
          ...require('tailwindcss/defaultTheme').fontFamily.sans
        ]
      },
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
      },
      spacing: {
        text: '0.5rem',
        section: '3rem',
        component: '1.5rem',
        normal: '2rem'
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' }
          }
        }
      }
    },
    future: {
      hoverOnlyWhenSupported: true
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
