/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // This ensures Tailwind scans your JS and JSX files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%)',
        
      },
    },
  },
  plugins: [],
}
