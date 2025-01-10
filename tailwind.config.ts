import type {Config} from "tailwindcss";

export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./ui/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				ssk: "#0089E3"
			},
		},
	},
	plugins: [],
} satisfies Config;
