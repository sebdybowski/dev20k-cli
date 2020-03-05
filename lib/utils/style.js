import chalk from 'chalk';
import { PREFIX } from '../constants';

const info = text => chalk.black.bgBlue(PREFIX) + ` ${text}`;
const error = text => chalk.black.bgRed(PREFIX) + ` ${text}`;
const success = text => chalk.black.bgGreen(PREFIX) + ` ${text}`;
const warning = text => chalk.black.bgYellow(PREFIX) + ` ${text}`;
const bold = text => chalk.magenta.bold(text);

export const style = { info, error, success, warning, bold };
