export const defineCommand = (program, command, description, alias, action) => program
  .command(command)
  .alias(alias)
  .description(description)
  .action(action);
