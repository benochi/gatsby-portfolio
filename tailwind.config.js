/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lb2': '#47B5FF',
        'db1':'#06283D',
        'db2': '#1363DF',
        'lb1': '#DFF6FF'
      },
      
    },
  },
  plugins: [],
}
