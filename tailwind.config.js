/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kaushan': ['Kaushan Script', 'cursive'],
      },

      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scrollUp: {
          '0%': { transform: 'translateY(0%)' }, 
          '100%': { transform: 'translateY(-100%)' }, 
        },
        scrollDown: {
          '0%': { transform: 'translateY(-100%)' }, 
          '100%': { transform: 'translateY(100%)' }, 
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'scroll-left': 'scrollLeft 15s linear infinite',
        'scroll-right': 'scrollRight 15s linear infinite',
        'scroll-up': 'scrollUp 10s linear infinite',
        'scroll-down': 'scrollDown 15s linear infinite',
        'pause': 'none 500ms ease-in-out',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

