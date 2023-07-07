const spacing = (x) => x.theme("spacing")

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  darkMode: "class",

  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      width: spacing,
      height: spacing,
      maxHeight: spacing,
      minHeight: spacing,
      maxWidth: spacing,
      minWidth: spacing,
    },
  },

  plugins: [
    (api) => {
      api.addUtilities({
        ".clip-triangle-top": {
          "clip-path": "polygon(0% 100%, 50% 0%, 100% 100%)",
        },
        ".hyphens": {
          hyphens: "auto",
        },
      })

      api.addComponents({
        ".sitelen-pona-sized": {
          "font-family": "'sitelen seli kiwen', sans-serif",
          "font-size": "1.5rem",
          "line-height": "1",
        },
        ".sitelen-pona": {
          "font-family": "'sitelen seli kiwen', sans-serif",
        },
        ".link": {
          color: api.theme("colors.blue.500"),
          "text-decoration-line": "underline",
          "text-underline-offset": "2px",
        },
      })
    },
  ],
}

module.exports = config
