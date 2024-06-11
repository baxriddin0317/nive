/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'black': {
            100: "#121212",
            200: "#505050"
          },
          'orange': {
            DEFAULT: "#FF462D"
          },
          'text-primary': "#E7E7F6"
        }
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      },
      fontSize: {
        '6xl': "64px"
      },
      spacing: {
        '4.5': "18px"
      },
      backgroundImage: {
        'secondary': "linear-gradient(270deg, rgba(18, 18, 18, 0.00) 0%, #FF462D 50%, rgba(18, 18, 18, 0.00) 100%)",
        'main': "linear-gradient(90deg, rgba(246, 246, 246, 0.05) 0%, rgba(144, 144, 144, 0.05) 100%)",
        'xl': "linear-gradient(0deg, #121212 0%, #121212 100%), linear-gradient(90deg, rgba(246, 246, 246, 0.05) 0%, rgba(144, 144, 144, 0.05) 100%)"
      },
      maxWidth: {
        '8xl': "1440px"
      }
    },
  },
  plugins: [],
}

