const path = require('path');
const operTypes = require('./oper-types');

const packagePath = process.cwd();

async function run() {
  // TypeScript
  const from = path.resolve(packagePath, '__test__');
  await Promise.all([operTypes('remove', from)]);
}

run();
