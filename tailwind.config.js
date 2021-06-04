module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "orange-bohr": "#ff622e",
        "gray-222": "#222222",
        "black-footer": "#363636",
      },
      textColor: {
        "gray-4a": "#4A4A4A",
        "gray-222": "#222222",
        "orange-bohr": "#ff622e",
        "orange-ff7": "#ff7c4d",
        "white-FB": "rgba(255,255,255,.75)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "2md": "840px",
      },
      backgroundImage: () => ({
        "hero-home": "url('/images/hero-home.jpg')",
        "hero-aboutus": "url('/images/INNOVATIVE_COMPANY.jpg')",
        "hero-benefits": "url('/images/CABECERA_BENEFITS.jpg')",
        "hero-customer": "url('/images/CABECERA_CUSTOMER.jpg')",
        "hero-beliefs": "url('/images/CABECERA_BELIEFS.jpg')",
        "hero-solutions": "url('/images/CABECERA_SOLUTIONS.jpg')",
      }),
      height: {
        "330p": "330px",
        "370p": "370px",
        "410p": "410px",
        "520p": "520px",
      },
      width: {
        "440p": "440px",
        "47/100": "47%",
      },
      backgroundPosition: {
        "top-150": "center top -150px",
        "top-90": "center top -90px",
        "left--53/100": "53% center",
        "left--53/100-top-41/100": "53% 41%",
      },
      maxWidth: {
        "440p": "440px",
      },
      maxHeight: {
        "520p": "520px",
        "370p": "370px",
        "330p": "330px",
      },
      backgroundSize: {
        "520p": "520p",
      },
      brightness: {
        90: "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-css-filters"),
  ],
}
