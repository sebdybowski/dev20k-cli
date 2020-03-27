import { exec } from 'shelljs';
import { style, execHandler } from './../utils/index';
import { COMMIT_MESSAGE_DEFAULT } from '../constants';

const { success } = style;
const onSuccess = () => console.log(success('Submission ended. :)'));

export const submit = (commitMessage = COMMIT_MESSAGE_DEFAULT) => exec(
  `git add -A && git commit -m "${commitMessage}" && git push origin HEAD`,
  params => execHandler(params)(onSuccess),
);
