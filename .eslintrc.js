module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': 0,
    'comma-dangle': ['error', 'never']
  },
  ignorePatterns: ['dist', 'node_modules']
};
