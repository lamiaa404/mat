module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',  // Specifically includes components folder
    // This allows Tailwind to scan all JS and TS files for class names
  ],
  theme: {
    extend: {fontFamily: {
      arabic: ['"IBM Plex Sans Arabic"', 'sans-serif'], // Add the Arabic font here
    },},
  },
  plugins: [],
}


