module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'airbnb-typescript',
    'plugin:jest/all',
    'jest-enzyme',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:css-modules/recommended',
  ],
  plugins: [
    'babel',
    'import',
    'jsx-a11y',
    'react',
    'jest',
    'prettier',
    '@typescript-eslint',
    'pretty-imports',
    'css-modules',
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'react/prop-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'linebreak-style': 'off',

    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 0,

    'max-len': ['error', 100, 2, { ignoreUrls: true }],
    'no-console': 'error',
    'no-alert': 'error',

    'no-param-reassign': 'off',
    radix: 'off',

    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

    'prefer-destructuring': 'off',

    'react/no-find-dom-node': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',

    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],

    'prettier/prettier': ['error'],
    'pretty-imports/sorted': 'warn',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/no-use-before-define': 'off',
    'react/prefer-stateless-function': 'off',
    'react/state-in-constructor': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
