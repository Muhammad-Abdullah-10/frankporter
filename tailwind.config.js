/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "*.{html,js}"
  ],
  theme: {
    screens: {
      'xs': '300px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1700px',
      // => @media (min-width: 1700px) { ... }
    },
    extend: {
      textColor : {
        'secondary' : '#8d7252'
      },
      backgroundColor : {
        'secondary' : '#8d7252',
        'blackButton' : '#2D2D2C'
      },
      fontFamily: {
        'lato' : ['Lato' , 'sans-serif'],
        'futuraLight' : ['FuturaLight' , 'sans-serif'],
        'futuraNormal' : ['FuturaNormal' , 'sans-serif'],
        'futuraBold' : ['FuturaBold' , 'sans-serif']
      },
    },
  },
  plugins: [],
}
