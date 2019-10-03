module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/__test__'],

  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.(js|ts)',
    '!**/node_modules/**',
    '!**/HttpClient.(js|ts)',
    '!**/logger.(js|ts)',
    '!**/logFormat.(js|ts)',
    '!**/GetLatLngByAPI.(js|ts)',
    '!**/index.(js|ts)',
  ],

  transformIgnorePatterns: ['/node_modules/(?!ramda).+\\.js$', 'dist'],
  testPathIgnorePatterns: ['mocks'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testRegex: '(/__test__/.*.(test|spec)).(jsx?|tsx?)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};
