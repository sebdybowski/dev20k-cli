#! /usr/bin/env node
import { exec } from 'shelljs';
import { style, execHandler } from './../utils/';

const { success } = style;

const COMMIT_MESSAGE_DEFAULT = 'Automatic changes';

const onSuccess = () => console.log(success('Submission ended. :)'));

export const submit = (commitMessage = COMMIT_MESSAGE_DEFAULT) => exec(
  `git add -A && git commit -m "${commitMessage}" && git push origin HEAD`,
  params => execHandler(params)(onSuccess),
);
