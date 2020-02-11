#! /usr/bin/env node
const shell = require('shelljs');

shell.exec(`git add -A && git commit -m "auto-commit" && git push origin master`, (...params) => console.log(params));