#! /usr/bin/env node
const get = require('lodash.get');
const shell = require('shelljs');

shell.exec('git pull origin HEAD', () => console.log('Pulled changes...'));
