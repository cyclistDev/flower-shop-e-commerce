/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/pages/**/*.html",
    "./src/components/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
        green: {
          500: '#22c55e',
          600: '#16a34a',
          800: '#166534',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
