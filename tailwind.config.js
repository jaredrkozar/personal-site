module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
  ],
  theme: {
    extend: {
      colors: {
        'orient': {
          '50': '#eefaff',
          '100': '#dcf6ff',
          '200': '#b2efff',
          '300': '#6de4ff',
          '400': '#20d6ff',
          '500': '#00c1ff',
          '600': '#009cdf',
          '700': '#007cb4',
          '800': '#006994',
          '900': '#00567a',
          '950': '#003751',
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