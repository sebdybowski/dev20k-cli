import { exec } from 'shelljs';
import { execHandler, style } from 'utils';

const { info } = style;
const onSuccess = branchName => console.log(info(`Local branches removed, except branch: ${style.bold(branchName)}`));

export const rmbranches = (mainBranch = 'master') => exec(
  `git branch | grep -v '${mainBranch}' | xargs git branch -D`,
  params => execHandler(params)(() => onSuccess(mainBranch)),
);
