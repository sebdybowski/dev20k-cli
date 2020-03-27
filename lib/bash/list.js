#! /usr/bin/env node
import { exec, echo } from 'shelljs';
import { execHandler, style } from './../utils/';

const { info } = style;

const listAll = () => {
  echo('\n');
  echo(info('List of files: '));
  exec(
    'ls -lart',
    params => execHandler(params),
  );
};

export const list = () => {
  echo(info('Current directory is: '));
  exec('pwd', params => execHandler(params)(listAll));
};
