/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extends: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.white70'),
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
              color: theme('colors.white70')
            },
            a: {
              color: theme('colors.accent'),
              fontWeight: '500',
              '&:hover': {
                filter: 'brightness(110%)',
                textDecoration: 'underline'
              }
            }
          }
        }
      })
    },
    fontFamily: {
      sans: [
        'var(--font-switzer)',
        ...require('tailwindcss/defaultTheme').fontFamily.sans
      ]
    },
    colors: {
      black: '#0a0a0c',
      white: '#f2f2f9',
      white85: '#f2f2f9d9',
      white70: '#f2f2f9b3',
      white40: '#f2f2f966',
      white20: '#f2f2f933',
      accent: '#7400e9'
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
