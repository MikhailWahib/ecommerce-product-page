/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0C091D',
        'details-bg': 'rgba(60, 53, 99, .46)',
        'typo': '#fff',
        'blue': '#0D5BDD',
        'green': 'rgba(20, 255, 0, 0.72)',
        'red': 'rgba(255, 0, 0, 0.67)',
        'purple': 'rgba(255, 0, 245, 0.73)',
      },
      boxShadow: {
        'btn-blue': '0px 0px 25px 0px rgba(0, 96, 255, 0.59)',
        'btn-blue-hover': '0px 0px 25px 10px rgba(0, 96, 255, 0.59)',
        'btn-green': '0px 0px 25px 0px rgba(20, 255, 0, 0.72)',
        'btn-green-hover': '0px 0px 25px 10px rgba(20, 255, 0, 0.72)',
        'btn-red': '0px 0px 25px 0px rgba(255, 0, 0, 0.67)',
        'btn-red-hover': '0px 0px 25px 10px rgba(255, 0, 0, 0.67)',
        'btn-purple': '0px 0px 25px 0px rgba(255, 0, 245, 0.73)',
        'btn-purple-hover': '0px 0px 25px 10px rgba(255, 0, 245, 0.73)',
      },
    },
  },
  plugins: [],
}

