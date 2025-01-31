/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        Green: '#136B62',
        White: '#F6F8F0',
        White2: '#fefefe'
      },
      fontFamily: {
        bold: ["font-bold", "sans-serif"],
        semibold: ["font-semibold", "sans-serif"],
        medium: ["font-medium", "sans-serif"],
        regular: ["font-regular", "sans-serif"],
        light: ["font-light", "sans-serif"],
        book: ["font-book", "sans-serif"],
      },
    },
  },
  plugins: [],
}

