# How to Fork and Clone

<img src="https://i.imgur.com/MGQoFYo.png">

## Setting Up an SSH Key for Git Operations

**What is an SSH Key?**
An SSH key is a secure access credential used in the SSH protocol. It's a more secure way of logging into a server than using a password alone. While a password can eventually be cracked with enough time and computing power, SSH keys are nearly impossible to decipher by brute force.

### Checking for an Existing SSH Key
1. Open a terminal.
2. Enter `less ~/.ssh/id_rsa.pub` to display your existing SSH public key.
3. If nothing appears, it means you don't have an SSH key set up.

### Creating an SSH Key
1. In the terminal, run `ssh-keygen` to generate a new SSH key.
2. Press Enter at every prompt to accept the default settings. Your SSH key will be created using the default file location and with no passphrase.
3. Upon completion, you'll see a graphical representation of your key, often referred to as "key art."

### Adding Your SSH Key to GitHub and git.generalassemb.ly
1. Run `less ~/.ssh/id_rsa.pub` again. This time, it will display your new SSH public key.
2. Copy the entire content of the key.
3. Log in to your GitHub account and navigate to the SSH and GPG keys section of your Account Settings.
4. Click on "New SSH key," paste your copied key into the field, and save it.
5. Repeat the process on git.generalassemb.ly to ensure seamless operation across both platforms.


## Understanding Git and GitHub

**What is Git?**
Git is a version control system that allows multiple people to work on the same codebase without conflict. It tracks changes, allows for branching, and facilitates merging. It is a tool primarily used in the command line to manage the history of a set of files.

**What is GitHub?**
GitHub is a web-based platform that utilizes Git. It hosts repositories and provides a user-friendly interface along with additional features such as bug tracking, feature requests, task management, and wikis for every project.

## Forking and Cloning Repositories

### Forking a Repository
Forking creates a personal copy of someone else's project. This allows you to freely experiment with changes without affecting the original project.

### Steps to Fork:
1. Ensure you are logged into the correct site (github.com or git.generalassemb.ly) as indicated by the repository URL. (Log in to your github.com account or git.generalassemb.ly depending on the url of the repository that we want to fork and clone. You are responsible as a tech professional to read the url of the repository and to know if it is on the github.com website or git.generalassemb.ly then you are required to log in on the correct website.)
2. Go to the repository page you wish to fork.
3. Click the "Fork" button, copying the repository to your account.

### Cloning a Repository
Cloning makes a local copy of a repository on your machine.

### Steps to Clone:
1. After forking, click the "Clone" button on the repository and copy the SSH URL.
2. Navigate to your desired local directory, such as `software_classwork` or `software_homework`.
3. Use the command `git clone <ssh_url>` to clone the repository.
4. Enter the cloned repository directory using `cd <repository-name>`.
5. Open the folder in your code editor with the command `code .`.
6. Start Coding....

## Submitting Changes

### Steps to Submit Changes:
1. Save your changes in the editor using `Ctrl + S` (Windows) or `Cmd + S` (Mac).
2. Stage your changes with `git add -A`.
3. Commit your changes using `git commit -m "Your descriptive message"`.
4. Push the changes to your forked repository with `git push origin main`.

**Key Takeaways:**
- SSH keys are used for secure communication with repositories hosted on services like GitHub.
- You can check for existing keys and create a new one using the `ssh-keygen` command.
- Once created, the SSH key should be added to your accounts on GitHub and git.generalassemb.ly.
- Git is a command-line tool for version control.
- GitHub is a web service that hosts Git repositories and adds features.
- Forking is copying a repository to your GitHub account.
- Cloning is making a local copy of a repository.
- Use `add`, `commit`, and `push` to submit changes to your repository.

