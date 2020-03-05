#! /usr/bin/env node
const get = require('lodash.get');
const shell = require('shelljs');
const style = require('./../utils/style');

const branchName = get(process, 'argv[2]');

if (branchName) {
    shell.exec(`git checkout -b ${branchName}`, () => console.log(style.info(`New branch ${style.bold(branchName)} created.`)));
} else {
    console.log(style.error('Enter branch name!'));
}
