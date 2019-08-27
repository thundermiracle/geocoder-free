import path from 'path';
import fse from 'fs-extra';
import glob from 'glob';

function operateTypescript(func, from, to) {
  const files = glob.sync('**/*.d.ts', { cwd: from });
  const cmds = files.map(file =>
    to == null
      ? fse[func](path.resolve(from, file))
      : fse[func](path.resolve(from, file), path.resolve(to, file)),
  );
  return Promise.all(cmds);
}

export default operateTypescript;
