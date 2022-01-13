const themeSwapper = require('tailwindcss-theme-swapper');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		fontFamily: {
			sans: ['Quicksand', 'sans-serif'],
			display: ['MedievalSharp', 'cursive'],
			mono: ['Cutive Mono', 'monospace'],
		},
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {},
	},

	plugins: [
		require('@tailwindcss/forms'),
		themeSwapper({
			themes: [
				{
					name: 'base',
					selectors: [':root'],
					theme: {
						colors: {
							primary: '#44403c',
							background: '#fafaf9',
						},
					},
				},
				{
					name: 'dark',
					selectors: ['.dark'],
					theme: {
						colors: {
							primary: '#fafaf9',
							background: '#44403c',
						},
					},
				},
				{
					name: 'gruvbox',
					selectors: ['.gruvbox'],
					theme: {
						colors: {
							primary: '#ebdbb2',
							background: '#282828',
						},
					},
				},
				{
					name: 'void',
					selectors: ['.void'],
					theme: {
						colors: {
							primary: '#e0aaff',
							background: '#10002b',
						},
					},
				},
				{
					name: 'blue',
					selectors: ['.blue'],
					theme: {
						colors: {
							primary: '#1d3557',
							background: '#a8dadc',
						},
					},
				},
				{
					name: 'green',
					selectors: ['.green'],
					theme: {
						colors: {
							primary: '#132a13',
							background: '#ecf39e',
						},
					},
				},
			],
		}),
	],
};

module.exports = config;
