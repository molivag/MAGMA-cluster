/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // ✅ necesario para usar dark mode con una clase
  theme: {
    extend: {},
  },
  plugins: [],
}

