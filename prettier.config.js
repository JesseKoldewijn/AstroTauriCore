/**
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
const config = {
	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],
	// Import sorting
	importOrder: ["react/(.*)$", "~/(.*)$", "~/(.css)$", "^[./]"],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	// Tailwind
	tailwindAttributes: ["className"],
	tailwindFunctions: ["clsx", "cn", "twMerge"],
	// tailwindConfig: "./tailwind.config.ts",
};

export default config;
