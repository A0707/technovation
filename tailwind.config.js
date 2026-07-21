/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0057FF",
        "primary-dark": "#0044CC",
        "primary-bright": "#3B8BFF",
        "primary-soft": "#E6EEFF",
        ink: "#081B3A",
        ink2: "#0F2A55",
        slateink: "#5B6B82",
        line: "#E3E8EF",
        surface: "#F5F7FA",
        accent: "#FF6A00",
        "accent-dark": "#E05D00",
      },
      borderRadius: { card: "18px" },
      maxWidth: { "7xl": "80rem" },
      boxShadow: {
        card: "0 1px 2px rgba(8,27,58,.04), 0 8px 24px rgba(8,27,58,.07)",
        float: "0 12px 40px rgba(8,27,58,.12)",
      },
      backgroundImage: {
        // Sections en dégradé bleu nuit — hero, bandeau chiffres, CTA, contact.
        "gradient-ink": "linear-gradient(135deg, #081B3A 0%, #0F2A55 55%, #123A66 100%)",
      },
      ringWidth: { 3: "3px" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
