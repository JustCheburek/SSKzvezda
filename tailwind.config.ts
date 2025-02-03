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
				ssk: "var(--unic)",
				background: "var(--background)"
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
