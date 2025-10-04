/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
       backgroundImage: {
        'custom-gradient': `linear-gradient(238.6deg, rgba(255, 255, 255, 0) 31.05%, rgba(255, 255, 255, 0) 47.99%, #ebffef 100%), linear-gradient(133.51deg, rgba(255, 255, 255, 0) 25.65%, rgba(255, 255, 255, 0.666) 55.24%, rgba(240, 239, 255, 0.9) 100%)`,
      }
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'], 
  plugins: [],
}

