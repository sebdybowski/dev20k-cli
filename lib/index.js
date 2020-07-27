import { Command } from 'commander';
import { version } from './../package.json';

import { defineCommand } from 'utils';
import { commit, newbranch, pull, submit, reset, remove, status, push, clone, rmbranches } from 'git';
import { list } from 'bash';

const program = new Command();

(async () => {
  program.version(version, '-v, --version');

  // Git commands
  defineCommand(program, 'pull [branch-name]', 'pull latest changes from current branch', 'pl', pull);
  defineCommand(program, 'status [number]', 'shows status and [n] of last commits', 'st', status);
  defineCommand(program, 'submit [message]', 'push all your uncommited changes to the current branch / specified branch', 'sb', submit);
  defineCommand(program, 'commit [message]', 'commit all your uncommited changes', 'cm', commit);
  defineCommand(program, 'newbranch <branch-name>', 'create new branch and switch to it', 'nb', newbranch);
  defineCommand(program, 'remove <directory>', 'remove files recursively', 'rm', remove);
  defineCommand(program, 'reset', 'reset all your uncommited changes', 'rs', reset);
  defineCommand(program, 'push', 'push to current branch', 'ps', push);
  defineCommand(program, 'clone <path>', 'push to current branch', 'cl', clone);
  defineCommand(program, 'rmbranches [main-branch]', 'remove all local branches except main', 'rmb', rmbranches);

  // Bash commands
  defineCommand(program, 'list', 'lists files and shows current directory', 'ls', list);

  await program.parseAsync(process.argv);
})();

export default program;
