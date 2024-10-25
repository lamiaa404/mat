module.exports = {
  content: [
    '/Users/lh/Documents/Projects/mat_website/index.html',
    '/Users/lh/Documents/Projects/mat_website/src/**/*.{js,ts,jsx,tsx}', // This allows Tailwind to scan all JS and TS files for class names
  ],
  theme: {
    extend: {fontFamily: {
      arabic: ['"IBM Plex Sans Arabic"', 'sans-serif'], // Add the Arabic font here
    },},
  },
  plugins: [],
}


