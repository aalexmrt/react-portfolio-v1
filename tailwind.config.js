/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        home: "2fr 1fr"
      },
      gridTemplateRows: {
        home: "1fr min-content 1fr"
      }
    }
  },
  plugins: []
}
