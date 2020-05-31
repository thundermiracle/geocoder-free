// common definition
const babelESConfig = {
  presets: ['@babel/typescript'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
  ignore: ['node_modules/**'],
};

module.exports = babelESConfig;
