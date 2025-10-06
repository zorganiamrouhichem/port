// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // if you're using the App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // if you're using the Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        colors: {
        'custom-black': '#0b0b0b',
      },
      },
      fontSize: {
        '28px': '28px',
        '18px': '18px',
      },
    },
  },
  plugins: [
  require('tailwind-scrollbar-hide')
]

}
