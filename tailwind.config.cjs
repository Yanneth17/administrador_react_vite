/** @type {import('tailwindcss').Config} */
module.exports = {
  // Eliminar ./ de Index para ejecutar build
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}
