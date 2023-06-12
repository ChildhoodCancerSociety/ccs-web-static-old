/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{js,html}"],
  theme: {
    screens: {
      "mobile": {"max": "360px"},
      // => @media (max-width: 360px) { ... }

      "laptop-columns": {"max": "768px"},
      // => @media (max-width: 360px) { ... } - needed for formatting columns in "How to Apply" section

      "laptop": {"max": "897px"},
      // => @media (max-width: 897px) { ... }

      "desktop": {"max": "1024px"},
      // => @media (max-width: 1024px) { ... }
    },

    extend: {
      width: {
        "120": "30rem",
        "42": '10.5rem',
      },

      height: {
        "120": "30rem",
        "160": "40rem",
      },

      maxHeight: {
        "160": "40rem",
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
      },

      padding: {
        "4px": "4px",
      },

      letterSpacing: {
        "semi-wide": "0.2px",
      },

      backgroundPosition: {
        "10-75": "10% 75%",
      },
    },
  },
  plugins: [
    /*
    * Adds custom utility classes for clip-path polygons to tailwind configuration
    */
    ({ addUtilities }) => {
      addUtilities({
        ".clip-polygon-1": {
          "clip-path": "polygon(100% 0, 100% 50%, 50% 100%, 0 50%, 0 0)",
        },
        ".clip-polygon-2": {
          "clip-path": "polygon(50% 27%, 100% 0, 100% 100%, 0 100%, 0 0)",
        },
        ".clip-polygon-3": {
          "clip-path": "polygon(50% 27.25%, 99.75% 0.25%, 99.75% 99.75%, 0.25% 99.75%, 0.25% 0.25%)",
        },
        ".clip-polygon-4": {
          "clip-path": "polygon(100% 0, 100% 40%, 50% 75%, 0% 40%, 0% 0%)",
        },
      });
    },
  ],
}