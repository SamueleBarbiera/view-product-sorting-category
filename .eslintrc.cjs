/** @type {import("eslint").Linter.Config} */
const config = {
    env: {
        node: true,
        es2022: true,
    },
    extends: [
        "next",
        "plugin:@next/next/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:react/recommended",

        "plugin:react/jsx-runtime",
        "plugin:@tanstack/eslint-plugin-query/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",

    parserOptions: {
        project: true,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
        // project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ["@typescript-eslint", "react", "react-hooks", "@tanstack/query", "prettier"],
    ignorePatterns: [".eslintrc.cjs", "*.config.ts", ".next/**/*", "node_modules/**/*"],
    rules: {
        "react/display-name": 2,
        "@typescript-eslint/unbound-method": [
            "warn",
            {
                ignoreStatic: true,
            },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@tanstack/query/exhaustive-deps": "error",
        "@tanstack/query/prefer-query-object-syntax": "error",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-misused-promises": [
            "warn",
            {
                checksVoidReturn: false,
            },
        ],
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/prefer-ts-expect-error": "warn",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/explicit-member-accessibility": ["warn"],
        "no-empty-pattern": "warn",
        "react/no-children-prop": "warn",
        "react/prop-types": "off",
    },
};

module.exports = config;
