#! /usr/bin/env node
import commander from 'commander';
import { commit, newbranch, pull, submit } from './git';
import { clear } from './bash';

// TODO: Refactor according to: https://www.npmjs.com/package/commander#action-handler-subcommands
commander
  .command('pull')
  .action(pull);

commander
  .command('clr')
  .action(clear);

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

commander.parse(process.argv);
