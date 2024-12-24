/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'jest-red': '#C21325',
        'npm-red': '#CB3837',
        'turbo-red': '#EF4444',
        'flare-orange': '#F38020',
        'html-orange': '#E34F26',
        'pnpm-orange': '#F69220',
        'git-orange': '#F05032',
        'js-yellow': '#F7DF1E',
        'node-green': '#5FA04E',
        'ts-blue': '#3178C6',
        'css-blue': '#1572B6',
        'tw-blue': '#06B6D4',
        'react-blue': '#61DAFB',
      },
    },
  },
  plugins: [],
};
