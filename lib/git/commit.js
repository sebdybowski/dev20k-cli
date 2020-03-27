import { exec, echo } from 'shelljs';
import { style, execHandler } from './../utils/index';
import { COMMIT_MESSAGE_DEFAULT } from '../constants';

const onSuccess = () => echo(style.success('All files added & committed. :)'));

export const commit = (commitMessage = COMMIT_MESSAGE_DEFAULT) => exec(
  `git add -A && git commit -m "${commitMessage}"`,
  params => execHandler(params)(onSuccess)
);
