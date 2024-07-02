/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
	trailingComma: 'all',
	tabWidth: 4,
	printWidth: 80,
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	bracketSpacing: true,
	arrowParens: 'always',
	bracketSameLine: false,
	endOfLine: 'lf',
	tailwindConfig: './tailwind.config.ts',
	tailwindAttributes: ['wrapperClassName', 'wrapClassName', 'rootClassName'],
	tailwindFunctions: ['classNames', 'classnames', 'twMerge'],
	plugins: [
		'prettier-plugin-tailwindcss',
		'@trivago/prettier-plugin-sort-imports',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	importOrderGroupNamespaceSpecifiers: true,
	importOrder: [
		'^@/env/(.*)$',
		'^@/app/(.*)$',
		'^@/trpc/(.*)$',
		'^@/server/(.*)$',
		'^[./]',
	],
};

export default config;
