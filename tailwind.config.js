/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'alimama': ['AlimamaFangYuanTiVF-Square', 'helvetica']
      },
      backgroundImage: {
        'London': "url('/src/assets/City/London.png')",
        'Newyork': "url('/src/assets/City/Newyork.png')",
        'Shanghai': "url('/src/assets/City/Shanghai.png')",
        'Sydney': "url('/src/assets/City/Sydney.png')",
      },
    },
  },
  plugins: [],
}

