module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/node_modules/**',
    '!**/HttpClient.js',
    '!**/logger.js',
  ],
  transformIgnorePatterns: ['/node_modules/(?!ramda).+\\.js$', 'dist'],
  testPathIgnorePatterns: ['mocks'],
};
