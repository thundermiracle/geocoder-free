console.log('NODE_ENV:', process.env.NODE_ENV);

// common definition
const babelConfig = {
  presets: [],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          lib: './src/lib',
          core: './src/core',
        },
      },
    ],
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
  env: {
    test: {
      presets: ['@babel/env'],
    },
    production: {
      presets: ['@babel/env'],
    },
  },
  ignore: ['node_modules/**'],
};

module.exports = babelConfig;
