import { exec } from 'shelljs';
import { execHandler, style } from 'utils';

const { info, error } = style;

const onSuccess = (dirName) => console.log(info(`Directory/File ${style.bold(dirName)} removed.`));

const onError = () => console.log(error('Enter branch name!'));

export const remove = dirName => dirName ? exec(
  `git rm ${dirName} -rf`,
  params => execHandler(params)(() => onSuccess(dirName)),
) : onError();
