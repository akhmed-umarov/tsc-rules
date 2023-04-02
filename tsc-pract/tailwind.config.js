/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: { 
        "100vh": "100vh",
        "100vw": "100vw",
      }
    },
  },
  plugins: [],
}