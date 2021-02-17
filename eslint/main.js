module.exports = {
	extends: ['eslint:recommended', 'plugin:node/recommended', 'plugin:prettier/recommended'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
	env: { es2017: true },
	parserOptions: { sourceType: 'module', ecmaVersion: 2018 },
	overrides: [
		// Note: these replace the values defined above, so make sure to extend them if they are needed
		{
			files: ['*.ts'],
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:node/recommended',
				'prettier/@typescript-eslint',
				'plugin:prettier/recommended',
			],
			plugins: ['@typescript-eslint', 'prettier'],
			parser: '@typescript-eslint/parser',
			parserOptions: { project: './tsconfig.json' },
			settings: {
				node: {
					tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'],
				},
			},
			rules: {
				'prettier/prettier': 'error',
				'no-unused-vars': 'off',
				'no-extra-semi': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/interface-name-prefix': 'off',
				'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
				'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
				'no-use-before-define': 'off',
				'@typescript-eslint/no-floating-promises': 'error',
			},
		},
		{
			files: ['*.js'],
			settings: {
				node: {
					tryExtensions: ['.js', '.json', '.node', '.ts'],
				},
			},
			rules: {
				'prettier/prettier': 'error',
				'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
				'no-extra-semi': 'off',
				'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
				'no-use-before-define': 'off',
			},
		},
		{
			files: ['src/**/__tests__/**/*.ts'],
			env: {
				jest: true,
			},
			rules: {
				'prettier/prettier': 'error',
				'@typescript-eslint/ban-ts-ignore': 'off',
				'@typescript-eslint/ban-ts-comment': 'off',
				'no-use-before-define': 'off',
			},
		},
		{
			files: ['examples/**/*.ts'],
			rules: {
				'prettier/prettier': 'error',
				'no-process-exit': 'off',
				'node/no-missing-import': 'off',
			},
		},
	],
}
