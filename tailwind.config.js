module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
  ],
  theme: {
    extend: {
      colors: {
        'navyBlue': {
          DEFAULT: '#2A669F',
          50: '#E4F7F8',
          100: '#CCEEF2',
          200: '#9CD7E5',
          300: '#6CB9D8',
          400: '#3B94CB',
          500: '#2A669F',
          600: '#234B83',
          700: '#1B3366',
          800: '#14204A',
          900: '#0C102E'
        },
        'orange': {
          DEFAULT: '#F28123',
          50: '#FCE4D0',
          100: '#FBD9BD',
          200: '#F9C397',
          300: '#F7AD70',
          400: '#F4974A',
          500: '#F28123',
          600: '#D1650C',
          700: '#9C4C09',
          800: '#673206',
          900: '#321803',
          950: '#170B01'
        },
      },
      screens: {
        'md': '820px',
        'ontolg': '860px',
      }
    },
    gridTemplateColumns: {
      'apps': 'repeat(auto-fill, minmax(30rem, 1fr))',
    }
  },

  variants: {
    visibility: ["group-hover"],
    strokeWidth: ['responsive', 'hover', 'focus'],
  }
}