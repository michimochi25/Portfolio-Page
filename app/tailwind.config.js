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
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        welcome: {
          words: ['Hodwy! Welcome to my page...'],
          repeat: 0,
          eraseSpeed: 0
        }
      }
    })
  ],
}

