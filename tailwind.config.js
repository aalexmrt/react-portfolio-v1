const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      gridTemplateColumns: {
        home: "2fr 1fr",
        aboutLarge: "1fr 1fr",
        about: "1fr 1fr 1fr",
      },
      gridTemplateRows: {
        layout: "1fr min-content",
        home: "min-content min-content min-content",
        aboutLarge: "min-content 1fr",
        about: "min-content 1fr 1fr",
      },
    },
  },
  plugins: [],
}
