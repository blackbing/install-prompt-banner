global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

global.__CLIENT__ = true;
global.__DEVELOPMENT__ = false;

const showAll = !!process.env.SHOW_ALL && process.env.SHOW_ALL !== 'false';
const _consoleError = console.error;
const _consoleWarning = console.warning;

function byPassRules(...args) {
  if (
    args[0] &&
    args[0].includes &&
    args[0].includes('shouldComponentUpdate(): Returned undefined instead of a boolean value')
  ) {
    return true;
  }

  return false;
}

const createWrappedConsoleOutput = output => (...args) => {
  if (byPassRules(...args)) {
    if (showAll) {
      output.call(console, '[whitelisted]', ...args);
    }

    return;
  }

  output.call(console, ...args);
  throw new Error(...args);
};

console.error = createWrappedConsoleOutput(_consoleError);
console.warning = createWrappedConsoleOutput(_consoleWarning);
