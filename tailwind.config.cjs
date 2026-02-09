module.exports = {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'aghni-bg': '#f8f9fa',
        'aghni-navy': '#5a7868',
        'aghni-orange': '#f97316',
        'aghni-orangeLight': '#fb923c',
      },
    },
  },
  plugins: [],
}
