module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended', // Ensures Prettier rules are integrated with ESLint
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
        semi: true,
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
    'react-native/no-inline-styles': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', 'babel.config.js', 'metro.config.js', 'jest.config.js'],
};
