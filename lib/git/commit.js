#! /usr/bin/env node
const get = require('lodash.get');
const shell = require('shelljs');

const COMMIT_MESSAGE_DEFAULT = 'Automatic changes';

const commitMessage = (get(process, 'argv[2]') || COMMIT_MESSAGE_DEFAULT);
shell.exec(`git add -A && git commit -m "${commitMessage}"`, () => console.info('Commission ended...'));
