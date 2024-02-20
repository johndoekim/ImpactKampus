/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        PartyPunch: '#C54966',
        Grapemist: '#8398CA',
        Blueberry: '#2C333E',
        GreenBanana: '#BABC72',
        Dijon: '#97754C',
        HoneyYellow: '#CA9456',
        PeachFuzz: '#FFBE98',
        Pristine: '#F2E8DA',
        HoneyPeach: '#DCBD9E',
        PeachPuree: '#EFCFBA',
        PeachPearl: '#FFB2A5',
        Almondine: '#A78C7B',
        Almondpeach: '#D8C8BD',
        Quicksand: '#bca08d',
        MainBg: '#FFF8DC',
        AvatarBg: '#FFE16A',
      },
    },
  },
  plugins: [],
};
