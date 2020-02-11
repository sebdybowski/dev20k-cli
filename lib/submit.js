#! /usr/bin/env node
const shell = require('shelljs');

const fun = (...params) => {
    console.log(params);
    shell.exec(`git add -A && git commit -m "auto-commit" && git push origin master`);
};

fun();