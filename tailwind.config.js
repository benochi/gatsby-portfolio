/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //try #1a2139 #333e5b #798190 #9d9683 #f73a18
      colors: {
        'darkest': '#1a2139',
        'darker': '#333e5b',
        'lighter': ' #798190',        
        'lightest': '#9d9683',
        'textcol': '#9d9683',
        'highlight': '#f73a18',
        'rumble': '#AADB1E',
        'discord': '#7289da',
        'springboard': '#3ded97',
        'amazon': '#FF9900'
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
