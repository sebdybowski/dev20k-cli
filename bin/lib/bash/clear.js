#! /usr/bin/env node
import { exec } from 'shelljs';
import { style } from './../utils/';

export const clear = () => {
  exec('clear', () => console.log(style.info('Terminal clear. ')));
};
