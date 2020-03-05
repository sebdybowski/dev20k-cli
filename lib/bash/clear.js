#! /usr/bin/env node
const shell = require('shelljs');
const style = require('./../utils/style');

shell.exec('clear', () => console.log(style.info('Terminal clear. ')));
