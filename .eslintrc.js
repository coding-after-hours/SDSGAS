/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	env: {
		es2022: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'only-warn'],
	rules: {},
};
