module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		files: ["*.ts", "*.tsx"],
		project: "tsconfig.json",
		sourceType: "module",
	},
	plugins: [
		"@typescript-eslint/eslint-plugin",
		"prettier",
		"simple-import-sort",
	],
	extends: [
		"next",
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: [".eslintrc.js"],
	rules: {
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"no-console": 2,
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-namespace": "off",
		"@next/next/no-img-element": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-explicit-any": "off",
		"react/jsx-uses-react": "error",
	},
	overrides: [
		{
			parserOptions: {
				project: ["./tsconfig.json"], // Specify it only for TypeScript files
			},
			files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
			rules: {
				"simple-import-sort/imports": [
					"error",
					{
						groups: [
							// `react` first, `next` second, then packages starting with a character
							["^react$", "^next", "^[a-z]"],
							// Packages starting with `@`
							["^@"],
							// Packages starting with `~`
							["^~"],
							// Imports starting with `../`
							["^\\.\\.(?!/?$)", "^\\.\\./?$"],
							// Imports starting with `./`
							["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
							// Style imports
							["^.+\\.s?css$"],
							// Side effect imports
							["^\\u0000"],
						],
					},
				],
			},
		},
	],
};