/** @type {import('tailwindcss').Config} */
module.exports = {
  separator: "_",
  content: ["./src/**/*.{html,ts,pug}"],
  theme: {
    extend: {
      colors: {
        "limegreen": "#CCD5AE",
        "lightlime": "#E9EDC9",
      },
    },
  },
  plugins: [],
};
