#! /usr/bin/env node
import { exec, echo } from 'shelljs';
import { style, execHandler } from './../utils/';

const { info, bold } = style;

const log = () => {
  echo('\n');
  echo(info(`List of last ${bold('commits')}:`));
  exec('git log --oneline -n 5', execHandler);
};

export const status = () => {
  echo(info(`Current git ${bold('status')}:`));
  exec('git status', params => execHandler(params)(log));
};