/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ais/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Bai Jamjuree'", "'Noto Sans Thai'", "system-ui", "sans-serif"],
        body: ["'Noto Sans Thai'", "Sarabun", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
