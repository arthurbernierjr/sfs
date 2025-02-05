## Git & GitHub Cheat Sheet

### Quick Concepts
- **Git**: A version control system for tracking changes in files and coordinating work among multiple people.
- **GitHub**: A web-based hosting service for version control using Git.

### SSH Keys
- **SSH Key**: A secure access credential for the SSH protocol.
- **Check for SSH Key**: Run `less ~/.ssh/id_rsa.pub` in terminal.
- **Create SSH Key**: Run `ssh-keygen` and follow the prompts.
- **Add SSH Key to GitHub**: Copy the SSH key and add it to GitHub under Account Settings -> SSH and GPG keys.

### Forking & Cloning
- **Fork**: Makes a copy of someone else's repository to your account.
- **Clone**: Makes a local copy of a repository on your machine.

### Git Workflow
1. **Fork Repo**: Click "Fork" on the original repository page.
2. **Clone Repo**: Use `git clone <ssh_url>` in your desired directory.
3. **Stage Changes**: Use `git add -A` to stage your changes.
4. **Commit Changes**: Use `git commit -m "Your message"` to commit.
5. **Push Changes**: Use `git push origin main` to push to your forked repo.

![Git Workflow](https://i.imgur.com/MGQoFYo.png)

### Forking Steps
1. Log into GitHub or git.generalassemb.ly.
2. Navigate to the repo page.
3. Click "Fork".

### Cloning Steps
1. Click "Clone" and copy the SSH URL.
2. Navigate to your desired directory.
3. Use `git clone` followed by the copied SSH URL.
4. Enter the directory with `cd`.
5. Open with your code editor using `code .`.

### Submitting Changes
1. Save changes in your editor.
2. Stage with `git add -A`.
3. Commit with `git commit -m "Your message"`.
4. Push with `git push origin main`.

### Key Takeaways
- Use SSH keys for secure communication.
- Check for and create SSH keys with `ssh-keygen`.
- Forking is for experimentation, cloning is for local work.
- Submit changes with `add`, `commit`, and `push`.

[Click here to view the Git workflow visual guide](https://i.imgur.com/MGQoFYo.png)