const { pathsToModuleNameMapper } = require('ts-jest/utils');
const base = require('../../jest.config.base');
const { compilerOptions } = require('./tsconfig');
const pack = require('./package.json');

module.exports = {
  ...base,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
  name: pack.name,
  displayName: pack.name,
};
