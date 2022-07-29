import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './lib/index.js',
    output: {
      file: './dist/xd.js',
      format: 'umd',
      banner: '#! /usr/bin/env node',
      name: 'xd',
      globals: {
        commander: 'commander',
        chalk: 'chalk',
        ['lodash.noop']: 'lodash.noop',
        shelljs: 'shelljs',
      },
    },
    plugins: [
      json(),
      alias({
        entries: [
          { find: 'utils', replacement: './lib/utils/index.js' },
          { find: 'git', replacement: './lib/git/index.js' },
          { find: 'sh', replacement: './lib/sh/index.js' },
        ]
      }),
      commonjs(),
      terser()
    ],
    external: [ 'commander', 'chalk', 'lodash.noop', 'shelljs' ],
  }
];
