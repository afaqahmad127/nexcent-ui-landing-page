
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
    "./public/index.html",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1280px', 
        },
      },
    },
  },
  plugins: [],
}

