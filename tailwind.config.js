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
        ink: "#0B1220",
        ink2: "#111C2E",
        slateink: "#5B6B82",
        line: "#E3E8EF",
        surface: "#F6F8FB",
        primary: "#0E8FA3",
        "primary-bright": "#12B5CB",
        "primary-soft": "#E6F6F9",
        accent: "#F5A524",
      },
      maxWidth: { "7xl": "80rem" },
    },
  },
  plugins: [],
};
