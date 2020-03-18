#! /usr/bin/env node
import { exec, echo } from 'shelljs';
import { style, execHandler } from './../utils/';

const { info, bold } = style;

const log = (commitCount = 5) => {
  const n = !isNaN(commitCount) ? commitCount : 5;
  echo('\n');
  echo(info(`List of last ${bold(`${n} commits`)}:`));
  exec(`git log --oneline -n ${n}`, execHandler);
};

export const status = (commitCount) => {
  echo(info(`Current git ${bold('status')}:`));
  exec('git status', params => execHandler(params)(() => log(commitCount)));
};