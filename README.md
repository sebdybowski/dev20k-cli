# dev20k-cli
Pro CLI commands that make your pocket filled with dollars, because you will become so good &amp;  efficient.

## Installation
Install the library globally using npm:

```shell script
npm i -g dev20k-cli
```

## Usage
### Git commands
- add & commit changes

```shell script
xd commit "your commit message"
# or
xd com "your commit message"
# manually: git add -A && git commit -m [message]
```

- add & push all your changes to the current branch

```shell script
xd submit "your commit message"
# or
xd sub "your commit message"
# manually: git add -A && git commit -m [message] && git push origin HEAD
```

- pull latest changes from the current branch

```shell script
xd pull
# manually: git pull origin HEAD
```

- create new local branch and checkout on it

```shell script
xd newbranch branch/name
# or
xd nbr branch/name
# manually: git checkout -b <branch/name>
```

### Bash commands
- clear console

```shell script
xd -c
# manually: clear
```

## TODO:
- minifying?
- implement commands from: https://github.com/sebdybowski/dev-configs/tree/master/bash
- splitting on modules under common scope (@dev20k/xxx)?
