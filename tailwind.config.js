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
      'cubScoutOrange': '#FF7512',
      'scoutRed': '#CE1126',
      'scoutLightTan': '#E9E9E4',
      'scoutTan': '#D6CEBD',
      'scoutDarkTan': '#AD9D7B',
      'scoutPaleGray': '#858787',
      'scoutWarmGray': '#515354',
      'scoutDarkGray': '#232528',
      'lionYellow': '#FEC51A',
      'tigerOrange':'#F58538',
      'wolfRed': '#EA3235',
      'bearBlue': '#98CAED',
      'webelosGreen':'#92A85D',
      'aolKhaki':'#F0DBCA'
    },
    fontFamily: {
      sans: ['Adelle', 'Roboto Slab', 'Trebuchet MS', 'sans-serif'],
      serif: ['Alternate Gothic','Roboto Condensed','Arial Black', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
