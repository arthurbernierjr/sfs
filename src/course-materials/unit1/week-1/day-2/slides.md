---
track: "Frontend Fundamentals"
title: "Intro to the Dev Environment"
week: 1
day: 2
type: "lecture"
---


# Intro to the Dev Environment

<br>
<br>
<br>
<br>


### [Click here](#) to access recording

<br>
<br>
<br>
<br>

## Learning Objectives

Students will be able to:

- Be more productive by using the keyboard vs. the mouse

- Use the _Hyper_ Command Line Interface (CLI) to navigate and manipulate the filesystem



## Using the _Hyper_<br>Command Line Interface

<br>

### What is _Hyper_?

- _Hyper_ is the developers' choice for entering commands and navigating the filesystem

- _Hyper_ is also known as a _shell_.  The default shell in Mac OS X is _ZSH_. You will find the terms _terminal_ and _bash_ often used interchangeably

- Go ahead and open _Hyper_ (remember - use Spotlight!)

<br>
<br>
<br>


### Command Line Basics

Before we get started with this section, it might be helpful to ensure we are all using the same shell configuration.



<br>
<br>
<br>

<p>Now that we've reviewed shell config, here are the basic command tasks we'll try out:</p>

- Change directories (folders)
- List a directory's contents
- Create a directory
- Create a file
- Move files and directories
- Copy files and directories
- Rename files and directories
- Delete files & directories
- Command history & clearing the window

<br>
<br>
<br>
<br>

#### Change Directories

- We use the `cd` command to change directories

- Let's change to the _home_ directory of the logged in user:

	```shell
	$ cd ~
	```

- Here are a few common shortcut characters used when navigating the filesystem:
	- `~` The logged in user's _home_ directory
	- `/` The _root_ (top-level) directory on the harddrive
	- `.` The current directory
	- `..` The parent directory of the current directory

- The `pwd` command "prints" the current (working) directory


<br>
<br>
<br>

#### List a Directory's Contents

- Use the `ls` command to display a concise list

- `ls` does not display hidden files by default, adding the `-a` option will show them



<br>
<br>
<br>
<br>

#### Create a Directory

- Use the `mkdir` command to create directories

- Let's create a `drawers` directory inside of the _home_ directory:

	```shell
	$ mkdir ~/drawers
	```

- Note that you don't have to specify the _full path_ if we are already in the _home_ directory


<br>
<br>
<br>

#### Using Tab Auto-Completion

- Change to the _home_ directory

- Now let's change to our newly created `drawers` directory, however, only type `cd d`,<br/>then press `tab` which will auto-complete directory name(s)

- You can cycle between matching directory names by continuing to press `tab`


<br>
<br>
<br>

#### Creating Files

- We use the `touch` command to create empty files

- Let's move to the `drawers` directory and create a directory named `socks`. Here is how we can create the directory **and** change to it using a single command:

	```shell
	$ mkdir socks && cd socks
	```

- Now let's create a `dress.socks` file:

	```shell
	$ touch dress.socks
	```

<br>
<br>
<br>


#### Practice Creating Directories and Files

1. Create this directory: `~/drawers/pjs`

2. Create two files in the new `pjs` folder named `warm.pjs` and `favorite.socks`


<br>
<br>
<br>

#### Moving Files
- Okay, so we have a messy `drawers/pjs`, let's move our `favorite.socks` file out of the `pjs` folder and into the `drawers/socks` folder where it belongs!

- Here's how we can do the move regardless of which directory we're currently in by using absolute paths:

	```shell
	$ mv ~/drawers/pjs/favorite.socks ~/drawers/socks/
	```
	Be sure to use tab-completion!

> Note that you have the option to use _absolute_ and/or _relative_ paths.


<br>
<br>
<br>

#### Moving Directories

- Moving directories is just as easy using the same `mv` command

- Try it out:
	1. Create a `~/shorts` directory
	2. Move the newly created `shorts` directory into the `drawers` directory


<br>
<br>
<br>

#### Renaming Files

- Guess what - there's no dedicated bash command to rename files and directories!

- Don't panic!  The `mv` command is very flexible!

- Here's how we can rename the `warm.pjs` file to `summer.pjs` from anywhere:

	```shell
	$ mv ~/drawers/pjs/warm.pjs ~/drawers/pjs/summer.pjs
	```
- Of course, you can actually move and rename simultaneously!


<br>
<br>
<br>

#### Deleting Files

- We use the `rm` command to delete both files and directories

- Let's first use it to delete the `dress.socks` file. Here's one way:

	```shell
	$ cd ~/drawers/socks && rm dress.socks
	```

- Using the `*` wildcard character, it's possible to delete and move multiple files. For example, typing `*.socks` would match all files with an extension of `.socks`...


<br>
<br>
<br>

#### Deleting Directories

- Deleting directories is almost the same as deleting files except you must use the `-r` option, which runs the `rm` command "recursively" to delete a directory and it's contents.

- To delete the `pjs` folder we could use this command:

	```shell
	$ rm -r ~/drawers/pjs
	```


<br>
<br>
<br>

#### Moving Multiple Files
- To demonstrate moving multiple files, re-create the `dress.socks` file we just deleted from the `socks` directory

