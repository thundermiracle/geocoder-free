import path from 'path';
import operTypes from './oper-types';

async function run() {
  // TypeScript
  const from = path.resolve(__dirname, '../src');
  await Promise.all([
    operTypes('move', from, path.resolve(__dirname, '../dist')),
  ]);
}

run();
