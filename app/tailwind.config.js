/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Pixelify Sans"'],
      },
      scale: {
        '200': '2',
      },
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        welcome: {
          words: ['Howdy! Welcome to my page...'],
          repeat: 0,
          eraseSpeed: 0
        }
      }
    })
  ],
}

