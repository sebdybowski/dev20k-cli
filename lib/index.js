import { Command } from 'commander';
import { version } from './../package.json';

import { defineCommand } from 'utils';
import { commit, newbranch, pull, submit, reset, remove, status, push } from 'git';
import { list } from 'bash';

const program = new Command();

(async () => {
  program.version(version, '-v, --version');

  // Git commands
  defineCommand(program, 'pull [string]', 'pull latest changes from current branch', 'pl', pull);
  defineCommand(program, 'status [number]', 'shows status and [n] of last commits', 'st', status);
  defineCommand(program, 'submit [string]', 'push all your uncommited changes to the current branch / specified branch', 'sb', submit);
  defineCommand(program, 'commit [string]', 'commit all your uncommited changes', 'cm', commit);
  defineCommand(program, 'newbranch [string]', 'create new branch and switch to it', 'nb', newbranch);
  defineCommand(program, 'remove [string]', 'remove files recursively', 'rm', remove);
  defineCommand(program, 'reset', 'reset all your uncommited changes', 'rs', reset);
  defineCommand(program, 'push', 'push to current branch', 'ps', push);

  // Bash commands
  defineCommand(program, 'list', '7', 'ls', list);

  await program.parseAsync(process.argv);
})();

export default program;