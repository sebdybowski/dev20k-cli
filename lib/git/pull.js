#! /usr/bin/env node
const shell = require('shelljs');

shell.exec('git pull origin HEAD', () => console.info('Pulled changes...'));
