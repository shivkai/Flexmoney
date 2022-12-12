/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      keyframes: {
        scroll :{
          '0%':{
              transform: 'translateX(0)'
          },
          '100%':{
              transform: 'translateX(-200px)'
          },
      
      }
      },
      animation:{
        scroll: 'scroll 2s linear infinite',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
