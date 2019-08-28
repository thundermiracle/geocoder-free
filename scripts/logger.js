const colors = require('colors');

function logger() {
  // eslint-disable-next-line no-console
  const myLogger = console.log;

  function now() {
    return new Date().toLocaleString();
  }

  return {
    info(msg, includeHeader = true) {
      let headerInfo = '';
      if (includeHeader) {
        headerInfo = colors.green(`${now()}  [info] `);
      }
      myLogger(headerInfo + colors.green(msg));
    },

    warning(msg) {
      myLogger(colors.yellow(`${now()}  [warn] `) + colors.yellow(msg));
    },

    error(msg) {
      myLogger(colors.red(`${now()}  [error] `) + colors.red(msg));
    },
  };
}

module.exports = logger();
