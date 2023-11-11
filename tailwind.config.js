/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
         fadeIn: {
           "0%": { opacity: 0 },
          "100%": { opacity: 100 },
       },
       },
       animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
        backgroundImage: {
        'first': "url('../assets/startusingfiverr_freelance.png)",
        'second': "url('../assets/pali_new_background.png')",
        
      },
    },
  },
  plugins: [],
}

