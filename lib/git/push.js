import { exec } from 'shelljs';
import { style, execHandler } from '../utils';

const { success } = style;
const onSuccess = () => console.log(success('Submission ended. :)'));

export const push = () => exec(
  'git push origin HEAD',
  params => execHandler(params)(onSuccess),
);
