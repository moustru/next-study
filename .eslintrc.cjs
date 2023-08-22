module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb',
		'next',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		/** React */
		'react-hooks/rules-of-hooks': 1,
		'react/jsx-no-bind': 'off',
		'react/no-unescaped-entities': 'warn',
		'react-hooks/exhaustive-deps': 0,
		'react/react-in-jsx-scope': 0,
		'react/jsx-props-no-spreading': 0,
		'react/button-has-type': 0,
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.tsx'],
			},
		],
		'react/forbid-prop-types': 0,
		'react/require-default-props': 0,
		'react/display-name': 0,
		'react/no-arrow-function-lifecycle': 0,
		'react/no-invalid-html-attribute': 0,
		'react/no-unused-class-component-methods': 0,
		'react/destructuring-assignment': 0,
		'react/prop-types': 0,
		'react/function-component-definition': [
			0,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/no-array-index-key': 0,

		/** TypeScript */
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/no-shadow': [1],
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-namespace': 0,
		'@typescript-eslint/ban-ts-comment': 0,

		/** Imports  */
		'import/order': [
			'warn',
			{
				'newlines-between': 'always',
				alphabetize: {
					caseInsensitive: false,
					order: 'asc',
				},
				warnOnUnassignedImports: true,
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'type',
					'object',
				],
				pathGroups: [
					{
						pattern: './**/**.scss',
						group: 'object',
						position: 'after',
					},
					{
						pattern: '**/**.svg',
						group: 'object',
						position: 'before',
					},
				],
			},
		],
		'import/no-extraneous-dependencies': 0,
		'import/no-unresolved': 0,
		'import/no-cycle': 0,
		'import/prefer-default-export': 0,
		'import/extensions': [
			1,
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/react-hooks/exhaustive-deps': [
			0,
			{
				devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
				peerDependencies: true,
			},
		],

		/** Others  */
		'no-param-reassign': 0,
		'jsx-a11y/click-events-have-key-events': 'warn',
		'no-shadow': 0,
		'arrow-body-style': 'off',
		'no-unused-vars': ['warn', { args: 'all' }],
		allowForLoopAfterthoughts: 0,
		'jsx-a11y/anchor-is-valid': 0,
		'jsx-a11y/label-has-associated-control': 0,
		'no-underscore-dangle': 0,
		'class-methods-use-this': 0,
		'no-return-await': 0,
		'prefer-promise-reject-errors': 0,
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-undef': 0,
		camelcase: 0,
		'no-use-before-define': 0,
		'@next/next/no-img-element': 0,
		'prefer-const': 0,
		'no-empty-pattern': 0,
		'default-case': 0,
		'consistent-return': 0,
	},
};
