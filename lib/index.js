#! /usr/bin/env node
import commander from 'commander';
import { commit, newbranch, pull, submit, reset } from './git';
import { clear } from './bash';

// TODO: Refactor according to: https://www.npmjs.com/package/commander#action-handler-subcommands
commander
  .command('pull')
  .action(pull);

commander
  .option('-c, --clear', 'clear terminal');

commander
  .command('submit [string]')
  .alias('sub')
  .action(string => submit(string));

commander
  .command('commit [string]')
  .alias('com')
  .action(string => commit(string));

commander
  .command('newbranch [string]')
  .alias('nbr')
  .action(string => newbranch(string));

commander
  .command('reset')
  .alias('res')
  .action(pull);

commander.parse(process.argv);

if (commander.clear) clear();
