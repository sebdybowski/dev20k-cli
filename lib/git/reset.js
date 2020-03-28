import { exec } from 'shelljs';
import { style } from 'utils';

export const reset = () => {
  exec('git reset --hard', () => console.log(style.info('Changes removed.')));
};
