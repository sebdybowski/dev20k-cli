import { Command } from 'commander';
import { version } from './../package.json';

import { defineCommand } from 'utils';
import { commit, newbranch, pull, submit, reset, remove, status, push } from 'git';
import { list } from 'bash';

const program = new Command();

(async () => {
  program.version(version, '-v, --version');

  // Git commands
  defineCommand(program, 'pull', 'pull latest changes from current branch', 'pl', pull);
  defineCommand(program, 'status [number]', 'shows status and [n] of last commits', 'st', status);
  defineCommand(program, 'submit [string]', '1', 'sb', submit);
  defineCommand(program, 'commit [string]', '2', 'cm', commit);
  defineCommand(program, 'newbranch [string]', '3', 'nb', newbranch);
  defineCommand(program, 'remove [string]', '4', 'rm', remove);
  defineCommand(program, 'reset', '5', 'rs', reset);
  defineCommand(program, 'push', '6', 'ps', push);

  // Bash commands
  defineCommand(program, 'list', '7', 'ls', list);

  await program.parseAsync(process.argv);
})();

export default program;
