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
        primary: "#2563EB",
        "primary-dark": "#1D4ED8",
        "primary-bright": "#60A5FA",
        "primary-soft": "#EFF6FF",
        ink: "#0F172A",
        ink2: "#1E293B",
        slateink: "#64748B",
        line: "#E2E8F0",
        surface: "#F8FAFC",
        accent: "#F97316",
        "accent-dark": "#EA580C",
        // Nommé `brand-cyan` et non `cyan` : déclarer `cyan` comme couleur
        // simple écrase l'échelle native de Tailwind, et tous les
        // `text-cyan-400` du prototype cessent alors de résoudre.
        "brand-cyan": "#06B6D4",
      },
      borderRadius: { card: "18px" },
      maxWidth: { "7xl": "80rem" },
      boxShadow: {
        card: "0 1px 2px rgba(8,27,58,.04), 0 8px 24px rgba(8,27,58,.07)",
        float: "0 12px 40px rgba(8,27,58,.12)",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // Sections en dégradé bleu nuit — hero, bandeau chiffres, CTA, contact.
        "gradient-ink": "linear-gradient(135deg, #0F172A 0%, #172554 55%, #1E293B 100%)",
      },
      ringWidth: { 3: "3px" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
