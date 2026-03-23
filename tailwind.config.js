/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1A1F16',
        'bg-secondary': '#222820',
        cream: '#F2EDE3',
        'cream-muted': '#A09882',
        accent: '#C4A55A',
        'border-subtle': '#3A3F34',
        'bg-footer': '#151A12',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
