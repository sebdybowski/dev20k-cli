#! /usr/bin/env node
import commander from 'commander';
import { commit, newBranch, pull, submit } from './git';

commander
  .command('g <command> [string]')
  .description('git cli')
  .action((command, string) => {
    // TODO: Refactor to switch
    if (command === 'pull') pull();
    if (command === 'submit') submit(string);
    if (command === 'commit') commit(string);
    if (command === 'new-branch') newBranch(string);
  });

commander.parse(process.argv);
