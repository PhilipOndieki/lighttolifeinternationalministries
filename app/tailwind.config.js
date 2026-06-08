/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Scan all files in the app directory
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // If you have a pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // If you have a components directory
    './src/**/*.{js,ts,jsx,tsx,mdx}', // If you have a src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};