import { exec } from 'shelljs';
import { style, execHandler } from 'utils';

const { success } = style;
const onSuccess = () => console.log(style.info('Pulled changes...'));

export const pull = (branch = 'HEAD') => exec(
  `git pull origin ${branch}`,
  params => execHandler(params)(onSuccess),
);
