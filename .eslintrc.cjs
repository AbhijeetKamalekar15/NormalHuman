module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    node: true,  // Enable Node.js global variables
    browser: true, // Enable browser global variables
  },
  globals: {
    process: 'readonly', // Treat process as a global variable
  },
  rules: {
    // Your custom rules here
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",

  },
};



