/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '200px',

      'sm': '300px',

      'md': '568px',

      'lg': '824px',
     
      'xl': '1280px',
      
      '2xl': '1536px',
      
    },
  },
  plugins: [],
}