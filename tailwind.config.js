/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        'tablet': '768px',  // Ejemplo de breakpoint para tablet
        'mobile': '480px',  // Ejemplo de breakpoint para dispositivos móviles
    },
  },
  plugins: [],
}

