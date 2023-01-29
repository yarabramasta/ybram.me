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
      white60: '#f2f2f9b3',
      white40: '#f2f2f966',
      white20: '#f2f2f933',
      accent: '#7400e9',
      danger: '#e63434'
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
