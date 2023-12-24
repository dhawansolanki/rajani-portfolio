/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'greentheme': '#64998e'
      },
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin')
]
  }
}