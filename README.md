---
description: >-
  Pro CLI commands that make your pocket filled with dollars, because you will
  become so good & efficient.
---

# Getting started

For **docs** click [here](https://app.gitbook.com/@dybowski/s/dev20k-cli).

## Prerequisites

Node `>=12.16.1`

On unix based systems: `bash` or `zsh`

On windows systems: `git-bash` or `powershell222`

## Installation

Install the library globally using npm:

```text
npm i -g dev20k-cli
```

## Usage

```bash
❯ xd -h
Usage: xd [options] [command]

Options:
  -v, --version                 output the version number
  -h, --help                    display help for command

Commands:
  pull|pl [branch-name]         pull latest changes from current branch
  status|st [number]            shows status and [n] of last commits
  submit|sb [message]           push all your uncommited changes 
                                to the current branch / specified branch
  commit|cm [message]           commit all your uncommited changes
  newbranch|nb <branch-name>    create new branch and switch to it
  remove|rm <directory>         remove files recursively
  reset|rs                      reset all your uncommited changes
  push|ps                       push to current branch
  clone|cl <path>               push to current branch
  rmbranches|rmb [main-branch]  remove all local branches except main
  list|ls                       lists files and shows current directory
  help [command]                display help for command
```

