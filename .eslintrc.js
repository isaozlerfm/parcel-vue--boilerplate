module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint-config-airbnb-base',
    'plugin:vue/recommended',
    'plugin:import/typescript'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'quotes': ['error', 'single']
  }
};
