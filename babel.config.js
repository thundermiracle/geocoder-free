console.log('NODE_ENV:', process.env.NODE_ENV);

// common definition
const babelConfig = {
  presets: [
    '@babel/typescript',
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    'add-module-exports',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        regenerator: true,
      },
    ],
  ],
  // env: {
  //   test: {
  //     presets: ['@babel/env'],
  //   },
  //   production: {
  //     presets: ['@babel/env'],
  //   },
  // },
  ignore: ['node_modules/**'],
};

module.exports = babelConfig;
