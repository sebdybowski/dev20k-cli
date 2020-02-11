#! /usr/bin/env node
const shell = require('shelljs');

const commitMessage = process.argv[3];
shell.exec(`git add -A && git commit -m "${commitMessage}" && git push origin master`);
