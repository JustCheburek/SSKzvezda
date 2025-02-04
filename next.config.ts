import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ['ts', 'tsx'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
			{
				protocol: 'http',
				hostname: '**',
			}
		]
	},
	serverExternalPackages: ["typescript"],
	experimental: {
		typedEnv: true
	}
};

export default nextConfig;
