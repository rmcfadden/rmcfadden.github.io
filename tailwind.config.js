const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ 
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '*.md',
    '*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}