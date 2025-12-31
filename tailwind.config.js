/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        north: ['"North Boys"', 'sans-serif'],
      },
      colors: {
        primary: "#EEA33B",
        secondary: "#1B212F",
        tertiary: "#1F70A3",
        white: "#EBEBEB",
      },
    },
  },
  plugins: [],
}

