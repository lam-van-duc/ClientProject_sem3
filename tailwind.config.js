const { auto, left } = require("@popperjs/core");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      margin: auto,
    },
  },
  plugins: [],
};
