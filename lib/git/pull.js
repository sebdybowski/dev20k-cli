import { exec } from 'shelljs';
import { style } from 'utils';

const logSuccessMessage = () => console.log(style.info('Pulled changes...'));

export const pull = (branch = 'HEAD') => exec(`git pull origin ${branch}`, logSuccessMessage);
