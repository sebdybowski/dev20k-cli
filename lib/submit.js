#! /usr/bin/env node
const shell = require('shelljs');

const commitMessage = process.argv[2];
console.log(commitMessage);
shell.exec(`git add -A && git commit -m "${commitMessage}" && git push origin master`);
