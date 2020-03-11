#! /usr/bin/env node
import { exec } from 'shelljs';
import { style } from './../utils/';

const logSuccessMessage = () => console.log(style.info('Git status shown.'));

export const status = () => exec('git status', logSuccessMessage);
