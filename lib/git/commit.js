#! /usr/bin/env node
import { exec } from 'shelljs';
import { style } from './../utils/';

const COMMIT_MESSAGE_DEFAULT = 'Automatic changes';

export const commit = (commitMessage = COMMIT_MESSAGE_DEFAULT) => {
  exec(`git add -A && git commit -m "${commitMessage}"`, () => console.log(style.success('All files added & commit. ')));
};
