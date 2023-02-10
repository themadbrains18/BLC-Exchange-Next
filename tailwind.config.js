/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // cta
        "primary": "#1da2b4",
        "primary-hover": "#1da2b4ad",
        "black-v-1": "#040e0e",
        "black-v-2": "#222525",
        "black-v-3": "rgba(30,30,30,0.9)",
        "black-v-4": "#212121",
        "black-v-5": "#0d0e0e",
        "grey": "#656e6f",
        "light-grey":"#9aa3a3",
        "purple": "#7465ff",
        "hover-black": "#191919",
        "light-hover": "#f8f9fb"
      },
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif'],
        'noto-display': [ 'Noto Serif Display', 'serif'],
      }
    },
  },
  plugins: [],
};
