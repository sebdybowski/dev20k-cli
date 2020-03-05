#! /usr/bin/env node
import { exec } from 'shelljs';
import { style } from './../utils/';

export const pull = () => {
  exec('git pull origin HEAD', () => console.log(style.info('Pulled changes...')));
};
