/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,vue}",
	],
	theme: {
		extend: {
			colors: { 
				"color-primary": "#77966D",
				"color-primary-light": "#BDC667",
				"color-primary-dark": "#626D58",
				"color-secondary": "#544343",
				"color-gray": "#333",
				"color-white": "#fff",
				"color-blob": "#A427DF",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '20px',
				md: '50px',
			}
		}
	},
	plugins: [],
}
