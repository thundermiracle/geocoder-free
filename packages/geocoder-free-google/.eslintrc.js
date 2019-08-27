const eslintrcCommon = require('../../.eslintrc');

module.exports = {
  ...eslintrcCommon,
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
};
