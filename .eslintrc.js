module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'comma-dangle': ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed']
  },
};
