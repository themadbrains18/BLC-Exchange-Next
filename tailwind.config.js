/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
   
          'jointrader': "url('../public/assets/images/joinTrader1.png')",
        
    
      },
      colors: {
        // cta
        "primary": "#1da2b4",
        "primary-hover": "#1da2b4ad",
        "black-v-1": "#040e0e",
        "black-v-2": "#222525",
        "black-v-3": "#1e1e1e", //rgba(30,30,30,0.9)
        "black-v-4": "#212121",
        "black-v-5": "#0d0e0e",
        "grey": "#656e6f",
        "light-grey":"#9aa3a3",
        "purple": "#7465ff",
        "hover-black": "#191919",
        "light-hover": "#f8f9fb",
        "line-clr": "#e6e6e6",
        "secondary":"#e9f9fc",
        "border-clr":"#ebebeb",
        "disable-clr":"#a7b1bb",
        "table-bg":"#f9f9f9",
        "active-clr":"#f9fbfb",
        "deep-blue":"#223141"
        
      },
      content: {
        'completed-icon': 'url("../public/assets/icons/completed-icon.svg")',
        'exclamation-icon': 'url("../public/assets/icons/exclamation.svg")',
      },
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif'],
        'noto-display': [ 'Noto Serif Display', 'serif'],
      },
      animation: {
        'open': 'open 0.3s alternate',
      },
      keyframes: {
        open:{
        '0%' :{
          transform: "translateY(-3%)"
        },
        '100%':{
          transform: "translateY(0)"
        }
      },
   
    }
    
    },
  },
  plugins: [],
};
