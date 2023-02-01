/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: ['1rem', '150%'],
        lg: ['1.5rem', '125%'],
        xl: ['2.5rem', '125%']
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
        accent: 'var(--color-accent)',
        accent60: 'var(--color-accent60)',
        accent20: 'var(--color-accent20)',
        red: 'var(--color-danger)'
      },
      spacing: {
        text: '0.5rem',
        section: '3rem',
        component: '1.5rem',
        normal: '2rem'
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.white60'),
            h1: {
              color: theme('colors.white')
            },
            h2: {
              color: theme('colors.white')
            },
            h3: {
              color: theme('colors.white')
            },
            h4: {
              color: theme('colors.white')
            },
            h5: {
              color: theme('colors.white')
            },
            h6: {
              color: theme('colors.white')
            },
            strong: {
              color: theme('colors.white85')
            },
            p: {
              color: theme('colors.white60')
            },
            a: {
              color: theme('colors.accent60'),
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.accent'),
                textDecoration: 'underline'
              }
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
