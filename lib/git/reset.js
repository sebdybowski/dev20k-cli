import { exec } from 'shelljs';
import { execHandler, style } from '../utils';

const { info } = style;

const onSuccess = () => () => console.log(info('Changes removed.'));

export const reset = () => exec(
  'git reset --hard',
  params => execHandler(params)(() => onSuccess()),
);
