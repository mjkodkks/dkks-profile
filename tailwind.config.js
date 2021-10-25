module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
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
        background: "#101018"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
