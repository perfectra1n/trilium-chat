module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    plugins: ['prettier'],
    extends: ['eslint:recommended', 'airbnb-base', 'plugin:jsonc/recommended-with-jsonc', 'prettier'],
    overrides: [
        {
            files: ['*.json', '*.json5', '*.jsonc'],
            parser: 'jsonc-eslint-parser',
        },
        {
            files: ['package.json'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/sort-keys': [
                    'warn',
                    {
                        pathPattern: '^$',
                        order: [
                            'name',
                            'version',
                            'private',
                            'packageManager',
                            'description',
                            'type',
                            'keywords',
                            'homepage',
                            'bugs',
                            'license',
                            'author',
                            'contributors',
                            'funding',
                            'files',
                            'main',
                            'module',
                            'exports',
                            'unpkg',
                            'jsdelivr',
                            'browser',
                            'bin',
                            'man',
                            'directories',
                            'repository',
                            'publishConfig',
                            'scripts',
                            'peerDependencies',
                            'peerDependenciesMeta',
                            'optionalDependencies',
                            'dependencies',
                            'devDependencies',
                            'engines',
                            'config',
                            'overrides',
                            'pnpm',
                            'husky',
                            'lint-staged',
                            'eslintConfig',
                        ],
                    },
                    {
                        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
                        order: { type: 'asc' },
                    },
                ],
            },
        },
    ],
    globals: {
        api: true,
        $: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'no-console': 'off',
        'consistent-return': 'off',
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': 'off',
        'class-methods-use-this': 'off',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.ts', '.js', '.jsx', '.json'],
            },
        },
    },
};
