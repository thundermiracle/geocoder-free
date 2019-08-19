const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.test');

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.(js|ts)',
    '!**/node_modules/**',
    '!**/HttpClient.(js|ts)',
    '!**/logger.(js|ts)',
    '!**/index.(js|ts)',
  ],
  transformIgnorePatterns: ['/node_modules/(?!ramda).+\\.js$', 'dist'],
  testPathIgnorePatterns: ['mocks'],

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },

  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testEnvironment: 'node',
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
