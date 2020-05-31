console.log('NODE_ENV:', process.env.NODE_ENV);

const common = require('../../babel.common');
const commones = require('../../babel.common.es');

let commonBabelConfig = process.env.NODE_ENV === 'es' ? commones : common;

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
  ...commonBabelConfig,
  plugins: [...commonBabelConfig.plugins, ...plugins],
};

module.exports = babelConfig;
