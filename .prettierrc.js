/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig  | TailwindConfig } */
const config = {
    arrowParens: 'always',
    printWidth: 80,
    singleQuote: false,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: 'all',
    tabWidth: 2,
    plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
    tailwindConfig: './packages/config/tailwind',
    importOrderTypeScriptVersion: '4.4.0',
    importOrder: [
        '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
        '^(next/(.*)$)|^(next$)',
        '^(expo(.*)$)|^(expo$)',
        '<THIRD_PARTY_MODULES>',
        '',
        '^@acme/(.*)$',
        '',
        '^~/utils/(.*)$',
        '^~/components/(.*)$',
        '^~/styles/(.*)$',
        '^~/(.*)$',
        '^[./]',
    ],
}

module.exports = config
