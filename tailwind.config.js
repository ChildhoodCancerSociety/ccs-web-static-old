/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{js,html}"],
  theme: {
    extend: {
      // I dont think this goes here...
      sizing: {
        width: {
          "120": "30rem",
        },
        height: {
          "120": "30rem",
        },
      },

      colors: {
        primary: "var(--primary-ccs-color)",
        secondary: "var(--secondary-ccs-color)",
        tertiary: "var(--tertiary-ccs-color)",
        quaternary: "var(--quaternary-ccs-color)",
      },

      font: {
        header: "var(--font-header-nunito)",
        body: "var(--font-body-quicksand)",
      },

      margin: {
        "84": "21rem",
      }
    },
  },
  plugins: [],
}