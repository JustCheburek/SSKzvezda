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
				ssk: "var(--unic-color)",
				background: "rgb(245 245 245/1)"
			},
			screens: {
				"xs": "475px"
			}
		},
	},
	plugins: [
			addDynamicIconSelectors()
	],
} satisfies Config;
