// @ts-check

const path = require('path');

/**
 * @type {import("next").NextConfig}
 * */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, '/src/styles/')],
		additionalData: '@use "global" as *;',
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

module.exports = nextConfig;
