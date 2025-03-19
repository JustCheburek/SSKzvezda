import type {Config} from "tailwindcss";
import {addDynamicIconSelectors} from "@iconify/tailwind";
import plugin from "tailwindcss/plugin";

export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./ui/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				unic: "var(--unic)",
				background: "var(--background)",
				"light-gray": "#808080",
				gray: "#232323"
			},
			screens: {
				"xs": "475px",
				"xm": "832px",
			}
		},
	},
	darkMode: 'selector',
	plugins: [
		addDynamicIconSelectors(),
		plugin(function ({addUtilities}) {
			addUtilities({
				'.min-w-dscreen': generate('minWidth'),
				'.max-w-dscreen': generate('maxWidth'),
				'.w-dscreen': generate('width')
			})

			// @ts-ignore
			function generate(property) {
				return {
					[property]: [
						'100vw',
						'100dvw'
					],
					'@supports (-webkit-touch-callout: none)': {
						[property]: ['-webkit-fill-available', '100dvw']
					}
				}
			}
		})
	],
} satisfies Config;
