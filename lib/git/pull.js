#! /usr/bin/env node
const shell = require('shelljs');
const style = require('./../utils/style');

shell.exec('git pull origin HEAD', () => console.log(style.info('Pulled changes...')));
