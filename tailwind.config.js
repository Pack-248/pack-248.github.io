/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      'cubScoutPaleBlue': '#9AB3D5',
      'cubScoutBlue': '#003F87',
      'cubScoutDarkBlue': '#003366',
      'cubScoutGold': '#FCD116',
      'scoutRed': '#CE1126',
      'scoutLightTan': '#E9E9E4',
      'scoutTan': '#D6CEBD',
      'scoutDarkTan': '#AD9D7B',
      'scoutPaleGray': '#858787',
      'scoutWarmGray': '#515354',
      'scoutDarkGray': '#232528',
    },
    fontFamily: {
      sans: ['Adelle', 'Roboto Slab', 'Trebuchet MS', 'sans-serif'],
      serif: ['Alternate Gothic','Roboto Condensed','Arial Black', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