- Now let's move all of the `.socks` files out of the `socks` folder into our _home_ folder. The following command assumes we're inside the `socks` folder:

	```shell
	$ mv *.socks ~
	```

- Now, without changing directories, return the socks files back to where they belong


<br>
<br>
<br>

#### Copying Files & Directories
- Use the `cp` command to copy files and directories

- Here's how we can copy all **.js** files:

	```shell
	$ cp *.js ~/dest-folder
	```

- And entire directories by adding the `-R` option:

	```shell
	$ cp -R ./sample-code ~/dest-folder
	```

<br>
<br>
<br>

#### Command History & Clearing the Window
- Pressing the up and down arrows in Hyper will cycle through previously entered commands.  This can be a huge time saver!

- If you'd like to clear the Hyper window, simply press `cmd+k`

<br>
<br>
<br>

## More Terminal Keyboard shortcuts

In the long term, reduce your reliance on the mouse.
More Bash keyboard shortcuts:

`⌘ K` Clear the Terminal window

`option arrow` Move cursor by word

`Ctrl A` Go to beginning of line

`Ctrl E` Go to end of line

`Ctrl K` Kill line to end

`Ctrl U` Kill line to beginning

`Ctrl Y` Paste whatever was killed using Ctrl+K or Ctrl+U

`cd -` toggle previous directory

There are also video tutorials [here](https://www.youtube.com/playlist?list=PLdnONIhPScSToZztXRHyKZTQEsE30luMx) by Matt Huntington



#### Configuring a Global git ignore

Everyone should have a global **git ignore** file so that you don’t have to worry about making the appropriate entries in a project’s git ignore.

First, create the file:  `touch ~/.gitignore_global`

Next, configure git to use this file:  `git config --global core.excludesfile ~/.gitignore_global`

Finally, lets put some good stuff in there:

```shell
# This is a list of rules for ignoring files in every Git repositories on your computer.
# See https://help.github.com/articles/ignoring-files

# Compiled source #
###################
*.class
*.com
*.dll
*.exe
*.o
*.so

# Packages #
############
# it's better to unpack these files and commit the raw source
# git has its own built in compression methods
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

# Logs and databases #
######################
*.log

# OS generated files #
######################
._*
.DS_Store
.DS_Store?
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Testing #
###########
.rspec
capybara-*.html
coverage
pickle-email-*.html
rerun.txt
spec/reports
spec/tmp
test/tmp
test/version_tmp

# node #
########
node_modules

# Rails #
#########
**.orig
*.rbc
*.sassc
.project
.rvmrc
.sass-cache
/.bundle
/db/*.sqlite3
/log/*
/public/system/*
/tmp/*
/vendor/bundle


# Ruby #
########
*.gem
*.rbc
.bundle
.config
.yardoc
_yardoc
doc/
InstalledFiles
lib/bundler/man
pkg
rdoc
tmp

# for a library or gem, you might want to ignore these files since the code is
# intended to run in multiple environments; otherwise, check them in:
# Gemfile.lock
# .ruby-version
# .ruby-gemset

# CTags #
#########
tags

# Env #
#######
.env

# Python #
#######
*.pyc
__pycache__/
```

<br>
<br>
<br>
<br>

### Lets find out if you have a .zshrc or .bashrc

```bash
txtblk='\e[0;30m' # Black - Regular
txtred='\e[0;31m' # Red
txtgrn='\e[0;32m' # Green
txtylw='\e[0;33m' # Yellow
txtblu='\e[0;34m' # Blue
txtpur='\e[0;35m' # Purple
txtcyn='\e[0;36m' # Cyan
txtwht='\e[0;37m' # White
bldblk='\e[1;30m' # Black - Bold
bldred='\e[1;31m' # Red
bldgrn='\e[1;32m' # Green
bldylw='\e[1;33m' # Yellow
bldblu='\e[1;34m' # Blue
bldpur='\e[1;35m' # Purple
bldcyn='\e[1;36m' # Cyan
bldwht='\e[1;37m' # White
unkblk='\e[4;30m' # Black - Underline
undred='\e[4;31m' # Red
undgrn='\e[4;32m' # Green
undylw='\e[4;33m' # Yellow
undblu='\e[4;34m' # Blue
undpur='\e[4;35m' # Purple
undcyn='\e[4;36m' # Cyan
undwht='\e[4;37m' # White
bakblk='\e[40m'   # Black - Background
bakred='\e[41m'  # Red
badgrn='\e[42m'   # Green
bakylw='\e[43m'   # Yellow
bakblu='\e[44m'   # Blue
bakpur='\e[45m'   # Purple
bakcyn='\e[46m'   # Cyan
bakwht='\e[47m'   # White
txtrst='\e[0m'    # Text Reset
export CLICOLOR=1
export LSCOLORS=gxBxhxDxfxhxhxhxhxcxcx

print_before_the_prompt () {
    printf "\n $txtred%s => $bldgrn%s $txtpur%s\n$txtrst" "Your Name is here" "$PWD"
}

PROMPT_COMMAND=print_before_the_prompt
precmd() { 
    eval "$PROMPT_COMMAND" 
}

echo "Hello Your Name, let's shock the world!!!"
```