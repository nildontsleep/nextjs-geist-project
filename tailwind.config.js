/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C5DD3',
        accent: '#22D3EE',
        background: '#121212',
        surface: '#1F1F1F',
        'surface-hover': '#2A2A2A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#9CA3AF',
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glass': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      backdropFilter: {
        'glass': 'blur(16px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
