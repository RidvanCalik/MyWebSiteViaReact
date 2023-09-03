/** @type {import('tailwindcss').Config} */
module.exports = {
  
   darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      
      animation: {
        'bganim': 'transformAnim 10s ease-in-out infinite',
      },
     keyframes: {
        transformAnim: {
          '0%, 100%': { transform: 'translate(-20%,0%)' },
          '50%': { transform: 'translate(0%,-50%)'  },
        }
      }
    },
  },
  plugins: [],
}