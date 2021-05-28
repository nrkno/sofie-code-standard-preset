module.exports = {
	commonPlugins: ['prettier', 'jest'],
	tsPlugins: ['@typescript-eslint', 'prettier', 'jest'],

	commonExtends: [
		'eslint:recommended',
		'plugin:node/recommended',
		'plugin:jest/recommended',
		'plugin:prettier/recommended',
	],
	tsExtends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:node/recommended',
		'plugin:jest/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],

	commonRules: {
		'prettier/prettier': 'error',
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'no-extra-semi': 'off',
		'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
		'no-use-before-define': 'off',
		'no-warning-comments': ['error', { terms: ['nocommit'] }],
		'jest/no-mocks-import': 'off',
	},
	tsRules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/no-floating-promises': 'error',
	},

	tsParser: {
		parser: '@typescript-eslint/parser',
		parserOptions: { project: './tsconfig.json' },
		settings: {
			node: {
				tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'],
			},
		},
	},
}
