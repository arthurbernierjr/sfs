---
track: "Unit 1"
title: "Install-fest Phase One"
week: 1
day: 1
type: "lecture"
---


# Install-fest Phase One

<br>
<br>
<br>
<br>


### [Click here](#) to access recording

<br>
<br>
<br>
<br>

For the first phase of "install-fest", we'll install or verify the installation of the following tools on our machines:

- Slack
- Zoom
- Xcode
- VS Code
- NodeJS
- Git / Github / Github Enterprise
- Global Gitignore



**PLEASE NOTE:** ***if you have a linux machine, [here are some resources](/additional-resources/install-fest-linux) that might be more ideal for your computer***


<br>
<br>
<br>



## Slack

We'll use slack to communicate throughout the course. <br>By the time you are reading this, you should have received an invite to the relevant channels via e-mail. <br>Although you can login via the web browser, downloading / installing the app is highly recommended.

<br>
<br>
<br>

## Zoom

[Download the Zoom client](https://zoom.us/download#client_4meeting) and install it.

[Download Slack](https://slack.com/downloads)

Remember to drag the Slack app into the Applications folder when you open the downloaded archive.

<br>
<br>
<br>


## Xcode

We do not use Xcode in class but some other applications that we do use require some Xcode libraries. Normally, all you need is the Xcode CLI which should have already been installed when you installed Homebrew. If it didn't get installed, you can use this command:

```shell
xcode-select --install
```

If you need to, you can install Xcode through the App Store. (You probably don't need to.) [Link here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)

<br>
<br>
<br>

## Visual Studio Code

Text editors are a personal choice. One of the most popular open source text editors these days, for good reason, is Visual Studio Code.

> Note: VS Code's _keyboard shortcuts_ are different than the shortcuts used by the Sublime or Atom editors. If you already know Sublime's shortcuts and don't want to learn those of VS Code, it's possible to configure VS Code to use Sublime's.

Download and install VS Code from [https://code.visualstudio.com/](https://code.visualstudio.com/).

**Important**: Be sure that VS Code is in your Mac's `Applications` folder.

**Remember to drag the VS Code app into the Applications folder when you open the downloaded archive.**


<br>
<br>
<br>

#### Add Ability to Launch VS Code by typing `code`

1. Move VS Code into your applications folder
2. Launch VS Code using spotlight (`command + space` - then start typing `vs c` until you see the app, then press enter).
3. Type `shift + command + P` to open the command palette.
4. Start typing `shell command` and when you see the<br>`Shell Command: Install 'code' command in PATH` command - click it!
5. Quit VS Code and Hyper.
6. Relaunch Hyper
7. You should now be able to open a folder to edit by typing `code .`

Check [this link](https://code.visualstudio.com/docs/setup/mac) for troubleshooting if you run into issues.

<br>
<br>

## Homebrew

Homebrew is a package manager that we will use to install various command line tools in our class.

Open up Hyper, and paste the following command to install Homebrew. You might be prompted to install XCode Command Line Tools during the install process.

```shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

If you are prompted to install the XCode CLI, say yes and your homebrew installation will continue.

After the installation process, run the command `brew doctor`. If any warnings or errors are displayed, we will need to resolve them before proceeding with the rest of the install fest.

Lastly, make sure to run `brew update` to make sure you have the latest lists of available software.

<br>
<br>
<br>



## Git

Git is the version control software we will be using - it's extremely popular.

You should have already installed Git as instructed to complete the pre-work.

If it's not installed, we can use Homebrew to install it:

```shell
brew install git
```

<br>
<br>
<br>

#### Github

[Github](https://github.com/) provides a way to host Git repos in the cloud.  It enables collaboration and is wildly popular.

You should have already opened a personal Github account, however, you need to have a General Assembly Github Enterprise account as well. <br>You can get one by signing up here: [https://git.generalassemb.ly/join](https://git.generalassemb.ly/join)

<br>
<br>
<br>


#### NodeJS

Go to nodejs.org and download the LTS version of Node JS.