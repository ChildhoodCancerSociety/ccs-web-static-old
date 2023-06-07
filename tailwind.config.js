/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{js,html}"],
  theme: {
    extend: {
      sizing: {
        width: {
          "30rem": "30rem",
        },
        height: {
          "30rem": "30rem",
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
    },
  },
  plugins: [],
}