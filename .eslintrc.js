module.exports = {
  extends: 'airbnb',
  rules: {
    "import/no-extraneous-dependencies": ["error", {devDependencies: true}],
    "no-console": ["error", {allow: ["log", "warn", "error"]}],
  },
  env: {
    browser: true,
    node: true,
  }
};