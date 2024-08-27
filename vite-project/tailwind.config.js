/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      xxs: ['12px', '16px']
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

