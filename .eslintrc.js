module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                semi: false,
                tabWidth: 4,
                useTabs: false,
                endOfLine: 'auto',
            },
        ],
    },
}
