import type {Config} from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

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
			addDynamicIconSelectors()
	],
} satisfies Config;
