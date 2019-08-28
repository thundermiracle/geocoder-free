const path = require('path');
const operTypes = require('./oper-types');

const packagePath = process.cwd();

async function run(to) {
  // TypeScript
  const from = path.resolve(packagePath, 'src');
  await Promise.all([operTypes('move', from, path.resolve(packagePath, to))]);
}

const toFolder = process.argv[2] || 'dist';

run(toFolder);
