#! /usr/bin/env node
const get = require('lodash.get');
const shell = require('shelljs');
const style = require('./../utils/style');

const COMMIT_MESSAGE_DEFAULT = 'Automatic changes';
const commitMessage = (get(process, 'argv[2]') || COMMIT_MESSAGE_DEFAULT);

export const submit = () => {
  shell.exec(
    `git add -A && git commit -m "${commitMessage}" && git push origin HEAD`,
    () => console.log(style.success('Submission ended. '))
  );
};
