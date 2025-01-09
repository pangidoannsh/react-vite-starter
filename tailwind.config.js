/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#CCECFF",
          200: "#99D5FF",
          300: "#66BAFF",
          400: "#3FA0FF",
          500: "#0075FF",
          600: "#005ADB",
          700: "#0043B7",
          800: "#002F93",
          900: "#00217A",
        },
        secondary: "#45B9FF",
        danger: "#FF403D",
        warning: "#F2E800",
        success: "#19CA3F",
      },
      screens: {
        xl: "1400px"
      }
    },
  },
  plugins: [],
}