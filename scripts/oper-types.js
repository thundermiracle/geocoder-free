const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const logger = require('./logger');

function operateTypescript(func, from, to) {
  const files = glob.sync('**/*.d.ts', { cwd: from });
  const cmds = files.map(file => {
    logger.info(`${func}  ${from} -> ${to || ''}`);
    return to == null
      ? fse[func](path.resolve(from, file))
      : fse[func](path.resolve(from, file), path.resolve(to, file));
  });
  return Promise.all(cmds);
}

module.exports = operateTypescript;
