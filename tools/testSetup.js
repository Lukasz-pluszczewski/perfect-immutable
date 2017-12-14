// Register babel so that it will transpile ES6 to ES5 before our tests run.
// We need to specify presets as, because of rollup, we disabled "modules" in .babelrc, but it must be enabled for tests
require('babel-register')({
  babelrc: false,
  presets: [
    ['env', {
      targets: {
        node: 'current',
      },
    }],
    'stage-3',
  ],
});
