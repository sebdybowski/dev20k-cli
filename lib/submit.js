#! /usr/bin/env node
const shell = require('shelljs');

console.log(process.argv);
shell.exec(`git add -A && git commit -m "auto-commit" && git push origin master`);
