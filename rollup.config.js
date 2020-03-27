import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: './lib/index.js',
    output: {
      file: './dist/cli.js',
      format: 'umd',
      // amd: {
      //   id: 'xd'
      // },
      banner: '#! /usr/bin/env node',
      name: 'xd'
    },
    plugins: [
      // preserveShebangs(),
      json(),
      alias({
        entries: [
          { find: 'utils', replacement: '../../../utils' },
          { find: 'batman-1.0.0', replacement: './joker-1.5.0' }
        ]
      }),
      commonjs(),
    ]
  }
];
