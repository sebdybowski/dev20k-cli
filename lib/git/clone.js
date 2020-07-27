import { exec } from 'shelljs';
import { style, execHandler } from 'utils';

const { info, error } = style;
const onSuccess = () => console.log(info('Repository cloned :)'));

export const clone = path => path ? exec(
  `git clone ${path}`,
  params => execHandler(params)(onSuccess),
) : console.log(error('No repository path provided!'));
