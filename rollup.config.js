import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const pkg = require('./package.json');
const external = Object.keys(pkg.dependencies);

export default [
  {
    input: 'src/index.js',
    plugins: [
      babel(babelrc({
        addModuleOptions: false,
      })),
    ],
    external,
    exports: 'named',
    globals: {
      lodash: '_',
    },
    output: [
      {
        file: pkg.main,
        format: 'umd',
        name: 'perfect-immutable',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
  },
  {
    input: 'src/fp/index.js',
    plugins: [
      babel(babelrc({
        addModuleOptions: false,
      })),
    ],
    external,
    exports: 'named',
    globals: {
      lodash: '_',
    },
    output: [
      {
        file: 'lib/fp/perfect-immutable.mjs',
        format: 'es',
        sourcemap: true,
      },
    ],
  },
];
