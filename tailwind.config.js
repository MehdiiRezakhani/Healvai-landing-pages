/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs' : '380px',
      'sm' : '680px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors : {
        primary: '#0F67FE',
        primary_1000: '#001141',
        primary_900: '#00206c',
        primary_800: '#00349c',
        primary_700: '#0048ce',
        primary_600: '#0f67fe',
        primary_500: '#458cff',
        primary_400: '#78aeff',
        primary_300: '#a6cbff',
        primary_200: '#d0e4ff',
        primary_100: '#edf5ff',
        teal_1000: '#081a1c',
        teal_900: '#022a30',
        teal_800: '#003c44',
        teal_700: '#00545d',
        teal_600: '#00737d',
        teal_500: '#00939d',
        teal_400: '#08bdba',
        teal_300: '#3dd6db',
        teal_200: '#9eeff0',
        teal_100: '#d9fbfb',
        cyan_1000: '#061727',
        cyan_900: '#012749',
        cyan_800: '#003a6d',
        cyan_700: '#00539a',
        cyan_600: '#0072c3',
        cyan_500: '#1192e8',
        cyan_400: '#33b1ff',
        cyan_300: '#82cfff',
        cyan_200: '#bae6ff',
        cyan_100: '#e5f6ff',
        red_1000:  '#2d0708',
        red_900:  '#520407',
        red_800:  '#750e13',
        red_700:  '#a21922',
        red_600:  '#da1e2e',
        red_500:  '#fa4d5e',
        red_400:  '#ff8391',
        red_300:  '#ffb3bd',
        red_200:  '#ffd7dd',
        red_100:  '#fff1f3',
        purple_1000: '#1c0f30',
        purple_900: '#31135e',
        purple_800: '#491d8b',
        purple_700: '#6929c4',
        purple_600: '#8a3ffc',
        purple_500: '#A56EFF',
        purple_400: '#BC95FF',
        purple_300: '#d4bbff',
        purple_200: '#e8daff',
        purple_100: '#f6f2ff',
        yellow_1000: '#451a03',
        yellow_900: '#78350f',
        yellow_800: '#92400e',
        yellow_700: '#b45309',
        yellow_600: '#d97706',
        yellow_500: '#f59e0b',
        yellow_400: '#fbbf24',
        yellow_300: '#f6d053',
        yellow_200: '#fef2c7',
        yellow_100: '#fffae5',
        green_1000: '#152e05',
        green_900: '#2d5314',
        green_800: '#376516',
        green_700: '#438015',
        green_600: '#55a316',
        green_500: '#6ec522',
        green_400: '#92de4a',
        green_300: '#bbef86',
        green_200: '#daf7bb',
        green_100: '#edfcdc',
        gray_1000: '#090e1d',
        gray_900: '#141b31',
        gray_800: '#242e49',
        gray_700: '#3d4966',
        gray_600: '#5d6a85',
        gray_500: '#818ba0',
        gray_400: '#9ea7b8',
        gray_300: '#bec5d2',
        gray_200: '#dce1e8',
        gray_100: '#f2f5f9',
        white: '#ffffff',
        secondary: "#F97316",
        greenCustom: "#A3E635",
        pinkCustom:"#9333EA",
        redCustom:"#EF4444",
        yellowCustom:'#fc9c57',
        grayCustom:"#676C75",
        blackLight: "#262b37",
        light: '#F2F5F9',
        dark: '#f7fafe',
        black: '#111214',
      },
      boxShadow: {
        first: "0px 16px 32px 0px rgba(9,14,29,0.05)",
        second: "0px 6px 12px 0px rgba(16,24,40,0.1)",
        third: "0px 16px 8px 0px rgba(75,52,37,0.05)",
      },
      backgroundImage: {
        'bg1': "url('/assets/bannerBackground/background_Image1.png')",
      },
      keyframes: {
          rotation : {
            'to' : {transform: 'rotate(360deg)'}
          },
          rotationReverse : {
            'to' : {transform: 'rotate(-360deg)'}
          },
          locationAnimate : {
            '50%': {backgroundColor: 'rgba(245,157,15,1)'},
            '100%': {backgroundColor: 'rgba(245,157,15,0)'},
          },
          zoomInOut : {
            '50%' : {transform: 'scale(1.3)'},
            '100%': {transform: 'scale(1)'}
          },
          zoomInOutContact : {
            '25%': {transform: 'scale(1.2)'},
            '50%' : {transform: 'scale(1.3)'},
            '75%' : {transform: 'scale(1.7)'},
            '100%': {transform: 'scale(1)'}
          },
          firstLoading:{
            "0%" : {
              opacity : '0%'
            },
            "100%" : {
              opacity : '100%'
            }
          },
      },
      textDecorationColor: {
        'red': '#ff0000',
      },
      textDecorationThickness: {
        '1px': '1px',
      },
    },
  },
  plugins: [require("@tailwindcss/forms"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.line-through-custom': {
          textDecoration: 'line-through',
          textDecorationColor: '#ff0000',
          textDecorationThickness: '2px',
        },
      }
      addUtilities(newUtilities)
    }
  ], 
}
