module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "2md": "840px",
      },
      backgroundImage: () => ({
        "hero-home": "url('/images/hero-home.jpg')",
      }),
      height: {
        "520p": "520px",
        "370p": "370px",
      },
      backgroundPosition: {
        "top-150": "center top -150px",
        "top-90": "center top -90px",
      },
      maxHeight: {
        "520p": "520px",
        "370p": "370px",
      },
      backgroundSize: {
        "520p": "520p",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
