#! /usr/bin/env node
const get = require('lodash.get');
const shell = require('shelljs');

const directoryName = get(process, 'argv[2]');

shell.exec(`mkdir ${directoryName} && cd ${directoryName}`, () => shell.exec('pwd'));
