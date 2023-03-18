module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
  ],
  theme: {
    extend: {
    },

  },

  variants: {
    visibility: ["group-hover"],
    strokeWidth: ['responsive', 'hover', 'focus'],
  },
  
  plugins: [],
}