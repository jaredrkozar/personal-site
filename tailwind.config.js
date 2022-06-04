module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
  ],
  theme: {
    extend: {
      margin: {
        '40px': '40px',
        '20px': '20px',
      },

      colors: {
        'lightBlue': '#96D2FF',
      },
      strokeWidth: {
        '3': '3px',
        '4': '4px',
      },
      animation: {
        fade: 'fadeOut 2s ease-in-out',
      },

      keyframes: {
        fade: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },

      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
    },
    backgroundSize: {
      'size-145': '145% 145%',
  },
    },

  },

  variants: {
    visibility: ["group-hover"],
    strokeWidth: ['responsive', 'hover', 'focus'],
  },
  
  plugins: [],
}