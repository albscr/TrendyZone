/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        corben: ['Corben', 'cursive'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

