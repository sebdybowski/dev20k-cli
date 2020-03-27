
import { Command } from 'commander';
import { version } from './../package.json';
import { defineCommand } from './utils/index';
import { commit, newbranch, pull, submit, reset, remove, status, push } from './git/index';
// import { list } from './bash';

const program = new Command();

(async () => {
  program.version(version, '-v, --version');

  defineCommand(program, 'pull', 'pull latest changes from current branch', 'pl', pull);
  defineCommand(program, 'status [number]', 'shows status and [n] of last commits', 'st', status);

  await program.parseAsync(process.argv);
})();

export default program;

// program
//   .command('pull')
//   .description('preforms "git pull" command on currently active branch')
//   .alias('pl')
//   .action(pull);

// program
//   .command('status [number]')
//   .alias('st')
//   .action(status);

// program
//   .command('submit [string]')
//   .description()
//   .alias('sb')
//   .action(submit);
//
// program
//   .command('commit [string]')
//   .alias('cm')
//   .action(commit);
//
// program
//   .command('newbranch [string]')
//   .alias('nb')
//   .action(newbranch);
//
// program
//   .command('remove [string]')
//   .alias('rm')
//   .action(remove);
//
// program
//   .command('reset')
//   .alias('rs')
//   .action(reset);
//
// program
//   .command('list')
//   .alias('ls')
//   .action(list);
//
// program
//   .command('push')
//   .alias('ps')
//   .action(push);
