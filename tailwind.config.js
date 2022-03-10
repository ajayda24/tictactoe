module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './style.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
