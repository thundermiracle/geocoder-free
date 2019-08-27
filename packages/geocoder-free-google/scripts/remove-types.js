import path from 'path';
import operTypes from './oper-types';

async function run() {
  // TypeScript
  const from = path.resolve(__dirname, '../__test__');
  await Promise.all([operTypes('remove', from)]);
}

run();
