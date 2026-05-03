/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        surface: '#1e293b',
        primary: '#3b82f6',
        accent: '#f59e0b',
        text: '#f8fafc',
        muted: '#94a3b8'
      }
    },
  },
  plugins: [],
}
