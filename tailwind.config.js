/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        "cyan": "hsl(178, 100%, 50%)",
        "cyan-layer": "hsla(178, 100%, 50%, 50%)",
        "main-bg": "hsl(217, 54%, 11%)",
        "card-bg": "hsl(216, 50%, 16%)",
        "line": "hsl(215, 32%, 27%)",
      },
      backgroundImage: {
        'view': "url('../images/icon-view.svg')",
      },
    },
  },
  plugins: [],
}

