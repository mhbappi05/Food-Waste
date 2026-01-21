/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'waste-red': '#DC2626',
          'neon-green': '#22C55E',
          'ocean-blue': '#3B82F6',
          'compassion-purple': '#8B5CF6',
          'dark-slate': '#0F172A',
          'dark-gray': '#1E293B',
          'warning-yellow': '#F59E0B',
        },
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
          'jetbrains': ['JetBrains Mono', 'monospace'],
        },
      },
    },
    plugins: [],
  }