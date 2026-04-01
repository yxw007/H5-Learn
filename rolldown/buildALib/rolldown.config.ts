import { defineConfig } from "rolldown";

export default defineConfig({
	input: "src/index.ts",
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
			file: "dist/browser/index.global.js",
			format: "iife",
			name: "BuildALib",
		},
	],
});
