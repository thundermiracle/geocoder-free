console.log('NODE_ENV:', process.env.NODE_ENV);

const common = require('../../babel.common');

const plugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      helpers: false,
      regenerator: true,
    },
  ],
  [
    'module-resolver',
    {
      root: ['./'],
      alias: {
        src: './src',
        lib: './src/lib',
        ja: './src/ja',
      },
    },
  ],
];

// merge
const babelConfig = {
  ...common,
  plugins: [...common.plugins, ...plugins],
};

module.exports = babelConfig;
