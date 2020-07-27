import { exec } from 'shelljs';
import { execHandler, style } from 'utils';

const { info, error } = style;
const onSuccess = branchName => console.log(info(`New branch ${style.bold(branchName)} created.`));

export const newbranch = branchName => branchName ?
  exec(
    `git checkout -b ${branchName}`,
    params => execHandler(params)(() => onSuccess(branchName)),
  ) : console.log(error('Enter branch name!'));
