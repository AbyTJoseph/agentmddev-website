module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['astro'],
  extends: ['eslint:recommended', 'plugin:astro/recommended'],
  env: {
    es2022: true,
    node: true,
  },
};
