#! /usr/bin/env node
import { exec, echo } from 'shelljs';
import { style } from './../utils/';

const { info, bold } = style;

export const status = () => {
  echo(info(`Current git ${bold('status')}:`));
  exec('git status', () => {
    echo('\n');
    echo(info(`List of last ${bold('commits')}:`));
    exec('git log --oneline -n 5');
  });
};