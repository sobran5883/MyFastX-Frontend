/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'pale-mint': 'rgba(242, 251, 244, 1)',
        'deep-green': 'rgba(98, 177, 121, 1)',
        'dark-blue': 'rgba(22, 33, 64, 1)',
        'vivid-orange': 'rgba(255, 87, 50, 1)',
        'light-gray': 'rgba(246, 246, 246, 1)',
        'dark-gray': 'rgba(79, 79, 79, 1)',
        'dark-navy': 'rgba(34, 41, 56, 1)',
        'lighter-gray':'rgba(25, 24, 37, 0.5)'

      },
      fontSize:{
        xxs:['10px', '16px']
      },
      letterSpacing:{
        tight: '-0.02em',
        normal: '0',
        wide: '0.1em',
        wider: '0.2em',
        widest: '0.3em'
      },
      fontFamily:{
        'urbanist':'Urbanist',
        'cinzel' : 'Cinzel',
        'inter' : 'Inter',
        'lato' : 'Lato',
        'rubik' : 'Rubik',
        'krub': 'Krub',
        'roboto':'Roboto'
      }
    },
  },
  plugins: [],
}