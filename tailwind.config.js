/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			colors: {
				primary: {
					light: 'rgba(2, 109, 238, 0.5)', // Light default color
					DEFAULT: '#026dee', // Default primary color
					dark: '',
				},
				'main-primary': {
					light: '#FDF8F1', // Light default color
					DEFAULT: '#041084', // Default primary color
					dark: '',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
