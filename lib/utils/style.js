const chalk = require('chalk');
const constants = require('./../constants');

const info = text => chalk.black.bgBlue(constants.prefix) + ` ${text}`;
const error = text => chalk.black.bgRed(constants.prefix) + ` ${text}`;
const success = text => chalk.black.bgGreen(constants.prefix) + ` ${text}`;
const warning = text => chalk.black.bgYellow(constants.prefix) + ` ${text}`;
const bold = text => chalk.black.bold(text);

module.exports = { info, error, success, warning, bold };
