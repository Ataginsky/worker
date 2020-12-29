const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans],
		},
		colors: {
			// Build your palette here
      transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
      white: colors.white,
			orange: colors.orange,
			gray: colors.coolGray,
      red: colors.rose,
			blue: colors.lightBlue,
			green: colors.lime,
			yellow: colors.amber,
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