import { defineConfig } from "rolldown";

export default defineConfig({
	input: "src/index.ts",
	external: ["crypto-js"],
	output: [
		{
			file: "dist/node/index.js",
			format: "esm",
		},
		{
			file: "dist/node/index.cjs",
			format: "cjs",
			exports: "named",
		},
		{
			file: "dist/browser/index.esm.js",
			format: "esm",
		},
		{
			file: "dist/browser/index.cjs",
			format: "cjs",
			exports: "named",
		},
		{
			file: "dist/browser/index.global.js",
			format: "iife",
			name: "BuildALib",
			globals: {
				"crypto-js": "CryptoJS",
			},
		},
		{
			file: "dist/browser/index.umd.js",
			format: "umd",
			name: "BuildALib",
			globals: {
				"crypto-js": "CryptoJS",
			},
		},
	],
});
