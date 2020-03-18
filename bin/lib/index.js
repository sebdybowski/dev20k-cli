#! /usr/bin/env node
import { Command } from 'commander';
import { version } from './../package.json';
import { commit, newbranch, pull, submit, reset, remove, status } from './git';

const program = new Command;
const { argv } = process;

program.version(version, '-v, --version');

program
  .command('pull')
  .alias('pl')
  .action(pull);

program
  .command('submit [string]')
  .alias('sb')
  .action(submit);

program
  .command('commit [string]')
  .alias('cm')
  .action(commit);

program
  .command('newbranch [string]')
  .alias('nb')
  .action(newbranch);

program
  .command('remove [string]')
  .alias('rm')
  .action(remove);

program
  .command('reset')
  .alias('rs')
  .action(reset);

program
  .command('status [number]')
  .alias('st')
  .action(status);

program.parse(argv);