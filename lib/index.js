#! /usr/bin/env node
import commander from 'commander';
import { submit } from './git';

commander
  .command('g <command>')
  .description('git cli')
  .action((command) => {
    if (command === 'submit') submit();
  });

commander.parse(process.argv);
