#! /usr/bin/env node
import noop from 'lodash.noop';
import { echo } from 'shelljs';
import { style } from './style';

const { error } = style;

export const execHandler = (code, out, err) => (onSuccess = noop) => {
  if (code === 0) {
    onSuccess();
  } else {
    echo(error(`code: ${code}`));
    echo(error(`error: ${err}`));
  }
};