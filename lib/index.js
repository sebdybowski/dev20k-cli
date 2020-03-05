#! /usr/bin/env node
import commander from 'commander';
import { commit, newbranch, pull, submit } from './git';
import { clear } from './bash';

// TODO: Refactor according to: https://www.npmjs.com/package/commander#action-handler-subcommands
commander
  .command('g <command> [string]')
  .description('git cli')
  .action((command, string) => {
    // TODO: Refactor to switch
    if (command === 'pull') pull();
    if (command === 'submit') submit(string);
    if (command === 'commit') commit(string);
    if (command === 'newbranch') newbranch(string);
  });

commander
  .command('b <command>')
  .description('git cli')
  .action((command) => {
    // TODO: Refactor to switch
    if (command === 'clr') clear();
  });

commander.parse(process.argv);
