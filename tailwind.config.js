const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		fontFamily: {
			'body': ['Inter var', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
		},
		colors: {
			// Build your palette here
      transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
      white: colors.white,
			orange: colors.orange,
			gray: colors.trueGray,
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