/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footer-bg": "url('/footer-bg.jpg')", 
        "home-bg": "url('/bg.jpg')",
      },
    },
  },
  plugins: [],
}
