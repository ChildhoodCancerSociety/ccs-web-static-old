/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{js,html}"],
  theme: {
    screens: {
      "mobile": "360px",
      // => @media (min-width: 360px) { ... }

      "laptop": "768px",
      // => @media (min-width: 768px) { ... }

      "desktop": "1024px",
      // => @media (min-width: 1024px) { ... }

      "desktop-large": "1440px",
      // => @media (min-width: 1440px) { ... }

      // These are breakpoints used for pages we mistakenly designed for desktop first
      "mobile-inverted": {"max": "767px"},
      // => @media (max-width: 767px) { ... }

      "laptop-columns-inverted": {"max": "951px"},
      // => @media (max-width: 951px) { ... } - needed for formatting columns in "How to Apply" section

      "laptop-inverted": {"max": "1023px"},
      // => @media (max-width: 1023px) { ... }

      "desktop-inverted": {"max": "4000px"},
      // => @media (max-width: 4000px) { ... } - arbitrary max-width... 
    },
    extend: {
      backgroundImage: {
        "hero-desktop": "url('/assets/img/art-to-heart-images/hero/art-to-heart-hero-desktop.png')",
        "hero-mobile": "url('/assets/img/art-to-heart-images/hero/art-to-heart-hero-mobile.png')",
        "campaign-desktop": "url('/assets/img/art-to-heart-images/ted-misc/ted-sitting-lg.png')",
        "campaign-mobile": "url('/assets/img/art-to-heart-images/ted-misc/ted-sitting-small.png')",
        "apply": "url('/assets/img/art-to-heart-images/steps/apply-section-background.png')",
        "column-one": "url('/assets/img/art-to-heart-images/steps/step-1-ted.png')",
        "column-two": "url('/assets/img/art-to-heart-images/steps/step-2-ted.png')",
        "column-three": "url('/assets/img/art-to-heart-images/steps/step-3-ted.png')",
        "submission-mobile": "url('/assets/img/art-to-heart-images/ted-misc/ted-waving.png')",
        "contact-form": "url('/assets/img/art-to-heart-images/submit/ted-crayon-submit-lg.png')",
      },

      backgroundSize: {
        "20%": "20%",
      },

      backgroundPosition: {
        "10-75": "10% 75%",
        "bottom-left": "bottom 5rem left",
      },

      width: {
        "120": "30rem",
        "42": "10.5rem",
        "85%": "85%",
      },

      minWidth: {
        "2/5": "40%",
        "1/2": "50%",
        "4/5": "80%",
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

      fontFamily: {
        "header": "var(--font-header-nunito)",
        "body": "var(--font-body-quicksand)",
        'font-awesome': ['"Font Awesome 5 Free"', 'sans-serif'],
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

      gridTemplateColumns: {
        "custom": "repeat(3, minmax(12.5rem, 1fr))",
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
