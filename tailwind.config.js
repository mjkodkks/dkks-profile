module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        profileWidth: 400
      },
      height: {
        profileHeight: 250
      },
      color: {
        primary: "#000",
        background: "#101018",
      },
      textColor: {
        txt: "#345"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
