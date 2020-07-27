# dev20k-cli
Pro CLI commands that make your pocket filled with dollars, because you will become so good &amp;  efficient.

## Table of contents
| Chapter        | Link          
| ------------- |:-------------:|
| Installation      | [click here](#installation)   |
| Usage             | [click here](#usage)          | 
| -- Git commands  | [click here](#git-commands)   |
| -- Bash commands  | [click here](#bash-commands)   |

## Prerequisites
Node `>=12.16.1`
On unix based systems: `bash` or `zsh`
On windows systems: `git-bash` or `powershell`

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

- push all your changes to the current branch

```shell script
xd push
# or
xd ps
# manually: git push origin HEAD
```

- pull latest changes from the current branch / specified branch

```shell script
xd pull
# or
xd pl
# manually: git pull origin HEAD
```

```shell script
xd pull master
# or
xd pl master
# manually: git pull origin master
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

- get status of changes & last commits

```shell script
xd status 5
# or
xd st 5
# manually: git status && git log --oneline -n [commits_number]
# number of commits logged by default: 5
```

- remove directory recursively

```shell script
xd remove directory_name
# or
xd rm directory_name
# manually: git rm -rf <directory_name>
```

- clone repository

```shell script
xd clone test@test.gitprovider.com/repository.git
# or
xd cl test@test.gitprovider.com/repository.git
# manually: git clone <path_to_repository>
```

- remove all local branches repository

```shell script
xd rmbranches # in that case the only remaining branch will be current one and master
xd rmbranches release # in that case the only remaining branch will be current one and release
# or
xd rmb # in that case the only remaining branch will be current one and master
xd rmb release # in that case the only remaining branch will be current one and release
# manually: git branch | grep -v '<default_branch>' | xargs git branch -D
```

### Bash commands
- show current directory & list all files inside

```shell script
xd list
# or
xd ls
# manually: pwd && ls -lart
```
