module.exports = {
  content: ["./src/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      lato: ["Lato, sans-serif"],
    },
    extend: {
      backgroundImage: {
        "primary-pattern": "url('images/background.jpg')",
      },
      colors: {
        "light-gold": "#C5A444",
      },
    },
  },
  plugins: [],
};
