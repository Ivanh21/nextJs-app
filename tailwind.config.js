/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
      extend: {
      scrollBehavior: ['responsive'],
    },
  },
  variants: {
    extend: {
      scrollBehavior: ['motion-safe'],
    },
  },
  plugins: [],
}

