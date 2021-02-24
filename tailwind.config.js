const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const customIndigo = {
	/*  50: '#F0F6FF',
	100: '#E0EDFF',
	200: '#C8DDFE',
	300: '#A6C4FC',
	400: '#82A3F8', */
	 50: '#f0f4ff',
	100: '#e0e9ff',
	200: '#e0ddfe',
	300: '#c5d4fc',
	400: '#82a1f8',

	500: '#6480F2',
	600: '#485DE5',
	700: '#3744BD',
	800: '#2F3CA2',
	900: '#2E3A7F',
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		fontFamily: {
			sans: ['Open Sans', 'Poppins', ...defaultTheme.fontFamily.sans],
		},
		colors: {
			// Build your palette here
      transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
      white: colors.white,
			orange: colors.orange,
      red: colors.rose,
			blue: colors.blue,
			twindigo: colors.indigo,
			green: colors.lime,
			yellow: colors.amber,

			indigo: customIndigo,

			gray: {
				 50: '#F9FAFC',
				100: '#F0F3F8',
				150: '#EFF1F6',
				200: '#E0E2E8',
				300: '#CBCED5',
				350: '#B3B7C1',
				400: '#A9ADB9',

				500: '#9A9A9A',
				550: '#868686',
				600: '#757575',
				650: '#646464',
				700: '#535353',
				750: '#424242',
				800: '#323232',
				900: '#0E0E0E',
			},

			theme: customIndigo,
		},
		borderWidth: {
			'0': '0',
			DEFAULT: '1px',
			'2': '2px',
			'3': '3px',
			'4': '4px',
			'6': '6px',
			'8': '8px',
		},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}