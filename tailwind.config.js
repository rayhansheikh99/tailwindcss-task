/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#F5F6FA',
        second: 'white',
        third: '#5358B6',
        fourth: '#F5F6FA',
        fifth: '#EB6365',
        sixth: {
          100: '#C8C7EB',
          200: '#9B9DA2',
        },
      },
    },
  },
  plugins: [],
}