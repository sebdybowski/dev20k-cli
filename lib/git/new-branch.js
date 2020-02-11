#! /usr/bin/env node
const get = require('lodash.get');
const shell = require('shelljs');

const branchName = get(process, 'argv[2]');

if (branchName) {
    shell.exec(`git checkout -b ${branchName}`, () => console.log(`New branch ${branchName} created...`));
} else {
    console.error('Enter branch name!');
}
