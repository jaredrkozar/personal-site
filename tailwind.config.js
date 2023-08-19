module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
  ],
  theme: {
    extend: {
      colors: {
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
      },
      fontSize: {
        xl: ['1.375rem', '1.87rem'],
      },
    },
    gridTemplateColumns: {
      'apps': 'repeat(auto-fill, minmax(27rem, 1fr))',
    }
  },

  variants: {
    visibility: ["group-hover"],
    strokeWidth: ['responsive', 'hover', 'focus'],
  }
}