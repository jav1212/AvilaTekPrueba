/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Calibri'],
    },
    fontSize: {
      'header/title1': ['36px', { letterSpacing: '0' }],
      header2: ['24px', { letterSpacing: '0' }],
      header3: ['22px', { letterSpacing: '0' }],
      header4: ['20px', { letterSpacing: '0' }],
      header5: ['18px', { letterSpacing: '0' }],
      'Subtitle/BodyLarge': ['24px', { letterSpacing: 0 }],
      customBody: ['16px', { letterSpacing: '0', lineHeight: '24px' }],
      small: ['14px', { letterSpacing: '0' }],
      pretitle: ['10px', { letterSpacing: '3%' }],
      buttontext: ['16x', { letterSpacing: '2%' }],
      link: ['16px', { letterSpacing: '0' }],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          50: '#fa7d8a',
          100: '#e95867',
          200: '#e7283c',
          300: '#e2081e',
          400: '#c21527',
          500: '#8c131f',
          600: '#671b23',
          700: '#4a1d22',
        },
        secondary: {
          50: '#f8f5f3',
          100: '#dad6d3',
          200: '#c8c2be',
          300: '#b5b0ad',
          400: '#9b928d',
          500: '#867d77',
          600: '#68605b',
          700: '#413c38',
        },
        neutral: {
          100: '#fbfbfb',
          200: '#eeeeee',
          300: '#d3d3d3',
          400: '#929292',
          500: '#777777',
          600: '#5f5f5f',
          700: '#494949',
          800: '#292727',
        },
        systemBackground: {
          100: '#fffefe',
          200: '#fcfcfc',
          300: '#222222',
        },
        textColor: {
          white: '#fefefe',
          black: '#333333',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
