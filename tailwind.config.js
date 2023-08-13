/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Bebas: ['Bebas Neue, cursive'],
      Inter: ['Inter, sans-serif'],
      Playfair: ['Playfair Display, serif'],
    },
    boxShadow: {
      'cool': '5px 7px 0px 0px rgb(30 30 30)',
      'cool2': '0px 0px 0px 0px rgb(30 30 30)',
    },
    keyframes: {
      blob: {

        '0%' : {
          transform: 'translate(-200px, -50px) scale(1.1)',
        },
        '100%' : {
          transform: 'translate(0, 0) scale(0.9)',
        },

      },
      blob2: {
        '0%' :{
          transform: ' scale(1)',
        },
        '33%' : {
          transform: 'translate(200px, -50px) scale(1.1)',
        },
        '66%' : {
          transform: 'translate(-250px, 50px) scale(0.9)',
        },
        '100%' : {
          transform: ' scale(1)',
        },
      },
      blob3: {
        '0%' :{
          transform: ' scale(1)',
        },
        '33%' : {
          transform: 'translate(200px, -50px) scale(1.1)',
        },
        '66%' : {
          transform: 'translate(-250px, 50px) scale(0.9)',
        },
        '100%' : {
          transform: ' scale(1)',
        },
      },
      'slideup': {
        '0%': { transform: 'translateY(20%)'},
        '10%': { transform: 'translateY(0%)', opacity:1},
        '65%': {transform: 'translateY(0%)', opacity:1},
        '100%': { transform: 'translateY(-70%)', opacity: 0},
      },
      slideleft:{
        '0%': { transform: 'translateX(-200%)'},
        '100%': { transform: 'translateX(0%)'},
      },
      slideright:{
        '0%': { transform: 'translateX(200%)'},
        '100%': { transform: 'translateX(0%)'},
      },
      'bounce': {
        '0%, 100%': { transform: 'translateY(0)', rotate: '-2deg' },
        '50%': { transform: 'translateY(-10%)', rotate: '2deg' }
      },
      appear: {
        '0%': { opacity: 0 },
        '90%': { opacity: 0 },
        '100%': { opacity: 1 },
      }
    },
    animation: {
      blob: 'blob 2s linear',
      blob2: 'blob2 6s infinite',
      blob3: 'blob3 7s infinite',
      slideup: 'slideup 2s linear infinite',
      bounce: 'bounce 7s infinite',
      slideleft: 'slideleft .75s ease-in',
      slideright: 'slideright .75s ease-in',
      appear: 'appear 1.5s ease-in',
    },
  },
  plugins: [],
}