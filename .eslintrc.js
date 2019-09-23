module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:prettier/recommended'
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
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error'
  }
};
