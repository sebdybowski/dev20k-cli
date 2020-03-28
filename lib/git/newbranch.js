import { exec } from 'shelljs';
import { style } from 'utils';

export const newbranch = branchName => branchName ?
  exec(`git checkout -b ${branchName}`, () => console.log(style.info(`New branch ${style.bold(branchName)} created.`))) :
  console.log(style.error('Enter branch name!'));
