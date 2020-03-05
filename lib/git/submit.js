#! /usr/bin/env node
import { exec } from 'shelljs';
import { style } from './../utils/';

const COMMIT_MESSAGE_DEFAULT = 'Automatic changes';

export const submit = (commitMessage = COMMIT_MESSAGE_DEFAULT) => {
  exec(
    `git add -A && git commit -m "${commitMessage}" && git push origin HEAD`,
    () => console.log(style.success('Submission ended. '))
  );
};
