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
xd cm "your commit message"
# manually: git add -A && git commit -m [message]
```

- add & push all your changes to the current branch

```shell script
xd submit "your commit message"
# or
xd sb "your commit message"
# manually: git add -A && git commit -m [message] && git push origin HEAD
```

- pull latest changes from the current branch

```shell script
xd pull
# or
xd pl
# manually: git pull origin HEAD
```

- create new local branch and checkout on it

```shell script
xd newbranch branch/name
# or
xd nb branch/name
# manually: git checkout -b <branch/name>
```

- reset uncommitted changes 

```shell script
xd reset
# or
xd rs
# manually: git reset --hard
```

- get status of changes

```shell script
xd status
# or
xd st
# manually: git status
```

- remove directory recursively

```shell script
xd remove directory_name
# or
xd rm directory_name
# manually: git rm -rf <directory_name>
```

## TODO:
- minifying?
- implement commands from: https://github.com/sebdybowski/dev-configs/tree/master/bash
- splitting on modules under common scope (@dev20k/xxx)?
