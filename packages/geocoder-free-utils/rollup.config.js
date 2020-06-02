import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    output: {
      name: 'GeocoderFreeUtils',
      file: 'umd/geocoderfreeutils.min.js',
      format: 'umd',
    },
    plugins: [
      resolve(),
      typescript(),
      babel({ babelHelpers: 'bundled' }),
      terser(),
    ],
  },
];
