/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B5CF6",
          50: "#F3E8FF",
          100: "#E9D5FF",
          200: "#D8B4FE",
          300: "#C4A0FF",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95"
        },
        secondary: "#6B7280",
        success: "#10B981",
        error: "#EF4444",
        background: "#F3E8FF",
        surface: "#FFFFFF",
        text: "#374151"
      },
      gradientColorStops: {
        'royal-start': '#F3E8FF',
        'royal-end': '#D8B4FE'
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(139, 92, 246, 0.15), 0 8px 10px -6px rgba(139, 92, 246, 0.1)'
      },
      borderRadius: {
        'xl': '1rem'
      }
    }
  },
  plugins: []
};
