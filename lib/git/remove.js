#! /usr/bin/env node
import { exec } from 'shelljs';
import { style } from './../utils/';

const logSuccessMessage = (dirName) => console.log(style.info(`Directory/File ${style.bold(dirName)} removed.`));

const logErrorMessage = () => console.log(style.error('Enter branch name!'));

export const remove = dirName => dirName ?
  exec(`git rm -rf ${dirName}`, logSuccessMessage) :
  logErrorMessage();
